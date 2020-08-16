var user = {
  firstName: "Anu",
  lastName: "Gupta",
  role: "Admin",
  loginCount: 22,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName + ' ' + this.lastName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

var courseList = true;
console.log(user.firstName + ' ' + user.lastName);
//cconsole.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());
