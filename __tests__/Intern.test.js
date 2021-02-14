const Intern = require('../lib/Intern');
const index = require('../Index');

test('Returns the Name of the Intern', () => {
    const intern = new Intern('Taylor');
    
    if (intern.name === 'Taylor') {
        console.log('Your Name is' + ':' + intern.name);
    };
    expect(intern.name = 'Taylor');
});

test('Returns the Id of the Intern', () => {
     const intern = new Intern('Taylor', '4');

    if (intern.id = '4'){
        console.log('Your Id is' + ':' + intern.id);
    };
    expect(intern.id = '4');
});

test('Returns the Email of the Intern', () => {
    const intern = new Intern('Taylor', '4', 'vanscoytaylor@gmail.com');
    
    if (intern.email = 'vanscoytaylor@gmail.com'){
        console.log('Your Email is' + ':' + intern.email);
    };
    expect(intern.email = 'vanscoytaylor@gmail.com');
});

test('Returns the School of the Intern', () => {
    const intern = new Intern('Taylor', '4', 'vanscoytaylor@gmail.com', 'Hanmer High');
    
    if (intern.school === 'Hanmer High') {
        console.log('Your School is' + ':' + intern.school);
    };
    expect(intern.school = 'Hanmer High');
});