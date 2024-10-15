const socket = new WebSocket('ws://192.168.87.54:10050');  
const imageElement = document.getElementById('imageDisplay');  

socket.onopen = function(event) {  
    console.log('Connected to the WebSocket server.');  
};  

socket.onmessage = function(event) {  
    print
    const imgBlob = new Blob([event.data], { type: 'image/jpeg' });  
    const imgUrl = URL.createObjectURL(imgBlob);  
    imageElement.src = imgUrl;  
};  

socket.onerror = function(error) {  
    console.error('WebSocket Error:', error);  
};  

socket.onclose = function(event) {  
    console.log('Disconnected from the WebSocket server.');  
};  