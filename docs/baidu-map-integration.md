# 地图集成说明

> **注意：** 本项目已不再使用百度地图，而是改用 Leaflet + OpenStreetMap 的组合，无需API密钥和域名白名单。

## 新地图解决方案

我们已将地图实现从百度地图更改为 Leaflet + OpenStreetMap，主要优势包括：

1. **无需API密钥**：不需要申请和配置API密钥
2. **无域名限制**：不需要设置域名白名单，适合开发环境
3. **全球覆盖**：提供全球范围的地图数据
4. **开源免费**：完全开源且免费使用

## 查看新的地图集成指南

请参考新的[地图集成指南](./map-integration.md)文档，了解如何：

- 调整地图坐标
- 自定义地图样式
- 解决常见问题
- 了解其他地图服务选项

## 实现变更

新的地图实现已更新到 `app/contact/page.tsx` 文件中，使用了 Leaflet 库和 OpenStreetMap 瓦片源。

如果您仍需使用百度地图，请参考百度地图官方文档：
- [百度地图开放平台](https://lbsyun.baidu.com/)
- [百度地图JavaScript API文档](https://lbsyun.baidu.com/index.php?title=jspopular3.0)