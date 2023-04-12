import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pathologie } from 'src/app/model/pathologie';
import { PathologieService } from 'src/app/service/pathologie.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(private router: Router) {}

  pathologies : Array<Pathologie> = [];
  ngOnInit(){
    this.pathologies = PathologieService.getPathologies();
  }
}
