export default async function (data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    await xhr.send(JSON.stringify(data));

    return xhr;
};