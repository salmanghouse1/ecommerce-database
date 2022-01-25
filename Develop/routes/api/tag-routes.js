const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    Tag.findAll({
        include: [Product]
    }).then((tagData) => {
        res.json(tagData)
    }).catch((err) => {
        console.log(err);
        res.status(500)
    });
    // find all tags
    // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
    Tag.findByPk({
        where: { id: req.params.id },
        include: [Product]
    }).then((data) => {
        res.json(data);
    });

    // find a single tag by its `id`
    // be sure to include its associated Product data
});

router.post('/', (req, res) => {
    // create a new tag
    Tag.create(req.body).then(() => {
        console.log("created");
        res.status(200);
    })
});

router.put('/:id', (req, res) => {
    Tag.update(req.body, {
            where: { id: req.params.id }
        }).then((data) => {
            res.json(data);
            res.status(200);
        })
        // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {

    Tag.destroy({ where: { id: req.params.id } }).then(() => {
        res.status(200)
    });
    // delete on tag by its `id` value
});

module.exports = router;