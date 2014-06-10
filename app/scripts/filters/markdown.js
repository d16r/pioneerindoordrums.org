'use strict';

app.filter('markdown', function($sce) {
    var converter = new Showdown.converter();
    return function(value) {
        var html = converter.makeHtml(value || '');
        return $sce.trustAsHtml(html);
    };
});