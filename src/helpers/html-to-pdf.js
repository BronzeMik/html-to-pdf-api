import puppeteer from "puppeteer"

const defaultOptions = {
    format: 'A4',
    printBackground: true
}
async function htmlToPdf(htmlContent, options = defaultOptions) {
    const browser = await puppeteer.launch({ headless: 'new'});
        const page = await browser.newPage();
        //Set content of page
        page.setContent(htmlContent, {waitUntil: 'domcontentloaded'});

        //Genereate PDF fron the page content
        const pdfBuffer = await page.pdf(options)

        // await browser.close();

        return pdfBuffer
}
export default htmlToPdf;
