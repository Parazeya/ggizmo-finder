'use strict'

const Finder = require("./index.js")

async function test () {
    try {
        const Folder = await Finder.Detect()
        if (!Folder) return false
        const cfg = await Finder.ServiceCFG(Folder)
        if (!cfg) return false
        const db = Finder.DBInfo(cfg)
        console.dir(Folder)
        console.log("Service.Json: ", cfg)
        console.log(db)
    } catch (err) {
        // ... error checks
        console.error(err)
    }
}

test()