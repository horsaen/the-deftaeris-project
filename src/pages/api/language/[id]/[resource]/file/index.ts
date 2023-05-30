import dbConnect from "@/lib/dbConnect";
import Language from "@/models/Language";
import { createReadStream } from "fs";

export default async function handler (req, res) {

    const {
        method,
        query: { resource, id}
    } = req

    await dbConnect()

    switch (method) {
        case "GET": {
            const resourceJson = await Language.findOne({'resource.name': resource }, 'name code emoji resource.$')
            var image = resourceJson.resource[0].image
            const file = 'src/pages/api/language/[id]/[resource]/file/' + image

            res.setHeader('Content-Type', 'image/jpeg');

            const stream = createReadStream(await file)
            stream.pipe(res)
            break
        }
        default: {
            res.status(400).json({ success: false })
            break
        }
    }
}