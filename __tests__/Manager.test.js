const Manager = require('../lib/Manager');
const index = require('../Index');

test('Returns the Name of the Manager', () => {
    const manager = new Manager('Taylor');
    
    if (manager.name === 'Taylor') {
        console.log('Your Name is' + ':' + manager.name);
    };
    expect(manager.name = 'Taylor');
});

test('Returns the Id of the Manager', () => {
     const manager = new Manager('Taylor', '2');

    if (manager.id = '2'){
        console.log('Your Id is' + ':' + manager.id);
    };
    expect(manager.id = '2');
});

test('Returns the Email of the Manager', () => {
    const manager = new Manager('Taylor', '2', 'vanscoytaylor@gmail.com');
    
    if (manager.email = 'vanscoytaylor@gmail.com'){
        console.log('Your Email is' + ':' + manager.email);
    };
    expect(manager.email = 'vanscoytaylor@gmail.com');
});

test('Returns the Role of Manager', () => {
    const manager = new Manager('Taylor', '2', 'vanscoytaylor@gmail.com', 'Manager');
    
    if (manager.role === 'Manager'){
        console.log('Your Role is' + ':' + manager.role);
    };
    expect(manager.role === 'Manager');
});

test('Returns the Office Number of the Manager', () => {
    const manager = new Manager('Taylor', '2', 'vanscoytaylor@gmail.com', '7052074038');
    
    if (manager.officeNumber === '7052074038') {
        console.log('Your Office Number is' + ':' + manager.officeNumber);
    };
    expect(manager.officeNumber = '7052074038');
});