var projectsService = require('./projects.service/projects.service.route');

exports.importAll = (_app) =>{
    projectsService.import(_app);
} 