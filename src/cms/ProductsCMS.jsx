import { useEffect, useState } from "react";
import axios from "axios";


function ProductsCMS() {


  const emptyProduct = {

    name: "",
    description: "",
    category: "",
    gsm: "",
    size: "",
    waterproof: "Yes",
    price: "",
    status: "Active",
    featured: false,
    image: "",

  };


  const [product, setProduct] = useState(emptyProduct);

  const [products, setProducts] = useState([]);

  const [editId, setEditId] = useState(null);

  const [loading, setLoading] = useState(false);





  // Fetch Products

  const fetchProducts = async()=>{

    try{

      const res = await axios.get(
        "http://localhost:5000/api/products"
      );


      setProducts(res.data.products);


    }catch(error){

      console.log(error);

    }

  };





  useEffect(()=>{

    fetchProducts();

  },[]);








  // Input Handler

  const handleChange = (e)=>{


    const {name,value,type,checked} = e.target;


    setProduct({

      ...product,

      [name]:
      type === "checkbox"
      ? checked
      : value

    });


  };









  // Add / Update

  const handleSubmit = async(e)=>{


    e.preventDefault();


    try{


      setLoading(true);



      if(editId){


        await axios.put(

          `http://localhost:5000/api/products/${editId}`,

          product

        );


      }
      else{


        await axios.post(

          "http://localhost:5000/api/products",

          product

        );


      }



      setProduct(emptyProduct);

      setEditId(null);


      fetchProducts();



    }catch(error){


      console.log(error);


    }
    finally{

      setLoading(false);

    }


  };









  // Edit

  const editProduct = (item)=>{


    setProduct({

      name:item.name,

      description:item.description,

      category:item.category,

      gsm:item.gsm,

      size:item.size,

      waterproof:item.waterproof,

      price:item.price,

      status:item.status,

      featured:item.featured,

      image:item.image,


    });



    setEditId(item._id);



  };









  // Delete

  const deleteProduct = async(id)=>{


    try{


      await axios.delete(

        `http://localhost:5000/api/products/${id}`

      );


      fetchProducts();



    }catch(error){

  console.log("FULL ERROR:", error);
  console.log("RESPONSE:", error.response?.data);
  console.log("STATUS:", error.response?.status);

}


  };







return (

<div className="products-container">


<div className="product-form">


<h2>
{editId ? "Update Product" : "Add Product"}
</h2>




<form onSubmit={handleSubmit}>


<input

type="text"

name="name"

placeholder="Product Name"

value={product.name}

onChange={handleChange}

/>




<textarea

name="description"

placeholder="Product Description"

value={product.description}

onChange={handleChange}

/>






<select

name="category"

value={product.category}

onChange={handleChange}

>

<option value="">
Select Category
</option>

<option>
Transport
</option>

<option>
Agriculture
</option>

<option>
Construction
</option>

<option>
Industrial
</option>

</select>







<input

type="text"

name="gsm"

placeholder="GSM"

value={product.gsm}

onChange={handleChange}

/>






<input

type="text"

name="size"

placeholder="Size"

value={product.size}

onChange={handleChange}

/>







<select

name="waterproof"

value={product.waterproof}

onChange={handleChange}

>

<option>
Yes
</option>

<option>
No
</option>

</select>








<input

type="number"

name="price"

placeholder="Price"

value={product.price}

onChange={handleChange}

/>







<input

type="text"

name="image"

placeholder="Image URL"

value={product.image}

onChange={handleChange}

/>







<select

name="status"

value={product.status}

onChange={handleChange}

>

<option>
Active
</option>

<option>
Inactive
</option>

</select>






<label>

<input

type="checkbox"

name="featured"

checked={product.featured}

onChange={handleChange}

/>

Featured Product

</label>







<button className="primary-btn">

{
loading
?
"Saving..."
:
editId
?
"Update Product"
:
"Add Product"
}

</button>




</form>


</div>







<div className="admin-products">


<h2>
Products List
</h2>




{
products.length === 0

?

<p>
No Products Found
</p>


:

products.map((item)=>(


<div

className="admin-product-card"

key={item._id}

>


{
item.image &&

<img

src={item.image}

alt={item.name}

/>

}





<div>

<h3>
{item.name}
</h3>


<p>
{item.category}
</p>


<p>
{item.gsm} GSM
</p>


</div>






<div className="actions">


<button

onClick={()=>editProduct(item)}

>

Edit

</button>





<button

onClick={()=>deleteProduct(item._id)}

>

Delete

</button>



</div>




</div>


))


}





</div>





</div>

);


}


export default ProductsCMS;