const express = require("express")
const app = express()
const PORT = 3000;

const fs = require("fs")
const path = require("path")
// app.get("/", function (req, res) {
//     res.send("dane html odesłane z serwera do przeglądarki")
//     console.log("kotleciki")
// })

// app.get('/', function (req, res) {

// if (!fs.existsSync("./newdir")) {
//   fs.mkdir("./newdir", (err) => {
//     if (err) throw err
//     console.log("jest");
//     if (fs.existsSync("./newdir")) {
//       fs.rmdir("./newdir", (err) => {
//         if (err) throw err
//         console.log("nie ma ");
//       })
//     }
//   })
// }
//-----------------------------------------------------------------------


// fs.readdir(__dirname, (err, files) => {
//   if (err) throw err
//   console.log("lista", files);
// })

// })
//-----------------------------------------------------------------------


// fs.readdir(__dirname, (err, files) => {
//   if (err) throw err
//   console.log("lista 1  - ", files);

//   fs.mkdir("./newdir", (err) => {
//     if (err) throw err
//     console.log("dodany");

//     fs.readdir(__dirname, (err, files) => {
//       if (err) throw err
//       console.log("lista 2  - ", files);
//     })
//   })
// })
//-----------------------------------------------------------------------

const filepath = __dirname + "/files" + "file02.txt"

fs.readdir(__dirname, (err, files) => {
  if (err) throw err

  // foreach

  // files.forEach((file) => {
  //   fs.lstat("path to file here!!!", (err, stats) => {
  //     console.log(file, stats.isDirectory());
  //   })
  // })

  // lub for of

  for (const f of files) {
    fs.lstat("filepath", (err, stats) => {
      console.log(f, stats.isDirectory());
    })

  }



})


app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})

app.use(express.static('static'))

