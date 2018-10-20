const fs = require('fs')
const http = require('http')
const port = 8123

const handler = function (request, response) {
    if (request.url === "/data.json") {
        response.end(fs.readFileSync("data.json"))
        return
    }

    response.end(fs.readFileSync("index.html"))
}

const server = http.createServer(handler)
server.listen(port, function (err) {
    if (err) {
        console.error("Failed to start server", err)
        return
    }

    console.log(`Server listening on http://localhost:${port}/`)
})
