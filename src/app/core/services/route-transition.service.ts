import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteTransitionService {
  private transitionStateSubject = new BehaviorSubject<string>('');
  public transitionState$ = this.transitionStateSubject.asObservable();

  constructor() { }

  startTransition(direction: 'forward' | 'backward') {
    this.transitionStateSubject.next(`${direction}-start`);
    
    // Después de un pequeño retraso, cambiamos al estado de finalización
    setTimeout(() => {
      this.transitionStateSubject.next(`${direction}-end`);
      
      // Limpiamos el estado después de completar la animación
      setTimeout(() => {
        this.transitionStateSubject.next('');
      }, 300);
    }, 10);
  }
}
