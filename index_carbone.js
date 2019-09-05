const fs = require('fs');
const carbone = require('carbone');

// Data to inject
var data = {
    firstname: 'John',
    lastname: 'Doe'
};

// Accepted convertTo formats:
// bib, doc, doc6, doc95, docbook, docx, docx7, fodt, html, latex, mediawiki, odt, ooxml, ott, 
// pdb, pdf, psw, rtf, sdw, sdw4, sdw3, stw, sxw, text, txt, uot, vor, vor4, vor3, xhtml, csv,
// xls, xls5, xls95, xlt, xlt5, xlt95, xlsx, odp, otp, potm, pot, pptx, pps, ppt
var options = {
    convertTo: 'pdf'
}

// Generate a report using the sample template provided by carbone module
// This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
// Of course, you can create your own templates!
carbone.render('./report.odt', data, function (err, result) {
    if (err) {
        return console.log(err);
    }
    // write the result
    fs.writeFileSync('rendered.odt', result);
});