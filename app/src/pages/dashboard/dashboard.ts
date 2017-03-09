import { Component } from '@angular/core';
import { LocalNotifications } from 'ionic-native';


import { ToastController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

// Providers
import { CustomerProvider } from '../../providers/customer.provider';
import { ProjectProvider } from '../../providers/project.provider';
import { MilestoneProvider } from '../../providers/milestone.provider';
import { SettingsProvider } from '../../providers/settings.provider';


@Component({
  selector: 'page-dash',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  public selectedCustomer;
  public selectedProject;
  public selectedMilestone;



  public activeCustomer: Object = new Object();
  public activeProject: Object = new Object();
  public activeMilestone: Object = new Object();

  public timerObj;
  public timerState = false;

  public sessionTime: number = 0;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public customerProvider: CustomerProvider,
    public projectProvider: ProjectProvider,
    public milestoneProvider: MilestoneProvider,
    public settingsProvider: SettingsProvider
  ) {

    LocalNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      data: { secret: "test" }
    });

    let settings = this.settingsProvider.settings;
    if (settings['lastSelected']) {
      let lastSelectedProject = this.settingsProvider.settings['lastSelected']['project'];
      if (lastSelectedProject) {
        this.selectedProject = lastSelectedProject;
      }

      let lastSelectedCustomer = this.settingsProvider.settings['lastSelected']['customer'];
      if (lastSelectedCustomer) {
        this.selectedCustomer = lastSelectedCustomer;
      }

      let lastSelectedMilestone = this.settingsProvider.settings['lastSelected']['milestone'];
      if (lastSelectedMilestone) {
        this.selectedMilestone = lastSelectedMilestone;
      }
    }

  }

  formatDuration(duration) {
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration - (hours * 3600)) / 60);
    let seconds = duration - (hours * 3600) - (minutes * 60);

    let strHours = hours.toString();
    let strMinutes = minutes.toString();
    let strSeconds = seconds.toString();

    if (hours < 10) { strHours = "0" + hours; }
    if (minutes < 10) { strMinutes = "0" + minutes; }
    if (seconds < 10) { strSeconds = "0" + seconds; }
    return strHours + ':' + strMinutes + ':' + strSeconds;
  }

  getFormatedSessionDuration() {
    return this.formatDuration(this.sessionTime);
  }

  getFormatedTimeLeft() {
    if (!this.activeMilestone['duration']) {
      return '00:00:00';
    }
    let timeleft = this.activeMilestone['timelimit'] - this.activeMilestone['duration'];
    return this.formatDuration(timeleft);
  }

  changeCustomer() {
    this.activeCustomer = this.customerProvider.getCustomerById(this.selectedCustomer);
    this.settingsProvider.setSelectedDashboard('customer', this.activeCustomer['id']);
  }

  changeProject() {
    this.activeProject = this.projectProvider.getProjectById(this.selectedProject);
    this.settingsProvider.setSelectedDashboard('project', this.activeProject['id']);
  }

  changeMilestone() {
    this.activeMilestone = this.milestoneProvider.getMilestoneById(this.selectedMilestone);
    this.settingsProvider.setSelectedDashboard('milestone', this.activeMilestone['id']);
  }


  toggleTimer() {

    // Turn off Timer
    if (this.timerState) {
      clearInterval(this.timerObj);
      this.sessionTime = 0;
      this.milestoneProvider.saveMilestonesToDatabase();
    }

    else {
      // Check if milestone is selected
      if (!this.selectedMilestone) {
        let toast = this.toastCtrl.create({
          message: 'Please select a milestone',
          duration: 2000
        });
        toast.present();
        return;
      }

      // Start timer
      this.timerObj = setInterval(() => {
        this.activeMilestone['duration']++;
        this.sessionTime++;
      }, 1000);
    }

    // Change Timer State
    this.timerState = !this.timerState;
  }

}
