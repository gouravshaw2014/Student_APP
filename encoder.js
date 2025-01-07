const obj = require('./sign_in.json');
const encoderObj = {
    "Phone_No": "PH",
    "Password": "PS",
    "Name": "NM"
};

let dataset = [];

obj.forEach(item => {
    let encodedData = {};
    Object.entries(item.data).forEach(([key, val]) => {
        encodedData[encoderObj[key]] = val;
    });
    dataset.push({
        page: item.page,
        data: encodedData
    });
});

console.log(dataset);
