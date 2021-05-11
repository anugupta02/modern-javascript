
var str1="geeksforgeeks";
var str2 = "forgeeksgeeks";

    function isAnagram(str1, str2){
        if (str1.length !== str2.length) {
            return false;
        }
        const result = {};
        for (let i=0;i<str1.length;i++) {
            let char = str1[i];
            result[char] = result[char] ? result[char] += 1 : result[char] = 1;
        }

        for (let i=0;i<str2.length;i++) {
            let char = str2[i];
            if (!result[char]) {
                return false;
            }
            else {
                result[char] = -1;
            }
        }
        return true;
    }

    console.log("Anagram",isAnagram(str1,str2));

