const router = require('express').Router();

const { Category, Product } = require('../../models');
const Sequelize = require('sequelize')
    // The `/api/categories` endpoint

router.get('/', (req, res) => {

        Category.findAll({
            include: [Product]
        }).then((categories) => {
            res.json(categories);
        }).catch((err) => {
            console.log(err);
            res.status(500);
        });
    }

    // find all categories
    // be sure to include its associated Products
);

router.get('/:id', (req, res) => {
    try {
        const categoryById = Category.findOne({
            where: { id: req.params.id },
            include: [Product]
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

    Category.create(req.body).then((dataCreate) => {
        console.log("created");
        console.log(dataCreate);
        res.json(dataCreate);
    })

})


router.put('/:id', (req, res) => {
        Category.update(req.body, {
                where: { id: req.params.id }
            }

        ).then((data) => {
            res.json(data);
            console.log("Updated")
        });
    } // update a category by its `id` value
);

router.delete('/:id', (req, res) => {

    Category.destroy({
        where: {
            id: req.params.id
        }
    }).then()

    res.status(200).console.log("deleted");
});

module.exports = router;