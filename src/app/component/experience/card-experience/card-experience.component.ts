import { Component, input } from '@angular/core';
import { ExperienceDto } from '../../../interfaces/experienciesInterface/experience.interface';

@Component({
  selector: 'app-card-experience',
  imports: [],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.css'
})
export class CardExperienceComponent {

  experience = input.required<ExperienceDto>();

}
