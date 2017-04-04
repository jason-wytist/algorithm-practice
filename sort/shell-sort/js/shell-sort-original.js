var shellSortOriginalASC = function(arr, printHandler) {
  var n = arr.length;
  var d, i, j;
  var step;

  var arrStr = ''; // FOR DEBUG
  var compCnt = 0; // FOR DEBUG
  var swapCnt = 0; // FOR DEBUG

  for (d = Math.floor(n/2); d>=1; d = Math.floor(d/2)) {
    for(step=0;step<d;step++) {
      for (i=d+step; i<n; i+=d) {
        for (j=i; j>=d; j=j-d) {
          showCompMsg(); // FOR DEBUG

          if(!(arr[j] < arr[j-d])) {
            showArrOnlyComp(); // FOR DEBUG
            break;
          }

          if(arr[j] < arr[j-d]) {
            showSwapMsg(); // FOR DEBUG
            swapArray(arr, j, j-d);
            showArrAfterSwap(); // FOR DEBUG
          }
        }
      }
    }
  }

  showStat(); // FOR DEBUG


  /* DEBUGGING FUNCTIONS */
  function showCompMsg() {
    if (printHandler !== undefined) {
      compCnt++;
      printHandler('compare([' + j + ']=' + arr[j] + ', [' + (j-d) + ']=' + arr[(j-d)] + ')');
    }
  }

  function showArrOnlyComp() {
    if(printHandler !== undefined) {
      arrStr = generateArrayString(arr, [j, j-d], '(', ')');
      arrStr += ' // d:' + d + ', step:' + step + ', i:' + i + ', j:' + j + ', j-d:' + (j-d);
      printHandler(arrStr);
      printHandler('');
    }
  }

  function showSwapMsg() {
    if (printHandler !== undefined) {
      swapCnt++;
      printHandler('swap([' + j + ']=' + arr[j] + ', [' + (j-d) + ']=' + arr[(j-d)] + ')');
    }
  }

  function showArrAfterSwap() {
    if(printHandler !== undefined) {
      arrStr = generateArrayString(arr, [j, j-d]);
      arrStr += ' // d:' + d + ', step:' + step + ', i:' + i + ', j:' + j + ', j-d:' + (j-d);
      printHandler(arrStr);
      printHandler('');
    }
  }

  function showStat() {
    if (printHandler !== undefined) {
      printHandler('# of compare : ' + compCnt + ', # of swap : ' + swapCnt);
    }
  }
};


/////////////////////////////////////////////////////////////////


var shellSortOriginalDESC = function(arr, printHandler) {
  var n = arr.length;
  var d, i, j;
  var step;

  var arrStr = ''; // FOR DEBUG
  var compCnt = 0; // FOR DEBUG
  var swapCnt = 0; // FOR DEBUG

  for (d = Math.floor(n/2); d>=1; d = Math.floor(d/2)) {
    for(step=0;step<d;step++) {
      for (i=d+step; i<n; i+=d) {
        for (j=i; j>=d; j=j-d) {
          showCompMsg(); // FOR DEBUG

          if(!(arr[j] > arr[j-d])) {
            showArrOnlyComp(); // FOR DEBUG
            break;
          }

          if(arr[j] > arr[j-d]) {
            showSwapMsg(); // FOR DEBUG
            swapArray(arr, j, j-d);
            showArrAfterSwap(); // FOR DEBUG
          }
        }
      }
    }
  }

  showStat() // FOR DEBUG


  /* DEBUGGING FUNCTIONS */
  function showCompMsg() {
    if (printHandler !== undefined) {
      compCnt++;
      printHandler('compare([' + j + ']=' + arr[j] + ', [' + (j-d) + ']=' + arr[(j-d)] + ')');
    }
  }

  function showArrOnlyComp() {
    if(printHandler !== undefined) {
      arrStr = generateArrayString(arr, [j, j-d], '(', ')');
      arrStr += ' // d:' + d + ', step:' + step + ', i:' + i + ', j:' + j + ', j-d:' + (j-d);
      printHandler(arrStr);
      printHandler('');
    }
  }

  function showSwapMsg() {
    if (printHandler !== undefined) {
      swapCnt++;
      printHandler('swap([' + j + ']=' + arr[j] + ', [' + (j-d) + ']=' + arr[(j-d)] + ')');
    }
  }

  function showArrAfterSwap() {
    if(printHandler !== undefined) {
      arrStr = generateArrayString(arr, [j, j-d]);
      arrStr += ' // d:' + d + ', step:' + step + ', i:' + i + ', j:' + j + ', j-d:' + (j-d);
      printHandler(arrStr);
      printHandler('');
    }
  }

  function showStat() {
    if (printHandler !== undefined) {
      printHandler('# of compare : ' + compCnt + ', # of swap : ' + swapCnt);
    }
  }
};
