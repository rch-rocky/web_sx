import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// 从分类数据模型导入产品数据
import { spe } from "@/lib/products/spe"
import { quechers } from "@/lib/products/quechers"
import { mycotoxin } from "@/lib/products/mycotoxin"
import { consumables } from "@/lib/products/consumables"


// 根据分类ID获取分类名称
function getCategoryName(categoryId: string | undefined) {
  switch(categoryId) {
    case 'spe':
      return '固相萃取柱（SPE）';
    case 'quechers':
      return 'QuEChERS产品';
    case 'mycotoxin':
      return '真菌毒素免疫亲和柱';
    case 'ion-chromatography':
      return '离子色谱前处理柱';
    case 'specialized':
      return '专用柱';
    case 'consumables':
      return '其他耗材';
    default:
      return '产品分类';
  }
}

// 修改产品详情页面，删除相关文档部分
export default function ProductPage({ product, params = { id: '' } }: { product: any; params?: { id: string } }) {
  // 确保product参数正确传递
  if (!product) {
    return (
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">产品参数缺失</h1>
          <p className="text-gray-600 mb-6">请提供有效的产品信息。</p>
          <Link href="/products" className="text-primary font-medium flex items-center">
            <ArrowLeft className="mr-1 h-4 w-4" /> 返回产品列表
          </Link>
        </div>
      </main>
    )
  }

  // 从product对象中获取categoryId
  const categoryId = product.categoryId || params.id || '';



  // 如果找不到产品，显示错误信息
  if (!product) {
    return (
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">产品未找到</h1>
          <p className="text-gray-600 mb-6">抱歉，您查找的产品不存在。</p>
          <Link href="/products" className="text-primary font-medium flex items-center">
            <ArrowLeft className="mr-1 h-4 w-4" /> 返回产品列表
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20">
      {/* 页面标题 */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Link href="/" className="hover:text-primary transition-colors">
              首页
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary transition-colors">
              产品服务
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/products/${categoryId}`} className="hover:text-primary transition-colors">
              {getCategoryName(categoryId)}
            </Link>
            <span className="mx-2">/</span>
            <span>{product.fullName}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">{product.fullName}</h1>
        </div>
      </section>

      {/* 产品详情 */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">产品介绍</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{product.details || product.description}</p>

              {product.parameters && product.parameters.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">技术参数</h3>
                  <ul className="space-y-2">
                    {product.parameters.map((param, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{param}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

                {product.features && (
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">产品特点</h3>
                  {typeof product.features === 'string' ? (
                    <p className="text-gray-700">{product.features}</p>
                  ) : Array.isArray(product.features) && product.features.length > 0 ? (
                    <ul className="space-y-2">
                      {product.features.map((features, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span>{features}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              )}  

               {product.use && (
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">使用方法</h3>
                  {typeof product.use === 'string' ? (
                    <p className="text-gray-700">{product.use}</p>
                  ) : Array.isArray(product.use) && product.use.length > 0 ? (
                    <ul className="space-y-2">
                      {product.use.map((use, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              )}  

              {product.standards && product.standards.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">相关标准</h3>
                  <ul className="space-y-2">
                    {product.standards.map((standards, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{standards}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.applications && product.applications.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">应用领域</h3>
                  <ul className="space-y-2">
                    {product.applications.map((application, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 订购信息 */}
      {product.orderInfo && product.orderInfo.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">订购信息</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead className="bg-gray-100">
                  <tr>
                    {Object.keys(product.orderInfo[0]).map((key) => (
                    <th key={key} className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      {key === 'code' ? '货号' : 
                       key === 'spec' ? '规格' : 
                       key === 'package' ? '包装' : 
                       key === 'description' ? '描述' : 
                       key === 'function' ? '功能' : 
                       key === 'composition' ? '成分' : 
                       key === 'specification' ? '技术参数' : 
                       key === 'product' ? '产品' : 
                       key === 'type' ? '适用毒素类型' : 
                       key === 'typea' ? '填料类型' : 
                       key === 'typeb' ? '类型' : 
                       key === 'suitable' ? '适用' : key}
                    </th>
                  ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {product.orderInfo.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      {Object.entries(item).map(([key, value]) => (
                        <td key={key} className="px-6 py-4 text-sm text-gray-700">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 技术支持 */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">技术支持</h2>
          <div className="bg-primary/5 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              如果您对该产品有任何疑问或需要技术支持，请随时联系我们的技术支持团队。我们将为您提供专业的解答和支持。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-button font-medium transition-colors"
              >
                联系我们
              </Link>
              <button className="bg-white border border-primary text-primary hover:bg-primary/5 px-6 py-2 rounded-button font-medium transition-colors">
                在线咨询
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
