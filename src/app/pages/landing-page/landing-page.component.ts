import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { DemoComponent } from '../../components/demo/demo.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeroComponent,
    AboutUsComponent,
    FeaturesComponent,
    DemoComponent,
    ProductsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent { }
