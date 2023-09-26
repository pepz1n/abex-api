import controller from '../controllers/personAccountController';

export default (app) => {
  app.post('/person-account/persist', controller.persist);
  app.post('/person-account/persist/:id', controller.persist);
  app.post('/person-account/destroy', controller.destroy);
  app.get('/person-account', controller.get);
  app.get('/person-account/:id', controller.get);
};
