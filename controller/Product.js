const { Product } = require("../model/Product");

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);

  try {
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.fetchAllProduct = async (req, res) => {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}
  let query = Product.find();
  let totalDocs = Product.find();
  if (req.query.category) {
    query = query.find({ category: req.query.category });
    totalDocs = totalDocs.find({ category: req.query.category });
  }
  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
    totalDocs = totalDocs.find({ brand: req.query.brand });
  }
  const totalDocument = await totalDocs.countDocuments().exec();
  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }
  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  try {
    const docs = await query.exec();
    res.set("X-Total-Count", totalDocument);
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};

// exports.fetchProductsById=async(req,res)=>{
// const {id} =req.params;
// try{
//     const doc=await product.findById(id);
//     res.status()
// }
// }
