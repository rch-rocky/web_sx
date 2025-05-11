import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    title: "固相萃取柱（SPE）",
    description: "提供聚合物基质和硅胶基质多种类型固相萃取柱，适用于各类样品前处理，具有优异的分离效果和重现性。",
    image:"spe.jpg"
  },
  {
    id: 2,
    title: "QuEChERS产品",
    description: "包含萃取盐包、净化管、陶瓷均质子和多功能过滤器，用于农残兽残检测样品前处理。",
    image:"que.jpg"
  },
  {
    id: 3,
    title: "离子色谱前处理柱",
    description: "提供H柱、Na柱、RP柱、Ag柱、Ba柱和C18柱等多种离子色谱前处理柱，满足不同分析需求。",
    image:"lzsp.jpg"
  },
  {
    id: 4,
    title: "真菌毒素免疫亲和柱",
    description: "专业用于黄曲霉毒素、玉米赤霉烯酮、T-2毒素、呕吐毒素和赭曲霉毒素A等真菌毒素检测的免疫亲和柱。",
    image:"zjds.jpg"
  },
  {
    id: 5,
    title: "专用柱",
    description: "提供氯丙醇专用柱、苯并芘专用柱、茶叶专用柱等多种专用柱，满足特定样品和分析需求。",
    image:"zyz.jpg"
  },
  {
    id: 6,
    title: "其他耗材",
    description: "提供各种配套耗材，满足实验室日常需求。",
    image:"haocai.png"
  },
]

export default function ProductsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的产品系列</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            森誉仪器提供全系列的色谱分析解决方案，包括固相萃取柱、QuEChERS产品、离子色谱前处理柱等专业产品
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link href={`/products#${product.id}`} className="text-primary font-medium flex items-center">
                  了解详情 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
