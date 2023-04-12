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
  ngOnInit(){
    this.pathologies = PathologieService.getPathologies();
  }
}
