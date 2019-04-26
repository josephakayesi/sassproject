const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path');
const port = process.env.PORT || 5000

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// Index route
app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})