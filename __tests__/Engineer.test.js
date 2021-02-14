const Engineer = require('../lib/Engineer');
const index = require('../Index');

test('Returns the Name of the Engineer', () => {
    const engineer = new Engineer('Taylor');
    
    if (engineer.name === 'Taylor') {
        console.log('Your Name is' + ':' + engineer.name);
    };
    expect(engineer.name = 'Taylor');
});

test('Returns the Id of the Engineer', () => {
     const engineer = new Engineer('Taylor', '3');

    if (engineer.id = '3'){
        console.log('Your Id is' + ':' + engineer.id);
    };
    expect(engineer.id = '3');
});

test('Returns the Email of the Engineer', () => {
    const engineer = new Engineer('Taylor', '3', 'vanscoytaylor@gmail.com');
    
    if (engineer.email = 'vanscoytaylor@gmail.com'){
        console.log('Your Email is' + ':' + engineer.email);
    };
    expect(engineer.email = 'vanscoytaylor@gmail.com');
});

test('Returns the Role of Engineer', () => {
    const engineer = new Engineer('Taylor', '3', 'vanscoytaylor@gmail.com', 'Engineer');
    
    if (engineer.role === 'Engineer'){
        console.log('Your Role is' + ':' + engineer.role);
    };
    expect(engineer.role === 'Engineer');
});

test('Returns the Github of the Engineer', () => {
    const engineer = new Engineer('Taylor', '3', 'vanscoytaylor@gmail.com', 'Engineer', 'taylor124');
    
    if (engineer.github === 'taylor124') {
        console.log('Your Github is' + ':' + engineer.github);
    };
    expect(engineer.github = 'taylor124');
});