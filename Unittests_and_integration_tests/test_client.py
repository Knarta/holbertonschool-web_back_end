#!/usr/bin/env python3

"""Unit tests for GithubOrgClient."""

import unittest
from unittest.mock import patch, PropertyMock
from parameterized import parameterized
from fixtures import TEST_PAYLOAD
from client import GithubOrgClient 


class TestGithubOrgClient(unittest.TestCase):
    """Tests for GithubOrgClient methods."""

    @parameterized.expand([
        ("google",),
        ("abc",),
    ])
    @patch("client.get_json")
    def test_org(self, mock_org, org_name):
        """Test GithubOrgClient.org method."""
        mock_org.return_value = {"name": org_name}
        self.assertEqual(GithubOrgClient(org_name).org, mock_org.return_value)
        mock_org.assert_called_once_with(org_name)
