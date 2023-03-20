const space = 'efa7vs3flibo'
const accessToken = 'ixO73Jk4uQcBZVF3qRqpeVHc8WE8WljWaet5HPtrv_s'

const endpoint = '/spaces/efa7vs3flibo/environments/master/entries?access_token=ixO73Jk4uQcBZVF3qRqpeVHc8WE8WljWaet5HPtrv_s'
const apiHost = "https://cdn.contentful.com"

async function loadEntries() {
    const result = await fetch(apiHost + endpoint)
    const andmed = await result.json()
    const piltideAndmed = andmed.includes.Asset
    console.log(piltideAndmed[0].fields.file.url)
    return andmed
}

// async function loadAssets() {
//     const url = `${apiHost}/spaces/${space}/environments/${process.env.REACT_APP_ENVIRONMENT}/assets?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
//     const response = await fetch(url)
//     const result = await response.json()
//     console.log('Assets:',result)
//     return result 
// }


export {
    loadEntries
}
