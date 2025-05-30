import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ProyectDto } from '../../../interfaces/proyectInterface/proyect.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-proyect',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card-proyect.component.html',
  styleUrl: './card-proyect.component.css'
})
export class CardProyectComponent {

  proyect = input.required<ProyectDto>();
  
  // íconos que usarás
  faGithub = faGithub;
  faArrowRight = faArrowRight;

}
