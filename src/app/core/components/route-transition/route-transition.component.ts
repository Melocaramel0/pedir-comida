import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouteTransitionService } from '../../services/route-transition.service';

@Component({
  selector: 'app-route-transition',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="route-transition-container" [ngClass]="transitionState">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .route-transition-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
    }

    .forward-start {
      animation: slideOutLeft 0.3s forwards;
    }

    .forward-end {
      animation: slideInRight 0.3s forwards;
    }

    .backward-start {
      animation: slideOutRight 0.3s forwards;
    }

    .backward-end {
      animation: slideInLeft 0.3s forwards;
    }

    @keyframes slideOutLeft {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(-30px); opacity: 0; }
    }

    @keyframes slideInRight {
      from { transform: translateX(30px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    @keyframes slideOutRight {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(30px); opacity: 0; }
    }

    @keyframes slideInLeft {
      from { transform: translateX(-30px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `]
})
export class RouteTransitionComponent implements OnInit {
  transitionState: string = '';

  constructor(private routeTransitionService: RouteTransitionService) { }

  ngOnInit(): void {
    this.routeTransitionService.transitionState$.subscribe(state => {
      this.transitionState = state;
    });
  }
}
