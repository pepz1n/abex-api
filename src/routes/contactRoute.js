import controller from '../controllers/contactController';

export default (app) => {
  app.post('/contact/persist', controller.persist);
  app.post('/contact/persist/:id', controller.persist);
  app.post('/contact/destroy', controller.destroy);
  app.get('/contact', controller.get);
  app.get('/contact/:id', controller.get);
};
