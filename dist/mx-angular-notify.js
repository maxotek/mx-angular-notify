/*!
 * See LICENSE in this repository for license information
 */
(function(){
(function () {
    "use strict";

    angular.module("mx-angular-notify", ["toastr"]);
})();
"use strict";
 
(function () {
    angular
        .module("mx-angular-notify")
        .factory("mxngNotifyService", mxngNotifyService);
 
    mxngNotifyService.$inject = ["toastr"];
 
    function mxngNotifyService(toastr) {
        return {
            displaySuccess: displaySuccess,
            displayError: displayError,
            displayWarning: displayWarning,
            displayInfo: displayInfo,
            handleDataError: handleDataError
        };
 
        function displaySuccess(message) {
            toastr.success(message);
        }
 
        function displayError(error) {
            if (Array.isArray(error)) {
                error.forEach(function (err) {
                    toastr.error(err);
                });
            } else {
                toastr.error(error, "Error");
            }
        }
 
        function displayWarning(message) {
            toastr.warning(message);
        }
 
        function displayInfo(message) {
            toastr.info(message);
        }
 
        function handleDataError(response) {
            console.log(response);
 
            if (!response.data)
                return displayError("Unable to connect to API server");
 
            var error = response.data.message || response.data.error_description || response.data;
            if (error)
                displayError(error);
            else
                displayError(response.statusText);
        }
    }
})();
})();