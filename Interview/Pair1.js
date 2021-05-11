let twoSum = (array, sum) => {
    let hashMap = {},
        results = []

    for (let i = 0; i < array.length; i++){
        if (hashMap[array[i]]){ results.push(hashMap[array[i]], array[i])
        }else{
            hashMap[sum - array[i]] = array[i];
        }
    }
    return results;
}

console.log(twoSum( [2, 5, 10, 12, 7, 9, 13],9));

let getPair = (arr,total) => {
    let x = new Set(arr);
    for(let i = 0 ;i < arr.length; i++) {
        if(x.has(total-arr[i])){
            return [arr[i], total-arr[i]]
        }
    }  return [];
}

console.log(getPair([1,2,6,3,21,8,25],7));
