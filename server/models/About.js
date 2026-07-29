import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
{
  title:{
    type:String,
    default:"About KV Enterprises"
  },

  description:{
    type:String,
    default:""
  },

  experience:{
    type:String,
    default:""
  },

  customers:{
    type:String,
    default:""
  },

  quality:{
    type:String,
    default:""
  },

  image:{
    type:String,
    default:""
  }

},
{
  timestamps:true
});

const About = mongoose.model("About", aboutSchema);

export default About;