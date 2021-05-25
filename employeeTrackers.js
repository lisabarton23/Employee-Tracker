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
'View by Roles',
'Add employee',
'Add roles',
'Add departments'


]

})
.then ((answer) => {
  switch(answer.action){ 
    case "View All Employees":
      viewEmployee();
      break;
      case "View all Departments":
        viewDepartments();
        break;
        case "View by Roles":
        viewRoles();
        break;
        case 'Add employee':
          addEmployee() ;
          break;
          case 'Add roles':
            addRoles();
            break;
            case 'Add departments':
              addDepartment();
              break;
      default:
        console.log (`Invalid action: ${answer.action}`)
}
//create functions to view department, role and employees 
})
}
const viewEmployee = () => {
  const query ='SELECT * FROM employee, department, role';
  connection.query (query, (err, res) =>{
    res.forEach(({id, first_name, last_name, role_id, manager_id, title, salary, name}) => {
      console.table(res)
      // console.log (`ID: ${id} || NAME: ${first_name} ${last_name} || ROLE ID: ${role_id} || MANAGER ID: ${manager_id} || TITLE: ${title}|| SALARY: ${salary} || DEPARTMENT: ${name}`)
  })
start ()


})
}
const viewDepartments = () => {
  const query ='SELECT * FROM department, employee, role';
  connection.query (query, (err, res) =>{
     res.forEach(({department_id, name, id, first_name, last_name, role_id, manager_id, title, salary}) => {
       console.table(res)
      // console.log (`DEPARTMENT ID: ${department_id} || DEPARTMENT: ${name} || ID: ${id} || NAME: ${first_name} ${last_name} || ROLE ID: ${role_id} || MANAGER ID: ${manager_id} || TITLE: ${title}|| SALARY: ${salary}`)
  })
start ()

})
}
const viewRoles =() => {
  const query ='SELECT * FROM role, employee, department ';
connection.query (query, (err, res) =>{
   res.forEach(({role_id, name, department_id, id, first_name, last_name, manager_id, title, salary}) => {
    console.table(res)
})
start ()

})



}
const addEmployee =() =>{
  inquirer
  .prompt([
    {
      name: 'first_name',
      type: 'input',
      message: 'What is the first name of the employee you want to add?',
    },
    {
      name: 'last_name',
      type: 'input',
      message: 'What is the last name of the employee you want to add?',
    },
    {
      name: 'roleID',
      type: 'input',
      message: 'Whatis the role id for the employee you want to add?',
    },
    {
      name: 'managerID',
      type: 'input',
      message: 'What is the Managers Id for the employee you want to add?',
      
    },
  ])
  .then((answer) => {
    // when finished prompting, insert a new item into the db with that info
    connection.query(
      'INSERT INTO employee SET ?',
      
      {
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.role_id,
        manager_id: answer.manager_id,
      },
      (err) => {
        if (err) throw err;
        console.log('Your employee was added successfully!');
        // re-prompt the user for if they want to bid or post
        start();
      }
    );
  });
};

const addRoles =() =>{
  inquirer
  .prompt([
    {
      name: 'id',
      type: 'input',
      message: 'What is the id number for the role you want to add?',
    },
    {
      name: 'title',
      type: 'input',
      message: 'What is the title for the role you want to add?',
    },
    {
      name: 'salary',
      type: 'input',
      message: 'What is the salary for the role you want to add?',
    },
    {
      name: 'department_id',
      type: 'input',
      message: 'What is the department Id for the role you want to add?',
      
    },
  ])
  .then((answer) => {
    // when finished prompting, insert a new item into the db with that info
    connection.query(
      'INSERT INTO role SET ?',
      
      {
        id: answer.id,
        title: answer.title,
        salary: answer.salary,
        department_id: answer.department_id,
      },
      (err) => {
        if (err) throw err;
        console.log('Your role was added successfully!');
        // re-prompt the user for if they want to bid or post
        start();
      }
    );
  });
};



 const addDepartment = () => {


  inquirer
  .prompt([
    {
      name: 'id',
      type: 'input',
      message: 'What is the id number for the department you want to add?',
    },
    {
      name: 'name',
      type: 'input',
      message: 'What is the name for the department you want to add?',
    },
    
  ])
  .then((answer) => {
    // when finished prompting, insert a new item into the db with that info
    connection.query(
      'INSERT INTO department SET ?',
      
      {
        id: answer.id,
        name: answer.name,
        
      },
      (err) => {
        if (err) throw err;
        console.log('Your department was added successfully!');
        // re-prompt the user for if they want to bid or post
        start();
      }
    );
  });






 };
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  start();
})
