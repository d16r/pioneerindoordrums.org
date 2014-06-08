'use strict';

app.factory('FAQ', function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'faqs');
 
    var faqs = $firebase(ref);
    
    var FAQ = {
        all: faqs,
        create: function (faq) {
            return faqs.$add(faq);
        }
    };
    
    return FAQ;
});
