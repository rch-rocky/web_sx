import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const newsItems = [
  {
    id: 1,
    title: "xxx成功举办2025年人工智能技术峰会",
    description: "本次峰会汇集了国内外人工智能领域的专家学者和企业代表，共同探讨人工智能技术的最新发展趋势和应用前景。",
    content:
      "本次峰会汇集了国内外人工智能领域的专家学者和企业代表，共同探讨人工智能技术的最新发展趋势和应用前景。会议期间，多位专家就人工智能在医疗、金融、制造等领域的应用进行了深入探讨，分享了最新的研究成果和实践经验。同时，我公司也展示了最新研发的智能色谱分析系统，引起了与会者的广泛关注。",
    date: "2025-04-18",
    image:
      "https://readdy.ai/api/search-image?query=A%20technology%20conference%20with%20people%20discussing%20AI%20and%20machine%20learning%2C%20professional%20setting%2C%20blue%20theme%2C%20business%20professionals%20in%20a%20modern%20conference%20hall%20with%20presentation%20screens&width=400&height=250&seq=3&orientation=landscape",
  },
  {
    id: 2,
    title: "xxx与国家电网达成战略合作协议",
    description: "双方将在智能电网、能源互联网和大数据分析等领域展开深入合作，共同推动能源行业的数字化转型。",
    content:
      "近日，我公司与国家电网正式签署战略合作协议，双方将在智能电网、能源互联网和大数据分析等领域展开深入合作，共同推动能源行业的数字化转型。根据协议，我公司将为国家电网提供先进的色谱分析设备和技术支持，用于电力设备绝缘油的分析检测，确保电网设备的安全稳定运行。此次合作标志着我公司产品在能源行业的应用取得重要突破。",
    date: "2025-04-15",
    image:
      "https://readdy.ai/api/search-image?query=A%20business%20partnership%20signing%20ceremony%2C%20executives%20shaking%20hands%2C%20formal%20business%20setting%2C%20corporate%20meeting%20room%20with%20blue%20accents%2C%20professional%20atmosphere&width=400&height=250&seq=4&orientation=landscape",
  },
  {
    id: 3,
    title: "xxx发布新一代智能制造平台 ZP-Smart 5.0",
    description: "新平台集成了最新的人工智能和物联网技术，为制造企业提供更加智能化、自动化的生产管理解决方案。",
    content:
      "我公司近日正式发布新一代智能制造平台 ZP-Smart 5.0。该平台集成了最新的人工智能和物联网技术，为制造企业提供更加智能化、自动化的生产管理解决方案。新平台特别针对色谱耗材生产过程进行了优化，通过实时监控和智能调控，显著提高了产品质量的一致性和生产效率。同时，平台还具备预测性维护功能，可以提前发现设备潜在问题，减少生产中断时间。",
    date: "2025-04-02",
    image:
      "https://readdy.ai/api/search-image?query=A%20product%20launch%20event%20for%20new%20technology%2C%20modern%20stage%20with%20blue%20lighting%2C%20audience%20watching%20presentation%20of%20new%20tech%20product%2C%20professional%20corporate%20event&width=400&height=250&seq=5&orientation=landscape",
  },
  {
    id: 4,
    title: "我公司参加2025年全国色谱学术交流会",
    description: "我公司代表团参加了在北京举办的2025年全国色谱学术交流会，展示了最新研发的色谱产品和技术。",
    content:
      "上周，我公司代表团参加了在北京举办的2025年全国色谱学术交流会。会议期间，我公司技术总监进行了题为《新型高选择性色谱填料的研发与应用》的专题报告，介绍了公司在色谱填料领域的最新研究成果。同时，我公司还在展览区设立了展台，展示了最新研发的色谱产品和技术，吸引了众多参会者前来咨询和交流。通过此次参会，我公司进一步扩大了行业影响力，并与多家科研院所和企业达成了合作意向。",
    date: "2025-03-25",
    image:
      "https://readdy.ai/api/search-image?query=Scientific%20conference%20with%20chromatography%20experts%2C%20professional%20presentation%20of%20research%20findings%2C%20academic%20atmosphere%2C%20laboratory%20equipment%20display%2C%20blue%20theme&width=400&height=250&seq=6&orientation=landscape",
  },
  {
    id: 5,
    title: "我公司新型免疫亲和柱产品通过国家食品安全检测认证",
    description: "我公司研发的新型真菌毒素免疫亲和柱产品成功通过国家食品安全检测认证，可广泛应用于食品安全检测领域。",
    content:
      "近日，我公司研发的新型真菌毒素免疫亲和柱产品成功通过国家食品安全检测认证。该产品采用了我公司自主研发的高特异性抗体技术，对黄曲霉毒素、玉米赤霉烯酮等多种真菌毒素具有优异的选择性和灵敏度，检测限远低于国家标准要求。此次认证的通过，标志着我公司在食品安全检测领域的技术实力得到国家权威机构的认可，产品可广泛应用于粮食、乳制品、坚果等食品的真菌毒素检测。",
    date: "2025-03-10",
    image:
      "https://readdy.ai/api/search-image?query=Laboratory%20testing%20of%20food%20samples%20for%20mycotoxins%2C%20scientific%20equipment%20for%20food%20safety%20analysis%2C%20immunoaffinity%20columns%20in%20use%2C%20professional%20setting&width=400&height=250&seq=7&orientation=landscape",
  },
  {
    id: 6,
    title: "我公司荣获2025年度'科技创新企业'称号",
    description: "在近日举行的2025年度科技创新评选活动中，我公司凭借在色谱技术领域的创新成果，荣获'科技创新企业'称号。",
    content:
      "在近日举行的2025年度科技创新评选活动中，我公司凭借在色谱技术领域的创新成果，荣获'科技创新企业'称号。评选委员会特别肯定了我公司在新型色谱填料研发和应用方面取得的突破性进展，以及在推动行业技术进步方面做出的贡献。公司董事长在获奖致辞中表示，将继续加大研发投入，推动色谱技术创新，为客户提供更优质的产品和服务。",
    date: "2025-02-28",
    image:
      "https://readdy.ai/api/search-image?query=Award%20ceremony%20for%20technology%20innovation%2C%20business%20executives%20receiving%20award%20on%20stage%2C%20formal%20event%20with%20blue%20lighting%2C%20professional%20atmosphere&width=400&height=250&seq=8&orientation=landscape",
  },
]

export default function NewsPage() {
  return (
    <main className="pt-20">
      {/* 页面标题 */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">新闻资讯</h1>
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              首页
            </Link>
            <span className="mx-2">/</span>
            <span>新闻资讯</span>
          </div>
        </div>
      </section>

      {/* 新闻列表 */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 lg:w-1/4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3 lg:w-3/4 p-6">
                    <div className="text-gray-500 text-sm mb-2">{item.date}</div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Link href={`/news/${item.id}`} className="text-primary font-medium flex items-center">
                      阅读全文 <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
