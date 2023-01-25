const generateTeam = (team) => {
    console.log(team);
    // Create an empty array to push html elements on to and loop through the team data
    const html = [];
    // Create functions for each type of employee that returns HTML data
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = ` 
        <div class="container mt-3">
            <div class="card">
                <div class="card-body">
                    <h4 class="associateName">${manager.name}</h4>
                    <h5 class="associateTitle">Manager</h5>
                    <p class="ID">ID: ${manager.getId ()}</p>
                    <p class="officeNum">Office Number: ${manager.officeNumber}</p>
                    <a href="mailto:${manager.email}" class="btn btn-primary email">${manager.email}</a>
                </div>
            </div>
        </div>
       
        `;
        html.push(managerHtml);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = ` 
       
        <div class="container mt-3">
            <div class="card">
                <div class="card-body">
                    <h4 class="associateName">${engineer.name}</h4>
                    <h5 class="associateTitle">Engineer</h5>
                    <p class="ID">${engineer.getId ()}</p>
                    <a href='https://github.com/Maivory12' class="gitHub">${engineer.github}</a>
                    <br>
                    <br>
                    <a href="mailto:${engineer.email}" class="btn btn-primary email">${engineer.email}</a>
                </div> 
            </div>
        </div>
     
        `;
        html.push(engineerHtml);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = ` 
        <div class="container mt-3">
            <div class="card">
                <div class="card-body">
                    <h4 class="associateName">${intern.name}</h4>
                    <h5 class="associateTitle">Intern</h5>
                    <p class="ID">ID: ${intern.getId ()}</p>
                    <p class="school">School: ${intern.school}</p>

                <a href="mailto:${intern.email}" class="btn btn-primary">${intern.email}</a>
                </div>
            </div>
        </div>
       
        `;
        html.push(internHtml);
    }
   
      // loop for all of the employees
      for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    // join the HTML blocks
    return html.join('');
}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <title>My Team</title>
</head>
<body>

    <nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-center navText"> 
    
        <h1>My Team</h1>

    </nav>

    <main
        <div class="container-fluid card-columns d-flex">

                ${generateTeam(team)} 
                
        </div>
    </main>
     
</body>
</html>
    `;
}

