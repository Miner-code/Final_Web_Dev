import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent {
  constructor(private router: Router) {}
}
