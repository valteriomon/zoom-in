# Zoom-in!

This project began as an endeavor for the __Fundación de Historia Natural Félix de Azara__ to preserve and digitize historical maps, capturing their intricate details for interactive exploration.

Inspired by the work of [Matthew Petroff](https://mpetroff.net/2013/09/scanner-modifications-to-scan-large-documents/), who had taken on a similar challenge, we used a stripped-down scanner to capture the maps in sections, piece by piece. Once we had the scans with sufficient overlap, we stitched everything together using [Hugin](https://hugin.sourceforge.io/), which itself leverages tools such as Enblend to create the final image, ensuring the result was seamless and true to the original.

Each map was later on processed into Deep Zoom Image (DZI) format using [libvips](https://www.libvips.org/) and presented on a website with the help of the [OpenseaDragon](https://openseadragon.github.io/) viewer.

The final result is a set of high-resolution, interactive maps that tell their own stories through the details they reveal.

This is an ongoing effort, but for a preview, take a _deep_ look [here](https://valteriomon.github.io/zoom-in/)!
