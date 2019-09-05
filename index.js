var docx = require('docx-reporting');
const word2pdf = require('word2pdf');
const open = require('open');
var fs = require('fs');

// Buffers can be used for taking a string or piece of data and doing base64 encoding of the result. For example:

// > console.log(Buffer.from("Hello World").toString('base64'));
// SGVsbG8gV29ybGQ=

// > console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'))
// Hello World

const template = fs.readFileSync(`report.docx`);
const data = {
    person: {
        name: "Jorge",
        lastname: "Torres",
    }
};

docx.generate(template, data).then(async (rendered) => {
    fs.writeFileSync(`rendered.docx`, rendered);
    // console.log(dataURI);
    // await open(dataURI);

    const data = await word2pdf('rendered.docx');
    // fs.writeFileSync('rendered.pdf', data);
    // var dataURI = `data:application/pdf;base64,${data.toString('base64')}`;
    // console.log(dataURI);
    Buffer.from(data).encode('base64');
    // try {
    //     await open(dataURI, { background: true });
    // } catch (error) {
    //     console.log(error);
    // }
});