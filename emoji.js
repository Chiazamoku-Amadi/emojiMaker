let yellowSkin = document.getElementById('yellowSkin');
let greenSkin = document.getElementById('greenSkin');
let redSkin = document.getElementById('redSkin');
let emoji = document.getElementById('emoji');
let displayEmoji = document.getElementById('displayEmoji');
let displaySkin = document.getElementById('displaySkin');
let displayEyes = document.getElementById('displayEyes');
let displayEyes2 = document.getElementById('displayEyes2');
let displayMouth = document.getElementById('displayMouth');
let canvas1 = document.getElementById('canvas1');
let canvas2 = document.getElementById('canvas2');
let canvas3 = document.getElementById('canvas3');


displayEyes.addEventListener('click', function() {
    canvas1.style.display = "none";
    canvas2.style.display = "block";
})

displaySkin.addEventListener('click', function() {
    canvas2.style.display = "none";
    canvas1.style.display = "block";
})

displayMouth.addEventListener('click', function() {
    canvas2.style.display = "none";
    canvas3.style.display = "block";
})

displayEyes2.addEventListener('click', function() {
    canvas3.style.display = "none";
    canvas2.style.display = "block";
})

yellowSkin.addEventListener('click', function() {
    let defaultSkin = document.getElementById('defaultSkin');
    var img = document.createElement('img');
    img.src = "./assets/skin/yellow.png";

    emoji.appendChild(img);
    img.id = "defaultSkin";
    img.className = "defaultSkin";

    if ((defaultSkin !== "block" || defaultEyes !== "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultSkin.style.display = "block";

        alignSkin();
        canvas1.style.display = "none";
        canvas2.style.display = "block";
    }

    if (greenSkin || redSkin || null) {
        console.log("4");
        defaultSkin.style.display === "none";
        // img.src = "./assets/skin/yellow.png";
        // emoji.appendChild(img);
        // img.src = "./assets/skin/yellow.png";
    }
})

greenSkin.addEventListener('click', function() {
    let defaultSkin = document.getElementById('defaultSkin');
    var img = document.createElement('img');
    img.src = "./assets/skin/green.png";

    emoji.appendChild(img);
    img.id = "defaultSkin";
    img.className = "defaultSkin";
    if ((defaultSkin !== "block" || defaultEyes !== "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultSkin.style.display = "block";

        alignSkin();
        canvas1.style.display = "none";
        canvas2.style.display = "block";
    }
})

redSkin.addEventListener('click', function() {
    let defaultSkin = document.getElementById('defaultSkin');
    var img = document.createElement('img');
    img.src = "./assets/skin/red.png";

    emoji.appendChild(img);
    img.id = "defaultSkin";
    img.className = "defaultSkin";
    if ((defaultSkin !== "block" || defaultEyes !== "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultSkin.style.display = "block";

        alignSkin();
        canvas1.style.display = "none";
        canvas2.style.display = "block";
    }
})

normalEyes.addEventListener('click', function() {
    let normalEyes = document.getElementById('normalEyes');
    let defaultSkin = document.getElementById('defaultSkin');
    let defaultEyes = document.getElementById('defaultEyes');
    let img = document.createElement('img');
    img.src = "./assets/eyes/normal.png";

    emoji.appendChild(img);
    img.id = "defaultEyes";
    img.className = "defaultEyes";

    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '100px';
    });

    if ((defaultSkin === "block" || defaultEyes !== "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultEyes.style.display = "block";

        canvas2.style.display = "none";
        canvas3.style.display = "block";
    }
})

closedEyes.addEventListener('click', function() {
    let closedEyes = document.getElementById('closedEyes');
    let defaultSkin = document.getElementById('defaultSkin');
    let defaultEyes = document.getElementById('defaultEyes');
    let img = document.createElement('img');
    img.src = "./assets/eyes/closed.png";

    emoji.appendChild(img);
    img.id = "defaultEyes";
    img.className = "defaultEyes";

    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '100px';
    });

    if ((defaultSkin === "block" || defaultEyes !== "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultEyes.style.display = "block";

        canvas2.style.display = "none";
        canvas3.style.display = "block";
    }
})

longEyes.addEventListener('click', function() {
    let longEyes = document.getElementById('longEyes');
    let defaultSkin = document.getElementById('defaultSkin');
    let defaultEyes = document.getElementById('defaultEyes');
    let img = document.createElement('img');
    img.src = "./assets/eyes/long.png";

    emoji.appendChild(img);
    img.id = "defaultEyes";
    img.className = "defaultEyes";

    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '100px';
    });

    if ((defaultSkin === "block" || defaultEyes !== "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultEyes.style.display = "block";

        canvas2.style.display = "none";
        canvas3.style.display = "block";
    }
})

laughingEyes.addEventListener('click', function() {
    let laughingEyes = document.getElementById('laughingEyes');
    let defaultSkin = document.getElementById('defaultSkin');
    let defaultEyes = document.getElementById('defaultEyes');
    let img = document.createElement('img');
    img.src = "./assets/eyes/laughing.png";

    emoji.appendChild(img);
    img.id = "defaultEyes";
    img.className = "defaultEyes";

    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '100px';
    });

    if ((defaultSkin === "block" || defaultEyes !== "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultEyes.style.display = "block";

        canvas2.style.display = "none";
        canvas3.style.display = "block";
    }
})

rollingEyes.addEventListener('click', function() {
    let rollingEyes = document.getElementById('rollingEyes');
    let defaultSkin = document.getElementById('defaultSkin');
    let defaultEyes = document.getElementById('defaultEyes');
    let img = document.createElement('img');
    img.src = "./assets/eyes/rolling.png";

    emoji.appendChild(img);
    img.id = "defaultEyes";
    img.className = "defaultEyes";

    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '100px';
    });

    if ((defaultSkin === "block" || defaultEyes !== "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultEyes.style.display = "block";

        canvas2.style.display = "none";
        canvas3.style.display = "block";
    }
})

winkingEyes.addEventListener('click', function() {
    let winkingEyes = document.getElementById('winkingEyes');
    let defaultSkin = document.getElementById('defaultSkin');
    let defaultEyes = document.getElementById('defaultEyes');
    let img = document.createElement('img');
    img.src = "./assets/eyes/winking.png";

    emoji.appendChild(img);
    img.id = "defaultEyes";
    img.className = "defaultEyes";

    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '100px';
    });

    if ((defaultSkin === "block" || defaultEyes !== "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultEyes.style.display = "block";

        canvas2.style.display = "none";
        canvas3.style.display = "block";
    }
})

openMouth.addEventListener('click', function() {
    let openMouth = document.getElementById('openMouth');
    let defaultSkin = document.getElementById('defaultSkin');
    let defaultEyes = document.getElementById('defaultEyes');
    let defaultMouth = document.getElementById('defaultMouth');
    let img = document.createElement('img');
    img.src = "./assets/mouth/open.png";

    emoji.appendChild(img);
    img.id = "defaultMouth";
    img.className = "defaultMouth";

    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '200px';
    });

    const allDefaultEyes = document.querySelectorAll('.defaultEyes');
    allDefaultEyes.forEach(defaultSkin => {
        defaultEyes.style.removeProperty('top');
        defaultEyes.style.top = '-40px';
    });

    if ((defaultSkin === "block" || defaultEyes === "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultMouth.style.display = "block";

        canvas3.style.display = "block";
    }
})

smilingMouth.addEventListener('click', function() {
    let smilingMouth = document.getElementById('smilingMouth');
    let defaultSkin = document.getElementById('defaultSkin');
    let defaultEyes = document.getElementById('defaultEyes');
    let defaultMouth = document.getElementById('defaultMouth');
    let img = document.createElement('img');
    img.src = "./assets/mouth/smiling.png";

    emoji.appendChild(img);
    img.id = "defaultMouth";
    img.className = "defaultMouth";

    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '200px';
    });

    const allDefaultEyes = document.querySelectorAll('.defaultEyes');
    allDefaultEyes.forEach(defaultSkin => {
        defaultEyes.style.removeProperty('top');
        defaultEyes.style.top = '-40px';
    });

    if ((defaultSkin === "block" || defaultEyes === "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultMouth.style.display = "block";

        canvas3.style.display = "block";
    }
})

straightMouth.addEventListener('click', function() {
    let straightMouth = document.getElementById('straightMouth');
    let defaultSkin = document.getElementById('defaultSkin');
    let defaultEyes = document.getElementById('defaultEyes');
    let defaultMouth = document.getElementById('defaultMouth');
    let img = document.createElement('img');
    img.src = "./assets/mouth/smiling.png";

    emoji.appendChild(img);
    img.id = "defaultMouth";
    img.className = "defaultMouth";

    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '200px';
    });

    const allDefaultEyes = document.querySelectorAll('.defaultEyes');
    allDefaultEyes.forEach(defaultSkin => {
        defaultEyes.style.removeProperty('top');
        defaultEyes.style.top = '-40px';
    });

    if ((defaultSkin === "block" || defaultEyes === "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultMouth.style.display = "block";

        canvas3.style.display = "block";
    }
})

sadMouth.addEventListener('click', function() {
    let sadMouth = document.getElementById('sadMouth');
    let defaultSkin = document.getElementById('defaultSkin');
    let defaultEyes = document.getElementById('defaultEyes');
    let defaultMouth = document.getElementById('defaultMouth');
    let img = document.createElement('img');
    img.src = "./assets/mouth/sad.png";

    emoji.appendChild(img);
    img.id = "defaultMouth";
    img.className = "defaultMouth";

    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '200px';
    });

    const allDefaultEyes = document.querySelectorAll('.defaultEyes');
    allDefaultEyes.forEach(defaultSkin => {
        defaultEyes.style.removeProperty('top');
        defaultEyes.style.top = '-40px';
    });

    if ((defaultSkin === "block" || defaultEyes === "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultMouth.style.display = "block";

        canvas3.style.display = "block";
    }
})

teethMouth.addEventListener('click', function() {
    let teethMouth = document.getElementById('teethMouth');
    let defaultSkin = document.getElementById('defaultSkin');
    let defaultEyes = document.getElementById('defaultEyes');
    let defaultMouth = document.getElementById('defaultMouth');
    let img = document.createElement('img');
    img.src = "./assets/mouth/teeth.png";

    emoji.appendChild(img);
    img.id = "defaultMouth";
    img.className = "defaultMouth";

    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '200px';
    });

    const allDefaultEyes = document.querySelectorAll('.defaultEyes');
    allDefaultEyes.forEach(defaultSkin => {
        defaultEyes.style.removeProperty('top');
        defaultEyes.style.top = '-40px';
    });

    if ((defaultSkin === "block" || defaultEyes === "block" || defaultMouth !== "block")) {
        console.log("a");
        defaultMouth.style.display = "block";

        canvas3.style.display = "block";
    }
})

function alignSkin() {
    const allDefaultSkin = document.querySelectorAll('.defaultSkin');
    allDefaultSkin.forEach(defaultSkin => {
        defaultSkin.style.removeProperty('top');
        defaultSkin.style.top = '0px';
    });
}