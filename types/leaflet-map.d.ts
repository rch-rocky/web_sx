// Leaflet地图类型定义
declare namespace L {
  interface LatLngExpression {
    lat: number;
    lng: number;
  }

  interface MapOptions {
    center?: LatLngExpression;
    zoom?: number;
    zoomControl?: boolean;
  }

  interface MarkerOptions {
    title?: string;
  }

  interface PopupOptions {
    maxWidth?: number;
    minWidth?: number;
    maxHeight?: number;
    autoPan?: boolean;
    closeButton?: boolean;
  }

  interface Map {
    setView(center: LatLngExpression, zoom: number): this;
    addLayer(layer: Layer): this;
  }

  interface Layer {}

  interface Marker extends Layer {
    bindPopup(content: string, options?: PopupOptions): this;
  }

  interface TileLayer extends Layer {}

  interface LeafletStatic {
    map(element: string | HTMLElement, options?: MapOptions): Map;
    marker(latlng: LatLngExpression, options?: MarkerOptions): Marker;
    tileLayer(urlTemplate: string, options?: any): TileLayer;
  }
}

declare const L: L.LeafletStatic;

interface Window {
  L: L.LeafletStatic;
}