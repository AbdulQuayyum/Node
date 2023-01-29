const EventEmitter = require('events')
const Kanye = new EventEmitter()
  
Kanye.on("drops", (result) => {
    if (result ===  "new project")
    console.log("Thats's why he's the Goat!")
})

Kanye.on("does not drop", (result) => {
    if (result === "project")
    console.log("Damn, N***a drop a project")
})

process.on("exit", (code) => {
    console.log("Process exit event with code: ", code)
})

Kanye.emit("drops", "new project")
Kanye.emit("does not drop", "project")