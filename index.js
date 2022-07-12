'use strict'

const { Registry } = require('rage-edit')
const FS = require('fs')

const Finder = {
    Detect: async () => {
        try {
            var reg = await Registry.get('HKEY_LOCAL_MACHINE\\SOFTWARE\\WOW6432Node\\NETProjects\\Gizmo Service', 'Path');
            if (reg === undefined) reg = await Registry.get('HKEY_LOCAL_MACHINE\\SOFTWARE\\NETProjects\\Gizmo Service', 'Path');
            if (reg === undefined) reg = await Registry.get('HKEY_LOCAL_MACHINE\\SOFTWARE\\NETProjects\\Gizmo Server', 'Path');
            
            if (reg === undefined) throw new Error("Regedit: Can't Find `Gizmo Service`")
            return reg
        } catch (e) {
            console.error(e.message)
            return false
        }
    },
    ServiceCFG: (path) => {
        try {
            const ServiceJson = OpenFile(path + "\\Service.json", true)
            return ServiceJson
        } catch (e) {
            console.error(e.message)
            return false
        }
    },
    DBInfo: (ServiceJson) => {
        try {
            const DBArray = ServiceJson.Service.Database.DbConnectionString.split(";");
            const DBServer = DBArray[0].split("=")[1];
            const DBName = DBArray[1].split("=")[1];
            return { Value: ServiceJson.Service.Database.DbConnectionString, Split: DBArray, Server: DBServer, Name: DBName }
        } catch (e) {
            console.error(e.message)
            return false
        }
    }
}

module.exports = Finder;

function OpenFile(file, decode = false) {
    try {
        var read = FS.readFileSync(file, 'utf8')
        if (decode == true) {
            try {
                return JSON.parse(read)
            } catch (e) {
                return false
            }
        }
    } catch (err) {
        console.error(err.message)
        return false
    }
    return read;
}