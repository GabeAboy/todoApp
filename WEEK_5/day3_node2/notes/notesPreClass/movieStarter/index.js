const express = require('express');
const bodyParser = require('body-parser');
const movieCtrl = require('./controllers/movieCtrl');
const port = 3000;
const app = express();
app.use(bodyParser.json());

app.get('/api/movies', movieCtrl.get);
app.get('/api/movies/:movieId', movieCtrl.getById)
app.get('/api/movies', movieCtrl.getById)
app.put('/api/movies', movieCtrl.modify);
app.post('/api/movies', movieCtrl.add);
app.delete('/api/movies', movieCtrl.delete);

// app.get('/api/movies/:movieID', movieCtrl.getByID)
// app.put('/api/movies/:movieID', movieCtrl.modify)
// app.put('/api/movies/:movieID', movieCtrl.delete)


app.listen(port, function(){
    console.log('listening on ' + port);
})
