const { defineProduct } = require("../models/product.model");
const {createCategoryTable} = require("./category.repository");
const { createProductTable }  = require("./product.repository");

exports.initializeTables = (forceCreation) => {
    createCategoryTable(forceCreation);
    createProductTable(forceCreation);
}
