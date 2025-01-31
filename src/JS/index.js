import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";
import { getEvents } from "./services/events.js";

import { user } from './objects/user.js'
import { screen } from "./objects/screen.js";

const btnSearch = document.getElementById('btn-search');
const inputUserName = document.getElementById('input-search');

btnSearch.addEventListener('click', () => {
    if (validateEmpetyInput()) return
    getUserData(inputUserName.value)
    console.log(getEvents('bush1D3v'));
    
})

inputUserName.addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if (validateEmpetyInput()) return

        getUserData(userName)
    }
})

function validateEmpetyInput() {
    if (inputUserName.value.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub!')
        return true
    }
}


async function getUserData(userName) {

    const userResponse = await getUser(userName)
    
    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)

    const eventsResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)

}



