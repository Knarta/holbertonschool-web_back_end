#!/usr/bin/python3
""" LFUCache module
"""

BaseCaching = __import__('base_caching').BaseCaching


class LFUCache(BaseCaching):
    """ LFUCache defines a LFU caching system
    """
    def __init__(self):
        """ Initialize the LFUCache
        """
        super().__init__()
        self.order = []
        self.frequency = {}

    def put(self, key, item):
        """ Add an item in the cache using LFU algorithm
        """
        if key is None or item is None:
            return

        if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
            least_frequent_key = min(self.frequency.values())
            for k, v in self.frequency.items():
                if v == least_frequent_key:
                    del self.cache_data[k]
                    del self.frequency[k]
                    print("DISCARD: {}".format(k))
                    break
        self.cache_data[key] = item
        self.frequency[key] = 0
        self.order.append(key)

    def get(self, key):
        """ Get an item by key """
        if key is None or key not in self.cache_data:
            return None
        self.frequency[key] += 1
        self.order.remove(key)
        self.order.append(key)
        return self.cache_data[key]
