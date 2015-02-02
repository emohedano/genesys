import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		
    	return this.store.find('proceeding');
  	},
  	renderTemplate: function () {
  		
  		this.render({
  			outlet: 'main-panel-body'
  		});
  	}
});