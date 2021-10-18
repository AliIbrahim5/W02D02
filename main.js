//1
//
// const addOne = (arr) => {
//   let forr = [];
//   arr.forEach((element) => {
//     forr.push(element + 1);
//   });
//
//   return forr;
// };
//
// console.log(addOne([1, 2, 3]))
// addOne([1, 2, 3]); // => [2,3,4]
// addOne([10, 11, 12]); // => [11,12,13]


//2

// const addExclamation = (arr) => {
// let foor =[];
//  arr.forEach((element) => {
//      foor.push(element +"!" )
//
//  });
//   return foor
//
//  };
//
//
// console.log(addExclamation(["one","two","three"]))
//
//
// addExclamation(["one","two","three"]) // => ["one!","two!","three!"]
//
//
//

//3
//
//
// const addOneByMap = (arr) => {
//
//     let forr = [];
//     arr.map((element) => {
//         forr.push(element + 1);
//
//     });
//     return forr;
//
//
// };
//
// console.log(addOneByMap([1, 2, 3]))
// addOneByMap([1, 2, 3]) // => [2,3,4]
// addOneByMap([10, 11, 12]) // => [11,12,13]
//


//4


// const addQuestion = (arr) => {
//     let foor =[];
//   arr.forEach((element) => {
//       foor.push(element +"?" )
//
//   });
//    return foor
//
//   };
//
//
// console.log(addQuestion(["one","two","three"]))
// addQuestion(["one","two","three"]) // => ["one?","two?","three?"]


//5

// const forLoopTwoToThe = (arr) => {
//
//     let foor =[];
//     arr.forEach((element) => {
//         foor.push( 2**element  )
//
//     });
//     return foor
//
// };
//
// console.log(forLoopTwoToThe([1,2,3]))
// forLoopTwoToThe([1,2,3]) // => [2,4,8]


//6
//
// const typeNum = (arr) => {
//
//
//
//     let foor =[];
//     arr.filter((element) => {
//         foor.push(typeof element ==="number" )
//         arr.element === 'true'
//
//     });
//
//     return foor
//
//
//
//
//
//
//
// }
// console.log(typeNum([1, 'bob' ,3]))
// // typeNum([1, 'bob' ,3]) // => [1,3]


////////////////////////////////////////////////////////////

//1


// const checkValues = (obj, value) => {
//    if (obj.age === value){
//        return 'true'
//
//    }else {
//
//        return  'false'
//    }
//
//
// };
//
// console.log(checkValues({name:"ahmed",age:15},15))
// checkValues({name:"ahmed",age:15},15) // => true
// checkValues({name:"ahmed",age:15},20) // => false
//

//2

const courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
        "SMACSS",
        "APIs",
        "NodeJS",
        "SQL",
        "jQuery",
        "functional programming",
    ],
    finalExam: true,
};

const getCourseKeys = (obj) => {

      return Object.keys(obj)

};

console.log(getCourseKeys)

// => ['name', 'duration', 'topics', 'finalExam']


//3
//
// {
//     GraceHopper: '222-303-5938',
//         AdaLovelace: '222-349-9842',
//     AlanTuring: '222-853-5933'
// }

//HR has asked you to change the data to make it easier to print so that it looks like this:

// [
   // 'Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933'
// ]

//
// const updateNumbers = (obj) => {
//     return obj;
//
//
// };
//
