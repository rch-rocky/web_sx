import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      className="hero-section h-screen pt-20 relative"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 30, 60, 0.7) 0%, rgba(0, 30, 60, 0.4) 40%, rgba(0, 30, 60, 0.01) 70%, rgba(0, 30, 60, 0.005) 100%), url('sy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            梦想启航 携手共赢
            <br />
            专业色谱耗材解决方案
          </h1>
          <p className="text-lg text-white mb-8">
            上海森熹仪器是一家整合国内外色谱填料领域技术资源的高科技企业，拥有硅胶/聚合物基材制备与表面修饰等核心专利技术，建有自主创新研发中心，形成集色谱分析、工业纯化工艺开发及定制化耗材供应于一体的全周期技术服务体系。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-button font-medium transition-colors whitespace-nowrap"
            >
              了解我们的服务
            </Link>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-button font-medium transition-colors whitespace-nowrap"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
