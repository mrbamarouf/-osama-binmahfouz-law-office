# Asset Sources

Local optimized images in `public/images` were downloaded and processed from Unsplash photo pages. The visual-redesign-v2 assets replace the earlier off-direction images in the live UI:

- `atelier-palm-museum.jpg`: https://unsplash.com/photos/a-building-with-a-palm-tree-in-front-of-it-cIZ3MPnZDC4
- `atelier-courtyard.jpg`: https://unsplash.com/photos/a-serene-courtyard-with-a-pool-and-palm-tree-rf0X6UZWe6E
- `atelier-arches.jpg`: https://unsplash.com/photos/courtyard-with-arches-and-palm-trees-SBcKyJETLxE
- `atelier-corridor.jpg`: https://unsplash.com/photos/a-long-hallway-lined-with-columns-and-arches-BhwGcFAS6Zw
- `atelier-documents.jpg`: https://unsplash.com/photos/two-people-are-signing-a-document-at-a-desk-EtiHiyDkld0
- `atelier-signing.jpg`: https://unsplash.com/photos/man-signing-a-document-with-a-pen-QI6NLgN5XnM

The official office logo was extracted from the provided Illustrator PDF attachment `os-new logo-1.pdf`. Vector paths from the gold logo page were converted directly into transparent SVG assets in `public/brand`, with PNG fallbacks generated from those SVGs:

- `osama-logo-official.svg`
- `osama-symbol-official.svg`
- `osama-logo-header.svg`
- `osama-logo-footer.svg`
- `osama-logo-official.png`
- `osama-symbol-official.png`
- `osama-logo-og.png`
- `favicon.png`
- `apple-touch-icon.png`
- `osama-logo.png` remains as a compatibility PNG and now contains the official extracted logo.
