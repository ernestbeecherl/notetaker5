const router = require ('express').Router(); 
const fs = require ('fs'); 
const fileName = './db/db.json'




router.get('/notes', (req, res) =>  {
    const data = fs.readFileSync(fileName, 'utf8'); 
    const parsedData = JSON.parse(data); 
    res.json(parseData); 
});


router.post('./notes', (req, res) => {
    const { title, text  } = req.body;
    const payload = {
        title,
        text,
        id: uuidv4()
    };
    console.log(payload);
    const newData = [...fileName, payload];
    const data = fs.writeFileSync('db/db.json', JSON.stringify(newData), (err) => console.log(err));
    res.json(data); 
})

module.exports = router; 