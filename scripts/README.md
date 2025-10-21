# Scripts

This directory contains utility scripts for managing your Sakura Ordinals collection.

## organize_assets.py

A Python script to help organize and validate your 666 images for Magic Eden Launchpad.

### Features:
- Validates all image files
- Converts images to PNG format
- Renames files with consistent naming (sakura_001.png, sakura_002.png, etc.)
- Generates metadata JSON files for each ordinal
- Provides detailed validation report

### Usage:

1. Install requirements:
```bash
pip install -r requirements.txt
```

2. Run the script:
```bash
python organize_assets.py /path/to/your/images
```

3. The script will:
   - Process all images in the source directory
   - Save organized images to `assets/images/`
   - Generate metadata files in `assets/metadata/`
   - Provide a validation report

### Example:
```bash
python organize_assets.py C:\Users\YourName\Desktop\sakura_images
```

### Output Structure:
```
assets/
├── images/
│   ├── sakura_001.png
│   ├── sakura_002.png
│   └── ... (666 total)
└── metadata/
    ├── 1.json
    ├── 2.json
    └── ... (666 total)
```

## Notes:
- Make sure you have exactly 666 images
- Images will be converted to PNG format
- Update the metadata template with your actual domain and Bitcoin address
- The script validates image dimensions and format compatibility

