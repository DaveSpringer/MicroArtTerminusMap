function segmentSelect() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            name: '=',
            selectSegment: '&'
        },
        templateUrl: 'templates/segment-select.html'
    };
}

angular.module('terminusSegmentsApp')
    .directive('segmentSelect', segmentSelect);