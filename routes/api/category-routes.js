const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', async (req, res) => {
  const categories = await Category.findAll({
    include: [Product]
  })
  res.send(categories);
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  const category_id = req.params.id;
  const include_products = req.query.category_id;

  if(category_id){
    const category = await Category.findOne({
      include: Product,
      where: {
        id: category_id
      }
    })
    res.send(category);
  } else res.send ("Cannot find Category with an associated Product.")

  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
