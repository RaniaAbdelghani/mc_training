const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express()

app.use(cors())
app.use(bodyParser.json())

const userSchema = new mongoose.Schema({
  name: String,
  data: Object
});

const User = mongoose.model('User', userSchema);

async function main() {
  await mongoose.connect('mongodb://localhost:27017/mc_db');
}

main().catch(err => console.log(err));

app.post('/user', (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.send(doc);
  });
})

app.post('/data', (req, res) => {
  const { name } = req.body;
  User.findOne({ name }, (err, user) => {
    if (err) return res.json({ success: false, err });
    user.data = { ...user.data, ...req.body.data};
    user.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      res.send(doc);
    });
  })
})

app.listen(8000, () => console.log('Server running on port 8000'));