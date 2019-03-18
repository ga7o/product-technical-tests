import { Component, OnInit  } from '@angular/core';
import {BoutiqueService} from "./services";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { latLng, tileLayer, marker, icon } from 'leaflet';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web-app';

  public boutiques

  public currentBoutique

  closeResult: string;

  public page = 1
  public pageSize = 10

  public leafletOptions
  public layersControl

  constructor(
    private _boutiqueService: BoutiqueService,
    private modalService: NgbModal
  ) {

  }


  ngOnInit() {
    this._boutiqueService.getBoutiques().subscribe(
      data => {
        this.boutiques = data
        console.log(`Boutiques data: ${this.boutiques}`)


      },
      err => {console.log('Error loading boutiques')},
      () => {console.log('Loading boutiques done!')}
    )
  }


  openModal(content, boutiqueId){
    console.log(`Open modal for ${boutiqueId}`)

    this._boutiqueService.getBoutiquesById(boutiqueId)
      .subscribe(
        data => {
          this.currentBoutique = data

          let streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          });

          let boutiqueMarker = marker([ this.currentBoutique.location.lat,  this.currentBoutique.location.lon], {
            icon: icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'leaflet/marker-icon.png',
              shadowUrl: 'leaflet/marker-shadow.png'
            })
          });

          this.layersControl = {
            baseLayers: {
              'Street Maps': streetMaps
            },
            overlays: {
              'Boutique': boutiqueMarker
            }
          };

          this.leafletOptions = {
            layers: [
              streetMaps,
              boutiqueMarker
            ],
            zoom: 25,
            center: latLng([ this.currentBoutique.location.lat,  this.currentBoutique.location.lon ])
          }


          this.modalService
            .open( content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'})
            .result
            .then((result) => {
              this.closeResult = `${result}`;
            }, (reason) => {
              this.closeResult = `${this.getDismissReason(reason)}`;
              this.currentBoutique = null
            });
        },
        err => {
          console.log('Error Open boutique modal')
        },
        () => {
          console.log('Open boutique done!')
        }
      )
  }


  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return '';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return '';
    } else {
      return  `${reason}`;
    }
  }
}
