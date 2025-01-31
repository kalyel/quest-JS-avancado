import { baseUrl, maxItensQuantity } from "../variables.js";

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${maxItensQuantity}`)
    return await response.json()
}

export { getRepositories }
