const deadweight = require('../lib/deadweight');


// testing that Titles are correct. 
test ('Make sure  is returned value', () =>{
    const title ="Deadweight";
    const e = new deadweight('my_name',123,"my@email.com",'facebook');
    expect(e.getTitle()).toBe(title);
}

)
