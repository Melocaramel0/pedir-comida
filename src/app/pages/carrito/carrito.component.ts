import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  headerService = inject(HeaderService);
  
  cartItems: any[] = [
    {
      id: 1,
      name: 'Pizza Margherita',
      price: 12.99,
      quantity: 1,
      options: 'Masa delgada, sin cebolla'
    },
    {
      id: 2,
      name: 'Coca-Cola',
      price: 2.50,
      quantity: 2,
      options: null
    }
  ];

  restaurant = {
    name: 'Pizza Deliciosa',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    rating: 4.8,
    deliveryTime: '30-45 min'
  };

  specialInstructions: string = '';
  promoCode: string = '';
  
  address = {
    title: 'Casa',
    street: 'Av. Siempreviva',
    number: '742',
    city: 'Springfield',
    zipCode: '12345'
  };
  
  selectedPayment: string = 'card';

  ngOnInit(): void {
    this.headerService.titulo.set("Carrito");
  }

  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  get deliveryFee(): number {
    return this.subtotal > 20 ? 0 : 3.99;
  }

  get tax(): number {
    return this.subtotal * 0.10; // 10% de impuestos
  }

  get total(): number {
    return this.subtotal + this.deliveryFee + this.tax;
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity++;
  }

  decreaseQuantity(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    } else {
      this.removeItem(index);
    }
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  applyPromoCode(): void {
    // Implementar lógica para aplicar código promocional
    console.log('Aplicando código promocional:', this.promoCode);
    alert('Código promocional aplicado: ' + this.promoCode);
    this.promoCode = '';
  }

  editAddress(): void {
    // Implementar lógica para editar dirección
    console.log('Editando dirección');
    alert('Funcionalidad de edición de dirección en desarrollo');
  }

  selectPayment(method: string): void {
    this.selectedPayment = method;
  }

  checkout(): void {
    // Implementar lógica para finalizar pedido
    console.log('Finalizando pedido');
    alert('¡Gracias por tu pedido! Tu comida está en camino.');
    this.cartItems = [];
  }
}
