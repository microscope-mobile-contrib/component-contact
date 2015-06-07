'use strict';

// privates
var _$q;

// Contacts service class
function ContactsService($q) {

    _$q = $q;

    function formatContact(contact) {

        return {
            "displayName": contact.name.formatted || contact.name.givenName + " " + contact.name.familyName || "Mystery Person",
            "emails": contact.emails || [],
            "phones": contact.phoneNumbers || [],
            "photos": contact.photos || []
        };
    };
}

/**
* take pickContact
* @return {[type]}
*/
ContactsService.prototype.pickContact = function () {
    var self = this;
    var deferred = _$q.defer();

    if (navigator && navigator.contacts) {

        navigator.contacts.pickContact(function (contact) {

            deferred.resolve(self.formatContact(contact));
        });

    } else {
        deferred.reject("Bummer.  No contacts in desktop browser");
    }

    return deferred.promise;


};

module.exports = ContactsService;