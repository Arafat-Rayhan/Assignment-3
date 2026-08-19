function studentIntroduction(student) {
  if(typeof student === 'object'
     && student!==null 
     && !Array.isArray(student) 
     && student.hasOwnProperty('name')
     && student.hasOwnProperty('age')
     && student.hasOwnProperty('course')){

    return `My name is ${student.name} . I am ${student.age} years old. I am learning ${student.course}`;
  }else{
    return`Invalid`;
  }
}

// const student ={
//     name :'Rayhan',
//     age : 21,
//     course:'Node'
// }
// console.log(studentIntroduction(student));