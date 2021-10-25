const engineer = require('../lib/engineer');


// testing that Titles are correct. 
test ('Make sure engineer is returned value', () =>{
    const title ="Engineer";
    const e = new engineer('my_name',123,"my@email.com",'My_ID');
    expect(e.getTitle()).toBe(title);
}

)
