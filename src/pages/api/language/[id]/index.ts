import dbConnect from "@/lib/dbConnect";
import Language from "@/models/Language";

import formidable from 'formidable'

export const config = {
    api: {
        bodyParser: false,
        // idk if i should do this or not but it works (maybe??) please be careful to check for breaks :D
        externalResolver: true
    },
};

export default async function handler(req, res) {
    const {
        method,
        query: { id },
    } = req

    await dbConnect()

    switch (method) {
        case 'POST': {
            // try {
            //     var date = {
            //         date: Date.now()
            //     }
            //     // const tempObj = Object.assign(req.body, date)
            //     // const obj = Object.assign(tempObj, req.file!==undefined ? req.file.filename : '')
            //     // const add = await Language.updateOne({ code: id}, { $push: { resource: obj }})
            //     res.json(req.body)
            // } catch (error) {
            //     res.status(400).json({ success: false })
            // }
            // break
            try {
                const form = new formidable.IncomingForm({ uploadDir: 'src/pages/api/language/[id]/[resource]/file/', keepExtensions: true })
                form.parse(req, async (err, fields, files) => {
                    const temp = Object.assign(fields, {image: files.image["newFilename"], date: Date.now()})
                    const add = await Language.updateOne({ code: id }, { $push: { resource: temp }})
                    res.status(200).json(add)
                })
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