import { Injectable } from '@angular/core';
import { ConnectionProvider } from './connection.provider';

/*
  Projects Object
  id: Id of project
  name: name of project
  description: description of project
  customerId: id of customer  
  duration: duration of the project
  timelimit: maximum amount of time which is available for the project
  startdate: start date of the project
*/
@Injectable()
export class ProjectProvider {

  public projects = new Array();


  constructor(public connection: ConnectionProvider) {
    this.loadProjectsFromAPI();
  }

  // Load projects from api
  loadProjectsFromAPI() {
    var h = this;
    this.connection.getReqeuest('/api/v1/project', function (results) {
      console.log(results);
      h.projects = results;
    });
  }

  // Return all the projects
  getAllProjects() {
    return this.projects;
  }

  // Get a specific project by its id
  getProjectById(id) {
    return this.projects[this.getProjectKeyByID(id)];
  }

  getProjectKeyByID(id) {
    for (let key in this.projects) {
      if (this.projects[key].id == id) {
        return key;
      }
    }
  }

  // Add a new project
  addProject(project) {
    var h = this;
    return this.connection.postReqeuest('/api/v1/project', project, function (results) {
      if (results.errorCode == null) {
        h.loadProjectsFromAPI();
        return this.getProjectById(project.id);
      }
    });
  }

  updateProject(projectUpdate) {
    var h = this;
    return this.connection.putReqeuest('/api/v1/project', projectUpdate, function (results) {
      if (results.errorCode == null) {
        h.loadProjectsFromAPI();
        return this.getProjectById(projectUpdate.id);
      }
    });
  }

  deleteProject(id) {
    var h = this;
    return this.connection.deleteReqeuest('/api/v1/project/' + id, function (results) {
      if (results.errorCode == null) {
        h.loadProjectsFromAPI();
      }
    });
  }

}