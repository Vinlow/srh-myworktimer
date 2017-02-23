import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProjectDetailPage } from '../project-detail/project-detail';

import { ProjectProvider } from '../../providers/project.provider';

/*
  Generated class for the Manager page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html'
})
export class ManagerPage {

  manageType: string = "customers";

  public projectList = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, public projectProvider: ProjectProvider) {
    this.projectList = this.projectProvider.getAllProjects();
  }

  selectListItem(item) {
    this.navCtrl.push(ProjectDetailPage, { id: item.id });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerPage');
  }

}