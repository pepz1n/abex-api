import controller from '../controllers/institutionController';

export default (app) => {
  app.post('/institution/persist', controller.persist);
  app.post('/institution/persist/:id', controller.persist);
  app.post('/institution/destroy', controller.destroy);
  app.get('/institution', controller.get);
  app.get('/institution/:id', controller.get);
  app.get('/institution/view', controller.listView);
  app.get('/institution/view/create', controller.createView);
  app.get('/institution/view/edit/:id', controller.editView);
};
