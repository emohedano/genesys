import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		createProceeding: function() {

			// Get the todo title set by the "New Todo" text field
			var name = this.get('newName');
			if (!name.trim()) { return; }

			// Create the new Todo model
			var proceeding = this.store.createRecord('proceeding', {
				name: name
			});

			// Clear the "New Todo" text field
			this.set('newName', '');

			// Save the new model
			proceeding.save();
		}
	}
});
