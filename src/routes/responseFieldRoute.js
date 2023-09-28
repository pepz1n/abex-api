import controller from '../controllers/responseFieldController';

export default (app) => {
  app.post('/response-field/persist', controller.persist);
  app.post('/response-field/persist/:id', controller.persist);
  app.post('/response-field/destroy', controller.destroy);
  app.get('/response-field', controller.get);
  app.get('/response-field/:id', controller.get);
};
