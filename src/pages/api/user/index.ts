import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch(method) {
        case 'GET':
            try {
                const user = await User.find()
                res.status(200).json(user)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                await User.create(req.body)
                res.status(201).json({ success: true })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}