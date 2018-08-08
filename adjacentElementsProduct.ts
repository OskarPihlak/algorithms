function adjacentElementsProduct(inputArray:number[]):number{
    let largestProduct = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length; i++){
        const product = inputArray[i] * inputArray[i + 1];
        largestProduct = largestProduct < product ? product : largestProduct;
    }
    return largestProduct;
}

console.log(adjacentElementsProduct([3,2,2,1,7,5,3,4,5,3]));