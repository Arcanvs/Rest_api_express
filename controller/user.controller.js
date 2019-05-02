module.exports = {
    allUsers: async (req, res) => {
        try{
            var consulta = "SELECT * FROM users";
            let valor = await connection.query(consulta);
            return res.status(200).send(valor)
        } catch (err) {
            return res.status(500).send(err);
       }
    }
};