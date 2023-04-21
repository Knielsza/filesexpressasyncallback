const express = require("express")
const app = express()
const PORT = 3000;

const fs = require("fs")
const path = require("path")

// app.get("/", function (req, res) {
//     res.send("dane html odesłane z serwera do przeglądarki")
//     console.log("kotleciki")
// })

app.get('/', function (req, res) {
  // fs.readFile("./files/file01.txt", (err, data) => {
  //   if (err) throw err
  //   console.log(data.toString());
  // }) 
  //   //Zczytywanie informacji z pliku
  //-----------------------------------------------------------------------

  // fs.readFile("./files/file01.txt", "utf-8", (err, data) => {
  //   if (err) throw err
  //   console.log(data.toString());
  // })
  //   //Zczytywanie informacji z pliku z kodowaniem
  //-----------------------------------------------------------------------
  const filepath2 = path.join(__dirname, "files", "file02.txt")
  const filepath = path.join(__dirname, "files", "file01.txt")

  // fs.writeFile(filepath2, "tekst do wpisania", (err) => {
  //   if (err) throw err
  //   console.log("plik nadpisany");
  // })
  //   //Nadpisywanie/Zapisywanie pliku
  //-----------------------------------------------------------------------

  // fs.appendFile(filepath2, "\n\ntekst do dopisania", (err) => {
  //   if (err) throw err
  //   console.log("plik utworzony");
  // })
  //   //Dopisywanie do pliku
  //-----------------------------------------------------------------------

  //   fs.unlink(filepath, (err) => {
  //     if (err) throw err
  //     console.log("czas 1: " + new Date().getMilliseconds());
  //   })
  //   //Usuwanie pliku
  //-----------------------------------------------------------------------

  // if (fs.existsSync(filepath)) {
  //   console.log("plik istnieje");
  // } else {
  //   console.log("plik nie istnieje");
  // }
  // //Sprawdzanie czy plik istnieje

  const filepath3 = path.join(__dirname, "files", "file03.txt")
  const filepath4 = path.join(__dirname, "files", "file04.txt")

  fs.writeFile(filepath3, "tekst do zapisania", (err) => {
    if (err) throw err
    console.log("plik utworzony - czas 1: " + new Date().getMilliseconds());

    fs.appendFile(filepath3, "\n\ntekst do dopisania", (err) => {
      if (err) throw err
      console.log("plik zmodyfikowany - czas 2: " + new Date().getMilliseconds());

    })
  })


})


app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})

app.use(express.static('static'))

