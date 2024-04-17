const Product = require("../model/product");

const createProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        console.log("Product :" + product)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        console.log("Product :" + product)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(400).json({ message: "Not found" });
        }

        const updatedProduct = await Product.findById(id);

        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(400).json({ message: " Not found" });
        }
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
};


module.exports = {
    createProducts,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}
