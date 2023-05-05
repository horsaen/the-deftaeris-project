import dbConnect from "@/lib/dbConnect";
import Language from "@/models/Language";

export default async function handler(req, res) {
    const {
        method,
        query: { id }
    } = req

    await dbConnect()

    switch (method) {
        case 'POST': {
            try {
                const post = await Language.create(req.body)
                res.json(post)
            } catch (error) {
                res.status(400).json({ success: false })
            }
        }
        case 'GET': {
            try {
                const languages = await Language.find()
                res.status(200).json(languages)
            } catch (error) {
                res.status(400).json({ success: false })
            }
        }
    }
}