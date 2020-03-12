export default async function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/list');
    xhr.responseType = 'json';

    await xhr.send();

    return xhr;
};