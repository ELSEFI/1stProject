const fs = require('fs')
const http = require('http')
const url = require('url')
const replaceTemplate = require('./modules/replaceTemplate')
// -------------------------------------------------------------------------------------
const tempCard = fs.readFileSync(`${__dirname}/template-card.html`,'utf-8')
const tempOverview = fs.readFileSync(`${__dirname}/template-overview.html`,'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/template-product.html`,'utf-8')

const data = fs.readFileSync(`${__dirname}/data.json`,'utf-8')
const dataobj = JSON.parse(data)

const server = http.createServer((req,res) => {
    const { query, pathname } = url.parse(req.url,true)

    // overview page
    if(pathname === '/' || pathname ==='/overview'){
        res.writeHead(200,{'Content-type': 'text/html'})
        const cardHtml = dataobj.map(el => replaceTemplate(tempCard,el)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardHtml)
        res.end(output)
        // product page
    }else if(pathname ==='/product'){
        res.writeHead(200,{'Content-type':'text/html'})
        const product = dataobj[query.id]
        const output = replaceTemplate(tempProduct , product)
        res.end(output)
    }else{
        res.writeHead(404,{'Content-type':'text/html'})
        res.end('<h1>Page not found</h1>')
    }

    
}).listen(8000,'127.0.0.1')