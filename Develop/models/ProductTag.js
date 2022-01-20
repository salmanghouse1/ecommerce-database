const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init({
            // define columns
            id: {
                type: dataType.INTEGER,
                allow_null: false,
                primary_key: true,
                autoIncrement: true
            },
            product_id: {
                type: dataType.INTEGER,
                reference: { model: 'product', key: 'id' }

            },
            tag_id: {
                type: dataType.INTEGER,
                reference: { model: 'tag', key: 'id' }

            } {
                sequelize,
                timestamps: false,
                freezeTableName: true,
                underscored: true,
                modelName: 'product_tag',
            });

        module.exports = ProductTag;