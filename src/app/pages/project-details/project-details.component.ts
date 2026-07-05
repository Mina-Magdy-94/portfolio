import { Component, computed, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { PROJECTS } from '../../data/portfolio.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')),
    { initialValue: '' }
  );

  readonly project = computed(() =>
    PROJECTS.find((p) => p.slug === this.slug())
  );

  readonly related = computed(() => {
    const current = this.project();
    if (!current) return [];
    return PROJECTS.filter((p) => p.slug !== current.slug).slice(0, 3);
  });

  goBack(): void {
    this.location.back();
  }
}
