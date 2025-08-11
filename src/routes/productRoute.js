import controller from '../controllers/productController';

export default (app) => {
  app.post('/product/persist', controller.persist);
  app.post('/product/persist/:id', controller.persist);
  app.post('/product/destroy', controller.destroy);
  app.get('/product', controller.get);
  app.get('/product/:id', controller.get);
};
