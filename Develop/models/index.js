// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
    foreignkey: 'category_id'
})

Category.hasMany(Product, { foreignkey: 'category_id' });

// Categories have many Products


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, { foreignkey: 'product_id' });


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    foreignkey: 'ProductTag'
});



module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};