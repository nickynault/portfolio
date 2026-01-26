@echo off
chcp 65001 >nul
echo.
echo 🔒 SecurePass
echo =============
echo.
echo Starting SecurePass...
echo.
echo If this is your first time running this, you may need to:
echo 1. Install Python 3 from https://python.org
echo 2. Run: pip install tkinter
echo.
echo Press any key to continue...
pause >nul
python PasswordGenerator.py
if errorlevel 1 (
    echo.
    echo Error: Python not found or tkinter not available.
    echo Please install Python 3 and try again.
    echo.
    echo Download Python: https://python.org
    echo.
    pause
)
