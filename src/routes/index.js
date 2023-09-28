import adressRoute from './addressRoute';
import institutionRoute from './institutionRoute';
import contactRoute from './contactRoute';
import personAccountRoute from './personAccountRoute';
import denunciationRoute from './denunciationRoute';
import fieldRoute from './fieldRoute';
import { removeAllListeners } from 'nodemon';

function Routes(app) {
  institutionRoute(app)
  adressRoute(app);
  contactRoute(app);
  personAccountRoute(app);
  denunciationRoute(app);
  fieldRoute(app);
}

export default Routes;
