import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-profile',
  imports: [ FontAwesomeModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    faLinkedin = faLinkedin;
    faWhatsapp = faWhatsapp;
    faFilePdf = faFilePdf;

    
      ngOnInit() {
      AOS.init();
    }
}
