function toCamelCase(str) {
  let arr = str.split(/[-_]/); // -_ matches a single character in the list -_ (case sensitive)

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
  }
  let result = arr.join('');

  return result;
}
