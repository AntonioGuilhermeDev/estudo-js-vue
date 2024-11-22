
const teamSizeInput = document.getElementById("teamSize");
const generateTeamsButton = document.getElementById("generateTeams");
const teamsDisplay = document.getElementById("teamsDisplay");
generateTeamsButton.addEventListener("click", fetchUsers)
console.log(teamSizeInput.value);




    function fetchUsers() {
        const url = `https://randomuser.me/api/?results=${teamSizeInput.value * 2}`;
            axios.get(url)
                .then(response => {
                    const users = response.data.results;
                    console.log(users);
                    teamsDisplay.innerHTML = '';

                    const shuffledUsers = users.sort(() => Math.random() - 0.5);

                    // Calcular o tamanho da equipe
                    const teamSize = parseInt(teamSizeInput.value);
                    let teamCount = 1;

                    // Criar as equipes
                    for (let i = 0; i < shuffledUsers.length; i += teamSize) {
                        const teamMembers = shuffledUsers.slice(i, i + teamSize);

                        const teamCard = document.createElement("div");
                        teamCard.className = "col-md-4 mb-4";

                        let teamHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Team ${teamCount}</h5>
                            <div class="user-list">
                `;

                        teamMembers.forEach(user => {
                            teamHTML += `
                         <ul class="list-unstyled mb-3">   
                            <li>
                                <strong>${user.name.first} ${user.name.last}</strong><br>
                                <small>Genero: ${user.gender}</small><br>
                                <small>Idade: ${user.dob.age}</small><br>
                                <small>Nacionalidade: ${user.nat}</small>
                            </li>
                         </ul>  
                    `;
                        });

                        teamHTML += `
                            </div>
                        </div>
                    </div>
                `;

                        teamCard.innerHTML = teamHTML;
                        teamsDisplay.appendChild(teamCard);

                        teamCount++;
                    }
                })
                .catch(error => {
                    console.error("Erro ao buscar usuários:", error);
                });
    }

