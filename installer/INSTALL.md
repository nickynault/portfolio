# Password Generator Release Setup

## Creating GitHub Releases

To create releases for the Password Generator:

### 1. Windows Release
- **Release Name**: `Password Generator v1.0 - Windows`
- **Tag**: `v1.0-windows`
- **Files to upload**:
  - `Windows_Password_Generator.zip`

### 2. macOS Release  
- **Release Name**: `Password Generator v1.0 - macOS`
- **Tag**: `v1.0-macos`
- **Files to upload**:
  - `macOS_Password_Generator.zip`

### 3. Installer Release
- **Release Name**: `Password Generator Installer v1.0`
- **Tag**: `v1.0-installer`
- **Files to upload**:
  - `PasswordGenerator-Installer-Windows.exe` (after packaging)
  - `PasswordGenerator-Installer-macOS.dmg` (after packaging)

## File Contents

### Windows_Password_Generator.zip
```
Windows_Password_Generator/
├── PasswordGenerator.py      # Main application
├── PasswordGenerator.bat     # Windows launcher
└── README.txt               # Instructions
```

### macOS_Password_Generator.zip
```
macOS_Password_Generator/
├── PasswordGenerator.py      # Main application
├── PasswordGenerator.sh      # macOS launcher
└── README.txt               # Instructions
```

## User Instructions

### For Windows Users:
1. Download `Windows_Password_Generator.zip`
2. Extract to desired location
3. Double-click `PasswordGenerator.bat`
4. Enjoy!

### For macOS Users:
1. Download `macOS_Password_Generator.zip`
2. Extract to desired location
3. Open Terminal and navigate to folder
4. Run: `chmod +x PasswordGenerator.sh`
5. Run: `./PasswordGenerator.sh`
6. Enjoy!

## Requirements
- Python 3.x (https://python.org)
- tkinter (usually included with Python)