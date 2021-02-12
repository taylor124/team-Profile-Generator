const Manager = require('../lib/Manager');

test('Returns the Name of the Manager', () => {
    const manager = new Manager('Taylor');
    
    if (manager.name === 'Taylor') {
        console.log(manager);
    };
    expect(manager.name = 'Taylor');
});

test('Returns the Id of the Manager', () => {
     const manager = new Manager('Taylor', '2');

    if (manager.id = '2'){
        console.log(manager.id);
    };
    expect(manager.id = '2');
});

test('Returns the Email of the Manager', () => {
    const manager = new Manager('Taylor', '2', 'vanscoytaylor@gmail.com');
    
    if (manager.email = 'vanscoytaylor@gmail.com'){
        console.log(manager.email);
    };
    expect(manager.email = 'vanscoytaylor@gmail.com');
});

test('Returns the Office Number of the Manager', () => {
    const manager = new Manager('Taylor', '2', 'vanscoytaylor@gmail.com', '7052074038');
    
    if (manager.officeNumber === '7052074038') {
        console.log(manager.officeNumber);
    };
    expect(manager.officeNumber = '7052074038');
});