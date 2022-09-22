module.exports = function (sequelize, dataTypes){
    let alias = 'Products';
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(200),
            allowNull: false
        },
        description:  { 
            type: dataTypes.STRING(200),
            allowNull: false
        },
        price:{ 
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        discount: { 
            type: dataTypes.DOUBLE,
            allowNull: false
        },
        id_category: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_image_product: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.ImagesProducts, {
			as: "images_products",
			foreignKey: "id_image_product"
		});
        Product.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "id_category",
        });   
    }
    return Product;
}