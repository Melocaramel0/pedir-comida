import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {
  searchTerm: string = '';
  searched: boolean = false;
  activeFilter: string = 'all';
  searchResults: any[] = [];
  
  // Datos de ejemplo para restaurantes
  restaurants = [
    {
      id: 1,
      name: 'Pizza Deliciosa',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      rating: 4.8,
      reviews: 120,
      deliveryTime: '30-45 min',
      priceLevel: '$$'
    },
    {
      id: 2,
      name: 'Burger House',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
      rating: 4.5,
      reviews: 98,
      deliveryTime: '25-40 min',
      priceLevel: '$$'
    },
    {
      id: 3,
      name: 'Sushi Master',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
      rating: 4.9,
      reviews: 200,
      deliveryTime: '40-55 min',
      priceLevel: '$$$'
    },
    {
      id: 4,
      name: 'Pollo Sabroso',
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b',
      rating: 4.3,
      reviews: 76,
      deliveryTime: '20-35 min',
      priceLevel: '$'
    }
  ];

  // Datos de ejemplo para platos
  dishes = [
    {
      id: 1,
      name: 'Pizza Margherita',
      restaurant: 'Pizza Deliciosa',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      price: '$12.99'
    },
    {
      id: 2,
      name: 'Hamburguesa Clásica',
      restaurant: 'Burger House',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
      price: '$9.99'
    },
    {
      id: 3,
      name: 'Sushi Mix',
      restaurant: 'Sushi Master',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
      price: '$18.99'
    },
    {
      id: 4,
      name: 'Pollo Frito',
      restaurant: 'Pollo Sabroso',
      image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b',
      price: '$10.99'
    }
  ];

  // Búsquedas recientes
  recentSearches: string[] = ['Pizza', 'Hamburguesa', 'Sushi'];
  
  // Búsquedas populares
  popularSearches: string[] = ['Pizza', 'Hamburguesa', 'Sushi', 'Pollo', 'Tacos', 'Ensalada'];

  constructor(private router: Router) {}

  get filteredRestaurants() {
    if (this.activeFilter === 'dishes') {
      return [];
    }
    return this.searchResults.filter(item => 'deliveryTime' in item);
  }

  get filteredDishes() {
    if (this.activeFilter === 'restaurants') {
      return [];
    }
    return this.searchResults.filter(item => 'price' in item);
  }

  search() {
    if (!this.searchTerm.trim()) {
      return;
    }

    this.searched = true;
    const term = this.searchTerm.toLowerCase();
    
    // Buscar en restaurantes
    const foundRestaurants = this.restaurants.filter(
      restaurant => restaurant.name.toLowerCase().includes(term)
    );
    
    // Buscar en platos
    const foundDishes = this.dishes.filter(
      dish => dish.name.toLowerCase().includes(term) || 
              dish.restaurant.toLowerCase().includes(term)
    );
    
    if (this.activeFilter === 'all') {
      this.searchResults = [...foundRestaurants, ...foundDishes];
    } else if (this.activeFilter === 'restaurants') {
      this.searchResults = foundRestaurants;
    } else {
      this.searchResults = foundDishes;
    }
    
    // Guardar búsqueda reciente
    if (!this.recentSearches.includes(this.searchTerm)) {
      this.recentSearches.unshift(this.searchTerm);
      if (this.recentSearches.length > 5) {
        this.recentSearches.pop();
      }
    }
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
    if (this.searched) {
      this.search();
    }
  }

  navigateToRestaurant(restaurant: any) {
    // Implementar navegación a detalles del restaurante
    console.log('Navegando a restaurante:', restaurant);
    // this.router.navigate(['/restaurant', restaurant.id]);
  }

  navigateToDish(dish: any) {
    // Implementar navegación a detalles del plato
    console.log('Navegando a plato:', dish);
    // this.router.navigate(['/articulo'], { queryParams: { id: dish.id } });
  }

  applyRecentSearch(search: string) {
    this.searchTerm = search;
    this.search();
  }
}
