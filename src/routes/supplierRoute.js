import controller from '../controllers/supplierController';

export default (app) => {
  app.post('/supplier/persist', controller.persist);
  app.post('/supplier/persist/:id', controller.persist);
  app.post('/supplier/destroy', controller.destroy);
  app.get('/supplier', controller.get);
  app.get('/supplier/:id', controller.get);
};
