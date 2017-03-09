// Service
var controller = require('./projects.service.controller');


// Main-Function import
exports.import = function (_app, _database) {
    _app.get('/api/v1/project/', function (req, res) {
        controller.getAllProjects(req, res, _database);
    })
        .get('/api/v1/project/:id', function (req, res) {
            controller.getProject(req, res, _database);
        })
        .post('/api/v1/project', (req, res) => {
            controller.createProject(req, res, _database);
        })
        .put('/api/v1/project/:id?', function (req, res) {
            controller.updateProject(req, res, _database);
        })
        .delete('/api/v1/project/:id?', function (req, res) {
            controller.deleteProject(req, res, _database);
        })
}