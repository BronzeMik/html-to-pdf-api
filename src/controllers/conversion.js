import express from 'express'
import htmlToPdf from '../helpers/html-to-pdf.js';
const router = express.Router();

//Post html -> pdf
router.get('/', async(req, res) => {
    res.send('connected!')
})

router.post('/', async (req, res) => {
    const {html} = req.body;

    if(!html) {
        res.status(400).send('Request body should contain an html property');
        return
    }
    const pdf = await htmlToPdf(html) 

    res.contentType('application/pdf')
    res.send(pdf)
})


export default router
