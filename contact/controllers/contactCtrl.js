'use strict';

// privates
var _contactsService;

// Contact controller class
function ContactCtrl (ContactsService) {

    console.log("test log !!!!!!!!!!!!!");
   
    _contactsService = ContactsService;
	 
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
	  
	_contactsService.pickContact().then(
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