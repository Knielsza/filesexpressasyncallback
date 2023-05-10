const express = require("express")
const app = express()
const PORT = 3000;


form.uploadDir = __dirname + '/upload/'

// const newDirPath = require("string_decoder")
const fs = require("fs")
const path = require("path")

// app.get("/", function (req, res) {
//     res.send("dane html odesłane z serwera do przeglądarki")
//     console.log("kotleciki")
// })
fs.mkdir(newDirPath, (err) => {
  if (err) throw err
  else {
    console.log("katalog powstał")
  }
})

if (!fs.existsSync(new_path)) {
  fs.rename(old_path, new_path, (err) => {
    if (err) console.log(err)
    else {
      res.redirect("")
    }
  })
}
else {
}
app.get('/', function (req, res) {
  res.render('index.hbs')
})

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})

app.use(express.static('static'))

