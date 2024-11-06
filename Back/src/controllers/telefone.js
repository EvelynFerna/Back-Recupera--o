const con = require ('../connect/connect').con;


const create = (req, res) => {
    let telefone_id = req.body.telefone_id;
    let cliente_id = req.body.cliente_id;
    let numero = req.body.numero;
    let tipo = req.body.tipo

    let query = 'INSERT INTO telefone (cliente_id ,numero, tipo) VALUES(?,?,?)'
    let values = [cliente_id,numero,tipo];
    con.query(query, values, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json({ message: 'Telefone cadastrador com sucesso', result });
        }
    })
}

const update = (req, res) => {
    const { telefone_id, cliente_id, numero, tipo } = req.body;
    const query = 'UPDATE telefone SET cliente_id = ?, numero = ?, tipo = ? WHERE telefone_id = ?';
    con.query(query, [cliente_id, numero, tipo, telefone_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Atualizado com sucesso', result });
        }
    })
}



const read = ( req,res)=>{
     con.query('SELECT * FROM telefone',(err,result) => {
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        } 
     })
}


module.exports = {
    create,
    read,
    update
}