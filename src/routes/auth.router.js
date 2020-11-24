import { Router } from "express"
import config from 'config';
import jwt from 'jsonwebtoken';
const router = Router();

const data = [
    {
        id: 1,
        name: "Ali",
        email: "ali@ali.com",
        password: "123123123"
    },
    {
        id: 2,
        name: "Ali2",
        email: "ali2@ali.com",
        password: "123123123"
    },
    {
        id: 3,
        name: "Ali3",
        email: "ali3@ali.com",
        password: "123123123"
    },
    {
        id: 4,
        name: "Ali4",
        email: "ali@ali.com",
        password: "123123123"
    },
    {
        id: 5,
        name: "yunus",
        email: "yunus@email.com",
        password: "1234567"
    },
]

router
.get("/login", (req, res) => {
    res.send("Login page")
})
.post("/login", (req, res) => {
    let { email, password } = req.body;
    let ogrenci = data.find(ogrenci => ogrenci.email == email);

    if(!ogrenci) {
        res.send("Böyle bir kullanıcı yok.")
    } else if(ogrenci.password === password) {
        res.send({
            message: "Giriş yaptı",
            data: ogrenci
        })
    } else {
        res.send("Hatalı şifre.")
    }

  

})


export default router