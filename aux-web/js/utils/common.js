function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

// IE8 이하 버전에 대한 polyfill
if(isIE() && (isIE() < 9)) {
  Array.prototype.indexOf = function (searchElement) {
    for (var i = 0; i < this.length; i++) {
      if(searchElement == this[i])
        return i;
    }

    return -1;
  };
}

function swapArray(arr, i, j) {
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
