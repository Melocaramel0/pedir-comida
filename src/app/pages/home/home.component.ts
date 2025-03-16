import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../core/services/header.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    
    headerService = inject(HeaderService);

    // Datos de ejemplo para las categorías
    categories = [
      { name: 'Pizza', icon: '🍕' },
      { name: 'Pollo', icon: '🍗' },
      { name: 'Sushi', icon: '🍣' },
      { name: 'Hamburguesas', icon: '🍔' },
      { name: 'Tacos', icon: '🌮' },
      { name: 'Pasta', icon: '🍝' },
      { name: 'Ensaladas', icon: '🥗' },
      { name: 'Postres', icon: '🍰' },
      { name: 'Café', icon: '☕' },
      { name: 'Desayunos', icon: '🥞' },
      { name: 'Helados', icon: '🍦' },
      { name: 'Vegetariano', icon: '🥑' }
    ];

    // Datos de ejemplo para los restaurantes
    restaurants = [
      { 
        name: 'Pizzería Deliciosa', 
        rating: 4.8, 
        reviews: 120, 
        deliveryTime: '30-45 min', 
        priceLevel: '$$$',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      { 
        name: 'Burger King', 
        rating: 4.5, 
        reviews: 200, 
        deliveryTime: '20-35 min', 
        priceLevel: '$$',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      { 
        name: 'Sushi Master', 
        rating: 4.9, 
        reviews: 180, 
        deliveryTime: '40-55 min', 
        priceLevel: '$$$$',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      { 
        name: 'Pollo Loco', 
        rating: 4.3, 
        reviews: 150, 
        deliveryTime: '25-40 min', 
        priceLevel: '$$',
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      { 
        name: 'Taquería El Paso', 
        rating: 4.7, 
        reviews: 210, 
        deliveryTime: '20-30 min', 
        priceLevel: '$',
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      { 
        name: 'Pasta Bella', 
        rating: 4.6, 
        reviews: 90, 
        deliveryTime: '35-50 min', 
        priceLevel: '$$$',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      }
    ];

    // Datos de ejemplo para las ofertas
    offers = [
      {
        title: '2x1 en Pizzas',
        validUntil: 'Válido hasta 30/04/2025',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: 'Envío gratis',
        validUntil: 'En pedidos mayores a $500',
        image: 'https://images.unsplash.com/photo-1586999768265-24af89630739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: '30% de descuento en sushi',
        validUntil: 'Válido hasta 15/04/2025',
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
      },
      {
        title: 'Combo familiar a mitad de precio',
        validUntil: 'Fines de semana',
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
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