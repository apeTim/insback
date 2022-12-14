import * as express from 'express'
import { lookup } from 'geoip-lite'
import * as serverless from 'serverless-http'

const app = express()
const router = express.Router()

router.get('/data', (req, res) => {
    console.log({ ip: req.ip })
    const ipData = lookup(req.ip)
    const country = ipData && ipData.country
    
    res.json({ country })
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)