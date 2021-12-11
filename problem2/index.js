const mongoose = require('mongoose')
const initdb = require('./initdb')
const models = require('./models')

main()

async function main() {
  
  const mongo = await initdb()
  const { Student, Class, Enrollment } = models()
  const matilda = await Student.findOne({ name: /matilda/i })
  // Complete assignment here

  /* 1. Find all Classes that Student Matilda is enrolled in and list their Score for each. The Score for each Class is defined as Credits x Points. Print this result to the console. */

  asyncScores().then(function(result) {
    console.log('Question 1:');
    console.log("Matilda's scores:");
    let student = result.find((e) => { return e._id.equals(matilda._id) });
    student.enrollments.forEach((e) => {console.log(e.name + ': ' + e.score)})
    
    //go to question number 2
    getGPA(result);
  });

  /* 2. Compute the overall GPA for each Student. The GPA is defined as total Score divided by total Credits. Print this result to the console. */
  
   function getGPA (students) {
     console.log('\nQuestion 2:')
     students.forEach((e) => {
      console.log('Student: ' + e.name + ' GPA: ' + e.gpa)
     })
     //go to question 3
     filterGPA(students)
   }


  /* 3. Find all Students who have an overall GPA of less than 2. Print this list of names to the console. */

  function filterGPA (students) {
    console.log('\nQuestion 3:')
    let search = students.filter((e) => {
      return e.gpa < 2
    })
    search.forEach((e) => {
      console.log('Student: ' + e.name + ' GPA: ' + e.gpa)
    })
  }
  
  async function asyncScores () {
    return await getScoresPromise()
  }

  //Get Data function
  function getScoresPromise () {
    return new Promise((resolve, reject) => {
      Student.aggregate([
        //{ $match: { _studentID: student} },
        { 
          $lookup: {
            from: "enrollments",
            localField: "_id",
            foreignField: "_studentID",
            as: "enrollments",
          } 
        }, 
        { $unwind: "$enrollments" },
        { 
          $lookup: {
            from: "classes",
            localField: "enrollments._classID",
            foreignField: "_id",
            as: "class",
          } 
        }, 
        { $unwind: "$class" },
        {
          $project: {
            "_id": "$_id",
            "_classID": "$enrollments._classID",
            "points": "$enrollments.points",
            "name": "$name",
            "class_name": "$class.name",
            "credits": "$class.credits",
            "score": {$multiply: ["$enrollments.points", "$class.credits"]}
          }
        },
        { 
          $group: {
            "_id": "$_id",
            "name": {
              "$first": "$name"
            },
            "enrollments": {
              $push: {
                "_id": "$enrollments._id",
                "_classID": "$_classID",
                "points": "$points",
                "name": "$class_name",
                "credits": "$credits",
                "score": "$score"
              }
            }
          }
        }

      ]).then((result) => {
        //transform the items
        resolve(result.map((element) => {
          let student = element;
            student.totalPoints = 0
            student.totalCredits = 0
            element.enrollments.forEach((e) => {
              student.totalPoints += e.points;
              student.totalCredits += e.credits;
            })
          student.totalScore = student.totalPoints * student.totalCredits
          student.gpa = student.totalScore / student.totalCredits
          return student
        }));
      })
    })
  }
}
