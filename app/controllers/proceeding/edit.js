import Ember from 'ember';
import BufferedMixin from 'ember-buffered-proxy/mixin';

export default Ember.ObjectController.extend(BufferedMixin, {

	actions: {
		save: function() {
			
			this.applyBufferedChanges();
			this.get('model').save();
		}
	}

});
