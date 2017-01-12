import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    country: 0,
    regionCode: 0,
    district: '',
    latitude: 0,
    longitude: 0,
    date: ''
  },
});
