#!/usr/bin/env python3
"""
Module 0-basic_async_syntax - Basic async syntax
"""

import random
import asyncio


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
