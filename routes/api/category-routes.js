const router = require("express").Router();
const { request } = require("express");
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categories = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categories) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const create = await Category.create({
      category_name: `${req.body.name}`,
    });
    res
      .status(200)
      .json({ msg: `Added new Category ${req.body.name}`, response: create });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // TODO validate input
  // update a category by its `id` value
  try {
    const update = await Category.update(
      { category_name: req.body.name },
      { where: { id: req.params.id } }
    );
    res.status(200).json({
      msg: `Updated Category ID ${req.params.id}, It is now ${req.body.name}`,
      response: update,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const destroy = await Category.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      msg: `Destroyed Category ID ${req.params.id}`,
      response: destroy,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
