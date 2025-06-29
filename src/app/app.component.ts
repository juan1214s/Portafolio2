import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { ProyectsComponent } from './component/proyects/proyects.component';
import { EstudiesComponent } from './component/estudies/estudies.component';
import { TechIconComponent } from './component/tech-icon/tech-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ProfileComponent,
    ExperienceComponent,
    ProyectsComponent,
    EstudiesComponent,
    TechIconComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Juan Manuel Sanchez';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 👈 Esto asegura scroll al top
      });
  }
}
