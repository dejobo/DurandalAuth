﻿define(['services/unitofwork'] , function(unitofwork) {
    return {
        userProfiles: ko.observableArray(),
        activate: function () {
            var self = this,
                uow = unitofwork.create();
            ga('send', 'pageview');
            return  uow.userprofiles.all().then(function (data) {
                self.userProfiles(data);
            });
        }
    }
});