import Contact from "../models/Contact.js";


// GET

export const getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();

    res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE / CREATE

export const updateContact = async (req, res) => {
  try {
    let contact = await Contact.findOne();

    if (contact) {
      contact = await Contact.findByIdAndUpdate(
        contact._id,
        req.body,
        { new: true }
      );
    } else {
      contact = await Contact.create(req.body);
    }

    res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};