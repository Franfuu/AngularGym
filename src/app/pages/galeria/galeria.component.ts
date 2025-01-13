import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  scrollGallery(direction: number, section: string): void {
    const gallery = document.querySelector(`.gallery.${section}`) as HTMLElement;
    const scrollAmount = gallery.clientWidth;
    gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }
}
