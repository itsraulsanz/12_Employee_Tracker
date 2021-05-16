# MySQL Employee Tracker

## Table of contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

This repository contains a command-line application for managing a company's employees using node, inquirer, and MySQL. The interface allows the user to:

- View All Employees, All Employees By Department and All Employees By Manager

- View All Departments and Roles

- Add Employee, Department and Role

- Remove Employee, Department and Role

- Update Employee Role and Manager

## Installation

After copying the repository please run “npm install” to install the inquirer package.
The app uses:

- [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.

- [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.

- [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.


## Usage

Run the app "node employeeTracker.js" and a list of options will be presented. When you select any of the "view" options, you'll get a table presenting the queried data. If you ask for adding an Employee, Department or Role, you'll be asked for details about the new addition. When you select to remove an Employee, Department or Role, you'll be asked to specify which one you want to remove from the database. Or if you want to update the Employee's Role or Manager, you'll have to select the name of the employee and what is their new Role / Manager.

VIDEO DEMO: <a href="https://drive.google.com/file/d/1EzxpPfvKKG6JadiWCaKN-VRDmy44KGuZ/view">https://drive.google.com/file/d/1EzxpPfvKKG6JadiWCaKN-VRDmy44KGuZ/view</a>

## License

![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
This project is licensed under MIT license.

---

## Contributing

Contributions, issues and feature requests are welcome.

## Questions

Github: <a href="https://github.com/itsraulsanz/">https://github.com/itsraulsanz/</a><br />


---