import path from 'path'
import express from 'express'
let app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.use((req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'))
});

import challenge from "./challenge.js"
let css = 'color: yellow'

function test(actual, expected) {
  if (actual === expected) {
    console.log(`\x1b[42m ✅ \x1b[40m\x1b[32m ${actual} \x1b[0m`)
  } else {
    console.log(`\x1b[41m X \x1b[40m\x1b[33m got:${actual} | expected ${expected} \x1b[0m`)
  }

}


console.clear()

let result1 = challenge([1, 2, 3])
test(result1, 6)
let result2 = challenge([10, 20])
test(result2, 30)
let result3 = challenge([10, 20, 100, 3300])
test(result3, 3430)