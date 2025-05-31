const express = require('express')
const app = express()
const port = 3333

app.use(express.json())

app.listen(port, () => {
	console.log(`Server ${port}`)
})

app.get('/users', (request, response) => {
    try{
        const users = [
            {
                id: 1,
                name: "John Doe",
                email: "john@example.com",
                age: 30
            },
            {
                id: 2,
                name: "Jane Smith",
                email: "jane@example.com",
                age: 25
            },
            {
                id: 3,
                name: "Bob Johnson",
                email: "bob@example.com",
                age: 35
            }
        ]

        response.json(users)
    }
    catch(error){
        console.error(error)
        response.status(500).json({
            "message": "Contacte a soporte"
        })
    }
})