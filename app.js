function myForEach(ar, cbFunction) {
    for (let i = o; i < ar.length; i++) {
        cbFunction(ar[i], i, ar);
    }
}

//1.
function myFilter (arr, cb) {
    const newAr = [];
    myForEach(arr, (n, i, a) => cb (n, i, a) ? newAr.push(n) : 0);
    return newAr;
}

//2.
function myReduce(array, cb, initRes) {
    let res;
    if (initRes) {
        res = initRes;
        myForEach(array, (n, i, a) => res = cb(res, n, i, a));
    }
    else {
        res = array[0];
        const newArray = array.slice(1);
        myForEach(newArray, (n, i, a) => res = cb(res, n, i, a));
    }
    return res;
}
const ar20 = [13, 17, 20, 23, 2, 40, 15];
const arEvOdd = myFilter(ar20, (n, i, a) => a.length %2 == 0 ? n %2 == 0: n %2 == 1);
console.log(arEvOdd);
const result = myReduce(ar20, (res, cur) => res + cur, 0);
console.log(result);
