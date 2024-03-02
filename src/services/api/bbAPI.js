const getBbData = async function() {
    const response = await fetch("https://bobsburgers-api.herokuapp.com/")
    if (response.status == 200) {
    return await response.json()
    } else {
    new Error(response.statusText)
    }
    }
    export { getBbData }