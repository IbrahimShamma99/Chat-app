const request = require("supertest")
const app = require("../src/app")
const {routes} = require("../src/utils/routes")
const randomizer = Math.random()
test("assign new user" , async () => {
    await request(app).post(routes.signup).send({
        name:"Ibrahismjaws",
        email:"ininseeainin1"+randomizer.toString()+"@gmail.com",
        password:"macgeetheking"
    }).expect(201)
})