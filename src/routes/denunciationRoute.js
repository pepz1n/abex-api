import controller from '../controllers/denunciationController';

export default (app) => {
  app.post('/denunciation/persist', controller.persist);
  app.post('/denunciation/persist/:id', controller.persist);
  app.post('/denunciation/destroy', controller.destroy);
  app.get('/denunciation', controller.get);
  app.get('/denunciation/:id', controller.get);
};
