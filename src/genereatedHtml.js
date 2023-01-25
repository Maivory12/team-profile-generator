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
}
