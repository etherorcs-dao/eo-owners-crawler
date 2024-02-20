import {crawl} from "./index.js";

export default async function handler(req, res) {
    await crawl().then((res) => {
        console.log(res);
        res.status(200).json({ success: true });
    }).catch((err) => {
        console.error(err);
        res.status(500).json({ success: false });
    });
}
