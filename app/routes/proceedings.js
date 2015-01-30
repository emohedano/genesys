import Ember from 'ember';

var ProceedingsRoute = Ember.Route.extend({
	model: function () {
		
    	return this.store.find('proceeding');
  	}
});


export default ProceedingsRoute;