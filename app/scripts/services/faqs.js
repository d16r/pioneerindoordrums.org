'use strict';

app.factory('FAQ', function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'faqs');
 
    var faqs = $firebase(ref);
    
    var FAQ = {
        all: faqs,
        create: function (faq) {
            return faqs.$add(faq);
        },
        remove: function (id) {
            return faqs.$remove(id);
        },
        update: function (id, faq) {
            return faqs.$update(id, faq);
        }
    };
    
    return FAQ;
});
