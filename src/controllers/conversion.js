import express from 'express'
import htmlToPdf from '../helpers/html-to-pdf.js';
const router = express.Router();

//Post html -> pdf
router.get('/', async(req, res) => {
    res.send('connected!')
})
function sendPdfInHttpResponse(pdfBuffer, res, filename) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Length', pdfBuffer.length);
    res.end(pdfBuffer);
  }
router.post('/', async (req, res) => {
    const { html } = req.body;
        if(!html) {
            res.status(400).send('Request body should contain an html property');
            return
        }


    try {
        const pdfBuffer = await htmlToPdf(html);
        
        // Set response headers to force download
        // Send the PDF buffer in the HTTP response
        
        sendPdfInHttpResponse(pdfBuffer, res, 'invoice.pdf');
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
    
    
})


export default router
