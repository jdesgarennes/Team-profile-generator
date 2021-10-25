const manager = require('../lib/manager');


// testing that Titles are correct. 
test ('Make sure manager is returned value', () =>{
    const title ="Manager";
    const e = new manager('my_name',123,"my@email.com",'office');
    expect(e.getTitle()).toBe(title);
}

)
