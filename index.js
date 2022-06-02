// Write your solution in this file!
const employee = {
    name: "Valma",
    streetAddress: "123 Pen"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
const newEmployee ={ ... employee};
newEmployee[key] = value;
return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(emloyee, key, value){
employee[key] = value;
return employee
}
function deleteFromEmployeeByKey(employee,key){
    const newEmployee={delete: key}
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee.name;
return employee
}