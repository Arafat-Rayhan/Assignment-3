function filterActiveUsers(users) {
    if(!Array.isArray(users) ||users.length===0 ){
        return `Invalid`;
    }
     const activity = users.every(user => 
        user !== null 
        && typeof user === 'object' 
        && user.hasOwnProperty('isActiv'));

    if(!activity){
        return `Invalid`;
    }
    const hasActivity = users.filter(user => user.isActiv ===true);
    if(hasActivity){
        return hasActivity;
    }
}




// const users=[{
//      name : 'Arafat Rayhan',
//      isActiv : true,
// },
// {
//     name : 'Aysha',
//     isActiv:false
// }]
// console.log(filterActiveUsers(users));






 