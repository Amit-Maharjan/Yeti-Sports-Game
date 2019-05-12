/*
  0 - Elephant
  1 - Giraffe
  2 - Snake
  3 - Tree

  Total number = 4
*/

//Random Number Generator Between two points
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//animalArray Object
let animalArray = [];
let randomAnimal = getRandomInt(0, 4);

function initAnimal() {
  if (randomAnimal === 0)
    animalArray[0] = new Elephant(initialXPositionOfAnimal);
  else if (randomAnimal === 1)
    animalArray[0] = new Giraffe(initialXPositionOfAnimal);
  else if (randomAnimal === 2)
    animalArray[0] = new Snake(initialXPositionOfAnimal);
  else if (randomAnimal === 3)
    animalArray[0] = new Tree(initialXPositionOfAnimal);
}

function drawAllAnimal() {
  animalArray.forEach(animal => {
    animal.draw();
  });
}

function updateAnimal() {
  if (moveBackground === 1) {
    for (let i = 0; i < animalArray.length; i++) {
      animalArray[i].x += xChangeOfBackground;

      //Add New Animal
      if (animalArray[animalArray.length - 1].x > 650) {
        randomAnimal = getRandomInt(0, 4);

        if (randomAnimal === 0) animalArray.push(new Elephant(-elephant.width));
        else if (randomAnimal === 1)
          animalArray.push(new Giraffe(-giraffe.width / 1.5));
        else if (randomAnimal === 2)
          animalArray.push(new Snake(-snake.width / 6 / 1.5));
        else if (randomAnimal === 3)
          animalArray.push(new Tree(-tree.width * 1.5));
      }
    }
  }
}

function checkCollision() {
  animalArray.forEach(animal => {
    animal.checkCollision();
  });
}
