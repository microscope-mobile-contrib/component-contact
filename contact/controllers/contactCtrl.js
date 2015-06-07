'use strict';

// privates
var _contactsService;

// Contact controller class
function ContactCtrl (ContactService) {
   
    _contactsService = ContactService;
	 
    this.data = {
        selectedContacts : []
    };
}

/**
 * pickContact
 * @return {[type]}
 */
ContactCtrl.prototype.pickContact = function () {
	var self = this;
	  
	ContactCtrl.pickContact().then(
                function(contact) {
                    self.data.selectedContacts.push(contact);
                    console.log("Selected contacts=");
                    console.log(self.data.selectedContacts);

                },
                function(failure) {
                    console.log("Bummer.  Failed to pick a contact");
                }
          );
  

};

module.exports = ContactCtrl;