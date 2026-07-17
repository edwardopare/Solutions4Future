import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

/**
 * Animates a numeric counter from 0 up to the target value once the element
 * scrolls into view. Usage: <span appCounter [countTo]="250" suffix="+"></span>
 */
@Directive({
  selector: '[appCounter]',
  standalone: true,
})
export class CounterDirective implements OnInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  readonly countTo = input.required<number>();
  readonly suffix = input('');
  readonly duration = input(1800);

  ngOnInit(): void {
    const host = this.element.nativeElement;

    if (!isPlatformBrowser(this.platformId)) {
      host.textContent = `${this.countTo()}${this.suffix()}`;
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.animate(host);
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.5 },
    );

    this.observer.observe(host);
  }

  private animate(host: HTMLElement): void {
    const target = this.countTo();
    const duration = this.duration();
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      host.textContent = `${value}${this.suffix()}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        host.textContent = `${target}${this.suffix()}`;
      }
    };

    requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
