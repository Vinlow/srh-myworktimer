import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProjectProvider } from '../../providers/project.provider';


/*
  Generated class for the ProjectDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-project-detail',
  templateUrl: 'project-detail.html'
})
export class ProjectDetailPage {

  public pageTitle = "";
  public editMode = false;

  public project = new Object({

  })

  constructor(public navCtrl: NavController, public navParams: NavParams, public projectProvider: ProjectProvider) {

    let projectId = this.navParams.data.id;
    if (projectId != null) {
      this.project = this.projectProvider.getProjectById(projectId);
      this.pageTitle = "Details: " + this.project['name'];
    }
    else {
      this.pageTitle = "New Project";
    }


  }

  saveItem() {
    if (this.project['id']) {
      let call = this.projectProvider.updateProject(this.project);
      if(call == null){
        // Fehler anzeigen
      }
    }
    else {
      this.projectProvider.addProject(this.project);
    }

    console.log(this.project);

    console.log(new Date(this.project['startdate']));

    this.navCtrl.pop();
  }

  editItem() {
    this.editMode = !this.editMode;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetailPage');
  }

}
