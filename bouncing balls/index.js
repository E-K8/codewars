function bouncingBall(h, bounce, window) {
  // 2 * times + 1  - number of bounces
  // while result > 1.5 meters do smth
  // loop iterating through number of bounces

  let ballMovement = 1;
  let bounceHeight = h * bounce;

  if (h <= 0 || bounce < 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  while (bounceHeight > window) {
    bounceHeight = bounceHeight * bounce;
    ballMovement += 2;
  }
  return ballMovement;
}
