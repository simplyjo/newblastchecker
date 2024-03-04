const express = require("express");
const router = express.Router();

const Task = require("../models/task");



router.get("/:wallet", async (req, res) => {
  try {
    // const { wallet} = req.body;
    const { wallet } = req.params;

    console.log("wallet", wallet, wallet.toLocaleLowerCase())

    if (!wallet) {
      return res.send({
        error: true,
        message: "Please Enter Valid wallet",
      });
    }

    //1. Find if any account with that email exists in DB
    const user = await Task.findOne({walletAddress:wallet.toLocaleLowerCase() });

    console.log ("user", user)

    // NOT FOUND - Throw error
    if (user) {
      return res.send({
        success: true,
        message: "Congratulations! You're on the blastlist!!",
      });
    }

    //Success
    return res.send({
      error: true,
      message: "Sorry, You're not on the blastlist!",

    });
  } catch (err) {
    console.error("Login error", err);
    return res.status(500).json({
      error: true,
      message: "Couldn't login. Please try again later.",
    });
  }
});

module.exports = router;
