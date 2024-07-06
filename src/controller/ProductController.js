const ProductModel = require("../model/Product")

const findAllProducts = async (req, res) => {

  try {

    const allProduct = await ProductModel.find()

    res.status(200).json(allProduct)



  } catch (error) {
    console.log(error)
  }

}

const findOneProduct = async (req, res) => {

  try {

    const { id } = req.params
    const product = await ProductModel.findOne({ _id: id })

    if (!product) {
      res.status(404).json({ error: "Não foi possível encontrar o produto!" })
      return
    }

    res.status(200).json(product)


  } catch (error) {
    console.log(error)
  }

}

const registerProduct = async (req, res) => {

  try {
    const { urlImage, product, brand, amount, price } = req.body
    const existProduct = await ProductModel.findOne({ product, brand })

    if (existProduct) {
      res.status(422).json({msg:"Produto já cadastrado, tente novamente."})
      return
    }

    const newProduct = await ProductModel.create({
      urlImage, product, brand, amount, price, sales: 0
    })

    if (!newProduct) {
      res.status(422).json("Houve um error, por favor tente novamente")
      return
    }

    res.status(200).json({ success: true, msg: "Produto cadastrado com sucesso!", newProduct })


  } catch (error) {
    console.log(error)
  }

}

const deleteProduct = async (req, res) => {

  try {

    const { id } = req.params
    const existProduct = await ProductModel.deleteOne({ _id: id })

    if (!existProduct) {
      res.status(404).json({ error: "Não foi possível excluir o produto!" })
      return
    }

    res.status(200).json({
      msg: "Produto excluído com sucesso."
    })


  } catch (error) {
    console.log(error)
  }

}

const editProduct = async (req, res) => {


  try {
    const { id } = req.params

    const { urlImage, product, brand, amount, price, sales } = req.body

    const updateProduct = await ProductModel.findOneAndUpdate(
      { _id: id },
      { urlImage, product, brand, amount, price, sales }
    )

    if (!updateProduct) {
      res.status(422).json("Não foi possivel editar o produto, por favor tente novamente!")
    }


    res.status(200).json({ success: true, msg: "Produto atualizado." })

  } catch (error) {
    console.log(error)
  }

}

const lastUpdate = async (req, res) => {

  try {

    const allProduct = await ProductModel.find().sort({ _id: -1 }).limit(10)

    res.status(200).json(allProduct)

  } catch (error) {
    console.log(error)
  }
}



module.exports = {
  findAllProducts,
  findOneProduct,
  registerProduct,
  deleteProduct,
  editProduct,
  lastUpdate
}