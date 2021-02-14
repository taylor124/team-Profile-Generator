const { TestScheduler } = require('jest');
const index = require('../Index');
const Employee = require('../lib/Employee');
const Id = require('../lib/Employee');
const Email = require('../lib/Employee');

test('Returns the Name of the Employee', () => {
    const employee = new Employee('Taylor');
    if (this.name === 'Taylor') {
        console.log('Your Name is' + ':' + employee.name);
    };
    expect(this.name === 'Taylor');
});

test('Returns the Id of the Employee', () => {
     const id = new Id('Taylor', '1');

    if (this.id === '1'){
        console.log('Your Id is' + ':' + id);
    };
    expect(this.id === '1');
});

test('Returns the Email of the Employee', () => {
    const email = new Email('Taylor', '1', 'vanscoytaylor@gmail.com');
    
    if (this.email === 'vanscoytaylor@gmail.com'){
        console.log('Your Email is' + ':' + email);
    };
    expect(this.email === 'vanscoytaylor@gmail.com');
});