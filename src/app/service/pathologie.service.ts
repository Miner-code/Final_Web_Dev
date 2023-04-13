import { Injectable } from '@angular/core';
import { Pathologie } from '../model/pathologie';

@Injectable({
  providedIn: 'root'
})
export class PathologieService {

  static pathologies : Array<Pathologie> = [
    {
      nom : "Pathologie Neuroligique",
      descriptif : "tset",
      image_source : ""
    },
    {
      nom : "Pathologie Rhumatologique",
      descriptif : "tset",
      image_source : ""
    },
    {
      nom : "Pathologie Orthopédique",
      descriptif : "tset",
      image_source : ""
    }
  ]

  constructor() { }

  static getPathologies() {
    return this.pathologies
  }
}
