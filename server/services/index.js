var projectsService = require('./projects.service/projects.service.route');

exports.importAll = (_app, _database) =>{
    projectsService.import(_app, _database);
} 