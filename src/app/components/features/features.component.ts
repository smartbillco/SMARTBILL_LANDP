import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

  features = [
    {
      icon: 'bi bi-lightning-charge-fill',
      title: 'Extraccion Rápida',
      description: 'Extrae la info de tus facturas en segundos con nuestra interfaz intuitiva y plantillas personalizables.'
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Seguridad Garantizada',
      description: 'Tus datos protegidos con cifrado de grado bancario y respaldos automáticos.'
    },
    {
      icon: 'bi bi-graph-up-arrow',
      title: 'Reportes Avanzados',
      description: 'Genera reportes financieros detallados y análisis de tus ventas en tiempo real.'
    },
    {
      icon: 'bi bi-cash-coin',
      title: 'Integración POS',
      description: 'Conecta tu punto de venta y factura automáticamente cada transacción.'
    },
    {
      icon: 'bi bi-cloud-arrow-up-fill',
      title: 'En la Nube',
      description: 'Accede desde cualquier dispositivo, en cualquier momento y lugar.'
    },
    {
      icon: 'bi bi-headset',
      title: 'Soporte 24/7',
      description: 'Nuestro equipo de expertos está disponible para ayudarte cuando lo necesites.'
    }
  ];

}
