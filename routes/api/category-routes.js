const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{ model: Product }]
  }).then((allCategoryData) => {
    res.json(allCategoryData);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findbyPk(req.params.id, {
    include: [{ model: Product }]
  }).then((oneCategoryData) => {
    res.json(oneCategoryData);
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then((newCategory) => {
    res.json(newCategory)
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {id: req.params.id}
    },
  ).then((updatedCategory) => {
    res.json(updatedCategory)
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((deleteData) => {
    res.json(deleteData);
  })
});

module.exports = router;
