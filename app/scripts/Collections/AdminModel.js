import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot:`https://baas.kinvey.com/appdata/kid_H1o3YfRo/Visitors`,
  defaults: {
    country: 0,
    regionCode: 0,
    district: '',
    latitude: 0,
    longitude: 0,
    date: ''
  },
});
