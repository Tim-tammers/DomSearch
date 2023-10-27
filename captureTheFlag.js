const https = require('https');
const url = 'https://www.framed.wtf/'; // Replace with your desired URL
const { DOMParser } = require('xmldom');


https.get(url, (response) => {
  let data = '';
  let resultString= '';

  for (var i=0; i < response.length; i++) {
    yourForm.elements[i].value = "some new value";
    console.log(i);
  }
  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {

    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');


 

    const codeElements = doc.getElementsByTagName('div');

 for(i=0; i<codeElements.length; i++){


    const divElements = codeElements[i].getElementsByTagName('div');
console.log(codeElements[i]);
    for(j=0; j<divElements.length; j++){
        if(divElements[j].getAttribute('data-tag').endsWith('93')){
        const spanElements = divElements[j].getElementsByTagName('span');
        for(k=0; k<spanElements.length; k++){
            if(spanElements[k].getAttribute('data-id').includes('21')){
            const iElement = spanElements[k].getElementsByTagName('i');
            for(x=0; x<iElement.length; x++){
            resultString += iElement[x].getAttribute('value');
            console.log(resultString);
            }
       
            }
        }
        }
    }

 }
});
}).on('error', (error) => {
  console.error('Error fetching webpage:', error);
});

