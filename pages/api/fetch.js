import {fetch, init} from "@/core.js";

export const dynamic = 'force-dynamic'; // static by default, unless reading the request

export default async function handler(req, res) {
    init().then(() => {
        fetch().then((res1) => {
            console.log(res1);
            res1.status(200).json({success: true});
        }).catch((err) => {
            console.error(err);
            res.status(500).json({success: false});
        });
    }).catch(() => {
        res.status(500).json({success: false});
    });
}
