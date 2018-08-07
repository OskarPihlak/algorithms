function add(param1:number, param2:number): number {
    return param1 + param2;
}

function add2(...param1: number[]): number {
    let total = 0;

    param1.forEach(num =>{
        total += num;
    });
    return total;
}

console.log(add2(1,2,5,2,1,));