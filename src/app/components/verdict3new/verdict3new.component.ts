import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ISectionData } from '../../assets/sectionData';

@Component({
  selector: 'app-verdict3new',
  templateUrl: './verdict3new.component.html',
  // styleUrls: ['./verdict3new.component.css'],
  standalone: true,
  imports:[
    CommonModule
  ]
  // styleUrl: './verdict3new.component.css',

})
export class Verdict3newComponent {
  @Input() sectionData!: ISectionData[]; //props
}
