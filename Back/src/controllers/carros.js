const con = require('../connect/connect').con;


const create = (req, res) => {
    let marca_veiculo = req.body.marca_veiculo;
    let modelo_veiculo = req.body.modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiculo = req.body.fabricacao_veiculo;
    let cliente_id = req.body.cliente_id


    let query = 'INSERT INTO carros (marca_veiculo,modelo_veiculo,ano_veiculo,fabricacao_veiculo,cliente_id)VALUES(?,?,?,?,?)';
    let values = [marca_veiculo,modelo_veiculo,ano_veiculo,fabricacao_veiculo,cliente_id];
    con.query(query, values,(err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json({ message: 'Carro cadastrado com sucesso', result });
        }
    })
}

const update = (req, res) => {
    const { marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiuclo, cliente_id } = req.body;

    const query = 'UPDATE carros SET marca_veiculo = ?, modelo_veiculo = ?, ano_veiculo = ?, fabricacao_veiculo = ? WHERE carros_id = ?';
    con.query(query, [marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'atualizado com sucesso', result });
        }
    });
};



const read = (req, res) => {
    con.query('SELECT * FROM carros', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update
   
}