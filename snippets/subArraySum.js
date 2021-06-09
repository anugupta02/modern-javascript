function subArraySum(arr, n, sum){
    let curr_sum=0;
    // Pick a starting point
    for (let i = 0; i < n; i++) {
        curr_sum = arr[i];
        // try all subarrays starting with 'i'
        for (let j = i + 1; j <= n; j++) {
            if (curr_sum == sum) {
                console.log("Sum found between indexes "+i+" and "+(j - 1));
                return;
            }
            if (curr_sum > sum || j == n)
                break;
            curr_sum = curr_sum + arr[j];
        }
    }
    console.log("No subarray found");
    return;
}

// Driver Code

let arr= [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;
subArraySum(arr, n, sum);
