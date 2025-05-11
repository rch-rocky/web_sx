// 百度地图API的TypeScript声明文件

interface BMapGLPoint {
  lng: number;
  lat: number;
  constructor(lng: number, lat: number): BMapGLPoint;
}

interface BMapGLSize {
  width: number;
  height: number;
  constructor(width: number, height: number): BMapGLSize;
}

interface BMapGLMarker {
  constructor(point: BMapGLPoint, options?: any): BMapGLMarker;
  addEventListener(event: string, handler: Function): void;
  enableDragging(): void;
  disableDragging(): void;
  setPosition(point: BMapGLPoint): void;
  getPosition(): BMapGLPoint;
}

interface BMapGLInfoWindow {
  constructor(content: string, opts?: any): BMapGLInfoWindow;
  setContent(content: string): void;
  redraw(): void;
  enableAutoPan(): void;
  disableAutoPan(): void;
}

interface BMapGLMap {
  constructor(container: HTMLElement | string): BMapGLMap;
  centerAndZoom(point: BMapGLPoint, zoom: number): void;
  clearOverlays(): void;
  addOverlay(overlay: any): void;
  removeOverlay(overlay: any): void;
  addControl(control: any): void;
  removeControl(control: any): void;
  setCenter(point: BMapGLPoint): void;
  getCenter(): BMapGLPoint;
  setZoom(zoom: number): void;
  getZoom(): number;
  enableScrollWheelZoom(): void;
  disableScrollWheelZoom(): void;
  enableDragging(): void;
  disableDragging(): void;
  openInfoWindow(infoWindow: BMapGLInfoWindow, point: BMapGLPoint): void;
}

interface BMapGLControl {
  constructor(): BMapGLControl;
}

interface BMapGLScaleControl extends BMapGLControl {
  constructor(opts?: any): BMapGLScaleControl;
}

interface BMapGLZoomControl extends BMapGLControl {
  constructor(opts?: any): BMapGLZoomControl;
}

interface BMapGLNavigationControl extends BMapGLControl {
  constructor(opts?: any): BMapGLNavigationControl;
}

interface BMapGLMapTypeControl extends BMapGLControl {
  constructor(opts?: any): BMapGLMapTypeControl;
}

interface BMapGLStatic {
  Map: {
    new(container: HTMLElement | string): BMapGLMap;
  };
  Point: {
    new(lng: number, lat: number): BMapGLPoint;
  };
  Size: {
    new(width: number, height: number): BMapGLSize;
  };
  Marker: {
    new(point: BMapGLPoint, options?: any): BMapGLMarker;
  };
  InfoWindow: {
    new(content: string, opts?: any): BMapGLInfoWindow;
  };
  ScaleControl: {
    new(opts?: any): BMapGLScaleControl;
  };
  ZoomControl: {
    new(opts?: any): BMapGLZoomControl;
  };
  NavigationControl: {
    new(opts?: any): BMapGLNavigationControl;
  };
  MapTypeControl: {
    new(opts?: any): BMapGLMapTypeControl;
  };
}

declare global {
  interface Window {
    BMapGL: BMapGLStatic;
    initMap: () => void;
  }
}