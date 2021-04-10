const demo = (numbers,xy)=>{
    let expected = numbers[0],retNumbers=[],retXy=[];
    numbers.forEach(
        (current,index)=>{
            while(current>expected){
                retNumbers.push(expected);
                retXy.push("y");
                expected++
            }
            retNumbers.push(current);
            retXy.push(xy[index]);
            expected++;
        }
    );
    return [retNumbers,retXy];
}

console.log(demo(
    [1,2,4,5,8],
    ["a","b","c","d","e"]
))
