import DS from 'ember-data';

var Proceeding = DS.Model.extend({
  name : DS.attr('string')
});

export default Proceeding;