var Express = require("express")
var Socket = require("socket.io")
var http = require("http")

var app = Express()
var server = http.Server(app)
var io = Socket(server)

io.on("connection", function (socket) {
  function createBid () {
    socket.emit("bid", {
      amount: Math.random() * 120000 + 400000,
      time: new Date()
    })
    setTimeout(createBid, Math.random() * 5000 + 5000)
  }
  createBid()
})

app.use(Express.static("../client"))

app.get('/home', function (request, response) {
  unirest.get('http://galvanize-warroom-status.herokuapp.com/')
      .end(function (response) {
        console.log(res.body);
        res.end('Done')
      })
})
})

server.listen(9000, function () {
  console.log("listening on 9000")
})
