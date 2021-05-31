const { TestResult } = require("@jest/types");


const Employee = require('../Profilelibrary/Employee');


// test for name, email, id, role validity


const testEmployee = new Employee("sarehon", "sarehontaylor@gmail.com", 3, "employee")

test('has a name', () => {
    expect(testEmployee.name).toEqual(expect.any(String))
    expect(testEmployee.name.length).toBeGreaterThan(2)
    
    
})
test('has an email a valid email', () =>{
    expect(testEmployee.email).toEqual(expect.stringContaining('@'))
})

test('has a role of employee', () => {
    expect(testEmployee.role).toBe('employee')
})

test('Id is a number', () =>{
    expect(testEmployee.id).toEqual(expect.any(Number))
})