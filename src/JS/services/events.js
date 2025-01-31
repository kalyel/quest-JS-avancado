import { baseUrl, maxItensQuantity } from "../variables.js";


async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${maxItensQuantity}`)
    return await response.json()
}

export { getEvents }	