function filterActiveUsers(users) {
    if(!Array.isArray(users) ||users.length===0 ){
        return "Invalid";
    }
     const activity = users.every(user =>
        user !== null 
        && typeof user === 'object' 
        && user.hasOwnProperty("isActive")
    );

    if(!activity){
        return "Invalid";
    }else{
        const activeObj = users.filter(user => user.isActive === true || user.isActive === 'true');
         return activeObj;
    }
   
}


// const users=[{
//         "isActive":"true",
//        "name":"Arafat Rayhan",
// },
// {
//     name : 'Aysha',
//     isActive:false,
// },{
//    "name":"fatima",
//     "isActive":true,
// },{
//     name:"kanij",
//     "isActive":"true"
// }]
// console.log(filterActiveUsers(users));






 