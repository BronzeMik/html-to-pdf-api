import pdfcrowd from "pdfcrowd";
import dotenv from 'dotenv';
import fs from 'fs';
import temp from 'temp'

dotenv.config();

const defaultOptions = {
    format: 'A4',
    printBackground: true
}
async function htmlToPdf(htmlContent, options = defaultOptions) {

  // create the API client instance
  var client = new pdfcrowd.HtmlToPdfClient("mikailabrown2022", "6d35d3f95016f4ced7d7b5538158ad6a");
  
  return new Promise((resolve, reject) => {
    const tempFilePath = temp.path({ suffix: '.pdf' }); // Generate a temporary file path

    const pdfStream = client.convertStringToFile(htmlContent, tempFilePath, (err, _) => {
      if (err) {
        reject(err);
        return;
      }
      
      // Read the temporary file and resolve the PDF buffer
      fs.readFile(tempFilePath, (err, data) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(data); // Resolve the Promise with the PDF data
      });
    });
  });
}
export default htmlToPdf;
