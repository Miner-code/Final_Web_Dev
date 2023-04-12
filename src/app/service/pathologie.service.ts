import { Injectable } from '@angular/core';
import { Pathologie } from '../model/pathologie';

@Injectable({
  providedIn: 'root'
})
export class PathologieService {

  static pathologies : Array<Pathologie> = [
    {
      nom : "Pathologie Neuroligique",
      descriptif : "tset"
    },
    {
      nom : "Pathologie Rhumatologique",
      descriptif : "tset"
    },
    {
      nom : "Pathologie Orthopédique",
      descriptif : "tset"
    }
  ]

  constructor() { }

  static getPathologies() {
    return this.pathologies
  }
}
