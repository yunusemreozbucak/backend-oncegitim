import { Router } from "express"
const router = Router();

import AuthRoutes from "./auth.router"

router.use("/", AuthRoutes);

router.get("/", (req, res) => {
    res.send("Anasayfa");
})

export { router }