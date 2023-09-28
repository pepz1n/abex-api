import adressRoute from './addressRoute';
import institutionRoute from './institutionRoute';
import contactRoute from './contactRoute';
import personAccountRoute from './personAccountRoute';
import denunciationRoute from './denunciationRoute';
import permissionRoute from './permissionRoute';

function Routes(app) {
  institutionRoute(app);
  permissionRoute(app);
  adressRoute(app);
  contactRoute(app);
  personAccountRoute(app);
  denunciationRoute(app);
}

export default Routes;
