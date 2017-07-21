var protobuf = require('protobufjs');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(req.body);
    context.log('Hello');

    if (req.query.validationCode || (req.body && req.body.validationCode)) {
        context.res = {
            status: 200, /* Defaults to 200 */
            //body: "Hello " + (req.query.validationcode || req.body.validationcode)
            body: "Hello"
        };
    }
    else {
        context.res = {
            status: 200
        };
    }
    context.done();
};
