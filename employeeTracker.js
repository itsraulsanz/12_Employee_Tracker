const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "manchester2021",
  database: "employeesDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  runPrompt();
});

const runPrompt = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees By Department",
        "View All Employees By Manager",
        "View All Employees",
        "View All Departments",
        "View All Roles",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Roles",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "View All Employees By Department":
          employeesByDepartmentSearch();
          break;

        case "View All Employees By Manager":
          employeesByManagerSearch();
          break;

        case "View All Employees":
          viewEmployees();
          break;

        case "View All Departments":
          viewAllDepartments();
          break;

        case "View All Roles":
          viewAllRoles();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "Update Employee Manager":
          updateEmployeManager();
          break;

        case "View All Roles":
          rolesSearch();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

// View All Employees By Department
function employeesByDepartmentSearch() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      runPrompt();
    }
  );
}

// View All Employees By Manager
function employeesByManagerSearch() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, employee.manager_id AS Manager FROM employee ORDER BY employee.manager_id;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      runPrompt();
    }
  );
}

function viewEmployees() {
  connection.query("SELECT * FROM employee;", function (err, res) {
    if (err) throw err;
    console.table(res);
    runPrompt();
  });
}

function viewAllDepartments() {
  connection.query("SELECT * FROM department;", function (err, res) {
    if (err) throw err;
    console.table(res);
    runPrompt();
  });
}

function viewAllRoles() {
  connection.query("SELECT * FROM role;", function (err, res) {
    if (err) throw err;
    console.table(res);
    runPrompt();
  });
}
