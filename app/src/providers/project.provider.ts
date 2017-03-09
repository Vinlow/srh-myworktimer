import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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


  constructor(public http: Http) {

    this.loadProjectsFromDatabase();

    this.generateExampleData(2);
  }

  // Save the database
  saveProjectsToDatabase() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }

  // Load the database
  loadProjectsFromDatabase() {
    let storageJson = localStorage.getItem('projects');
    if (!storageJson) {
      storageJson = '[]';
    }
    this.projects = JSON.parse(storageJson);
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
    this.projects.push(project);
    this.saveProjectsToDatabase();
    return this.getProjectById(project.id);
  }

  updateProject(projectUpdate) {
    let projectKey = this.getProjectKeyByID(projectUpdate.id);
    this.projects[projectKey] = projectUpdate;
    this.saveProjectsToDatabase();
    return this.projects[projectKey];
  }

  deleteProject(id) {
    let projectKey = this.getProjectKeyByID(id);
    if (!projectKey) {
      return;
    }
    let projectKeyInt = parseInt(projectKey);
    this.projects.splice(projectKeyInt, 1);
    this.saveProjectsToDatabase();
  }

  generateExampleData(amount) {

    for (let i = 0; i <= amount; i++) {
      let newProject = new Object();
      newProject['id'] = Math.random();
      newProject['name'] = Math.round(Math.random() * 1000);
      newProject['desc'] = Math.random();
      newProject['customerId'] = Math.random();
      newProject['duration'] = Math.random();

      this.addProject(newProject);
    }

  }





}
