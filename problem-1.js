function studentIntroduction(student) {
  if(typeof student === 'object'
     && student!==null 
     && !Array.isArray(student) 
     && student.hasOwnProperty('name')
     && student.hasOwnProperty('age')
     && student.hasOwnProperty('course')){

    return `my name is ${student.name} . I am ${student.age} . I am learning ${student.course}`;
  }else{
    return`Invalid`;
  }
}

// const student ={
//     // name :'Arafat Rayhan',
//     // age : 21,
//     // course:'javascript'
// }
// console.log(studentIntroduction(student));