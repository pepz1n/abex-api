import controller from '../controllers/fieldController';

export default (app) => {
  app.post('/field/persist', controller.persist);
  app.post('/field/persist/:id', controller.persist);
  app.post('/field/destroy', controller.destroy);
  app.get('/field', controller.get);
  app.get('/field/:id', controller.get);
};
