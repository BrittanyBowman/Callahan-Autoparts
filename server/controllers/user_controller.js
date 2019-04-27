module.exports = {
    login: (req, res) => { 
        let {username, password} = req.body;

        req.app.get('db').login([username, password]).then(()=> {
            res.status(200).send('Success');
        }).catch((err)=> {
            res.status(500).send(err);
            console.log('Login Fail');
        })
    },
    register: (req, res) => {
    let {username, password} = req.body;
    req.app.get('db').login([username, password]).then(()=> {
        res.status(200).send('Success');
    }).catch((err)=> {
        res.status(500).send(err);
        console.log('Register Fail');
    })
},
    update: (req, res) => {
        let {username} = req.query;
        let {id} = req.params;

        req.app.get('db').update([id]).then(()=> {
            res.status(200).send('Success');
    }).catch((err)=> {
        res.status(500).send(err);
        console.log('Update Fail');
        })
    }

}