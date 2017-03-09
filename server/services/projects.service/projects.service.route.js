// Service
var controller = require('./projects.service.controller');


// Main-Function import
exports.import = function (_app) {
    _app.get('/api/v1/project/', function (req, res) {
        controller.getAllProjects(req, res);
    })
        .get('/api/v1/project/:id', function (req, res) {
            controller.getProject(req, res);
        })
        .post('/api/v1/project', (req, res) => {
            controller.createProject(req, res);
        })
        .put('/api/v1/project/:id?', function (req, res) {
            controller.updateProject(req, res);
        })
        .delete('/api/v1/project/:id?', function (req, res) {
            controller.deleteProject(req, res);
        })
}