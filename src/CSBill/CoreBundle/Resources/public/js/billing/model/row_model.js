define(['backbone'], function (Backbone) {
    return Backbone.Model.extend({
        defaults: {
            fields: {},
            description: '',
            price: 0,
            qty: 0,
            total: 0
        }
    });
});