// Writing correcting API

var myHeaders = new Headers();
myHeaders.append("apikey", "88rd9Gf2f62f0Zjxf1GYwWKCN0rfJ3Xy");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

fetch("https://api.apilayer.com/dymt/did_you_mean_this?q={q}", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
