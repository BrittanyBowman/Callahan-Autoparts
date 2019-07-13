module.exports = {
    //reads db list of parts
    getAll: (req, res) => {
        req.app.get('db').get_parts().then(parts => {
            res.status(200).send(parts);
        }).catch(err => {
            res.status(500).send(err);
            console.log({err});
        });
    },
    //deletes part from db list
    delete: (req, res) => {
        let { id } = req.params;

        req.app.get('db').delete_part([id]).then(() => {
            res.status(200).send();
        }).catch(err => {
            res.status(500).send(err);
            console.log(err);
        });
    },
    //creates new part in db list
    create: (req, res) => {
        let { name, number, price, img, descrip } = req.body;
      const dbInstance = req.app.get('db')
      dbInstance.add_part([name, number, price, img, descrip])
      .then(() => {
        res.status(200).send();
      })
      .catch(error => {
        console.log({ error });
        res.status(500).send(error);
      });
    },
    //search
  search: (req, res) => {
    let { name } = req.params;
    req.app
      .get('db')
      .get_part([`%${name}%`])
      .then(part => {
        res.status(200).send(part);
      })
      .catch(err => {
        console.log({ err });
        res.status(500).send(err);
      });
  },
  //updates username
  update: (req, res) => {
    let { username } = req.params;
    req.app.get('db').update([username]).then(() => {
        res.status(200).send();
    }).catch(err => {
        res.status(500).send(err);
        console.log(err);
    });
},

    // Update Product Function
    updateProduct: (req, res) => {
      let {id} = req.params;
      let {desc} = req.query;
      req.app.get('db').update_product([desc, id]).then(() => {
          res.status(200).send('Updated');
      }).catch(() => {
          res.status(500).send('Failed');
      });
  },
}