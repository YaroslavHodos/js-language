console.log("HW#12");
const comparator = (n1,n2) => {
    let res = n1 % 2 - n2 % 2;
    if (res == 0) {
        res = n1 % 2 == 0 ? n1 - n2 : n2 - n1;
    }
    return res;
}
const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
arHw.sort(comparator);
console.log(arHw);

const matrix =  [[1,2],[3,4],[5,6]];
function matrixTransp(matrix) {
    const res = [];
    for (let i = 0; i < matrix[0].length; i++) {
        res.push([]);
        for (let j = o; j < matrix.length; j++) {
            res[i].push(matrix[j][i]);
        }
    }
}
displsyMatrix(matrix);

function displsyMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = '';
        console.log('')
        for(let j = 0; j <matrix[i].length; j++) {
            row = row + matrix[i][j] + '   ';
        }
        console.log(row);
    }
}
