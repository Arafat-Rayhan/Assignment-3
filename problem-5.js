/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    
    if (!Array.isArray(students) ||students.length === 0) {
        return "Invalid";
    }

    const hasproperty = students.every(student => student.hasOwnProperty('name')&&student.hasOwnProperty('score'))
    const isValid = students.every(student => typeof student.score === 'number');
    if (!isValid || !hasproperty) {
        return "Invalid";
    }
    

    const qualified = students.filter(student => {
        return student.score > 70;
    });
    
    const names = qualified.map(({name}) => {
        return name.toUpperCase();
        
    });
    

    return names.slice(0, 3);
    
}





// const students = [
    
         
// //     //{name:"Sadia",score:95},
// //      {name:"Karim",score:null},
// // //  {name:"Nafis",score:75},
// // //     //{name:"Najmu",score:45}
    
// // ]
// // // //generateLeaderboard(students)

// // console.log(generateLeaderboard(students));


