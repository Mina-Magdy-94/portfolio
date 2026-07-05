import { AfterViewInit, Component, ElementRef, PLATFORM_ID, ViewChild, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  COURSES,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  SKILLS,
} from '../../data/portfolio.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  readonly profile = PROFILE;
  readonly experience = EXPERIENCE;
  readonly projects = PROJECTS;
  readonly skills = SKILLS;
  readonly education = EDUCATION;
  readonly courses = COURSES;

  @ViewChild('tagline') taglineRef?: ElementRef<HTMLSpanElement>;

  private taglineIndex = 0;
  private taglineTimer?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.rotateTagline();
    }
  }

  private rotateTagline(): void {
    const el = this.taglineRef?.nativeElement;
    if (!el) return;
    const next = () => {
      this.taglineIndex = (this.taglineIndex + 1) % this.profile.taglines.length;
      el.classList.remove('in');
      requestAnimationFrame(() => {
        el.textContent = this.profile.taglines[this.taglineIndex] ?? '';
        el.classList.add('in');
      });
      this.taglineTimer = setTimeout(next, 2600);
    };
    el.textContent = this.profile.taglines[0] ?? '';
    el.classList.add('in');
    this.taglineTimer = setTimeout(next, 2600);
  }
}
