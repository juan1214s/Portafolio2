import { Component } from '@angular/core';
import proyectJon from "../../../data/proyects.json"
import { CommonModule } from '@angular/common';
import { CardProyectComponent } from "./card-proyect/card-proyect.component";
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [
    CommonModule,
    CardProyectComponent
],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {

  projects = proyectJon
        ngOnInit() {
        AOS.init();
      }
 }
