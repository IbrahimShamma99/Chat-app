const request = require("supertest")
const app = require("../src/app")
const {routes} = require("../src/utils/routes")

test("assign new user" , async () => {
    await request(app).post(routes.signup).send({
        name:"Ibrahimjaws",
        email:"inininin@gmail.com",
        password:"macgeetheking"
    }).expect(201)
})