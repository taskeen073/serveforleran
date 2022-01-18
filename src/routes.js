const { User } = require('./models')
const mysql = require("mysql2/promise")
const Schedule = require('./models/Schedule')
let db = null

module.exports = (app) => {
    app.post('/register', async(req, res) => {
            try {
                let data = await User.create(req.body)
                res.send(data)
            } catch (e) {
                res.send("email is ready")
            }

        }),
        app.get('/data', async(req, res) => {
            let data = await User.findAll()
            res.send(data)
        }),
        app.post('/qrey', async(req, res) => {
            let data = await User.findAll({
                where: {
                    id: 9
                }
            })
            res.send(data)

        }),
        app.post('/delete', async(req, res) => {
            let data = await User.destroy({
                where: {
                    username: null
                }
            })

        }),
        app.post('/update', async(req, res) => {
            let data = await User.update({
                username: "taskeen"
            }, {
                where: {
                    id: 11

                }
            })
        }),
        app.post('/adds', async(req, res) => {
            const count = await Schedule.create({ s_count: 1, HostId: "nongkeen" });
            console.log("Jane's auto-generated ID:", count.id);

        })



}