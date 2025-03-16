import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-restaurante',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss']
})
export class RestauranteComponent implements OnInit {
  headerService = inject(HeaderService);
  router = inject(Router);

  // Datos del restaurante (simulados)
  restaurant = {
    id: 1,
    name: 'Pizza Deliciosa',
    logo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=300&fit=crop',
    rating: 4.8,
    reviewCount: 243,
    deliveryTime: '30-45 min',
    distance: 1.2,
    description: 'Las mejores pizzas artesanales de la ciudad. Ingredientes frescos y masa hecha a mano todos los días.',
    address: 'Av. Siempreviva 742, Springfield',
    schedule: [
      { day: 'Lunes', hours: '11:00 - 22:00' },
      { day: 'Martes', hours: '11:00 - 22:00' },
      { day: 'Miércoles', hours: '11:00 - 22:00' },
      { day: 'Jueves', hours: '11:00 - 22:00' },
      { day: 'Viernes', hours: '11:00 - 23:00' },
      { day: 'Sábado', hours: '11:00 - 23:00' },
      { day: 'Domingo', hours: '12:00 - 22:00' }
    ],
    reviews: [
      {
        id: 1,
        userName: 'María García',
        userImage: 'https://randomuser.me/api/portraits/women/12.jpg',
        rating: 5,
        date: '15/05/2023',
        comment: 'La mejor pizza que he probado en mucho tiempo. La masa estaba perfecta y los ingredientes muy frescos.'
      },
      {
        id: 2,
        userName: 'Juan Pérez',
        userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 4,
        date: '10/05/2023',
        comment: 'Muy buena pizza, aunque tardaron un poco más de lo esperado en la entrega.'
      },
      {
        id: 3,
        userName: 'Ana Martínez',
        userImage: 'https://randomuser.me/api/portraits/women/22.jpg',
        rating: 5,
        date: '05/05/2023',
        comment: 'Excelente servicio y la pizza estaba deliciosa. Definitivamente volveré a pedir.'
      },
      {
        id: 4,
        userName: 'Carlos Rodríguez',
        userImage: 'https://randomuser.me/api/portraits/men/42.jpg',
        rating: 4,
        date: '01/05/2023',
        comment: 'Buena relación calidad-precio. La pizza llegó caliente y en buen estado.'
      }
    ]
  };

  // Categorías del menú
  menuCategories = ['Populares', 'Pizzas', 'Pastas', 'Ensaladas', 'Bebidas', 'Postres'];
  activeCategory = 'Populares';

  // Platos del menú (simulados)
  menuItems = [
    {
      id: 1,
      category: 'Pizzas',
      popular: true,
      name: 'Pizza Margherita',
      description: 'Salsa de tomate, mozzarella y albahaca fresca',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100&h=100&fit=crop',
      options: [
        {
          name: 'Tamaño',
          required: true,
          multiple: false,
          items: [
            { id: 'size-1', name: 'Pequeña (8")', additionalPrice: 0, selected: true },
            { id: 'size-2', name: 'Mediana (12")', additionalPrice: 3, selected: false },
            { id: 'size-3', name: 'Grande (16")', additionalPrice: 6, selected: false }
          ]
        },
        {
          name: 'Masa',
          required: true,
          multiple: false,
          items: [
            { id: 'dough-1', name: 'Tradicional', additionalPrice: 0, selected: true },
            { id: 'dough-2', name: 'Delgada', additionalPrice: 0, selected: false },
            { id: 'dough-3', name: 'Con borde de queso', additionalPrice: 2, selected: false }
          ]
        },
        {
          name: 'Extras',
          required: false,
          multiple: true,
          items: [
            { id: 'extra-1', name: 'Queso extra', additionalPrice: 1.5, selected: false },
            { id: 'extra-2', name: 'Champiñones', additionalPrice: 1, selected: false },
            { id: 'extra-3', name: 'Pepperoni', additionalPrice: 1.5, selected: false },
            { id: 'extra-4', name: 'Jamón', additionalPrice: 1.5, selected: false }
          ]
        }
      ]
    },
    {
      id: 2,
      category: 'Pizzas',
      popular: true,
      name: 'Pizza Pepperoni',
      description: 'Salsa de tomate, mozzarella y pepperoni',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=100&h=100&fit=crop',
      options: [
        {
          name: 'Tamaño',
          required: true,
          multiple: false,
          items: [
            { id: 'size-1-2', name: 'Pequeña (8")', additionalPrice: 0, selected: true },
            { id: 'size-2-2', name: 'Mediana (12")', additionalPrice: 3, selected: false },
            { id: 'size-3-2', name: 'Grande (16")', additionalPrice: 6, selected: false }
          ]
        },
        {
          name: 'Masa',
          required: true,
          multiple: false,
          items: [
            { id: 'dough-1-2', name: 'Tradicional', additionalPrice: 0, selected: true },
            { id: 'dough-2-2', name: 'Delgada', additionalPrice: 0, selected: false },
            { id: 'dough-3-2', name: 'Con borde de queso', additionalPrice: 2, selected: false }
          ]
        }
      ]
    },
    {
      id: 3,
      category: 'Pastas',
      popular: false,
      name: 'Spaghetti Carbonara',
      description: 'Spaghetti con salsa carbonara, panceta y queso parmesano',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      category: 'Ensaladas',
      popular: false,
      name: 'Ensalada César',
      description: 'Lechuga romana, crutones, queso parmesano y aderezo César',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=100&h=100&fit=crop'
    },
    {
      id: 5,
      category: 'Bebidas',
      popular: true,
      name: 'Coca-Cola',
      description: 'Lata de 355ml',
      price: 2.50,
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=100&h=100&fit=crop'
    },
    {
      id: 6,
      category: 'Postres',
      popular: false,
      name: 'Tiramisú',
      description: 'Postre italiano con café, mascarpone y cacao',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=100&h=100&fit=crop'
    }
  ];

  // Variables para el carrito
  cartItemCount = 0;
  cartTotal = 0;

  // Variables para el modal de detalles del plato
  selectedDish: any = null;
  quantity = 1;
  specialInstructions = '';

  ngOnInit(): void {
    this.headerService.titulo.set('');
    this.headerService.mostrarHeader.set(false);
  }

  // Filtrar platos según la categoría seleccionada
  get filteredMenuItems() {
    if (this.activeCategory === 'Populares') {
      return this.menuItems.filter(item => item.popular);
    }
    return this.menuItems.filter(item => item.category === this.activeCategory);
  }

  // Establecer la categoría activa
  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }

  // Volver a la página anterior
  goBack(): void {
    window.history.back();
  }

  // Abrir el modal de detalles del plato
  openDishDetails(dish: any): void {
    this.selectedDish = JSON.parse(JSON.stringify(dish)); // Clonar para no modificar el original
    this.quantity = 1;
    this.specialInstructions = '';
  }

  // Cerrar el modal de detalles del plato
  closeDishDetails(event?: Event): void {
    if (!event || event.target === event.currentTarget) {
      this.selectedDish = null;
    }
  }

  // Incrementar la cantidad en el modal
  increaseQuantity(): void {
    this.quantity++;
  }

  // Decrementar la cantidad en el modal
  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // Calcular el precio total en el modal
  getTotalPrice(): number {
    if (!this.selectedDish) return 0;
    
    let basePrice = this.selectedDish.price;
    let additionalPrice = 0;
    
    // Sumar precios adicionales de las opciones seleccionadas
    if (this.selectedDish.options) {
      this.selectedDish.options.forEach((optionGroup: any) => {
        optionGroup.items.forEach((option: any) => {
          if (option.selected) {
            additionalPrice += option.additionalPrice;
          }
        });
      });
    }
    
    return (basePrice + additionalPrice) * this.quantity;
  }

  // Agregar al carrito desde la lista
  addToCart(dish: any, event: Event): void {
    event.stopPropagation(); // Evitar que se abra el modal
    this.cartItemCount++;
    this.cartTotal += dish.price;
    console.log(`Agregado al carrito: ${dish.name}`);
    // Aquí se implementaría la lógica real para agregar al carrito
  }

  // Agregar al carrito desde el modal
  addToCartFromModal(): void {
    if (!this.selectedDish) return;
    
    this.cartItemCount += this.quantity;
    this.cartTotal += this.getTotalPrice();
    
    console.log(`Agregado al carrito: ${this.quantity}x ${this.selectedDish.name}`);
    console.log('Instrucciones especiales:', this.specialInstructions);
    
    // Aquí se implementaría la lógica real para agregar al carrito
    
    this.closeDishDetails();
  }

  // Ver el carrito
  viewCart(): void {
    this.router.navigate(['/carrito']);
  }
}
