const Config = require("../library/config")
const pdfMakePrinter = require('pdfmake/src/printer');
const http = require('http');
const localhost = Config.local_url();
const baseUrl = Config.base_url();

module.exports = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express', base_url: baseUrl  });
    },
    navbar: function(req, res, next) {
        res.render('navbar', { base_url: baseUrl  });
    },
    viewPage: function(req, res, next) {
        res.render('item', { base_url: baseUrl  });
    },
    viewAll: function(req, yes){
        const url = localhost+'/backend/item';

        http.get(url, function(res){

            var body = '';
        
            res.on('data', function(chunk){
                body += chunk;
            });

            res.on('end', function(){
                var response = JSON.parse(body);
                const fontDescriptors = {Roboto: {normal: 'public/fonts/Roboto-Regular.ttf'}};
                const docDefinition = {
                    content: [{
                        table: {
                            widths: ['*', '*', 50, 65, 30, 60, 50],
                            body: [
                                ['Name', 'Discount Code', 'Type', 'Refundable', 'Price', 'Discount', 'Amount']
                            ]
                        }
                    }]
                };

                for(var no = 0, len = response.length; no < len; no++){
                    docDefinition.content[0].table.body.push([response[no].name, response[no].discountCode, response[no].discountName, response[no].refundable, response[no].price, response[no].discount, response[no].amount])
                }

                const printer = new pdfMakePrinter(fontDescriptors);
                const doc = printer.createPdfKitDocument(docDefinition);
                
                let chunks = [];

                doc.on('data', (chunk) => {
                    chunks.push(chunk);
                });
            
                doc.on('end', () => {
                    const result = Buffer.concat(chunks);
                    yes.setHeader('Content-Type', 'application/pdf');
                    yes.send(Buffer.concat(chunks))
                });
                
                doc.end();
            });
        })
    }
}