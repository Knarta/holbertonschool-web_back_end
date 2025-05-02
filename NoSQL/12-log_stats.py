#!/usr/bin/env python3
"""
    Log stats
"""
from pymongo import MongoClient


def log_stats():
    """
        Log stats
    """
    client = MongoClient('mongodb://localhost:27017/')
    db = client.logs
    collection = db.nginx

    logs_count = collection.count_documents({})
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    status_check = collection.count_documents({
        "method": "GET", "path": "/status"})
    print(f"{logs_count} logs")
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")
    print(f"{status_check} status check")


if __name__ == "__main__":
    log_stats()
