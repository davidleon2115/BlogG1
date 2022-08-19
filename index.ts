import express from 'express';
const app = express();
app.use(express.json()) //middleware

app.get('/', (_req, res) => {
    res.json({"oli":"olis"});
});

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`escuchando en el puerto ${PORT}`);
})
