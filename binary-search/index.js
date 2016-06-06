// Possible solution by SvdA

function binarySearch(arr, val) {
  var min = 0,
    max = arr.length - 1,
    mid;
  while (min <= max) {
    mid = Math.round(min + (max - min) / 2);
    console.log(arr, val, mid);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
