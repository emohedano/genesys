import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  	location: config.locationType
});

Router.map(function() {


	this.resource('proceedings',function () {

		this.route('new');

		this.resource('proceeding',{ path: '/:proceeding_id' });
	
	});

	

});

export default Router;
