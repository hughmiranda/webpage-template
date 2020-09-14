import { Component, OnInit } from '@angular/core';
import {Loader, LoaderOptions} from 'google-maps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

    initMap() {
      const options: LoaderOptions = {/* todo */};
      const loader = new Loader('AIzaSyCktHpB0tHTiAqXU1UMWC644uBk_QFs9D8', options);
      loader.load().then((google) => {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 25.6326, lng: -100.2347},
            zoom: 12,
        });
    });
  }

}
