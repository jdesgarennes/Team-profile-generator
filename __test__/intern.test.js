const intern = require('../lib/intern');


// testing that Titles are correct. 
test ('Make sure intern is returned value', () =>{
    const title ="Intern";
    const e = new intern('my_name',123,"my@email.com",'school');
    expect(e.getTitle()).toBe(title);
}

)
