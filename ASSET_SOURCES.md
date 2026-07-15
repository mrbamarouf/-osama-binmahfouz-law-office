# Asset Sources

Local optimized images in `public/images` were downloaded and processed from Unsplash photo pages. Current desktop-polish usage avoids people, resort/pool scenes, and repeated service imagery:

- `atelier-palm-museum.jpg`: https://unsplash.com/photos/a-building-with-a-palm-tree-in-front-of-it-cIZ3MPnZDC4
- `atelier-corridor.jpg`: https://unsplash.com/photos/a-long-hallway-lined-with-columns-and-arches-BhwGcFAS6Zw
- `office-meeting.jpg`: https://unsplash.com/photos/tjd5CfdDPRA
- `legal-books.jpg`: https://unsplash.com/photos/selective-focus-photography-of-three-books-beside-opened-notebook-EKy2OTRPXdw
- `legal-gavel.jpg`: https://unsplash.com/photos/wooden-gavel-and-block-on-marble-6sl88x150Xs
- `legal-files.jpg`: https://unsplash.com/photos/a-stack-of-thick-folders-on-a-white-surface-XN4T2PVUUgk
- `court-interior.jpg`: https://unsplash.com/photos/a-large-building-with-columns-and-a-door-JmBCsY92mJE

The following earlier assets remain in the repository for traceability, but are no longer referenced by the current UI because they include people or a resort/private-home feel:

- `atelier-courtyard.jpg`: https://unsplash.com/photos/a-serene-courtyard-with-a-pool-and-palm-tree-rf0X6UZWe6E
- `atelier-arches.jpg`: https://unsplash.com/photos/courtyard-with-arches-and-palm-trees-SBcKyJETLxE
- `atelier-documents.jpg`: https://unsplash.com/photos/two-people-are-signing-a-document-at-a-desk-EtiHiyDkld0
- `atelier-signing.jpg`: https://unsplash.com/photos/man-signing-a-document-with-a-pen-QI6NLgN5XnM

The real office-wall reference photo was visible in the WhatsApp temporary documents during review, but the file was removed by WhatsApp cleanup before it could be copied into `public/images`. It is therefore not used in the current UI.

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
