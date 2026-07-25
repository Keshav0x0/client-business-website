import Product from "../models/Product.js";


// GET ALL PRODUCTS

export const getProducts = async (req,res)=>{

  try{

    const products = await Product.find()
    .sort({createdAt:-1});


    res.json({

      success:true,
      products

    });


  }catch(error){

    res.status(500).json({

      success:false,
      message:error.message

    });

  }

};





// GET SINGLE PRODUCT

export const getProduct = async(req,res)=>{

  try{


    const product = await Product.findById(
      req.params.id
    );


    if(!product){

      return res.status(404).json({

        success:false,
        message:"Product not found"

      });

    }


    res.json({

      success:true,
      product

    });



  }catch(error){

    res.status(500).json({

      success:false,
      message:error.message

    });

  }

};






// CREATE PRODUCT

export const createProduct = async(req,res)=>{

  try{


    const product = await Product.create(
      req.body
    );


    res.status(201).json({

      success:true,

      message:"Product Added Successfully",

      product

    });



  }catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }


};






// UPDATE PRODUCT

export const updateProduct = async(req,res)=>{


  try{


    const product =
    await Product.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        new:true
      }

    );



    if(!product){

      return res.status(404).json({

        success:false,

        message:"Product not found"

      });

    }



    res.json({

      success:true,

      message:"Product Updated",

      product

    });



  }catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }


};








// DELETE PRODUCT

export const deleteProduct = async(req,res)=>{


  try{


    const product =
    await Product.findByIdAndDelete(
      req.params.id
    );



    if(!product){

      return res.status(404).json({

        success:false,

        message:"Product not found"

      });

    }



    res.json({

      success:true,

      message:"Product Deleted"

    });



  }catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }


};