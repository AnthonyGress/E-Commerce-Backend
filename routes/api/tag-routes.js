const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new tag
  res.status(200).json({ msg: `Added new Tag ${req.body.name}` });
  return Tag.create({
    tag_name: `${req.body.name}`,
  });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  res.status(200).json({
    msg: `Updated Tag ID ${req.params.id}, It is now ${req.body.name}`,
  });
  return Tag.update(
    { tag_name: req.body.name },
    { where: { id: req.params.id } }
  );
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  res.status(200).json({
    msg: `Destroyed Tag ID ${req.params.id}`,
  });
  return Tag.destroy({ where: { id: req.params.id } });
});

module.exports = router;
