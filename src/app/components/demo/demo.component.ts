import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const videoId = 'https://www.youtube.com/watch?v=eOJNoqmAjDQ'; // Reemplaza con tu ID real
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
