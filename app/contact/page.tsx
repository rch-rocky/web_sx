"use client"

import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { useEffect, useRef } from "react"

export default function ContactPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // 加载高德地图
    const loadAMap = async () => {
      // 动态加载高德地图JS API
      const script = document.createElement('script');
      script.src = 'https://webapi.amap.com/maps?v=2.0&key=30c2bee9d014f884784177a525f563c2';
      script.async = true;
      
      // 创建Promise等待脚本加载完成
      const scriptLoaded = new Promise<void>((resolve) => {
        script.onload = () => resolve();
      });
      
      document.head.appendChild(script);
      
      // 等待脚本加载完成
      await scriptLoaded;
      
      // 初始化地图
      if (mapRef.current && window.AMap) {
        // 创建地图实例
        const map = new window.AMap.Map(mapRef.current, {
          zoom: 16,  // 缩放级别
          center: [121.71165399999995, 31.159261000000026],  // 中心点坐标，注意高德地图使用[经度, 纬度]的顺序
          resizeEnable: true
        });
        
        // 创建标记点
        const marker = new window.AMap.Marker({
          position: [121.71165399999995, 31.159261000000026],
          title: '上海森熹有限公司'
        });
        
        // 将标记点添加到地图
        map.add(marker);
        
        // 创建信息窗体
        const infoWindow = new window.AMap.InfoWindow({
          content: "<div style='padding:10px;'><strong>上海森熹有限公司</strong><br/>上海市浦东新区川宏路508号410室</div>",
          offset: new window.AMap.Pixel(0, -30)
        });
        
        // 点击标记时打开信息窗体
        marker.on('click', () => {
          infoWindow.open(map, marker.getPosition());
        });
        
        // 默认打开信息窗体
        infoWindow.open(map, marker.getPosition());
      }
    };
    
    loadAMap();
    
    // 清理函数
    return () => {
      // 清理工作（如果需要）
    };
  }, []);
  
  return (
    <main className="pt-20">
      {/* 页面标题 */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">联系我们</h1>
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span>联系我们</span>
          </div>
        </div>
      </section>

      {/* 联系信息和地图 */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* 联系方式 - 左侧 */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">联系方式</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-5">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">公司地址</h3>
                    <p className="text-gray-600">上海市浦东新区川宏路508号410室</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-5">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">联系电话</h3>
                    <p className="text-gray-600">15900911517</p>
                    
                  </div>
                </div>


                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-5 opacity-0">
                    <Mail className="text-primary w-6 h-6 opacity-0" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">工作时间</h3>
                    <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                    <p className="text-gray-600">周六、周日: 休息</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 公司位置 - 右侧 */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">公司位置</h2>
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                {/* 高德地图容器 */}
                <div ref={mapRef} className="w-full h-full" id="amap-container">
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <p className="text-gray-600">地图加载中...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
