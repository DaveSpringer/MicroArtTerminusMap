function segmentDisplay() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            id: '=',
            selection: '=',
            rotation: '=',
            setDisplaySegment: '&'
        },
        templateUrl: 'templates/segment-display.html'
    };
}

angular.module('terminusSegmentsApp')
    .directive('segmentDisplay', segmentDisplay);