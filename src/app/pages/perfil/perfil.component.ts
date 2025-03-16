import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DatePipe],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  headerService = inject(HeaderService);

  user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '+34 612 345 678',
    addresses: [
      {
        id: 1,
        type: 'home',
        title: 'Casa',
        street: 'Av. Siempreviva',
        number: '742',
        city: 'Springfield',
        zipCode: '12345'
      },
      {
        id: 2,
        type: 'work',
        title: 'Trabajo',
        street: 'Calle Industria',
        number: '123',
        city: 'Springfield',
        zipCode: '12345'
      }
    ],
    paymentMethods: [
      {
        id: 1,
        type: 'visa',
        name: 'Visa terminada en 1234',
        lastDigits: '1234',
        expiry: '12/25'
      },
      {
        id: 2,
        type: 'paypal',
        name: 'PayPal',
        email: 'juan.perez@example.com'
      }
    ],
    orderHistory: [
      {
        id: 1,
        restaurantName: 'Pizza Deliciosa',
        restaurantImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
        date: new Date('2023-05-15'),
        status: 'entregado',
        items: [
          { name: 'Pizza Margherita', quantity: 1, price: 12.99 },
          { name: 'Coca-Cola', quantity: 2, price: 2.50 }
        ],
        total: 17.99
      },
      {
        id: 2,
        restaurantName: 'Burger King',
        restaurantImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
        date: new Date('2023-05-10'),
        status: 'entregado',
        items: [
          { name: 'Whopper', quantity: 1, price: 8.99 },
          { name: 'Patatas fritas', quantity: 1, price: 3.50 },
          { name: 'Refresco', quantity: 1, price: 2.50 }
        ],
        total: 14.99
      }
    ],
    preferences: {
      emailNotifications: true,
      pushNotifications: true,
      darkMode: false
    }
  };

  ngOnInit(): void {
    this.headerService.titulo.set('Perfil');
  }

  savePersonalInfo(): void {
    // Implementar lógica para guardar información personal
    console.log('Guardando información personal:', this.user);
    alert('Información personal guardada correctamente');
  }

  addNewAddress(): void {
    // Implementar lógica para agregar nueva dirección
    console.log('Agregando nueva dirección');
    alert('Funcionalidad de agregar dirección en desarrollo');
  }

  editAddress(index: number): void {
    // Implementar lógica para editar dirección
    console.log('Editando dirección:', this.user.addresses[index]);
    alert('Funcionalidad de edición de dirección en desarrollo');
  }

  deleteAddress(index: number): void {
    // Implementar lógica para eliminar dirección
    console.log('Eliminando dirección:', this.user.addresses[index]);
    this.user.addresses.splice(index, 1);
  }

  addNewPayment(): void {
    // Implementar lógica para agregar nuevo método de pago
    console.log('Agregando nuevo método de pago');
    alert('Funcionalidad de agregar método de pago en desarrollo');
  }

  editPayment(index: number): void {
    // Implementar lógica para editar método de pago
    console.log('Editando método de pago:', this.user.paymentMethods[index]);
    alert('Funcionalidad de edición de método de pago en desarrollo');
  }

  deletePayment(index: number): void {
    // Implementar lógica para eliminar método de pago
    console.log('Eliminando método de pago:', this.user.paymentMethods[index]);
    this.user.paymentMethods.splice(index, 1);
  }

  viewOrderDetails(orderId: number): void {
    // Implementar lógica para ver detalles de un pedido
    console.log('Viendo detalles del pedido:', orderId);
    alert('Funcionalidad de ver detalles de pedido en desarrollo');
  }

  savePreferences(): void {
    // Implementar lógica para guardar preferencias
    console.log('Guardando preferencias:', this.user.preferences);
    alert('Preferencias guardadas correctamente');
  }

  logout(): void {
    // Implementar lógica para cerrar sesión
    console.log('Cerrando sesión');
    alert('Sesión cerrada correctamente');
  }
}
