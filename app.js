const app = require('express')()
const port = process.env.PORT || 5000

// Index route
app.get('/', (req, res) => {
    res.send('Index')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})