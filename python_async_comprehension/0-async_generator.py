#!/usr/bin/env python3
"""
Module 0-async_generator - Async Generator
"""


import asyncio
from typing import Generator
import random


async def async_generator() -> Generator[float, None, None]:
    """
    Async generator that yields random numbers between 0 and 10
    """
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
