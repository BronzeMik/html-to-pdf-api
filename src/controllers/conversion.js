import express from 'express'
import htmlToPdf from '../helpers/html-to-pdf.js';
const router = express.Router();

//Post html -> pdf
router.get('/', async(req, res) => {
    res.send('connected!')
})

router.post('/', async (req, res) => {
    const { html } = req.body;
        if(!html) {
            res.status(400).send('Request body should contain an html property');
            return
        }


    try {
        const pdfBuffer = await htmlToPdf(html);
        
        // Set response headers to force download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');

        // Send the PDF buffer as the response
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
    
    
})


export default router
