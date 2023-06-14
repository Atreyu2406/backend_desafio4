import { Router } from "express"

const users = [ 
    {id: 1, name: "Damian", role: "teacher"},
    {id: 2, name: "Benja", role: "student"},
    {id: 3, name: "Ori", role: "student"}
]

const router = Router()

router.get ("/", (req, res) => {
    res.json ({ users })
})

export default router