import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoibHVjaWF2aWNhcmlvZ3VlcnJlcm8iLCJhIjoiY2t6enUyZ3N0MGRpNDNibnhvcXhhNW15aCJ9.I8O2Rnp-EgAqEfd8Bd_qeA';

if (!navigator.geolocation){
  alert('Navegador no soporta el geolocation');
  throw new Error('Navegador no soporta el geolocation');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
