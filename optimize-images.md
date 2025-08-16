# Image Optimization Guide

## Large Images Found (>1MB)
These images should be optimized for better web performance:

### High Priority (>2MB):
- `logitech_cordless_trackman_wheel_teared-down.jpg` - 4.05MB
- `hyperone_with_m575s.jpg` - 3.74MB  
- `za68_pro.jpg` - 3.59MB
- `ipad_air_5.jpg` - 3.51MB
- `hyperwork_hyperone_gen_2.jpg` - 3.51MB
- `asus_vivobook_x509fa.jpg` - 3.17MB
- `legion_pro_5_2023_white.jpg` - 3.01MB
- `ipad_air_4.jpg` - 2.76MB
- `logitech_cordless_trackman_wheel.jpg` - 2.67MB
- `apple_ipads.jpg` - 2.63MB
- `hhkb_dinner.jpg` - 2.58MB
- `hhkb_pro_hybrid_type-s_snow.jpg` - 2.45MB
- `seiko_watch.jpg` - 2.43MB
- `seiko_onhand.jpg` - 2.34MB
- `moondrop_sky.jpg` - 2.33MB
- `attack_shark_x3.jpg` - 2.31MB
- `ipad_gen_1st.jpg` - 2.19MB
- `yogurt_perfect.jpg` - 2.17MB
- `logitech_m575s.jpg` - 2.12MB

### Medium Priority (1-2MB):
- `acer_nitro_5.jpg` - 1.54MB
- `protoarc_em01_white_rgb-ring.jpg` - 1.38MB
- `atomic_habits.jpg` - 1.16MB

## Recommended Optimizations:

### 1. Resize Images
- Target resolution: 800x600px for regular display images
- Target resolution: 300x225px for book covers
- Target resolution: 205x205px for tech device grid items

### 2. Compression Settings
- JPEG Quality: 80-85% for photos
- Use modern formats like WebP when possible
- Remove EXIF data

### 3. Tools for Optimization:
- **Online**: TinyPNG, Squoosh.app
- **Command Line**: ImageMagick, Sharp
- **Desktop**: Photoshop, GIMP

### 4. Example Commands (if using ImageMagick):
```bash
# Resize and compress a tech device image
magick input.jpg -resize 205x205^ -gravity center -extent 205x205 -quality 85 output.jpg

# Resize and compress a book cover
magick input.jpg -resize 300x225^ -gravity center -extent 300x225 -quality 85 output.jpg
```

## Expected Performance Gains:
- **Before**: ~60MB total image size
- **After**: ~15-20MB total image size (65-70% reduction)
- **Load Time**: 3-4x faster on slower connections
- **Bandwidth**: Significant savings for mobile users

## Files Successfully Cleaned:
✅ Removed unused Partytown files (~2MB)
✅ Removed unused video files 
✅ Removed unused individual page components
✅ Removed 130 unused NPM packages
✅ Cleaned duplicate CSS files
✅ Removed build cache directories

## Current Project Size After Cleanup:
- Dependencies: Reduced from ~25 packages to ~9 core packages
- File structure: Streamlined and organized
- Unused code: Eliminated