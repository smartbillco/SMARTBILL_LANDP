import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';

@Component({
  selector: 'app-landing-page',
  imports: [HeroComponent, AboutUsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
