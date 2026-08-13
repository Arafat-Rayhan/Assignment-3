/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }
    const isValid = students.every(student => typeof student.score === 'number');
    if (!isValid) {
        return "Invalid";
    }
    

    const qualified = students.filter(student => {
        return student.score > 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
        
    });

    return names.slice(0, 3);
    
}

const student = [
    {name:"Sadia"}

    
]
console.log(generateLeaderboard(student));


// {name:"Rafi",score:90},
//     {name:"Sadia",score:65},
//     {name:"Karim",score:85},
//     {name:"Nafis",score:75}