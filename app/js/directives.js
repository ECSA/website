'use strict';

/* Directives */
var ecsaDirectives = angular.module('ecsaDirectives', []);

ecsaDirectives.directive("twitterTimeline", function($timeout) {
    return { 
        restrict: 'E',
        template: '<a class="twitter-timeline" width="370" href="https://twitter.com/uAlbertaECSA" data-widget-id="490649275068456960">Tweets by @uAlbertaECSA</a>',
        link: function(scope, element, attrs) {
            function run(){
                (!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"));
            };
            run();
            $timeout = twttr.widgets.load();
        }
   };
});
