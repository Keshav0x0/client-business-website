import Quote from "../models/Quote.js";

// CREATE QUOTE REQUEST

export const createQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);

    res.status(201).json({
      success: true,
      message: "Quote Request Submitted Successfully",
      quote,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL QUOTES

export const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      quotes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE QUOTE STATUS

export const updateQuoteStatus = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Quote Status Updated",
      quote,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE QUOTE

export const deleteQuote = async (req, res) => {
  try {
    await Quote.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Quote Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};