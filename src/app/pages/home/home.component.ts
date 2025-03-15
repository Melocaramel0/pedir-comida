import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
    
    headerService = inject(HeaderService);

    // Datos de ejemplo para las categorías
    categories = [
      { name: 'Pizza', icon: '🍕' },
      { name: 'Hamburguesas', icon: '🍔' },
      { name: 'Sushi', icon: '🍣' },
      { name: 'Pollo', icon: '🍗' }
    ];

    // Datos de ejemplo para los restaurantes
    restaurants = [
      { 
        name: 'Pizzería Deliciosa', 
        rating: 4.8, 
        reviews: 120, 
        deliveryTime: '30-45 min', 
        priceLevel: '$$$',
        image: 'https://via.placeholder.com/100'
      },
      { 
        name: 'Burger King', 
        rating: 4.5, 
        reviews: 200, 
        deliveryTime: '20-35 min', 
        priceLevel: '$$',
        image: 'https://via.placeholder.com/100'
      }
    ];

    // Datos de ejemplo para las ofertas
    offers = [
      {
        title: '2x1 en Pizzas',
        validUntil: '30/11/2023',
        image: 'https://via.placeholder.com/100'
      },
      {
        title: 'Envío gratis',
        validUntil: 'En pedidos mayores a $500',
        image: 'https://via.placeholder.com/100'
      }
    ];

    ngOnInit(): void {
      this.headerService.titulo.set("Inicio");
      this.headerService.extendido.set(true);
    }

    ngOnDestroy(): void {
      this.headerService.extendido.set(false);
    }

    navigateToCategory(category: string): void {
      console.log('Navegando a la categoría:', category);
      // Aquí implementaremos la navegación a la categoría
    }

    navigateToRestaurant(restaurant: any): void {
      console.log('Navegando al restaurante:', restaurant.name);
      // Aquí implementaremos la navegación al restaurante
    }

    viewOffer(offer: any): void {
      console.log('Viendo oferta:', offer.title);
      // Aquí implementaremos la lógica para ver la oferta
    }
}