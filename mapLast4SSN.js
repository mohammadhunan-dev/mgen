const fs = require('fs');
const list = require('./patients.json');

const newList = list.map((item) => {
    const splitSSN = item.ssn.toString().split("");
    
    return {
      ...item,
      "ssnLast4": Number(splitSSN[5] + splitSSN[6] + splitSSN[7] + splitSSN[8])
    }
  })

fs.writeFileSync("./patients.json", JSON.stringify(newList));
  
