const express = require('express');
const app = express();


const fs = require('fs');
// const data = fs.readFileSync('templates.json');
// const templates = JSON.parse(data);

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

app.post('/templates', (req, res) => {
    fs.writeFile('templates.json', req.body);
    res.send(req.body);
})

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});