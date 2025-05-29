import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import experienceJson from "../../../data/proyects.json"
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProyectsComponent {

  projects = experienceJson

  // íconos que usarás
  faGithub = faGithub;
  faArrowRight = faArrowRight;
 }
