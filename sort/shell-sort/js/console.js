var arr16 = [30,50,7,40,88,15,44,55,22,33,77,99,11,66,1,85];
var arr8  = [91,86,5,74,20,41,14,7];

$(document).ready(function() {
    console.log('\n----------------------------------------------\n');
    console.log('shellSortOriginalASC arr16 = [' + arr16 + ']');
    console.log('');
    shellSortOriginalASC(arr16, console.log);
    console.log('arr16 = [' + arr16 + ']');

    console.log('\n----------------------------------------------\n');
    arr16 = [30,50,7,40,88,15,44,55,22,33,77,99,11,66,1,85];
    console.log('shellSortBasicASC arr16 = [' + arr16 + ']');
    console.log('');
    shellSortBasicASC(arr16, console.log);
    console.log('arr16 = [' + arr16 + ']');

    console.log('\n----------------------------------------------\n');
    console.log('shellSortOriginalASC arr8 = [' + arr8 + ']');
    console.log('');
    shellSortOriginalASC(arr8, console.log);
    console.log('arr8 = [' + arr8 + ']');

    console.log('\n----------------------------------------------\n');
    arr8  = [91,86,5,74,20,41,14,7];
    console.log('shellSortBasicASC arr8 = [' + arr8 + ']');
    console.log('');
    shellSortBasicASC(arr8, console.log);
    console.log('arr8 = [' + arr8 + ']');

    console.log('\n----------------------------------------------\n');
    arr16  = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    console.log('shellSortOriginalDESC arr16 = [' + arr16 + ']');
    console.log('');
    shellSortOriginalDESC(arr16, console.log);
    console.log('arr16 = [' + arr16 + ']');

    console.log('\n----------------------------------------------\n');
    arr16  = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    console.log('shellSortBasicDESC arr16 = [' + arr8 + ']');
    console.log('');
    shellSortBasicDESC(arr16, console.log);
    console.log('arr16 = [' + arr16 + ']');

    console.log('\n----------------------------------------------\n');
    arr7  = [86,5,74,20,41,14,7];
    console.log('shellSortOriginalASC arr7 = [' + arr7 + ']');
    console.log('');
    shellSortOriginalASC(arr7, console.log);
    console.log('arr8 = [' + arr7 + ']');

    console.log('\n----------------------------------------------\n');
    arr7  = [86,5,74,20,41,14,7];
    console.log('shellSortBasicASC arr7 = [' + arr7 + ']');
    console.log('');
    shellSortBasicASC(arr7, console.log);
    console.log('arr7 = [' + arr7 + ']');

    console.log('\n----------------------------------------------\n');
});
