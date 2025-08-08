import adressRoute from './addressRoute';
import institutionRoute from './institutionRoute';
import supplierRoute from './supplierRoute';
import productRoute from './productRoute';

function Routes(app) {
  institutionRoute(app);
  adressRoute(app);
  supplierRoute(app);
  productRoute(app);
}

export default Routes;
