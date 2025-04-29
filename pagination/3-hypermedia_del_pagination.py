#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        """Initialize the server with the database file."""
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Load and cache the dataset if not already loaded."""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Create and return an indexed version of the dataset.
        Each item is indexed by its position in the original dataset.
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Get a page of the dataset with hypermedia pagination metadata.
        
        Args:
            index: The start index of the return page
            page_size: The number of items per page
            
        Returns:
            A dictionary containing:
                - index: current start index
                - next_index: next index to query
                - page_size: current page size
                - data: actual page of the dataset
        """
        assert index is not None and 0 <= index < len(self.indexed_dataset())

        result_data = []
        current_idx = index
        indexed_data = self.indexed_dataset()

        while len(result_data) < page_size and current_idx < len(indexed_data):
            if current_idx in indexed_data:
                result_data.append(indexed_data[current_idx])
            current_idx += 1

        return {
            'index': index,
            'next_index': current_idx,
            'page_size': page_size,
            'data': result_data
        }
