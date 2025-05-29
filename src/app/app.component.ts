import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { ProyectsComponent } from './component/proyects/proyects.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProfileComponent, ExperienceComponent, ProyectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio2';


}
