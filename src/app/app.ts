import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { PROFILE } from './data/cv-data';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Experience, Skills, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly name = PROFILE.fullName;
}
