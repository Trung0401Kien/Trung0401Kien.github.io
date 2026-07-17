const fs = require('fs');
const pdf = require('pdf-parse');

console.log("type of pdf:", typeof pdf);
console.log("pdf keys:", Object.keys(pdf));

let dataBuffer = fs.readFileSync('CV/NguyenDoTrungKien_CV.pdf');

(pdf.default || pdf)(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error){
    console.log("Error:", error);
});
