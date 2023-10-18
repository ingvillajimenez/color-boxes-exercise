/** Return a random item from a list. */

function choice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
}

export { choice };
