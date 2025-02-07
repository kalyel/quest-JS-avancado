const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuario"> 
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <p>👥 Seguidores: ${user.followers}
                                               👤 Seguindo: ${user.following}</p>
                                        </div>
                                      </div>`
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">
                                                                    ${repo.name}<ul class="reporepositorie-status">
                                                                    <li class="repositorie-status-icon">${'🍴 ' + repo.forks_count} </li>
                                                                    <li class="repositorie-status-icon">${'⭐ ' + repo.stargazers_count} </li>
                                                                    <li class="repositorie-status-icon">${'👀 ' + repo.watchers_count}</li>
                                                                    <li class="repositorie-status-icon">${'👩🏻‍💻 ' + repo.language}</li>
                                                                    </ul></a>
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsItens = ''
        user.events.forEach((event) => {
            if (event.type === 'PushEvent') {
                eventsItens += `<li><span class="repo-name">${event.repo.name}</span> - ${event.payload.commits[0].message}</li>`
            } else if (event.type === 'CreateEvent') {
                eventsItens += `<li><span class="repo-name">${event.repo.name}</span> - Sem mensagem de commit</li>`
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section"> 
                                              <h2>Eventos</h2> 
                                              <ul>${eventsItens}</ul>
                                            </div>`
        } else {
            this.userProfile.innerHTML += `<div class="events section"> 
                                              <h2>Eventos</h2> 
                                              <ul><h3>Este usuário não possui eventos</h3></ul>
                                            </div>`
        }

    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }

