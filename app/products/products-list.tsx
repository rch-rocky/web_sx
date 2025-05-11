import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const productCategories = [
  {
    id: "spe",
    title: "固相萃取柱（SPE）",
    description: "专业提供多种规格固相萃取柱，适用于样品前处理，具有优异的分离效果和重现性。",
    image:"spe.jpg",
    subcategories: [
      {
        title: "聚合物基质",
        products: [
          { name: "HLB（亲水亲脂平衡）", description: "用于非极性至中等极性的酸性、中性、碱性化合物" },
          { name: "MCX（混合型强阳离子交换）", description: "萃取碱性化合物" },
          { name: "WCX（混合型弱阳离子交换）", description: "萃取强碱性化合物" },
          { name: "MAX（混合型强阴离子交换）", description: "萃取酸性化合物" },
          { name: "WAX（混合型弱阴离子交换）", description: "萃取强酸性化合物" },
        ],
      },
      {
        title: "硅胶基质 - 反相吸附",
        products: [
          { name: "C18（封端、未封端、亲水型）", description: "萃取非极性化合物" },
          { name: "C8", description: "中等疏水性，适合生物样本" },
          { name: "CN（氰丙基）", description: "极性和非极性化合物富集" },
          { name: "PH（苯基）", description: "对平面结构化合物吸附更佳" },
        ],
      },
      {
        title: "硅胶基质 - 正相吸附",
        products: [
          { name: "Silica（未键合硅胶）", description: "强极性吸附" },
          { name: "Diol（二醇基）", description: "类似硅胶但减少死吸附" },
          { name: "NH2（氨丙基）", description: "正相或弱阴离子交换" },
          { name: "PSA（乙二胺-N-丙基）", description: "强酸、极性化合物和金属离子" },
          { name: "SAX（强阴离子交换）", description: "有机酸萃取" },
          { name: "SCX（强阳离子交换）", description: "碱性化合物萃取" },
          { name: "PRS（丙磺酸）", description: "弱碱性化合物萃取" },
          { name: "PBA（苯硼酸）", description: "二醇类化合物萃取" },
        ],
      },
      {
        title: "无机吸附剂",
        products: [
          { name: "Florisil（农残级佛罗里硅土）", description: "农药多残留检测" },
          { name: "GCB（石墨化碳黑）及复合型", description: "去除色素" },
          { name: "Alumina A（酸性）", description: "阳离子交换" },
          { name: "Alumina B（碱性）", description: "阴离子交换" },
          { name: "Alumina N（中性）", description: "杂环类物质吸附" },
          { name: "干燥型", description: "装填Na₂SO₄或MgSO₄，去除水分" },
        ],
      },
      {
        title: "复合型",
        products: [
          { name: "C8/SAX", description: "生物基质中的酸性药物" },
          { name: "C8/SCX", description: "生物基质中的碱性药物" },
        ],
      },
    ],
  },
  {
    id: "quechers",
    title: "QuEChERS产品",
    description: "包含净化管、盐包、陶瓷均质子等，用于农残兽残检测样品前处理。",
    image:"que.jpg",
    products: [
      { name: "萃取盐包", description: "含MgSO₄、NaCl等，用于快速提取" },
      { name: "净化管", description: "针对不同基质（含脂、色素等）的吸附剂组合" },
      { name: "陶瓷均质子", description: "提高萃取效率" },
      { name: "多功能过滤器", description: "结合净化与过滤功能" },
    ],
  },
  {
    id: "ion-chromatography",
    title: "离子色谱前处理柱",
    description: "提供各类离子色谱前处理柱，满足不同分析需求，确保分离效果。",
    image:"lzsp.jpg",
    products: [
      { name: "H柱", description: "去除金属离子，中和强碱性样品" },
      { name: "Na柱", description: "去除多价阳离子" },
      { name: "RP柱", description: "去除疏水化合物" },
      { name: "Ag柱", description: "去除卤素离子" },
      { name: "Ba柱", description: "去除硫酸根" },
      { name: "C18柱", description: "脱盐及去除有机物" },
    ],
  },
  {
    id: "mycotoxin",
    title: "真菌毒素免疫亲和柱",
    description: "专业用于真菌毒素检测的免疫亲和柱，确保检测结果准确可靠。",
    image:"zjds.jpg",
    products: [
      { name: "黄曲霉毒素", description: "Total、B1、M1" },
      { name: "玉米赤霉烯酮（ZEA）", description: "专用于玉米赤霉烯酮检测" },
      { name: "T-2毒素", description: "专用于T-2毒素检测" },
      { name: "呕吐毒素（DON）", description: "专用于呕吐毒素检测" },
      { name: "赭曲霉毒素A（OTA）", description: "专用于赭曲霉毒素A检测" },
    ],
  },
 
  {
    id: "specialized",
    title: "专用柱",
    description: "提供各种专用柱，满足特定样品和分析需求。",
    image:"/zyz.jpg",
    products: [
      { name: "氯丙醇专用柱", description: "去除水分，优化液液萃取" },
      { name: "苯并芘专用柱及分子印迹柱", description: "国标检测优化" },
      { name: "茶叶专用柱（DPT）", description: "去除色素、茶多酚" },
      { name: "抗氧化剂专用柱（AOX）", description: "食用油中抗氧化剂检测" },
      { name: "偶氮染料检测柱", description: "禁用偶氮染料检测" },
      { name: "蜂蜜检测专用柱（HON）", description: "鉴别掺假蜂蜜" },
      { name: "塑化剂检测柱（PSA/Silica）", description: "邻苯二甲酸酯类检测" },
      { name: "烷基汞检测柱", description: "重金属吸附" },
      { name: "DNPH-silica柱及除臭氧管", description: "醛酮类化合物检测" },
      { name: "聚酰胺柱（PA）", description: "合成色素吸附" },
      { name: "苏丹红专用柱（SDR）", description: "氧化铝或分子印迹净化" },
    ],
  },
  {
    id: "consumables",
    title: "其他耗材",
    description: "提供各种配套耗材，满足实验室日常需求。",
    image:"haocai.png",
    products: [
      { name: "样品瓶盖垫", description: "各种规格样品瓶盖垫" },
      { name: "针式滤器", description: "各种规格针式滤器" },
      { name: "配套石墨管", description: "原子吸收用" },
      { name: "微波消解罐", description: "样品前处理用" },
    ],
  },
]

export default function ProductsPage() {
  return (
    <main className="pt-20">
      {/* 页面标题 */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">产品服务</h1>
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span>产品服务</span>
          </div>
        </div>
      </section>

      {/* 产品分类 */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8">
            {productCategories.map((category) => (
              <div key={category.id} id={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 lg:w-1/4">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3 lg:w-3/4 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h2>
                    <p className="text-gray-700 mb-4">{category.description}</p>

                    {/* 简化的产品列表预览 */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">主要产品:</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories
                          ? // 显示子类别名称
                            category.subcategories.map((subcategory, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {subcategory.title}
                              </span>
                            ))
                          : // 显示部分产品名称
                            category.products
                              ?.slice(0, 4)
                              .map((product, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                  {product.name}
                                </span>
                              ))}
                        {((category.subcategories && category.subcategories.length > 5) ||
                          (category.products && category.products.length > 4)) && (
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">更多...</span>
                        )}
                      </div>
                    </div>

                    <Link
                      href={`/products/${category.id}`}
                      className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-button text-sm font-medium"
                    >
                      查看详情 <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 定制服务 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">定制化服务</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              我们提供专业的色谱产品定制服务，根据客户的具体需求，定制开发各类色谱填料和色谱柱产品
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 服务1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-flask-line text-primary ri-2x"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">填料定制</h3>
              <p className="text-gray-600">
                根据客户的分析需求，定制开发特定粒径、孔径、表面修饰的色谱填料，满足特殊分离要求。
              </p>
            </div>

            {/* 服务2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-test-tube-line text-primary ri-2x"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">色谱柱定制</h3>
              <p className="text-gray-600">
                提供不同规格、不同填料的色谱柱定制服务，包括特殊尺寸、特殊填料组合等定制需求。
              </p>
            </div>

            {/* 服务3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-list-3-line text-primary ri-2x"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">方法开发</h3>
              <p className="text-gray-600">
                针对客户的特定样品和分析目标，提供色谱分析方法开发服务，包括条件优化和验证。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
