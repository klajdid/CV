import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/cv-data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  protected readonly experience = EXPERIENCE;
}
