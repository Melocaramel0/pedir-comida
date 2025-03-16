import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouteTransitionService } from '../../services/route-transition.service';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  constructor(
    private router: Router,
    private routeTransitionService: RouteTransitionService
  ) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        console.log("EVENTO",)
        switch(event.urlAfterRedirects){
          case "/":
             this.seleccionado = [true, false, false, false];
             break;
          case "/buscar":
             this.seleccionado = [false, true, false, false];
             break;
          case "/carrito":
             this.seleccionado = [false, false, true, false];
             break;
          case "/perfil":
             this.seleccionado = [false, false, false, true];
             break;
          default:
             this.seleccionado = [false, false, false, false];
        }

      }
    })
   }

   seleccionado = [false, false, false, false]
   colorActivado = "#000000";
   colorDesactivado = "#555555";

  // Determinar la dirección de la navegación
  private determineDirection(currentPath: string, targetPath: string): 'forward' | 'backward' {
    const paths = ['', 'buscar', 'carrito', 'perfil'];
    const currentIndex = paths.indexOf(currentPath.replace('/', ''));
    const targetIndex = paths.indexOf(targetPath);
    
    return targetIndex > currentIndex ? 'forward' : 'backward';
  }

  navegar(direccion: string) {
    if (this.router.url !== `/${direccion}`) {
      // Obtener la dirección actual
      const currentPath = this.router.url;
      
      // Iniciar la animación de transición
      const direction = this.determineDirection(currentPath, direccion);
      this.routeTransitionService.startTransition(direction);
      
      // Pequeño retraso para permitir que la animación comience antes de la navegación
      setTimeout(() => {
        this.router.navigate([direccion]);
      }, 50);
    }
  }
}
