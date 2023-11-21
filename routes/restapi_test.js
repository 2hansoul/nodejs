const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');


//ejs확장자 사용하기 위해 선언
app.set('views','./views');
app.set('view engine','ejs');

app.use(bodyParser.json());

// Sample data (in-memory storage)
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// GET endpoint to retrieve all items
router.get('/items', (req, res) => {
  res.json(items);
});

// GET endpoint to retrieve a specific item by ID
router.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(item => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});


module.exports = router;
