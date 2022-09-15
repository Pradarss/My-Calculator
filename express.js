const { resolveCaa } = require('dns');
const express = require('express')
const fs = require('fs');
const emitter = require('stream');
const aboutmeh = require('./index.js');

const app = express();
const port = 80;
const home = fs.readFileSync('index.html');
const physics = fs.readFileSync('./physics/physics.html');
const maths = fs.readFileSync('./maths/maths.html');
const chemistry = fs.readFileSync('./chemistry/chemistry.html');
const login = fs.readFileSync('./login/signup.html');
// const about = EventEmitter.emit('click',about());
 
app.use(express.static(__dirname));

app.get('/', (req, res) => { 
    res.end(home);
  })

  app.get('/about', (req, res) => { 
    emitter.emit('click',aboutmeh);
  })
  
  app.get('/physics', (req, res) => {
      res.end(physics);
    })

    app.get('/maths', (req, res) => {
      res.end(maths);
    })

    app.get('/chemistry', (req, res) => {
      res.end(chemistry);
    })

    app.get('/login', (req, res) => {
      res.end(login);
    })
  
  app.listen(port, () => {
      console.log(`app listening on port ${port}`)
  })