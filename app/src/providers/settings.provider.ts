import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {

  public settings = new Object();

  constructor() {
    this.loadSettingsFromDatabase();
  }

  loadSettingsFromDatabase() {
    let storageJson = localStorage.getItem('settings');
    if (!storageJson) {
      storageJson = '{}';
    }
    this.settings = JSON.parse(storageJson);
  }

  // Save the database
  saveSettingsToDatabase() {
    localStorage.setItem("settings", JSON.stringify(this.settings));
  }

  setSelectedDashboard(itemName, itemId){
    if(this.settings['lastSelected'] == null){
      this.settings['lastSelected'] = new Object();
    }

    this.settings['lastSelected'][itemName] = itemId;
    this.saveSettingsToDatabase();
  }

}
