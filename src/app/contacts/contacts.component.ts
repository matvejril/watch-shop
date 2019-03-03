import { Component, OnInit} from '@angular/core';

import * as DG from '2gis-maps'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  ourCoords = [55.057932, 82.936398]
  constructor() { }
  ngOnInit() {
    let contactMap = DG.map('contacts-map', {
      center: this.ourCoords,
      zoom: 16,
      scrollWheelZoom: false,
    })
    DG.marker(this.ourCoords).addTo(contactMap).bindPopup('Мы здесь!')
  }
}
