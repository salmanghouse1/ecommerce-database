const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    Tag.findAll({
        include: [{ model: Product }]
    });
    // find all tags
    // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
    Tag.findByPk(
        req.params.id, { include: [{ model: Product }] });

    // find a single tag by its `id`
    // be sure to include its associated Product data
});

router.post('/', (req, res) => {
    // create a new tag
    Tag.create(req.body)
});

router.put('/:id', (req, res) => {
    Tag.update(req.body, {
            where: { id: req.params.id }
        })
        // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
    Tag.destroy(req.params.id)
        // delete on tag by its `id` value
});

module.exports = router;