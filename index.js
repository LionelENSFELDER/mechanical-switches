const sounds = {
    "play-linear": "./sounds/linear.mp3",
    "play-tactile": "./sounds/tactile.mp3",
    "play-audible": "./sounds/audible.mp3"
}

const playBtn = document.getElementsByClassName("play-btn");

function handleClickPlay(){
    for (i = 0; i < playBtn.length; i++){
        let id = playBtn[i].id;
        playBtn[i].addEventListener('click', function(){
            let path = sounds[id];
            let audio = new Audio(path);
            audio.loop = false;
            audio.play();
            console.log(id);
        });
    }
};
handleClickPlay();




var linearChartCanvas = document.getElementById('linearChart').getContext('2d');
var chartlinear = new Chart(linearChartCanvas, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0', '1', '2', '3', '4',],
        datasets: [{
            label: 'Force (cN) x travel (mm)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: '#F73131',
            //data: [20, 40, 60, 80, 100, 120]
            data: [{x: 0,y: 30}, {x: 1,y: 38}, {x: 2,y: 43}, {x: 3,y: 51}, {x: 4,y: 64}]
        }]
    },

    // Configuration options go here
    options: {}
});

var tactileChartCanvas = document.getElementById('tactileChart').getContext('2d');
var charttactile = new Chart(tactileChartCanvas, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0', '1', '2', '3', '4',],
        datasets: [{
            label: 'Force (cN) x travel (mm)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: '#945A39',
            //data: [20, 40, 60, 80, 100, 120]
            data: [{x: 0,y: 38}, {x: 1,y: 40}, {x: 2,y: 60}, {x: 3,y: 70}, {x: 4,y: 90}]
        }]
    },

    // Configuration options go here
    options: {}
});

var audibleChartCanvas = document.getElementById('audibleChart').getContext('2d');
var chartaudible = new Chart(audibleChartCanvas, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['0', '1', '2', '3', '4',],
        datasets: [{
            label: 'Force (cN) x travel (mm)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: '#29A0FF',
            //data: [20, 40, 60, 80, 100, 120]
            data: [{x: 0,y: 30}, {x: 1,y: 40}, {x: 2,y: 60}, {x: 3,y: 70}, {x: 4,y: 90}]
        }]
    },

    // Configuration options go here
    options: {}
});