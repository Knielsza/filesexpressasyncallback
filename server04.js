const express = require("express")
const app = express()
const PORT = 3000;

const fsPromises = require("fs").promises
const path = require("path")

const filepath = path.join(__dirname, "files", "file02.txt")
const filepath2 = path.join(__dirname, "files", "file03.txt")
const filepath3 = path.join(__dirname, "files", "file04.txt")


const dirs = async () => {
  try {

    // uwaga można zastosować, for, for of ale nie for each       

    const data = await fsPromises.readdir(__dirname)
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      const stat = await fsPromises.lstat(data[i])
      console.log(data[i], stat.isDirectory(), new Date().getMilliseconds());
    }


  } catch (error) {
    console.log(error);
  }

}

dirs()

// opers()


app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})

app.use(express.static('static'))

