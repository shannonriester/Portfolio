import Backbone from 'backbone';
import AdminModel from './AdminModel';

export default Backbone.Collection.extend({
  model: AdminModel,
  url: `https://baas.kinvey.com/appdata/kid_H1o3YfRo/Visitors`,

});
