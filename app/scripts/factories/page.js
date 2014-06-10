app.factory('Page', function() {
    var title = 'Pioneer Indoor';
    return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
    };
});