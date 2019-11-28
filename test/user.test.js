const request = require("supertest")
const app = require("../src/app")


test("assign new user" , async () => {
    await request(app).post('/user').send({
        name:"Ibrahimjaws",
        email:"inininin@gmail.com",
        password:"macgeetheking"
    }).expect(201)
})