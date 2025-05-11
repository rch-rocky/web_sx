import {
  FlaskRoundIcon as Flask,
  SquareStackIcon as Stack,
  ShieldCheck,
  PenToolIcon as Tools,
  HeadphonesIcon,
} from "lucide-react"

const advantages = [
  {
    id: 1,
    title: "技术研发与创新能力",
    description: "博士/硕士团队主导，掌握共聚合吸附剂、分子印迹等前沿技术，推动材料与应用创新",
    icon: Flask,
  },
  {
    id: 2,
    title: "全场景产品覆盖",
    description: "固相萃取柱、QuEChERS、免疫亲和柱等全矩阵产品，适配食品、环境、医药等多领域需求",
    icon: Stack,
  },
  {
    id: 3,
    title: "严格质量与标准化",
    description: "符合GB、EPA、欧盟等50+项标准，关键参数（碳载量、比表面积）行业领先",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "定制化服务能力",
    description: "支持规格、官能团、应用场景灵活定制，提供复杂基质专属解决方案",
    icon: Tools,
  },
  {
    id: 5,
    title: "客户导向的服务体系",
    description: "全周期技术支撑与成本优化工具（均质子、过滤器），降低用户综合成本",
    icon: HeadphonesIcon,
  },
]

export default function AdvantagesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的核心优势</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            凭借强大的技术实力和丰富的行业经验，为客户提供专业的色谱分析解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <advantage.icon className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
