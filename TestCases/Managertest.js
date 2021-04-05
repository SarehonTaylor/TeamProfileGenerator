// test for name id and email and office
const { TestResult } = require("@jest/types");


const Manager = require('../lib/Manager');
const { number } = require("yargs");


// test for name, email, id, role validity

//passed test

const testManager = new Manager("S Taylor", "sarehontaylor@gmail.com", 3 , "manager", 101)

//failed test
//const testManager = new Manager("S Taylor", "sarehontaylor@gmail.com", 3 , "manager", 101)

test('has a name', () => {
    expect(testManager.name).toEqual(expect.any(String))
    expect(testManager.name.length).toBeGreaterThan(2)
})

test('has an email a valid email', () =>{
    expect(testManager.email).toEqual(expect.stringContaining('@'))
})

test('has a role of manger', () => {
    expect(testManager.role).toBe('manager')
})

test('Id has value', () =>{
    expect(testManager.id).toEqual(expect.any(Number))
})

test('Entered an office', () =>{
    objectKeys= Object.keys(testManager)
    keyGH = objectKeys[4]

    expect(keyGH).toBe('office')

    expect(testManager.office).toEqual(expect.any(Number))

})