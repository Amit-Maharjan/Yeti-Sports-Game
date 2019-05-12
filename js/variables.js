let firstPage = document.getElementById('first-page');

let canvas = document.getElementById('canvas');

canvas.width = 1216;
canvas.height = 684;

let ctx = canvas.getContext('2d');

let score = 0;
let lives = 5;
let flagForNegativeGravity = 1;
let xChangeOfBackground = 0;
let moveBackground = 0;
let angleInDegree;
let speedInPower;
let speedOfPenguin;
let angleInRadianOfPenguin;
let vxOfPenguin;
let vyOfPenguin;
let disappearBird = 0;
let moveSnake = 0;
let animationNumber = 1;
let collisionFlag = 0;
let count;
let readyFlyMusicFlag = 0;
let gameOverMusicFlag = 1;

const xPositionOfPenguin = canvas.width - 200;
const yPositionOfPenguin = canvas.height - 200;
const initialXPositionOfAnimal = 100;

//background Object
let background = new Background();

//penguin Object
let penguin = new Penguin(xPositionOfPenguin, yPositionOfPenguin);

//angle Object
let angle = new Angle();

//power Object
let power = new Power();

//bird Object
let bird = new Bird();

//crane Object
let crane = new Crane();

//yeti2 Object
let yeti2 = new Yeti(secondYeti);
