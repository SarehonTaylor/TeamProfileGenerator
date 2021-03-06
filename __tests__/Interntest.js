// test for name id and email and school
// test for name id and email and github
const { TestResult } = require("@jest/types");


const Intern = require('../Profilelibrary/Intern');


// test for name, email, id, role validity


const testIntern = new Intern("sarehon", "sarehontaylor@gmail.com", 3 , "intern", "OSU")

test('has a name', () => {
    expect(testIntern.name).toEqual(expect.any(String))
    expect(testIntern.name.length).toBeGreaterThan(2)
})

test('has an email a valid email', () =>{
    expect(testIntern.email).toEqual(expect.stringContaining('@'))
})

test('has a role ofintern', () => {
    expect(testIntern.role).toBe('intern')
})

test('Id has value', () =>{
    expect(testIntern.id).toEqual(expect.any(Number))
})

test('Entered a school', () =>{
    objectKeys= Object.keys(testIntern)
    keyGH = objectKeys[4]

    expect(keyGH).toBe('school')

    expect(testIntern.school).toEqual(expect.any(String))

})
