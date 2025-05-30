import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { ProyectsComponent } from './component/proyects/proyects.component';
import { EstudiesComponent } from './component/estudies/estudies.component';
import { TechIconComponent } from './component/tech-icon/tech-icon.component';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, HeaderComponent, ProfileComponent, ExperienceComponent, ProyectsComponent, EstudiesComponent, TechIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Juan Manuel Sanchez';
}
