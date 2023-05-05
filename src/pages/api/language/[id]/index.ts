import dbConnect from "@/lib/dbConnect";
import Language from "@/models/Language";

export default async function handler(req, res) {
    const {
        method,
        query: { id }
    } = req

    await dbConnect()

    switch (method) {
        case 'PATCH': {
            try {
                var date = {
                    date: Date.now()
                }
                const obj = Object.assign(req.body, date)
                const add = await Language.updateOne({ code: id}, { $push: { resource: obj }})
                res.json(add)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        }
        case 'GET': {
            try {
                const language = await Language.findOne({ code: id })
                if (!language) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json(language)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        }
    }
}