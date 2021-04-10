/* Given two strings s1 and s2. Write the program to delete all the characters of s2 from s1.*/

//     let  remove()=> {
//     (char * s1, char * s2){
//         bool
//         s2Chars[256];
//         int
//         source = 0, dest = 0;
//         int
//         length = strlen(s1);
//
//         for (int i = 0;i < 256;++i; ) {
//             s2Chars[i] = false;
//         }
//
//         while (s2[source]) {
//             s2Chars[s2[source]] = true;
//             ++source;
//         }        source = 0;
//
//         while (source < length) {
//             if (!s2Chars[s1[source]]) {
//                 s1[dest] = s1[source];
//                 dest++;
//             }
//             source++;
//         }     s1[dest] = 0;
//     }
// }
