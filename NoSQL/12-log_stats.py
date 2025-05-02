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
    print(f"{logs_count} logs")

    methods = collection.aggregate([
        {"$group": {"_id": "$method", "count": {"$sum": 1}}}
    ])
    for method in methods:
        print(f"\tmethod {method['_id']}: {method['count']}")

    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")

if __name__ == "__main__":
    log_stats()
