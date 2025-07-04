import { Component } from '@angular/core';
import { CardExperienceComponent } from './card-experience/card-experience.component';
import experienceJson from "../../../data/experience.json"
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-experience',
  imports: [CardExperienceComponent, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experience = experienceJson
  
    ngOnInit() {
    AOS.init();
  }
}
