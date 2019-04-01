let messages = [];
let id = 0;

module.exports = {

create: (req, res) => {                   // axios.get request to api can be used to pre-populate your application with some data
    const {text, time} = req.body;       // res.json('it works') is sending a json response of ('it works')
    messages.push({id, text, time});    // pushing a new id, text and time value into messages.
    id++;                              // updating id so that the next create doesn't assign the same id
    res.status(200).send(messages);   // middlewear takes places between the request and the response
},

read:  (req, res) => {
    res.status(200).send(messages);
},

update: (req, res) => {
    const {text} = req.body;
    const updateId = req.params.id;
    const messageIndex = messages.findIndex(elements => elements.id == updateId);
    console.log(messageIndex);
    let message = messages[messageIndex];

    messages[messageIndex] = {
        text: text || message.text,
        id: message.id,
        time: message.time
    }

    res.status(200).send(messages);

},

delete: (req, res) => {
    const messageId = req.params.id;
    let messageToDelete = messages.findIndex(element => element.id == req.params.id);
    messages.splice(messageToDelete, 1);
    res.status(200).send(messages);
}

}