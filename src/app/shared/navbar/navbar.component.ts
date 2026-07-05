import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly router = inject(Router);
  readonly theme = inject(ThemeService);

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly links: NavLink[] = [
    { label: 'About', fragment: 'about' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Projects', fragment: 'projects' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Contact', fragment: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  goToSection(fragment: string): void {
    this.closeMenu();
    this.router
      .navigate(['/'], { fragment, replaceUrl: true })
      .then(() => {
        // Router scroll handles the rest, but ensure smooth in-page scroll on same route
        queueMicrotask(() => {
          const el = document.getElementById(fragment);
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
  }
}
