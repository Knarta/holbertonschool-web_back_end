#!/usr/bin/env python3
""" A simple helper function for pagination. """


from typing import Tuple, List, Dict
import math
import csv


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return a tuple of size two containing
    a start index and an end index."""
    if page <= 0 or page_size <= 0:
        return (0, 0)
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize the server with the database file."""
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Load the dataset if not already loaded."""
        if self.__dataset is None:
            with open(self.DATA_FILE, 'r') as f:
                reader = csv.reader(f)
                self.__dataset = list(reader)[1:]
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0."""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Get a page of the dataset with hypermedia pagination metadata."""
        assert isinstance(index, int) and index >= 0
        assert isinstance(page_size, int) and page_size > 0
        
        indexed_dataset = self.indexed_dataset()
        data = []
        current_index = index
        
        # Collect data for the current page
        while len(data) < page_size and current_index < len(indexed_dataset):
            if current_index in indexed_dataset:
                data.append(indexed_dataset[current_index])
            current_index += 1
            
        # Calculate next index
        next_index = current_index
        
        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": next_index
        }
        