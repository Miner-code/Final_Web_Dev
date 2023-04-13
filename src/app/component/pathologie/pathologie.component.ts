import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pathologie } from 'src/app/model/pathologie';
import { PathologieService } from 'src/app/service/pathologie.service';
@Component({
  selector: 'app-pathologie',
  templateUrl: './pathologie.component.html',
  styleUrls: ['./pathologie.component.css']
})
export class PathologieComponent {
  constructor(private router: Router) {}

  pathologies : Array<Pathologie> = [];
  i=0;
  ngOnInit(){
    this.pathologies = PathologieService.getPathologies();
  }

    getSlide() {
      return this.pathologies[this.i];
  }

  getPrev() {
      this.i = this.i===0 ? 0 : this.i - 1;
  }
  //edit here    
  getNext() {
      this.i = this.i===this.pathologies.length ? this.i : this.i + 1;
  }
}
