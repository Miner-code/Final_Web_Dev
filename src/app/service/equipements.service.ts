import { Injectable } from '@angular/core';
import { Equipement } from '../model/equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipementsService {

  constructor() { }

  static equipements : Array<Equipement> = [
    {
      nom : "Ondes de choc",
      descriptif : "test",
      utilisation : "test",
      image_source :""
    },
    {
      nom : "Phoenix",
      descriptif : "test",
      utilisation : "test",
      image_source :""
    },
    {
      nom : "Cellu M6 de LPG",
      descriptif : "test",
      utilisation : "test",
      image_source :""
    },
    {
      nom : "Ondes radar",
      descriptif : "test",
      utilisation : "test",
      image_source :""
    },
    {
      nom : "Hydrojet",
      descriptif : "test",
      utilisation : "test",
      image_source :""
    },
    {
      nom : "Huber de LPG",
      descriptif : "test",
      utilisation : "test",
      image_source :""
    },
    {
      nom : "Ultra-sons",
      descriptif : "test",
      utilisation : "test",
      image_source :""
    }
  ]

  static getEquipement(){
    return this.equipements;
  }
}
