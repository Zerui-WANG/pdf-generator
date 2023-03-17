const express = require('express');
const pdfService = require('./pdf-service');
const invoice = require('./data');

const router = express.Router();
router.get('/invoice', (req, res, next) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment;filename=invoice.pdf',
  });
  pdfService.buildPDFDocument(
    invoice, 
    (chunk) => stream.write(chunk),
    () => stream.end()
  );
});

module.exports = router;