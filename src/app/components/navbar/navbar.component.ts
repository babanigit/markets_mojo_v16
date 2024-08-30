import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // styleUrl: './navbar.component.css',
  standalone:true,
  imports:[
    RouterModule
  ]
})
export class NavbarComponent {

}
