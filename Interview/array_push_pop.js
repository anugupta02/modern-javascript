  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     let filter = array.filter(function(value, index, arr){
         return value > 5;
      });

  let filter1 = array.filter(function(value, index, arr){
      return value < 5;
  });

     console.log("filter",filter)
     console.log("filter1",filter1)
     console.log("filter diff",filter-filter1)


// let user = [1,2,3,4,5]
// user.indexOf(5)
// user.push(6)
// console.log("user",user);
//
// let finalUser = [1,2,3,4,5]
// let value = 4
// let finalUser1 = finalUser.filter(function(item) {
//     return item !== value
// })
//
// console.log("finalUser",finalUser1);
