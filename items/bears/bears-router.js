const express = require('express')

const router = express.Router();

const bears = require('./bears-model')

router.get('/', (req, res) => {
    bears.find()
    .then(bears => {
        res.status(200).json(bears)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    zoo.findById(id)
    .then(zoo => {
        if (zoo) {
        res.status(200).json(zoo);
        } else {
        res.status(404).json({message: "Boo hoo this one isn't at the zoo!"})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
    const newbears = req.body
    bears.add(newbears)
    .then(bears => {
        res.status(201).json(bears)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/:id', (req, res) => {
    console.log("The scientists changed the name on the animal again")
    const changes = req.body
    const {id} = req.params
    const {name} = req.body
    if (!name) {
        res.status(422).json({message: "Don't forget to update the name!"})
    }
    bears.update(id, changes)
    .then(bears => {
        if (bears) {
            res.json(bears)
        } else {
            res.status(404).json({message: "This animal does not exist in our database!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    bears.remove(id)
    .then(bearsCount => {
        if (bearsCount > 0) {
            res.status(200).json({message: "This animal is now extinct (and removed from the database)"})
        } else {
            res.status(404).json({message: "This animal does not exist in our database!"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;