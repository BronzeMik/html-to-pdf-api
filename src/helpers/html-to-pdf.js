import pdfcrowd from "pdfcrowd";
import dotenv from 'dotenv';

dotenv.config();

const defaultOptions = {
    format: 'A4',
    printBackground: true
}
async function htmlToPdf(htmlContent, options = defaultOptions) {

  // create the API client instance
  var client = new pdfcrowd.HtmlToPdfClient("mikailabrown2022", "6d35d3f95016f4ced7d7b5538158ad6a");
  
  // run the conversion and write the result to a file
  client.convertStringToFile(
      htmlContent,
      "invoice.pdf",
      function(err, fileName) {
          if (err) return console.error("Pdfcrowd Error: " + err);
          console.log("Success: the file was created " + fileName);
      });
}
export default htmlToPdf;
