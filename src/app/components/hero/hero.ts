import { Component } from '@angular/core';
import { PROFILE } from '../../data/cv-data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  protected readonly profile = PROFILE;
}
