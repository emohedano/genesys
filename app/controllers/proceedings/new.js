import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		save: function() {

			// Get the todo title set by the "New Todo" text field
			var name = this.get('name');
			if (!name.trim()) { return; }

			// Create the new Todo model
			var proceeding = this.store.createRecord('proceeding', {
				name: name
			});

			// Save the new model
			proceeding.save()
			.then(()=>{

				this.transitionToRoute('proceeding.edit', proceeding);
			});

		}
	}
});
