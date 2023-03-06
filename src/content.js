const space = 'efa7vs3flibo'
const accessToken = 'ixO73Jk4uQcBZVF3qRqpeVHc8WE8WljWaet5HPtrv_s'

const endpoint = '/spaces/efa7vs3flibo/environments/master/entries?access_token=ixO73Jk4uQcBZVF3qRqpeVHc8WE8WljWaet5HPtrv_s'
const apiHost = "https://cdn.contentful.com"

async function loadEntries() {
    const result = await fetch(apiHost + endpoint)
    const andmed = await result.json()
    return andmed
}

async function fetchTehnoblogiEntries() {
    // lae kõik andmed (entries)
    // filtreeri välja ainult tehnoblogi kirjed

}

//Tee funktsioon ainult enda andmete tagastamiseks

export {
    loadEntries
}
