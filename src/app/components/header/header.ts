import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';
import { PROFILE } from '../../data/cv-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  protected readonly theme = inject(ThemeService);
  protected readonly name = PROFILE.fullName;

  protected toggleTheme(): void {
    this.theme.toggle();
  }
}
