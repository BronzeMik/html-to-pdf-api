import pdfcrowd from "pdfcrowd";
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const defaultOptions = {
    format: 'A4',
    printBackground: true
}
async function htmlToPdf(htmlContent, options = defaultOptions) {

  // create the API client instance
  var client = new pdfcrowd.HtmlToPdfClient("mikailabrown2022", "6d35d3f95016f4ced7d7b5538158ad6a");
  
  return new Promise((resolve, reject) => {
    client.convertStringToFile(htmlContent, 'invoice.pdf', (err, filePath) => {
      if (err) {
        reject(err);
        return;
      }
      
      // Read the file and resolve the PDF buffer
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        
        resolve(data);
        
        // Clean up: delete the temporary file
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
          }
        });
      });
    });
  });
}
export default htmlToPdf;
