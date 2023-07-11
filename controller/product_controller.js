// Assuming you have a Product model defined
const Product = require("../model/product");

// function to show all the products
module.exports.products = function (req, res) {
  Product.find({})
    .then((foundProducts) => {
      res.send(foundProducts);
    })
    .catch((err) => {
      res.send(err);
    });
};

// Define your controller function
exports.create = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });

  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Product created successfully",
        product: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

// function to delete a product using its ID
module.exports.delete = function (req, res) {
  Product.deleteOne({ _id: req.params.productID })
    .then(() => {
      res.send({
        message: "Product deleted",
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports.updateQunatity = async function (req, res) {
  const ID = req.params.productID;
  try {
    // find the product using id
    const found = await Product.findById(ID);
    // Note - To increment the quantity of the product put number as a positive value in the query
    //        and to decrement the quantity put the number as negative value in the query
    const newQty = parseInt(found.quantity) + parseInt(req.query.number);
    // update the product's quantity
    const updatedProduct = await Product.findByIdAndUpdate(
      ID,
      { quantity: newQty },
      { new: true }
    );
    res.send({
      product: updatedProduct,
      message: "updated successfully",
    });
  } catch (err) {
    res.send(err);
  }
};
