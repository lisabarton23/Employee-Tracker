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
name:'answer',
type: "list",
message :"Which area would like to view or add information to?",
choices: ["add department", "add role", " add employee"],



})
.then ((answer) =>{
  switch (answer.answer){
    case "add department":
      addDepartment()
}
//create functions to add department, role and employees 
const addDepartment = () => {
  // prompt for info about the department
  inquirer
    .prompt({
name: "department",
message:"What is the name of the department you want to enter?"



    })
    .then ((answer)=>{
const query =''



    })
      // * **department**:

      // * **id** 
      // * **name** 


    )]


//create functions to veiw department, role and employees withan option to update employee roles









connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
});
