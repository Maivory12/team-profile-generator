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


