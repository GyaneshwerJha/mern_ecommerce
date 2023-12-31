const Product = require("../models/productModel")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncError = require("../middlewares/catchAsyncError");

//Create product
exports.createProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})

// Get all product
exports.getAllProducts = catchAsyncError(async (req, res) => {
    const products = await Product.find();

    res.status(200).json({ success: true, products })

})

// Update Product -- Admin Route only
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found", 404));

    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    return res.status(200).json({
        success: true,
        message: "Product updated successfully",
        product: product
    });

})

//Delete Product -- Admin Route only

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));

    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "Product Deleted Successfully"
    })
}
)

//Get Product Details

exports.getProductDetails = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));

    }
    res.status(200).json({
        success: true,
        product: product
    })
})
