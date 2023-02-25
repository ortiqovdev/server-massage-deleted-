import express, { Express, request, response } from "express";
import{Student, students}from './data'

const server: Express = express()

server.use(express.json())
server.use(express.urlencoded())

server.get('/students',(request,response)=>{
    response
    .status(200)
    .send(students)
})

server.post('/students', (request,response)=>{
    const body : Student = request.body

    students.push(body)

    response
    .status(200)
    .send('Student'+ body.name + 'is added')
})

server.get('/students/:index',(request,response)=>{
    const index = +request.params.index

    response
    .status(200)
    .send(students[index])
})
server.delete('/students/:index',(request,response)=>{
    const index = +request.params.index

    students.splice(index , 1)
    
    response
    .status(200)
    .send('Student index' + index + 'deleted')
})
// server.get('/', (request, response) => {
//     response
//         .status(200)
//         .send("Connect...")

// })
server.listen(7070, () => {
    console.log("Working server ... (Port : 7070)");

})