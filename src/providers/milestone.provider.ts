import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  milestones Object
  id: Id of milestones
  name: name of milestones
  description: description of milestones
  customerId: id of customer  
  duration: duration of the milestones
  timelimit: maximum amount of time which is available for the milestones
  startdate: start date of the milestones
*/
@Injectable()
export class MilestoneProvider {

  public milestones = new Array();

  constructor(public http: Http) {
    this.loadMilestonesFromDatabase();
  }

  // Save the database
  saveMilestonesToDatabase() {
    localStorage.setItem("milestones", JSON.stringify(this.milestones));
  }

  // Load the database
  loadMilestonesFromDatabase() {
    let storageJson = localStorage.getItem('milestones');
    if (!storageJson) {
      this.generateExampleData();
      this.saveMilestonesToDatabase();
      storageJson = localStorage.getItem('milestones');
    }
    this.milestones = JSON.parse(storageJson);
  }

  // Return all the milestones
  getAllMilestones() {
    return this.milestones;
  }

  // Get a specific milestones by its id
  getMilestoneById(id) {
    return this.milestones[this.getMilestoneKeyByID(id)];
  }

  getMilestoneKeyByID(id) {
    for (let key in this.milestones) {
      if (this.milestones[key].id == id) {
        return key;
      }
    }
  }

  // Add a new milestones
  addMilestone(milestones) {
    this.milestones.push(milestones);
    return this.getMilestoneById(milestones.id);
  }

  updateMilestone(milestonesUpdate) {
    let milestonesKey = this.getMilestoneKeyByID(milestonesUpdate.id);
    this.milestones[milestonesKey] = milestonesUpdate;
    return this.milestones[milestonesKey];
  }

  deleteMilestone(id) {
    let milestonesKey = this.getMilestoneKeyByID(id);
    if (!milestonesKey) {
      return;
    }
    let milestonesKeyInt = parseInt(milestonesKey);
    this.milestones.splice(milestonesKeyInt, 1);
  }

  generateExampleData() {
    let milestone = {};
    milestone['id'] = 500;
    milestone['name'] = "Base App";
    milestone['duration'] = 0;
    milestone['timelimit'] = 13 * 60 * 60;

    this.addMilestone(milestone);
  }

}
