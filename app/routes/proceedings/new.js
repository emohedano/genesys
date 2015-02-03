import Ember from 'ember';

export default Ember.Route.extend({
	
	renderTemplate: function(){

		this.render('proceeding.edit',{
			outlet: 'secondary-panel',
			controller: 'proceedings.new'
		});

	}
});
