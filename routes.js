import { Router } from "express";
import { User } from './user.model.js';
import { Contact } from './contact.model.js';

const router = Router()

router.post("/users", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        console.log({ username });


        if (!username || !email || !password) {
            return res.status(404).send({ message: "all fields are required" })
        }

        const newUser = new User({
            username,
            email,
            password
        })

        await newUser.save();

        if (!newUser) {
            return res.status(400).send({ message: "error registering user" })
        }

        return res.status(201).send({ message: "user created successfully", newUser })
    } catch (error) {
        console.error("error adding user", error);
        return res.status(500).send({ message: "internal server error" })
    }
})

router.post("/contacts", async (req, res) => {
    try {
        const { name, email, phone, userId } = req.body;

        if (!name || !userId) {
            return res.status(404).send({ message: "all fields are required" })
        }

        const newContact = new Contact({
            name,
            email,
            phone,
            userId
        })

        await newContact.save();

        if (!newContact) {
            return res.status(400).send({ message: "error registering contact" })
        }

        return res.status(201).send({ message: "contact created successfully", newContact })
    } catch (error) {
        console.error("error adding user", error);
        return res.status(500).send({ message: "internal server error" })
    }
})

export default router;


