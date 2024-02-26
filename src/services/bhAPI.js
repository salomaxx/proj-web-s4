const getBhData = async function() {
    const response = await fetch("https://my-api.com")
    if (response.status == 200) {
    return await response.json()
    } else {
    new Error(response.statusText)
    }
    }
    export { getBhData }