
function matrixAdditionAndSubtraction() {

    let row = parseInt(prompt("Enter the number of rows:"));
    let col = parseInt(prompt("Enter the number of columns:"));

    
    console.log("Enter values for the first matrix:");
    let arr = [];
    for (let i = 0; i < row; i++) {
        arr[i] = [];
        for (let j = 0; j < col; j++) {
            arr[i][j] = parseInt(prompt(`Enter value for arr[${i}][${j}]:`));
        }
    }


    console.log("Enter values for the second matrix:");
    let brr = [];
    for (let i = 0; i < row; i++) {
        brr[i] = [];
        for (let j = 0; j < col; j++) {
            brr[i][j] = parseInt(prompt(`Enter value for brr[${i}][${j}]:`));
        }
    }

    console.log("Matrix Addition:");
    let sum = [];
    for (let i = 0; i < row; i++) {
        sum[i] = [];
        for (let j = 0; j < col; j++) {
            sum[i][j] = arr[i][j] + brr[i][j];
            process.stdout.write(sum[i][j] + " ");
        }
        console.log();
    }

    console.log("Matrix Subtraction:");
    let diff = [];
    for (let i = 0; i < row; i++) {
        diff[i] = [];
        for (let j = 0; j < col; j++) {
            diff[i][j] = arr[i][j] - brr[i][j];
            process.stdout.write(diff[i][j] + " ");
        }
        console.log();
    }
}

matrixAdditionAndSubtraction();
