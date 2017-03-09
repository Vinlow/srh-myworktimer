import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MilestoneProvider } from '../../providers/milestone.provider';


/*
  Generated class for the milestoneDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-milestone-detail',
  templateUrl: 'milestone-detail.html'
})
export class MilestoneDetailPage {

  public pageTitle = "";
  public editMode = false;

  public milestone = new Object({

  })

  constructor(public navCtrl: NavController, public navParams: NavParams, public milestoneProvider: MilestoneProvider) {

    let milestoneId = this.navParams.data.id;
    if (milestoneId != null) {
      this.milestone = this.milestoneProvider.getMilestoneById(milestoneId);
      this.pageTitle = "Details: " + this.milestone['name'];
    }
    else {
      this.pageTitle = "New milestone";
    }


  }

  saveItem() {
    if (this.milestone['id']) {
      let call = this.milestoneProvider.updateMilestone(this.milestone);
      if (call == null) {
        // Fehler anzeigen
      }
    }
    else {
      this.milestoneProvider.addMilestone(this.milestone);
    }

    console.log(this.milestone);

    console.log(new Date(this.milestone['startdate']));

    this.navCtrl.pop();
  }

  editItem() {
    this.editMode = !this.editMode;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad milestoneDetailPage');
  }

}
