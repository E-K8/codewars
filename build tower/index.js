function towerBuilder(nFloors) {
  console.log(nFloors);
  // create an empty array to contain a list of "floors", it will be an array of strings
  // top floor - 1 star, every further floor - previous +2 stars
  // on each sides of the stars there will be empty spaces space-star(s)-space
  // iterate from top to bottom, adding/repeating spaces, stars, spaces

  let tower = [];
  let space, star;

  for (let i = 1; i <= nFloors; i++) {
    space = ' '.repeat(nFloors - i);
    star = '*'.repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower;
}
