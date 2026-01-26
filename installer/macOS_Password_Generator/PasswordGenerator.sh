#!/bin/bash

echo ""
echo "🔒 Password Generator"
echo "====================="
echo ""
echo "Starting Password Generator..."
echo ""
echo "If this is your first time running this, you may need to:"
echo "1. Install Python 3 from https://python.org"
echo "2. Run: pip3 install tkinter"
echo ""
echo "Press Enter to continue..."
read

python3 PasswordGenerator.py

if [ $? -ne 0 ]; then
    echo ""
    echo "Error: Python not found or tkinter not available."
    echo "Please install Python 3 and try again."
    echo ""
    echo "Download Python: https://python.org"
    echo ""
    echo "Press Enter to exit..."
    read
fi