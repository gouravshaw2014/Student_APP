// Load the JSON data from the file (adjust the path based on your file location)
const encodedObj = require('./encoded_sign_up.json');

// Reverse of the encoder object
const decoderObj = {
    "PH": "Phone_No",
    "PS": "Password",
    "NM": "Name"
};

let decodedDataset = [];

encodedObj.forEach(item => {
    let decodedData = {};
    Object.entries(item.data).forEach(([key, val]) => {
        decodedData[decoderObj[key]] = val;
    });
    decodedDataset.push({
        page: item.page,
        data: decodedData
    });
});

console.log(decodedDataset);
