import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* 页面标题 */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">关于我们</h1>
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span>关于我们</span>
          </div>
        </div>
      </section>

      {/* 公司介绍 */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">公司简介</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
              上海森熹仪器有限公司专注于色谱填料领域，构建了涵盖硅胶/聚合物基材制备、表面处理与修饰、色谱分离分析方法开发、色谱柱装填工艺优化，以及工业制备规模色谱纯化工艺开发的多学科研发团队。凭借丰富的解决方案和行业经验，公司可为客户定制不同粒径、官能团和应用需求的色谱产品，覆盖固相萃取填料、色谱柱、QUECHERS净化管、离子色谱前处理柱、薄层色谱板等全品类耗材，并涉及柱层析硅胶、色谱填料的研发、生产与销售。其产品广泛应用于生物医药、食品安全检测、农药/兽药残留分析、环境监测等快速发展的民生领域。
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
              公司现有产品矩阵包括：固相萃取柱/板、色谱柱、小柱柱管、QUECHERS系列（净化管、盐包、陶瓷均质子）、真菌毒素免疫亲和柱、样品瓶盖垫、针式滤器，以及原子吸收光谱仪配套石墨管、微波消解罐等专用耗材。同时提供覆盖样品前处理、分离纯化到分析检测的全流程色谱解决方案。
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
              上海森熹仪器与国内多家权威实验室及机构建立深度合作，服务对象涵盖政府机关（如上海国家质量监督检测中心、出入境检验检疫局）、知名第三方检测公司（如上海普研）及众多生产型企业，为其科研与检测提供优质实验耗材支持。公司凭借高品质产品、专业化应用支持及完善的售前售后服务，赢得用户信赖，在业界树立了良好口碑。              
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
              公司秉承"以专业经营客户、以质量赢得客户、以服务感动客户"的宗旨，坚持"诚信立足天下，品质引领未来"的发展原则，通过持续创新的技术提供高性价比产品。目前已形成具备强大凝聚力、开拓力和创新力的团队，并构建了稳定的客户群体与合作伙伴网络。在服务层面，公司以客户需求为导向，承诺24小时快速响应并提供强力技术支持，同时联合国内权威专家开展技术培训，推出行业标准解读及定制化解决方案，全方位赋能客户研发与检测需求。</p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="https://readdy.ai/api/search-image?query=A%20modern%20technology%20company%20meeting%20room%20with%20professionals%20discussing%20over%20digital%20screens%2C%20blue-themed%20office%20space%2C%20glass%20walls%2C%20clean%20and%20minimalist%20design%2C%20people%20collaborating%20on%20high-tech%20projects%2C%20professional%20business%20atmosphere&width=600&height=400&seq=2&orientation=landscape"
                alt="公司简介"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">发展历程</h2>
          <div className="relative">
            {/* 时间轴 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {/* 时间点1 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary w-4 h-4 rounded-full z-10"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
                <h3 className="text-xl font-bold text-primary mb-2">2010年</h3>
                <p className="text-gray-700">上海森誉仪器有限公司成立，开始研发色谱填料和色谱柱产品。</p>
              </div>
            </div>

            {/* 时间点2 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary w-4 h-4 rounded-full z-10"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
                <h3 className="text-xl font-bold text-primary mb-2">2015年</h3>
                <p className="text-gray-700">公司产品线扩展至固相萃取柱和QUECHERS快速净化器，并开始拓宽国内市场。</p>
              </div>
            </div>

            {/* 时间点3 */}
            <div className="relative mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary w-4 h-4 rounded-full z-10"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
                <h3 className="text-xl font-bold text-primary mb-2">2018年</h3>
                <p className="text-gray-700">公司开始与多家专业实验室有业务往来，比如知名的第三方检测公司有上海国家质量监督检测中心、出入境检验检疫局等政府机关、还有上海普研等，以及非常多的生产型企业，为他们的科研和检测提供优质的实验耗材。</p>
              </div>
            </div>

            {/* 时间点4 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary w-4 h-4 rounded-full z-10"></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
                <h3 className="text-xl font-bold text-primary mb-2">2023年至今</h3>
                <p className="text-gray-700">
                  公司持续创新，研发新型色谱材料和应用技术，成为行业领先的色谱耗材解决方案提供商。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </main>
  )
}
