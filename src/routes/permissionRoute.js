import controller from '../controllers/permissionController';

export default (app) => {
  app.post('/permission/persist', controller.persist);
  app.post('/permission/persist/:id', controller.persist);
  app.post('/permission/destroy', controller.destroy);
  app.get('/permission', controller.get);
  app.get('/permission/:id', controller.get);
};
