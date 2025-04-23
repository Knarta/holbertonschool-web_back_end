#!/usr/bin/env python3
"""
Module 1-concurrent_coroutines - Concurrent coroutines
"""
import asyncio
import random
from typing import List


async def wait_random(max_delay: int = 10) -> float:
    """
    Wait for a random delay between 0 and max_delay seconds
    Args:
        max_delay: int = 10
    Returns:
        float: The random delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Wait for n random delays between 0 and max_delay seconds
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    return [await task for task in asyncio.as_completed(tasks)]
