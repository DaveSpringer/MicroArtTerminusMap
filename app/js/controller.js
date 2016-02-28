function TerminusSegmentsController($scope, $http) {
    $scope.skills = [];
    $scope.segments = [];
    $http.get('resources/segments.json').success(function (data) {
        $scope.segments = data;
    });

    $scope.displaySegments = [];
    $scope.displaySegments[0] = {
        "id": "0",
        "selection": "ts-1",
        "orientation": "0"
    }
    $scope.displaySegments[1] = {
        "id": "1",
        "selection": "ts-2",
        "orientation": "0"
    }
    $scope.displaySegments[2] = {
        "id": "2",
        "selection": "ts-3",
        "orientation": "0"
    }
    $scope.displaySegments[3] = {
        "id": "3",
        "selection": "ts-4",
        "orientation": "0"
    }
    $scope.displaySegments[4] = {
        "id": "4",
        "selection": "ts-5",
        "orientation": "0"
    }
    $scope.displaySegments[5] = {
        "id": "5",
        "selection": "ts-6",
        "orientation": "0"
    }
    $scope.displaySegments[6] = {
        "id": "6",
        "selection": "ts-7",
        "orientation": "0"
    }
    $scope.displaySegments[7] = {
        "id": "7",
        "selection": "ts-8",
        "orientation": "0"
    }
    $scope.displaySegments[8] = {
        "id": "8",
        "selection": "ts-9",
        "orientation": "0"
    }
    $scope.displaySegments[9] = {
        "id": "9",
        "selection": "ts-1",
        "orientation": "0"
    }
    $scope.displaySegments[10] = {
        "id": "10",
        "selection": "ts-1",
        "orientation": "0"
    }
    $scope.displaySegments[11] = {
        "id": "11",
        "selection": "ts-1",
        "orientation": "0"
    }
    $scope.displaySegments[12] = {
        "id": "12",
        "selection": "ts-1",
        "orientation": "0"
    }
    $scope.displaySegments[13] = {
        "id": "13",
        "selection": "ts-1",
        "orientation": "0"
    }
    $scope.displaySegments[14] = {
        "id": "14",
        "selection": "ts-1",
        "orientation": "0"
    }
    $scope.displaySegments[15] = {
        "id": "15",
        "selection": "ts-1",
        "orientation": "0"
    }

    $scope.selectSegment = function (id) {
        $scope.selectedSegment = id;
        debugger;
    }

    $scope.setDisplaySegment = function (id) {
        debugger;
        if (typeof $scope.selectedSegment !== "undefined") {
            $scope.displaySegments[id].selection = $scope.selectedSegment;
        }
    }
}

/* json-text directive taken from here:
http://stackoverflow.com/questions/17893708/angularjs-textarea-bind-to-json-object-shows-object-object
*/
function jsonText() {
    return {
        restrict: 'A', // only activate on element attribute
        require: 'ngModel', // get a hold of NgModelController
        link: function (scope, element, attrs, ngModelCtrl) {

            var lastValid;

            // push() if faster than unshift(), and avail. in IE8 and earlier (unshift isn't)
            ngModelCtrl.$parsers.push(fromUser);
            ngModelCtrl.$formatters.push(toUser);

            // clear any invalid changes on blur
            element.bind('blur', function () {
                element.val(toUser(scope.$eval(attrs.ngModel)));
            });

            // $watch(attrs.ngModel) wouldn't work if this directive created a new scope;
            // see http://stackoverflow.com/questions/14693052/watch-ngmodel-from-inside-directive-using-isolate-scope how to do it then
            scope.$watch(attrs.ngModel, function (newValue, oldValue) {
                lastValid = lastValid || newValue;

                if (newValue != oldValue) {
                    ngModelCtrl.$setViewValue(toUser(newValue));

                    // TODO avoid this causing the focus of the input to be lost..
                    ngModelCtrl.$render();
                }
            }, true); // MUST use objectEquality (true) here, for some reason..

            function fromUser(text) {
                // Beware: trim() is not available in old browsers
                if (!text || text.trim() === '') {
                    return {};
                } else {
                    try {
                        lastValid = angular.fromJson(text);
                        ngModelCtrl.$setValidity('invalidJson', true);
                    } catch (e) {
                        ngModelCtrl.$setValidity('invalidJson', false);
                    }
                    return lastValid;
                }
            }

            function toUser(object) {
                // better than JSON.stringify(), because it formats + filters $$hashKey etc.
                return angular.toJson(object, true);
            }
        }
    };
}

angular.module('terminusSegmentsApp', [])
    .controller('TerminusSegmentsController', TerminusSegmentsController)
    .directive('jsonText', jsonText);