# 地图集成指南

## 关于地图集成

本项目使用 Leaflet 结合 OpenStreetMap 提供地图功能，这种组合具有以下优势：

1. **无需API密钥**：OpenStreetMap 是免费开源的地图服务，不需要申请API密钥
2. **无域名限制**：不需要设置域名白名单，适合开发环境和生产环境
3. **全球覆盖**：提供全球范围的地图数据
4. **开源免费**：完全开源且免费使用

## 地图实现方式

当前实现通过动态加载 Leaflet 的 CSS 和 JavaScript 文件来实现地图功能。代码位于 `app/contact/page.tsx` 文件中。

### 主要实现代码

```javascript
// 动态加载Leaflet CSS
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
linkElement.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
linkElement.crossOrigin = '';
document.head.appendChild(linkElement);

// 动态加载Leaflet JS
const script = document.createElement('script');
script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
script.crossOrigin = '';
script.async = true;
```

## 调整地图坐标

当前地图使用的是上海市浦东新区川宏路508号的大致坐标（纬度：31.209557，经度：121.608989）。如果需要显示其他位置，请修改以下代码中的坐标值：

```javascript
// 注意：Leaflet使用[纬度, 经度]的顺序，与一些其他地图API的[经度, 纬度]顺序不同
const map = window.L.map(mapRef.current).setView([31.209557, 121.608989], 16);

// 创建标注时也需要使用相同的坐标
const marker = window.L.marker([31.209557, 121.608989], {
  title: '上海森熹有限公司'
}).addTo(map);
```

您可以通过以下方式获取准确坐标：
1. 访问 [OpenStreetMap](https://www.openstreetmap.org/) 网站
2. 搜索您的位置
3. 右键点击地图上的确切位置，选择"显示地址"
4. 在弹出的信息中可以看到坐标信息

## 自定义地图样式

如需进一步自定义地图外观和功能，可以参考 [Leaflet官方文档](https://leafletjs.com/reference.html)。

### 更换地图瓦片源

当前使用的是OpenStreetMap的默认瓦片源。如果需要更换为其他风格的地图，可以修改瓦片URL：

```javascript
// 默认的OpenStreetMap瓦片源
window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 或者使用Stamen的水彩风格地图
window.L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>'
}).addTo(map);
```

## 常见问题

1. **地图无法加载**：检查网络连接，确保能够访问OpenStreetMap的瓦片服务器
2. **地图显示但位置不准确**：调整坐标值，注意Leaflet使用[纬度, 经度]的顺序
3. **控制台报错**：确保TypeScript类型声明文件`types/leaflet-map.d.ts`已正确配置
4. **地图样式问题**：可以尝试不同的瓦片源或自定义CSS样式

## 其他地图服务选项

如果需要更多功能或不同的地图风格，还可以考虑以下选项：

1. **高德地图**：中国地区覆盖较好，需要申请API密钥，但不需要设置IP白名单
2. **腾讯地图**：提供丰富的POI数据，需要申请API密钥
3. **MapBox**：提供精美的地图样式，有免费额度，超出需付费

这些替代方案的集成方式类似，主要区别在于API的调用方式和参数设置。