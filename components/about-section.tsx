import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">关于森熹仪器</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              上海森熹仪器有限公司专注于色谱填料领域，拥有硅胶/聚合物基材制备、表面修饰、色谱分析及工业级纯化工艺开发等核心技术，积累了丰富的行业解决方案经验。公司与上海国家质量监督检测中心、出入境检验检疫局、上海普研等权威机构及众多生产型企业建立了深度合作，提供实验耗材与技术支持，并以客户需求为核心，通过24小时快速响应机制、专家技术培训及定制化标准解决方案，为科研检测与工业生产提供全链条服务支持。
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              公司产品涉及固相萃取填料、固相萃取柱、QUECHERS快速净化器、离子色谱前处理柱、液相色谱柱等多种色谱耗材产品以及分离纯化使用的硅层析硅胶、色谱填料、薄层色谱板的研发、生产和销售。色谱产品广泛应用于生物医药、食品安全检测、农药残留检测、兽药残留检测、环境监测等大系统生并处于快速发展的行业。
            </p>
            <Link
              href="/about"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-button font-medium transition-colors whitespace-nowrap"
            >
              了解更多
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="gsjj.jpg"
              alt="公司简介"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
