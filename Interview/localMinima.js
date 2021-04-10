maxes = []
a = [1,3,2,5,3]
let max = (a)=>{for (var i = 1; i < a.length - 1; ++i) {
    if (a[i-1] < a[i] && a[i] > a[i+1])
        maxes.push(a[i])
}}
console.log("maxes",max(a))

function findPeaks(arr) {
    let peak;
    return arr.reduce(function(peaks, val, i) {
        if (arr[i+1] > arr[i]) {
            peak = arr[i+1];
        } else if ((arr[i+1] < arr[i]) && (typeof peak === 'number')) {
            peaks.push(peak);
            peak = undefined;
        }
        return peaks;
    }, []);
}

findPeaks([1,3,2,5,3])   // -> [3, 5]
findPeaks([1,3,3,3,2])   // -> [3]
findPeaks([-1,0,0,-1,3]) // -> [0]
findPeaks([5,3,3,3,4])   // -> []


let people = [1,3,2,5,3];
