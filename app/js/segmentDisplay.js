function segmentDisplay() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            name: '=',
            exportSkill: '&'
        },
        templateUrl: 'templates/segment-display.html'
    };
}

angular.module('terminusSegmentsApp')
    .directive('segmentDisplay', segmentDisplay);