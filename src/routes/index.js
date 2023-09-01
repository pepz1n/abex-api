import adressRoute from './adressRoute';
import institutionRoute from './institutionRoute';

function Routes(app) {
  institutionRoute(app)
  adressRoute(app);
}

export default Routes;
