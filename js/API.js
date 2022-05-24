// 88rd9Gf2f62f0Zjxf1GYwWKCN0rfJ3Xy --API--

// BIN Checker API
var myHeaders = new Headers();
myHeaders.append("apikey", "88rd9Gf2f62f0Zjxf1GYwWKCN0rfJ3Xy");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch("https://api.apilayer.com/bincheck/{bin_code}", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

// Did you mean this?

var myClass = new Class();
myClass.append("apikey", "88rd9Gf2f62f0Zjxf1GYwWKCN0rfJ3Xy");

var requestOption = {
    method: 'GET',
    redirect: 'follow',
    headers: myClass
};

fetch("https://api.apilayer.com/dymt/did_you_mean_this?q=heallo", requestOption)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));