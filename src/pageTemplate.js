const myTeam = (team) => {
    // create the manager html


    const genManager = (manager) => {
      return `
          <div class="card employee-card shadow p-3 mb-5 bg-white rounded">
          <div class="card-header">
              <h2 class="card-title">${manager.getName()}</h2>
              <h3 class="card-title"><i class="far fa-angry mr-2"></i>${manager.getTitle()}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${manager.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item">Office number: ${manager.getOffice()}</li>
              </ul>
          </div>
      </div>
          `;
    };
  
    // create the html for engineers
    const genEngineer = (engineer) => {
      return `
          <div class="card employee-card shadow p-3 mb-5 bg-white rounded">
      <div class="card-header">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-ruler-combined mr-2"></i>${engineer.getTitle()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
          </ul>
      </div>
  </div>
          `;
    };
  
    // create the html for interns
    const genIntern = (intern) => {
      return `
          <div class="card employee-card shadow p-3 mb-5 bg-white rounded">
      <div class="card-header">
          <h2 class="card-title">${intern.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getTitle()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>
  </div>
          `;
    };
  
// creates the html for deadWeight
const gendeadweight = (deadweight) => {
    return `
        <div class="card employee-card shadow p-3 mb-5 bg-white rounded">
    <div class="card-header">
        <h2 class="card-title">${deadweight.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-weight-hanging mr-2"></i>${deadweight.getTitle()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${deadweight.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${deadweight.getEmail()}">${deadweight.getEmail()}</a></li>
            <li class="list-group-item">Facebook: <a href="https://facebook.com/public/${deadweight.getFacebook()}" target="_blank" rel="noopener noreferrer">${deadweight.getFacebook()}</a></li>
        </ul>
    </div>
</div>
        `;
  };




    const html = [];
  
    html.push(
      team
        .filter((employee) => employee.getTitle() === "Manager")
        .map((manager) => genManager(manager))
    );
    html.push(
      team
        .filter((employee) => employee.getTitle() === "Engineer")
        .map((engineer) => genEngineer(engineer))
        .join("")
    );
    html.push(
      team
        .filter((employee) => employee.getTitle() === "Intern")
        .map((intern) => genIntern(intern))
        .join("")
    );
    html.push(
        team
          .filter((employee) => employee.getTitle() === "Deadweight")
          .map((deadweight) => gendeadweight(deadweight))
          .join("")
      );
    return html.join("");
  };
  
  // export function to generate entire page
  module.exports = (team) => {
    return `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading shadow p-3 mb-5 bg-white rounded ">
                  <h1 class="text-center text-white bg-dark">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container ">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  ${myTeam(team)}
              </div>
          </div>
      </div>
  </body>
  </html>
      `;
  };