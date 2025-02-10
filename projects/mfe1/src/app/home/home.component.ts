import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { IonicModule, ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'mfe1-home',
  imports: [IonicModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements ViewDidEnter {
  location: { lat: number; lng: number } = { lat: 0, lng: 0 };
  count = 0;

  constructor() {
    setInterval(async () => {
      this.count++;
      await this.getLocation();
     }, 5000);
  }

  ionViewDidEnter(): void {
    setInterval(async () => {
      this.count++;
      await this.getLocation();
     }, 5000);
  }

  protected async getLocation() {
   return Geolocation.getCurrentPosition().then((coordinates) => {
      this.location.lat = coordinates.coords.latitude;
      this.location.lng = coordinates.coords.longitude
    }).catch((error) => {
      console.error('Error getting location', JSON.stringify(error));
    });
  }
}
