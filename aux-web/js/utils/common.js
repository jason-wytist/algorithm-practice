var swapArray = function(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

var generateArrayString = function(arr, hlPosArr=[], hlOpen='<', hlClose='>') {
  var arrStr = '[';
  for (var i = 0; i < arr.length; i++) {
    if (hlPosArr.indexOf(i) != -1) {
      arrStr += hlOpen + arr[i] + hlClose;
    } else {
      arrStr += arr[i];
    }

    if(i < (arr.length-1))
      arrStr += ',';
  }
  arrStr += ']';

  return arrStr;
};
