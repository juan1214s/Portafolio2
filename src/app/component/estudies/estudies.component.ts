import { Component } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-estudies',
  imports: [],
  templateUrl: './estudies.component.html',
  styleUrl: './estudies.component.css'
})
export class EstudiesComponent {

  ngOnInit() {
  AOS.init();
}

}
