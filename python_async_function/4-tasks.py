#!/usr/bin/env python3
"""
Module 4-tasks - Tasks
"""

import asyncio
from typing import List


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Wait for n random delays between 0 and max_delay seconds
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    return [await task for task in asyncio.as_completed(tasks)]
