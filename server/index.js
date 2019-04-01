const express = require('express');
const mc = require('./controllers/messages_controller');
const app = express();


app.use(express.json()); //middlewear //app.use is called for everysingle endpoint //express.json takes whatever was in the body request and adds it
app.use(express.static(__dirname + '/../public/build'));


let messagesURL = '/api/messages';
app.post(messagesURL, mc.create); 
app.get(messagesURL, mc.read);
app.put(`${messagesURL}/:id`, mc.update);
app.delete(`${messagesURL}:/id`, mc.delete);


const PORT = 3001;
app.listen(PORT, () => {
    console.log('Mic check one two')
});