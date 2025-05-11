import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { spe } from "@/lib/products/spe"



export default function CategoryDetail({ params, categoryData }: CategoryDetailProps) {
  // 根据ID查找产品类别
  const category = categoryData

  // 如果找不到产品，显示错误信息
  if (!category) {
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
            <Link href="/products" className="hover:text-primary transition-colors">
              {category.title}
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">{category.title}</h1>
        </div>
      </section>

      {/* 产品概述 */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">产品概述</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">{category.longDescription || category.description}</p>

              {category.features && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">产品特点</h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {category.applications && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">应用领域</h3>
                  <ul className="space-y-2">
                    {category.applications.map((application, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

                   {category.use && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">使用方法</h3>
                  {typeof category.use === 'string' ? (
                    <p className="text-gray-700">{category.use}</p>
                  ) : (
                    <ul className="space-y-2">
                      {category.use.map((use, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

            {category.standards && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">相关标准</h3>
                <ul className="space-y-2">
                  {category.standards.map((standard, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span>{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* 产品系列 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">产品系列</h2>

          {category.subcategories ? (
            // 有子类别的产品
            <div className="space-y-8">
              {category.subcategories.map((subcategory, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{subcategory.title}</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {subcategory.products.map((product, productIndex) => (
                      <Link
                        key={productIndex}
                        href={`/products/${category.id}/${product.id}`}
                        className="block p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // 没有子类别的产品
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.products?.map((product, index) => (
                  <Link
                    key={index}
                    href={`/products/${category.id}/${product.id}`}
                    className="block p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 技术支持 */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">技术支持</h2>
          <div className="bg-primary/5 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              我们提供全面的技术支持，包括产品选择指导、使用方法咨询、故障排除和定制化解决方案。
              如果您对我们的产品有任何疑问，请随时联系我们的技术支持团队。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-button font-medium transition-colors"
              >
                联系我们
              </Link>
              <button className="bg-white border border-primary text-primary hover:bg-primary/5 px-6 py-2 rounded-button font-medium transition-colors">
                下载产品手册
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
