const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

app.get('/example', (request, response) => {
    response.send('Hello, home!')
    });
app.get('/radio', (request, response) => {
    response.send('Video killed the radio star!')
    });
app.get('/mac', (request, response) => {
        response.send('Macbook babyyyyy!')
    });
app.get('/html', (request, response) => {
    response.send("<h1>Hello, <b>JEFF</b>!</h1>")
});
