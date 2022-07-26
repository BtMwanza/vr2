import {
  earth_texture,
  jupiter_texture,
  mars_texture,
  mercury_texture,
  neptune_texture,
  pluto_texture,
  saturn_texture,
  uranus_texture,
  venus_texture,
} from "../model";

const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));

const shuffle = (a) => {
  const temp = a.slice(0);
  for (let i = temp.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [temp[i], temp[j]] = [temp[j], temp[i]];
  }
  return temp;
};

// function returns the Fibonacci number
function fib(n) {
  if (n <= 1)
      return n;
  return fib(n-1) + fib(n-2);
}

const textures = [
  mercury_texture,
  venus_texture,
  earth_texture,
  mars_texture,
  jupiter_texture,
  saturn_texture,
  uranus_texture,
  neptune_texture,
  pluto_texture,
];

const planetData = [];
const totalPlanets = 9;
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    xRadius: (index + 3) * 4,
    zRadius: (index + 3) * 2,
    size: random(0.5, 1),
    speed: random(0.09, 0.020),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.01, 0.03),
    textureMap: textures[index],
  });
}

export default planetData;
