import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export default async function handler(req, res) {
    const {
        method,
        query: { id }
    } = req

    await dbConnect()

    switch (method) {
        case "GET": {
            try {
                const user = await User.findById(id, {password: 0})
                res.status(200).json(user)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        }
        case "DELETE": {
            try {
                const deletedUser = await User.deleteOne({ _id: id})
                if (!deletedUser) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true })
            } catch (error) {
                res.status(400).json({ success: false })
            }
        }
        default:
            res.status(400).json({ success: false })
            break
    }
}