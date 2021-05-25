# node-gizmo-finder
Automatic search Gizmo Server on the computer for Node.js (NOT OFFICIAL) 

![GCGApp](https://ggbook.ru/AdminPanel/public/images/favicon-32x32.png)
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/keza3d/ggizmo-finder)

## Installation
```bash
npm install ggizmo-finder
```

## Quick Example
```js
const Finder = require("ggizmo-finder")

async () => {
    try {
        const Folder = await Finder.Detect()
        if (!Folder) return false
        //Open the Service.json file already in JSON.parse format
        const cfg = await Finder.ServiceCFG(Folder)
        if (!cfg) return false
        //Looking for all the necessary data about the database
        const db = Finder.DBInfo(cfg)
    } catch (err) {
        // ... error checks
    }
}
```

## Commands

### Detect
Returns the Gizmo Server location folder
```js
const Folder = await Finder.Detect()
```
### ServiceCFG
Returns the Service.json file already in JSON.parse format
```js
const cfg = await Finder.ServiceCFG(Folder)
```
Returns all data about the database
### DBInfo
```js
const db = Finder.DBInfo(cfg)
```

## Donate
[![](https://lh3.googleusercontent.com/proxy/AAy4TAWXHi0QZM8raIVMc_sGy9swMxc1dkQqidF-FWlEdXk3DKxYEoqUJLlryK9uPQOyoOREjZCWm1jIWDIVaihV21eOMqpZhFxJSo8Xsv6HCv4H)](https://www.paypal.me/alexzubar)


## License
GGizmo-Finder is released under the [MIT License](https://github.com/KeZA3D/ggizmo-api/blob/main/LICENSE)
