import { useEffect, useState } from "react";
import axios from "axios";


function AboutCMS() {


  const emptyAbout = {

    title:"",
    description:"",
    experience:"",
    customers:"",
    quality:"",
    image:""

  };


  const [about,setAbout] = useState(emptyAbout);
  const [loading,setLoading] = useState(false);



  // Fetch About Data

  const fetchAbout = async()=>{

    try{

      const res = await axios.get(
        "http://localhost:5000/api/about"
      );


      if(res.data.about){

        setAbout(res.data.about);

      }


    }catch(error){

      console.log(error);

    }

  };



  useEffect(()=>{

    fetchAbout();

  },[]);






  // Input Handler

  const handleChange = (e)=>{


    const {name,value} = e.target;


    setAbout({

      ...about,

      [name]:value

    });


  };







  // Save / Update

  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{

      setLoading(true);


      await axios.put(

        "http://localhost:5000/api/about",

        about

      );


      alert("About Updated Successfully");


      fetchAbout();


    }catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }


  };







return (

<div className="products-container">


<div className="product-form">


<h2>
About CMS
</h2>



<form onSubmit={handleSubmit}>


<input

type="text"

name="title"

placeholder="About Title"

value={about.title}

onChange={handleChange}

/>





<textarea

name="description"

placeholder="About Description"

value={about.description}

onChange={handleChange}

/>






<input

type="text"

name="experience"

placeholder="Experience (Example: 20+ Years)"

value={about.experience}

onChange={handleChange}

/>






<input

type="text"

name="customers"

placeholder="Customers (Example: 500+)"

value={about.customers}

onChange={handleChange}

/>






<input

type="text"

name="quality"

placeholder="Quality Statement"

value={about.quality}

onChange={handleChange}

/>






<input

type="text"

name="image"

placeholder="Image URL"

value={about.image}

onChange={handleChange}

/>






<button className="primary-btn">

{

loading

?

"Saving..."

:

"Save About"

}

</button>




</form>



</div>


</div>

);


}


export default AboutCMS;