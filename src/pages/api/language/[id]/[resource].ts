import dbConnect from "@/lib/dbConnect"
import Language from "@/models/Language"

export default async function handler (req, res) {
    const {
        method,
        query: { resource, id }
    } = req


    switch (method) {
        case 'GET': {
            try {
                const resourceJson = await Language.findOne({ "resource.name": resource },)
                res.json(resourceJson)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        }
        default: {
            res.status(400).json({ success: false })
            break
        }
    }
}