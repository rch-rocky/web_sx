import Link from "next/link"
import { MapPin, Phone, Mail, ShieldCheck, ShieldAlert, Award } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 公司信息 */}
          <div>
            <h3 className="text-xl font-bold mb-6">上海森熹有限公司</h3>
            <p className="text-gray-400 mb-6">
            色谱科技综合服务商，致力于为生物医药、食品安全检测等领域提供定制化色谱耗材、设备及工业级纯化工艺解决方案
            </p>
            <div className="flex space-x-4">
              
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl font-bold mb-6">快速链接</h3>
            <ul className="space-y-3">
              <li>
                <Link href="about" className="text-gray-400 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="products" className="text-gray-400 hover:text-white transition-colors">
                  产品服务
                </Link>
              </li>
              <li>
                <Link href="contact" className="text-gray-400 hover:text-white transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-xl font-bold mb-6">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mt-1 mr-3" />
                <span className="text-gray-400">上海市浦东新区川宏路508号410室</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-400">15900911517</span>
              </li>
            </ul>
          </div>

          {/* 订阅 */}
          <div>
            <h3 className="text-xl font-bold mb-6">订阅我们</h3>
            <p className="text-gray-400 mb-4">订阅我们的电子通讯，获取最新的公司动态和行业资讯</p>
            <div className="flex">
              <input
                type="email"
                placeholder="您的邮箱地址"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-button focus:outline-none w-full border-none"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-button whitespace-nowrap">
                订阅
              </button>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex justify-end">
            <div className="text-gray-500 text-sm">© 2025 中谱科技有限公司 版权所有 | 京ICP备12345678号-1</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
