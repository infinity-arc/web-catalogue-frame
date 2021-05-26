
document.onload = loadedWhat('onload');
document.onloadeddata = loadedWhat('onloadeddata');
document.onloadedmetadata = loadedWhat('onloadedmetadata');

function loadedWhat(loadedWhat) {
    console.log('loadedWhat:',loadedWhat)
}

// const { Tooltip } = bootstrap;

// const tooltip = new Tooltip(document);