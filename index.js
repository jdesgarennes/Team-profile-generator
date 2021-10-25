
// imports 
const inquirer = require("inquirer");
const fs = require("fs");
const myTeam = require("./src/pageTemplate");


// all of the modules created in lib folder
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Deadweight = require("./lib/deadweight");

// My array for all the collected data of the team individuals
const newTeamMembersData = [];

// Array object questions asked in CLI to user
const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "What is the new team members name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the team member ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is there current email address?",
        name: "email",
      },
      {
        type: "list",

        message: "What would you say you do around here?",

        name: "role",

        choices: ["Engineer", "Intern", "Manager","Deadweight"],

      },
    ])



      if (answers.role === "Manager") {
        const managerAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your current office number?",
              name: "officeNumber",
            },
          ])

          const newManager = new Manager(

            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
          );
          newTeamMembersData.push(newManager);
          
        // Enginner specific questions
      } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your GitHub user name?",
              name: "github",
            }
          ])
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAns.github
            );
            newTeamMembersData.push(newEngineer);
          
        // Intern specific role questions
      } else if (answers.role === "Intern") {
        const internAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What university did you attend?",
              name: "school",
            },
          ])
          
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
          );
          newTeamMembersData.push(newIntern); 

          // DeadWeight specific role question         
      } else if (answers.role === "Deadweight") {
        const deadweightAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your facebook profile that you use at work all day?",
              name: "facebook",
            },
          ])
          
          const newDeadWeight = new Deadweight(
            answers.name,
            answers.id,
            answers.email,
            deadweightAns.facebook
          );
          newTeamMembersData.push(newDeadWeight);          
      } 
}; 

async function promptQuestions() {
  await questions()
    
  // creates choice for adding new memebers or generate html
  const addMemberAns = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create team'],
        message: "What would you like to do next?"
      }
    ])

    if (addMemberAns.addMember === 'Add a new member') {
      return promptQuestions()
    }
    return createTeam();
}  

promptQuestions();
// writes html file to dist folder
function createTeam () {
  fs.writeFileSync("./dist/index.html",myTeam(newTeamMembersData), "utf-8" );
}