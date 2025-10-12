export default {
    multipass: true, // Optimize SVGs multiple times
    plugins: [
        {
        name: 'preset-default',
        params: {
            overrides: {
            removeViewBox: false, // Keep the viewBox attribute
            },
        },
        },
        'removeDimensions', // Remove width/height attributes
    ],
};