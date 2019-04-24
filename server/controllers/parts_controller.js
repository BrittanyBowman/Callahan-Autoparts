module.exports = {
    getAll: (req, res) => {
        req.app.get('db').get_parts().then(parts => {
            res.status(200).send(parts);
        }).catch(err => {
            res.status(500).send(err);
            console.log({err});
        });
    },

    delete: (req, res) => {
        let { id } = req.params;

        req.app.get('db').delete_part([id]).then(() => {
            res.status(200).send();
        }).catch(err => {
            res.status(500).send(err);
            console.log(err);
        });
    },

    create: (req, res) => {
        let { id, name, number, price, img, descrip } = req.body;

    req.app
      .get('db')
      .add_part([id, name, number, price, img, descrip])
      .then(() => {
        res.status(200).send();
      })
      .catch(error => {
        console.log({ error });
        res.status(500).send(error);
      });
    },
}