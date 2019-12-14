const request = require("supertest")
const app = require("../src/app")
const {routes} = require("../src/utils/routes")
const randomizer = Math.random()

test("assign new room" , async () => {
    await request(app).post(routes.newroom).send({
        title:"Amman"+randomizer,
    }).expect(201)
})