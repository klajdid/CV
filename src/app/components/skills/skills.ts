import { Component } from '@angular/core';
import { SKILLS } from '../../data/cv-data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  protected readonly skills = SKILLS;
}
