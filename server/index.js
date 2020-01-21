const express = require('express');
const bCtrl = require('./controllers/bossCtrl'); 
const nCtrl = require('./controllers/ninjaCtrl');
const app = express();

app.use(express.json()); 

//Endpoints: 
app.get('/api/bosses/', bCtrl.getBoss);
app.get('/api/ninjas/', nCtrl.getNinja);
app.delete('/api/ninjas/:id', nCtrl.deleteNinja);
app.put('/api/ninjas/:id', nCtrl.editNinja);
app.post('/api/ninjas/', nCtrl.createNinja);


const port = 3434;
app.listen(port, ()=> console.log(`Server running on port ${port}`));