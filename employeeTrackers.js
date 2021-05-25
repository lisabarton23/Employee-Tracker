const mysql = require('mysql');
const inquirer =require('inquirer');
const cTable =require ('console.table');

const connection = mysql.createConnection({
  host: 'localhost',

  
  port: 3306,

  
  user: 'root',

  
  password: 'password',
  database: 'employee_trackerDB',
});


const start = () => {
inquirer.prompt({
name:'action',
type: "rawlist",
message: "What would you like to do?",
choices:[
'View All Employees',
'View all Departments',
'Add employee',


]

})
.then ((answer) => {
  switch(answer.action){ 
    case "View All Employees":
      viewEmployee();
      break;
      default:
        console.log (`Invalid action: ${answer.action}`)
}
//create functions to view department, role and employees 
})
}
const viewEmployee = () => {
  const query ='SELECT * FROM employee';
  connection.query (query, (err, res) =>{
    res.forEach(({id, first_name, last_name, role_id, manager_id}) => {
      console.log (`ID: ${id} || NAME: ${first_name, last_name} || ID: ${role_id} || MANAGER_ID: ${manager_id}`)
  })
start ()


})
}

// const addDepartment = () => {
//   // prompt for info about the department
//   inquirer
//     .prompt({
// name: "department",
// message:"What ?"



//     })
//     .then ((answer)=>{
// const query =''



//     })
//       // * **department**:

//       // * **id** 
//       // * **name** 


//     )]

//     message :"Which area would like to view or add information to?",
//     choices: ["add department", "add role", " add employee"],
// //create functions to veiw department, role and employees withan option to update employee roles









connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  start();
})
