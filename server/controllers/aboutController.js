import About from "../models/About.js";


// GET ABOUT

export const getAbout = async(req,res)=>{

try{

const about = await About.findOne();

res.json({
 success:true,
 about
});


}catch(error){

res.status(500).json({
 success:false,
 message:error.message
});

}

};



// CREATE / UPDATE ABOUT

export const updateAbout = async(req,res)=>{

try{

let about = await About.findOne();


if(about){

about = await About.findByIdAndUpdate(
about._id,
req.body,
{
 new:true
}
);

}
else{

about = await About.create(req.body);

}


res.json({

success:true,
about

});


}catch(error){

res.status(500).json({
success:false,
message:error.message
});

}

};