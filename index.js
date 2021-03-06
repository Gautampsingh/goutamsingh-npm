// Math check
let area = (radius) => Math.PI * radius * radius;
let perimeter = (radius) => 2 * Math.PI * radius;

// Palindrome simple check example madam
let palidrome = (str) => {
  let strText = str.toLowerCase();
  let reverseText = strText.split("").reverse().join("");
  return reverseText === strText;
};

// Palindrome rearrange check example 'cciiv'
let palindromeRearrange = (str) => {
  str = str.toLowerCase();
  const charCounts = [...str].reduce((counts, char) => {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
    return counts;
  }, {});
  return (
    Object.values(charCounts).filter((count) => count % 2 !== 0).length <= 1
  );
};

// bubble sorting
let bubbleSort = (list) => {
  var length = list.length;
  // The main loop to iterate over the whole list
  for (var i = length - 1; i >= 0; i--) {
    // Child loop to make iterate all over and over and compare by pairs
    for (var j = 1; j <= i; j++) {
      // If the current item is smaller than the next, they will change positions
      if (list[j - 1] > list[j]) {
        var aux = list[j - 1];
        list[j - 1] = list[j];
        list[j] = aux;
      }
    }
  }
  return list;
};

// selection sorting
let selectionSort = (list) => {
  let length = list.length;
  // Main loop to iterate over all set elements
  for (var i = 0; i < length; i++) {
    // Min is the part that we are not going to loop again
    var min = i;
    for (var j = i + 1; j < length; j++) {
      // Executing statement comparison
      if (list[min] > list[j]) {
        // Updating our current min index to iterate
        min = j;
      }
    }
    // Swaping values
    if (min !== i) {
      let temp = list[i];
      list[i] = list[min];
      list[min] = temp;
    }
  }
  return list;
};

// Merge sorting
let mergeSort = (list) => {
  // Getting the half part of the list
  let half = list.length / 2;
  if (list.length < 2) {
    return list;
  }
  // Getting the left part of the list, by default the other part will be the right
  const left = list.splice(0, half);
  // Call merge function and mergeSort recursively to solve the sorting
  return merge(mergeSort(left), mergeSort(list));
};

function merge(left, right) {
  let list = [];
  // Main loop through the left and right parts to merge them sorted
  while (left.length && right.length) {
    // Execute the comparison statement
    if (left[0] < right[0]) {
      list.push(left.shift());
    } else {
      list.push(right.shift());
    }
  }
  // Return the list sorted and merged with the rest operator.
  return [...list, ...left, ...right];
}

// Heap sorting
var array_length;
/* to create MAX array */
function heap_root(input, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < array_length && input[left] > input[max]) {
    max = left;
  }

  if (right < array_length && input[right] > input[max]) {
    max = right;
  }

  if (max != i) {
    swap(input, i, max);
    heap_root(input, max);
  }
}

function swap(input, index_A, index_B) {
  var temp = input[index_A];
  input[index_A] = input[index_B];
  input[index_B] = temp;
}

let heapSort = (input) => {
  array_length = input.length;
  for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    heap_root(input, i);
  }

  for (i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    array_length--;
    heap_root(input, 0);
  }
};

// Quick sorting
let quickSort = (list) => {
  if (list.length <= 1) {
    return list;
  } else {
    var leftArr = [];
    var rightArr = [];
    var newArr = [];
    var pivot = list.pop(); //  Take a pivot value
    var length = list.length;
    for (var i = 0; i < length; i++) {
      if (list[i] <= pivot) {
        // using pivot value start comparing
        leftArr.push(list[i]);
      } else {
        rightArr.push(list[i]);
      }
    }
    return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr)); // array will be                                                                            //returned untill sorting occurs
  }
};

// Quickest search in array
let iterativeBinarySearch = function (arr, x) {
  let start = 0,
    end = arr.length - 1;
  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);
    // If element is present at mid, return True
    if (arr[mid] === x) return true;
    // Else look in left or right half accordingly
    else if (arr[mid] < x) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};

// Interpolation search in array
let interpolationSearch = (list, txtInput) => {
  var length = list.length;
  var low = 0;
  var high = length - 1;
  var position = -1;
  var delta = -1;
  while (low <= high && txtInput >= list[low] && txtInput <= list[high]) {
    delta = (txtInput - list[low]) / (list[high] - list[low]);
    position = low + Math.floor((high - low) * delta);
    if (list[position] == txtInput) {
      return position;
    }
    if (list[position] < txtInput) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return -1;
};

// Date format UTC to local (sampleDate = "2019-12-31T05:30:00.837")
let utcLocalDate = (
  date,
  format = "yyyy-MM-dd hh:mm:ss aa",
  lang = navigator.language
) => {
  date = new Date(date);
  let newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  let offset = date.getTimezoneOffset() / 60;
  let hours = date.getHours();
  newDate.setHours(hours - offset);
  var d = newDate.getDate();
  var m = newDate.getMonth() + 1;
  var y = newDate.getFullYear();
  let currentDate =
    "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
  var hr = newDate.getHours();
  var min = newDate.getMinutes();
  var sec = newDate.getSeconds();
  let currentTime =
    "" +
    (hr <= 9 ? "0" + hr : hr) +
    ":" +
    (min <= 9 ? "0" + min : min) +
    ":" +
    (sec <= 9 ? "0" + sec : sec);
  let totalTime = currentDate + " " + currentTime;
  return totalTime;
};

module.exports = {
  area: area,
  perimeter: perimeter,
  palidrome: palidrome,
  palindromeRearrange: palindromeRearrange,
  bubbleSort: bubbleSort,
  selectionSort: selectionSort,
  mergeSort: mergeSort,
  heapSort: heapSort,
  quickSort: quickSort,
  utcLocalDate: utcLocalDate,
  iterativeBinarySearch: iterativeBinarySearch,
  interpolationSearch: interpolationSearch,
};
