const maps = {
    sanAntonioAMiramar: {
        Image: {
            xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
            Url: 'dzi/de-faro-san-antonio-a-faro-miramar_files/',
            Format: 'jpeg',
            Overlap: '1',
            TileSize: '254',
            Size: {
                Width:  '14210',
                Height: '19776'
            },
            Title: 'De Faro San Antonio a Faro Miramar'
        },
        overlays: [{
            px: 14310,
            py: 0,
            id: 'sanAntonioAMiramar-overlay',
            className: 'overlay'
        }],
    },
    europe: {
        Image: {
            xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
            Url: 'dzi/europe_files/',
            Format: 'jpeg',
            Overlap: '1',
            TileSize: '254',
            Size: {
                Width:  '13018',
                Height: '8328'
            },
            Title: 'Europa'
        },
        overlays: [{
            px: 13118,
            py: 0,
            id: 'europe-overlay',
            className: 'overlay'
        }],
    },
    rivers: {
        Image: {
            xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
            Url: 'dzi/rivers_files/',
            Format: 'jpeg',
            Overlap: '1',
            TileSize: '254',
            Size: {
                Width:  '13100',
                Height: '8200'
            },
            Title: 'Un mundo de ríos'
        },
        overlays: [{
            px: 13200,
            py: 0,
            id: 'rivers-overlay',
            className: 'overlay'
        }],
    },
    roman: {
        Image: {
            xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
            Url: 'dzi/roman_files/',
            Format: 'jpeg',
            Overlap: '1',
            TileSize: '254',
            Size: {
                Width:  '13023',
                Height: '8382'
            },
            Title: 'El Imperio Romano'
        },
        overlays: [{
            px: 13123,
            py: 0,
            id: 'roman-overlay',
            className: 'overlay'
        }],
    },
    africa: {
        Image: {
            xmlns: 'http://schemas.microsoft.com/deepzoom/2008',
            Url: 'dzi/africa_files/',
            Format: 'jpeg',
            Overlap: '1',
            TileSize: '254',
            Size: {
                Width:  '10140',
                Height: '9307'
            },
            Title: 'África',
        },
        overlays: [{
            px: 10240,
            py: 0,
            id: 'africa-overlay',
            className: 'overlay'
        }],
    }
}

const viewer = OpenSeadragon({
    id: 'maps-viewer',
    prefixUrl: 'lib/openseadragon/images/png/',
    tileSources: Object.values(maps),
    sequenceMode: true,
    showReferenceStrip: true,
    autoHideControls: true,
    showNavigator: true,
    springStiffness: 10,
    navigatorSizeRatio: 0.133,
    navigatorMaintainSizeRatio: true,
});

viewer.addHandler('open', function(event) {
    document.querySelector('#map-title').innerHTML = event.source.Image.Title;
});

document.querySelectorAll('.referencestrip > div').forEach((div, index) => {
    const span = document.createElement('span');
    span.style.position = 'absolute';
    span.style.top = '0';
    span.style.left = '0';
    console.log(Object.values(maps), index)
    span.textContent = Object.values(maps)[index].Image.Title;
    span.classList.add('map-label', 'has-text-white', 'has-background-black', 'has-text-centered');
    div.appendChild(span);
});