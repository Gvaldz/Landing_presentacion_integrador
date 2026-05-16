import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LogiRed';

  clientFeatures = [
    { icon: '📍', title: 'Monitoreo GPS', desc: 'Visualización en mapa del desplazamiento en tiempo real.' },
    { icon: '🤖', title: 'Precio Inteligente', desc: 'Rango de precio sugerido por Machine Learning al publicar.' },
    { icon: '⚖️', title: 'Subasta Inversa', desc: 'Recibe y compara cotizaciones de transportistas interesados.' },
    { icon: '⭐', title: 'Reputación con IA', desc: 'Resúmenes automáticos de reseñas generados por NLP.' }
  ];

  driverFeatures = [
    { icon: '📱', title: 'Panel de Oportunidades', desc: 'Visualiza solicitudes de carga en tu ciudad.' },
    { icon: '⚡', title: 'Cotización Rápida', desc: 'Envía ofertas de precio al instante para ganar viajes.' },
    { icon: '📡', title: 'Transmisión GPS', desc: 'Envío automático de coordenadas en segundo plano.' },
    { icon: '📊', title: 'Bandeja de Desempeño', desc: 'Controla tus métricas, ingresos y calificación global.' }
  ];

  technologies = [
    { name: 'Angular', role: 'Frontend Web' },
    { name: 'Flutter', role: 'Frontend Móvil' },
    { name: 'Go con Gin', role: 'Backend API' },
    { name: 'Python', role: 'Machine Learning & LLM' },
    { name: 'Websockets', role: 'Realtime Tracking' },
    { name: 'PM2', role: 'Process Manager' }
  ];
}