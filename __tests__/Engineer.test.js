const Engineer = require('../lib/Engineer');

test('Returns the Name of the Engineer', () => {
    const engineer = new Engineer('Taylor');
    
    if (engineer.name === 'Taylor') {
        console.log(engineer);
    };
    expect(engineer.name = 'Taylor');
});

test('Returns the Id of the Engineer', () => {
     const engineer = new Engineer('Taylor', '3');

    if (engineer.id = '3'){
        console.log(engineer.id);
    };
    expect(engineer.id = '3');
});

test('Returns the Email of the Engineer', () => {
    const engineer = new Engineer('Taylor', '3', 'vanscoytaylor@gmail.com');
    
    if (engineer.email = 'vanscoytaylor@gmail.com'){
        console.log(engineer.email);
    };
    expect(engineer.email = 'vanscoytaylor@gmail.com');
});

test('Returns the Github of the Engineer', () => {
    const engineer = new Engineer('Taylor', '3', 'vanscoytaylor@gmail.com', 'taylor124');
    
    if (engineer.github === 'taylor124') {
        console.log(engineer.github);
    };
    expect(engineer.github = 'taylor124');
});