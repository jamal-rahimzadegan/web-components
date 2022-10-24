const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const pathToHtml = path.resolve(__dirname, 'build/index.html')
    const htmlContent = fs.readFileSync(pathToHtml, 'utf-8')
    res.send(htmlContent)
})

// loading assets
app.use('/static', express.static(path.resolve(__dirname, 'build')))

app.listen(port, () => console.log(`->App is running on:`, port))
