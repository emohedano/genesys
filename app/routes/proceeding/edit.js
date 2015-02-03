import Ember from 'ember';
import BufferedProxy from 'ember-buffered-proxy/proxy';

export default Ember.Route.extend({

  	renderTemplate: function () {
  		
  		this.render({
  			outlet: 'secondary-panel'
  		});
  	}
});