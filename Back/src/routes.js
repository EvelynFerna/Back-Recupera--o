const express = require('express')
const router = express.Router();

const clientes = require('./controllers/clientes')
const carros = require('./controllers/carros')
const telefone = require('./controllers/telefone')

const teste = (req, res) => {
    res.json("Api respondendo");
}


router.get('/', teste);
router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes', clientes.update);

router.post('/carros', carros.create);
router.get('/carros', carros.read);
router.put('/carros', carros.update);

router.get('/', teste);
router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone', telefone.update);

module.exports = router;