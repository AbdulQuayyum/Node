const { send } = require("./Request")
const { read } = require("./Response")

function makeRequest(url, data) {
    send(url, data)
    return read()
}

const responseData = makeRequest("https://google.com", "hello")
console.log(responseData)