const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
  burger.all(data => {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  //we pass the column names as an array
  //the new values for each column as another array

  burger.create(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    result => {
      //here we send back the ID of the new burger
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  let condition = `id = ${req.params.id}`;
  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    result => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", (req, res) => {
  console.log(req.params.id)
  let condition = `id = ${req.params.id}`;
  burger.delete(condition, result => {
    if(result.affectedRows == 0) {
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
  });
});

module.exports = router;
