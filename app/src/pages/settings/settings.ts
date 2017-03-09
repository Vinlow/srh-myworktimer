import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SettingsProvider } from '../../providers/settings.provider';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public settingsProvider: SettingsProvider) {

  }

  saveSettings(){
    this.settingsProvider.saveSettingsToDatabase();
  }
}
