angular
    .module("DroneCafeApp")
    .factory("DishService", function ($resource, config) {

        return $resource(config.apiUrl + '/dishes/:_id/',
            {
                _id: '@_id'
            },
            {
                query: {
                    transformResponse: function (responseData) {
                        return angular.fromJson(responseData);
                    }
                }
            });

    });