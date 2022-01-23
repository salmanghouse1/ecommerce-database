const router = require('express').Router();

const { Category, Product } = require('../../models');
const Sequelize = require('sequelize')
    // The `/api/categories` endpoint

router.get('/', (req, res) => {
    try {
        const CategoryData = Category.findAll({
            include: [{ model: Product }]
        });
        res.status(200).json(CategoryData);
    } catch {
        res.status(500)
    }
    // find all categories
    // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
    try {
        const categoryById = Category.findOne({
            where: { id: req.params.id },
            include: [{ model: Product }]
        })
        res.status(200).json(categoryById);
    } catch {

        res.status(500)
    }
    // find one category by its `id` value
    // be sure to include its associated Products
});

router.post('/', (req, res) => {
    // create a new category
    console.log(req.body);
    try {
        const createNewCategory = Category.create(req.body);

        res.status(200).console.log("Created");
    } catch {

        res.status(500)
    }
});

router.put('/:id', (req, res) => {
    try {
        const updateCategory = Category.update(req.body, {
                where: { id: req.params.id }
            }

        );
        res.status(200).console.log("Updated");
    } catch {

        res.status(500)
    } // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
    try {
        const deleteCategory = Category.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(200).console.log("deleted");
    } catch {

        res.status(500)
    } // delete a category by its `id` value
});

module.exports = router;