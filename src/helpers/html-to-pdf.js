import PDFDocument from 'pdfkit';
import fs from 'fs';

const defaultOptions = {
    format: 'A4',
    printBackground: true
}
async function htmlToPdf(htmlContent, options = defaultOptions) {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const buffers = [];
    
        doc.on('data', (chunk) => buffers.push(chunk));
        doc.on('end', () => resolve(Buffer.concat(buffers)));
        doc.on('error', (error) => reject(error));
    
        // Set up the document
        doc.fontSize(12).text(htmlContent);
    
        // Finalize the PDF document
        doc.end();
      });
}
export default htmlToPdf;
