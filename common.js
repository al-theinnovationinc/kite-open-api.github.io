function callApi(httpMethod, apiEndpoint, requestJson, userIdRequired, cardIdRequired) {
    window.parent.document.getElementById('requestJson').value = 'Validating...';
    window.parent.document.getElementById('responseJson').value = '';
    window.top.postMessage('httpMethod||' + httpMethod, '*');
    window.top.postMessage('apiEndpoint||' + apiEndpoint, '*');
    window.top.postMessage('requestJson||' + requestJson, '*');
    window.top.postMessage('userIdRequired||' + userIdRequired, '*');
    window.top.postMessage('cardIdRequired||' + cardIdRequired, '*');
    setTimeout(() => window.top.postMessage('send||send', '*'), 200);
}