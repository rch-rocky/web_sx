// 固相萃取柱（SPE）产品数据
export const spe = {
  id: "spe",
  title: "固相萃取柱（SPE）",
  description: "专业提供多种规格固相萃取柱，适用于样品前处理，具有优异的分离效果和重现性。",
  longDescription:
    "固相萃取柱（SPE）是一种样品前处理技术，用于从复杂基质中分离、富集和纯化目标化合物。我们提供多种基质类型的固相萃取柱，包括聚合物基质、硅胶基质、无机吸附剂和复合型，满足不同分析需求。我们的产品具有高选择性、高回收率和良好的重现性，广泛应用于食品安全、环境监测、生物医药等领域。",
  image:
    "https://readdy.ai/api/search-image?query=Professional%20solid%20phase%20extraction%20SPE%20cartridges%20and%20columns%20arranged%20neatly%20on%20a%20clean%20laboratory%20bench%2C%20showing%20different%20sizes%20and%20types%20of%20extraction%20columns%20with%20clear%20plastic%20housing%20and%20white%20sorbent%20material%20inside%2C%20high-quality%20scientific%20equipment%20on%20pristine%20white%20background&width=800&height=500&seq=10&orientation=landscape",
  subcategories: [
    {
      title: "聚合物基质",
      products: [
        {
          id: "hlb",
          categoryId: "spe",
          name: "SPE-HLB",
          fullName: "HLB（亲水亲脂平衡）",
          description: "用于非极性至中等极性的酸性、中性、碱性化合物",
          details: "由苯乙烯-二乙烯基苯共聚物制成，兼具亲水与疏水特性。",
          parameters: ["比表面积：600m²/g", "平均粒径：50μm", "平均孔径：300Å"],
          applications: ["血液/尿液中药物及违禁品检测（抗抑郁药、海洛因）", "动物源性食品中抗生素残留（青霉素、硝基咪唑）", "水体中微囊藻毒素富集"],
          standards: ["GB/T 21315-2007", "GB/T 21313-2007", "GB 29685-2013", "GB 29682-2013", "NY/T 2067-2011", "SN/T 2654-2010", "SN/T 2222-2008", "GB 5009.150-2016"],
          orderInfo: [
            { code: "0088-00011", spec: "30mg/1mL", package: "100支/盒" },
            { code: "0088-00001", spec: "60mg/3mL", package: "50支/盒" },
            { code: "0088-00002", spec: "150mg/6mL", package: "30支/盒" },
            { code: "0088-00003", spec: "200mg/6mL", package: "30支/盒" },
            { code: "0088-00004", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0088-00005", spec: "250mg/3mL", package: "50支/盒" },
            { code: "0088-00009", spec: "300mg/6mL", package: "30支/盒" },
            { code: "0088-00008", spec: "500mg/3mL", package: "30支/盒" },
            { code: "0088-00006", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0088-00007", spec: "1000mg/6mL", package: "30支/盒" },
          ],
          image:
            "https://readdy.ai/api/search-image?query=Hydrophilic-Lipophilic%20Balance%20SPE%20cartridges%20displayed%20professionally%2C%20showing%20different%20sizes%20of%20extraction%20columns%20with%20clear%20plastic%20housing%20and%20white%20polymer%20sorbent%20material%20inside%2C%20high-quality%20scientific%20equipment%20on%20pristine%20white%20background&width=800&height=500&seq=20&orientation=landscape",
        },
        {
          id: "mcx",
          categoryId: "spe",
          name: "SPE-MCX",
          fullName: "MCX（混合型强阳离子交换）",
          description: "萃取碱性化合物",
          details: "磺酸基键合聚合物，强阳离子交换能力。",
          parameters: ["比表面积：600m²/g", "平均粒径：50μm", "平均孔径：300Å"],
          applications: ["检测食品中的农药和兽药残留，如瘦肉精", "分析生物基质中的碱性药物及代谢物"],
          standards: ["GB/T 22388-2008", "GB 29694-2013", "GB/T 22286-2008", "GB/T 21313-2007"],
          orderInfo: [
            { code: "0088-08011", spec: "30mg/1mL", package: "100支/盒" },
            { code: "0088-08022", spec: "60mg/3mL", package: "50支/盒" },
            { code: "0088-08033", spec: "150mg/6mL", package: "30支/盒" },
            { code: "0088-08044", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0088-08055", spec: "200mg/6mL", package: "30支/盒" },
            { code: "0088-08066", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0088-08088", spec: "500mg/6mL", package: "30支/盒" }
          ],
          image:
            "https://readdy.ai/api/search-image?query=Mixed-mode%20cation%20exchange%20SPE%20cartridges%20displayed%20professionally%2C%20showing%20different%20sizes%20of%20extraction%20columns%20with%20clear%20plastic%20housing%20and%20white%20polymer%20sorbent%20material%20inside%2C%20high-quality%20scientific%20equipment%20on%20pristine%20white%20background&width=800&height=500&seq=30&orientation=landscape",
        },
        {
          id: "wcx",
          categoryId: "spe",
          name: "SPE-WCX",
          fullName: "WCX（混合型弱阳离子交换）",
          description: "萃取强碱性化合物",
          details: "羧基修饰的PS/DVB，弱阳离子交换吸附剂。",
          parameters: ["比表面积：600m²/g", "平均粒径：50μm", "平均孔径：300Å"],
          applications: ["强碱性药物检测"],
          standards: ["GB/T 5009.192-2003"],
          orderInfo: [
            { code: "0088-08089", spec: "30mg/1mL", package: "100支/盒" },
            { code: "0088-08081", spec: "60mg/3mL", package: "50支/盒" },
            { code: "0088-08082", spec: "150mg/6mL", package: "30支/盒" },
            { code: "0088-08083", spec: "200mg/6mL", package: "30支/盒" },
            { code: "0088-08084", spec: "500mg/6mL", package: "30支/盒" },
          ],
          image:
            "https://readdy.ai/api/search-image?query=Mixed-mode%20weak%20cation%20exchange%20SPE%20cartridges%20displayed%20professionally%2C%20showing%20different%20sizes%20of%20extraction%20columns%20with%20clear%20plastic%20housing%20and%20specialized%20sorbent%20material%20inside%2C%20high-quality%20scientific%20equipment%20on%20pristine%20white%20background&width=800&height=500&seq=22&orientation=landscape",
        },
        {
          id: "max",
          categoryId: "spe",
          name: "SPE-MAX",
          fullName: "MAX（混合型强阴离子交换）",
          description: "萃取酸性化合物",
          details: "季铵基键合强阴离子交换吸附剂。",
          parameters: ["比表面积：600m²/g", "平均粒径：50μm", "平均孔径：300Å"],
          applications: ["食品中酸性药物及添加剂检测", "体液中的碱性药物及代谢物检测"],
          standards: ["GB/T 20746-2006", "GB/T 22992-2008", "GB 5009.96-2016", "GB 5009.189-2016", "GB 5009.185-2016", "GB 5009.153-2016", "GB 5009.278-2016"],
          orderInfo: [
            { code: "0088-00061", spec: "30mg/1mL", package: "100支/盒" },
            { code: "0088-00062", spec: "60mg/3mL", package: "50支/盒" },
            { code: "0088-00063", spec: "150mg/6mL", package: "30支/盒" },
            { code: "0088-00064", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0088-00065", spec: "200mg/6mL", package: "30支/盒" },
            { code: "0088-00057", spec: "500mg/3mL", package: "50支/盒" },
          ],
          image:
            "https://readdy.ai/api/search-image?query=Mixed-mode%20strong%20anion%20exchange%20SPE%20cartridges%20displayed%20professionally%2C%20showing%20different%20sizes%20of%20extraction%20columns%20with%20clear%20plastic%20housing%20and%20specialized%20sorbent%20material%20inside%2C%20high-quality%20scientific%20equipment%20on%20pristine%20white%20background&width=800&height=500&seq=23&orientation=landscape",
        },
        {
          id: "wax",
          categoryId: "spe",
          name: "SPE-WAX",
          fullName: "WAX（混合型弱阴离子交换）",
          description: "萃取强酸性化合物",
          details: "三级胺基修饰的弱阴离子交换吸附剂。",
          parameters: ["比表面积：600m²/g", "平均粒径：50μm", "平均孔径：300Å"],
          applications: ["强酸性药物检测"],
          standards: ["GB 31604.35-2016"],
          orderInfo: [
            { code: "0088-00067", spec: "30mg/1mL", package: "100支/盒" },
            { code: "0088-00068", spec: "60mg/3mL", package: "50支/盒" },
            { code: "0088-00069", spec: "150mg/6mL", package: "30支/盒" },
            { code: "0088-00070", spec: "200mg/6mL", package: "30支/盒" },
            { code: "0088-00077", spec: "500mg/6mL", package: "30支/盒" },
          ],
          image:
            "https://readdy.ai/api/search-image?query=Mixed-mode%20weak%20anion%20exchange%20SPE%20cartridges%20displayed%20professionally%2C%20showing%20different%20sizes%20of%20extraction%20columns%20with%20clear%20plastic%20housing%20and%20specialized%20sorbent%20material%20inside%2C%20high-quality%20scientific%20equipment%20on%20pristine%20white%20background&width=800&height=500&seq=24&orientation=landscape",
        },,
      ],
    },,
    
    {
      title: "硅胶基质",
      products: [
        {
          id: "c18",
          categoryId: "spe",
          name: "SPE-C18",
          fullName: "C18（封端十八烷基）",
          description: "非极性化合物萃取",
          details: "十八烷基硅烷键合硅胶，高疏水性。",
          parameters: ["碳含量：17.6%", "粒径：50-60μm", "比表面积：300m²/g", "平均孔径：70Å"],
          applications: ["非极性化合物萃取"],
          standards: ["GB/T 29598-2013", "GB/T 21323-2007", "NY/T 1616-2008", "GB 5009.273-2016", "GB 5009.247-2016", "GB 5009.32-2016", "GB/T 22338-2008"],
          orderInfo: [
            { code: "0110－05009", spec: "50mg/1mL", package: "100支/盒" },
            { code: "0110－05012", spec: "60mg/3mL", package: "50支/盒" },
            { code: "0110－05011", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0110－05013", spec: "100mg/3mL", package: "50支/盒" },
            { code: "0110－05014", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0110－05016", spec: "200mg/6mL", package: "30支/盒" },
            { code: "0110－05017", spec: "300mg/6mL", package: "30支/盒" },
            { code: "0110－05019", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0110－05021", spec: "1000mg/6mL", package: "30支/盒" }
          ],
          image:
            "https://readdy.ai/api/search-image?query=C18%20silica%20SPE%20cartridges%20displayed%20professionally%2C%20showing%20different%20sizes%20of%20extraction%20columns%20with%20clear%20plastic%20housing%20and%20white%20silica%20sorbent%20material%20inside%2C%20high-quality%20scientific%20equipment%20on%20pristine%20white%20background&width=800&height=500&seq=25&orientation=landscape"
        },,
        {
          id: "c18a",
          categoryId: "spe",
          name: "SPE-C18A",
          fullName: "C18A（亲水型）",
          description: "水体中疏水性污染物检测",
          details: "亲水型十八烷基硅烷键合硅胶。",
          parameters: ["碳含量：17%", "粒径：40-75μm", "比表面积：300m²/g", "平均孔径：70Å"],
          applications: ["水体中疏水性污染物检测"],
          orderInfo: [
            { code: "0110-05040", spec: "60mg/3mL", package: "50支/盒" },
            { code: "0110-05033", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0110-05034", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0110-05035", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0110-05036", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0110-05037", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0110-05038", spec: "1000mg/12mL", package: "20支/盒" },
            { code: "0110-05039", spec: "2000mg/12mL", package: "20支/盒" }
          ]
        },,
        {
          id: "c18n",
          categoryId: "spe",
          name: "SPE-C18N",
          fullName: "C18N（未封端）",
          description: "生物大分子脱盐",
          details: "未封端十八烷基硅烷键合硅胶。",
          parameters: ["碳含量：17%", "粒径：40-75μm", "比表面积：300m²/g", "平均孔径：70Å"],
          applications: ["生物大分子脱盐"],
          orderInfo: [
            { code: "0110-05026", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0110-05027", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0110-05028", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0110-05029", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0110-05030", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0110-05031", spec: "1000mg/12mL", package: "20支/盒" },
            { code: "0110-05032", spec: "2000mg/12mL", package: "20支/盒" }
          ]
        },
        {
          id: "cn",
          categoryId: "spe",
          name: "SPE-CN",
          fullName: "CN（氰基）",
          description: "中等极性化合物萃取",
          details: "氰丙基键合硅胶，中等极性。",
          parameters: ["碳含量：5.8%", "粒径：40-75μm", "比表面积：290m²/g", "平均孔径：70Å"],
          applications: ["检测液体中药物及其代谢物","分析环境样品中的石油污染及农药残留"],
          orderInfo: [
            { code: "0110-05048", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0110-05049", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0110-05050", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0110-05051", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0110-05052", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0110-05053", spec: "1000mg/12mL", package: "20支/盒" },
            { code: "0110-05054", spec: "2000mg/12mL", package: "20支/盒" }
            
          ]
        },
        {
          id: "sax",
          categoryId: "spe",
          name: "SPE-SAX",
          fullName: "SAX（强阴离子交换）",
          description: "有机酸萃取",
          details: "季铵基键合硅胶，强阴离子交换能力。",
          parameters: ["粒径：40-75μm", "比表面积：510m²/g", "平均孔径：70Å"],
          applications: ["去除样品中的阴离子（如有机酸、核苷酸、磺酸根）", "检测肉制品中的激素残留","检测土壤、蔬菜和谷物中的磺酰脲类除草剂"],
          standards: ["GB 5009.157-2016"],
          orderInfo: [
            { code: "0110-00110", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0110-00111", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0110-00112", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0110-00113", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0110-00114", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0110-00115", spec: "1000mg/12mL", package: "20支/盒" }
          ]
        },
        {
          id: "scx",
          categoryId: "spe",
          name: "SPE-SCX",
          fullName: "SCX（强阳离子交换）",
          description: "碱性化合物萃取",
          details: "磺酸基键合硅胶，强阳离子交换能力。",
          parameters: ["碳含量：5.5%", "粒径：40-75μm", "比表面积：290m²/g", "平均孔径：70Å"],
          applications: ["检测食品中的抗生素和杀虫剂残留", "分析生物基质中的药物及其代谢物","检测药物滥用"],
          orderInfo: [
            { code: "0110-00116", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0110-00117", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0110-00118", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0110-00119", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0110-00120", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0110-00121", spec: "1000mg/12mL", package: "20支/盒" }
          ]
        },
        {
          id: "prs",
          categoryId: "spe",
          name: "SPE-PRS",
          fullName: "PRS（丙磺酸）",
          description: "弱碱性化合物萃取",
          details: "丙磺酸基键合硅胶，弱阳离子交换能力。",
          parameters: ["碳含量：4.5%", "粒径：40-75μm", "比表面积：310m²/g", "平均孔径：70Å"],
          applications: ["食品中弱碱性药物检测", "环境样品中弱碱性污染物分析"],
          standards: ["NY/T1756-2012"],
          orderInfo: [
            { code: "0110-0881", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0110-0882", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0110-0883", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0110-0884", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0110-0885", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0110-0886", spec: "1000mg/12mL", package: "20支/盒" }
          ]
        },
        {
          id: "pba",
          categoryId: "spe",
          name: "SPE-PBA",
          fullName: "PBA（苯硼酸）",
          description: "二醇类化合物萃取",
          details: "苯硼酸基键合硅胶，特异性结合二醇类化合物。",
          parameters: ["碳含量：5.5%", "粒径：40-75μm", "比表面积：480m²/g", "平均孔径：70Å"],
          applications: ["糖类化合物检测", "核苷酸分析"],
          standards: ["SN/T4519-2016"],
          orderInfo: [
            { code: "0110-06016", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0110-06017", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0110-06018", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0110-06019", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0110-06020", spec: "1000mg/6mL", package: "30支/盒" }
          ]
        },
        {
          id: "ph",
          categoryId: "spe",
          name: "SPE-PH",
          fullName: "PH（苯基）",
          description: "对平面结构化合物吸附更佳",
          details: "苯基键合硅胶，对平面结构化合物有特殊选择性。",
          parameters: ["碳含量：8.8%", "粒径：40-75μm", "比表面积：480m²/g", "平均孔径：70Å"],
          applications: ["平面结构化合物吸附"],
          orderInfo: [    
            { code: "0110-06021", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0110-06022", spec: "500mg/6mL", package: "30支/盒" }
          ]
          
        },
        {
          id: "c8",
          categoryId: "spe",
          name: "SPE-C8",
          fullName: "C8（辛基）",
          description: "中等疏水性，适合生物样本",
          details: "辛基硅烷键合硅胶，中等疏水性。",
          parameters: ["碳含量：9%", "粒径：40-75μm", "比表面积：280m²/g", "平均孔径：70Å"],
          applications: ["对生物大分子进行脱盐"],
          orderInfo: [
            { code: "0110-05041", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0110-05042", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0110-05043", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0110-05044", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0110-05045", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0110-05046", spec: "1000mg/12mL", package: "20支/盒" },
            { code: "0110-05047", spec: "2000mg/12mL", package: "30支/盒" }
          ],
          image:
            "https://readdy.ai/api/search-image?query=C8%20silica%20SPE%20cartridges%20displayed%20professionally%2C%20showing%20different%20sizes%20of%20extraction%20columns%20with%20clear%20plastic%20housing%20and%20white%20silica%20sorbent%20material%20inside%2C%20high-quality%20scientific%20equipment%20on%20pristine%20white%20background&width=800&height=500&seq=26&orientation=landscape"
        },
        {
            id: "silica",
            categoryId: "spe",
            name: "SPE-Silica",
            fullName: "Silica（未键合硅胶）",
            description: "强极性吸附",
            details: "未键合硅胶，适用于分析生物基质中的药物、毒物、环境污染物及其代谢物。",
            parameters: ["比表面积：480m²/g", "粒径：40-75μm", "平均孔径：70Å"],
            applications: ["分析生物基质中的药物、毒物、环境污染物及其代谢物", "分离脂类，抗生素，胆汁酸，豪糖等生物活性分子", "检测化妆品中的激素类物质", "检测环境中的多环芳烃类"],
            standards: ["GB 5009.82-2016", "HJ 805-2016"],
            orderInfo: [
              { "code": "0110-07001", "spec": "100mg/1mL", "package": "100支/盒" },
              { "code": "0110-07002", "spec": "60mg/3mL", "package": "30支/盒" },
              { "code": "0110-07003", "spec": "200mg/3mL", "package": "50支/盒" },
              { "code": "0110-07009", "spec": "200mg/6mL", "package": "50支/盒" },
              { "code": "0110-07004", "spec": "500mg/3mL", "package": "50支/盒" },
              { "code": "0110-07005", "spec": "500mg/6mL", "package": "30支/盒" },
              { "code": "0110-07006", "spec": "1000mg/6mL", "package": "30支/盒" },
              { "code": "0110-07007", "spec": "2000mg/12mL", "package": "20支/盒" },
              { "code": "0110-07008", "spec": "5000mg/20mL", "package": "20支/盒" }
            ]
          },
          {
            id: "diol",
            categoryId: "spe",
            name: "SPE-Diol",
            fullName: "Diol（二醇基）",
            description: "分析植物油中的色素、酚类、磷脂组成",
            details: "二醇基硅胶，适用于分析植物油中的色素、酚类、磷脂组成。",
            parameters: ["碳含量: 5.5%", "粒径: 40-75μm", "比表面积: 290 m²/g", "平均孔径: 70Å"],
            applications: ["分析植物油中的色素、酚类、磷脂组成", "检测尿液等生物基质中的药物及代谢物", "分离纯化聚糖混合物"],
            orderInfo: [
              { "code": "0110-07011", "spec": "100mg/1mL", "package": "100支/盒" },
              { "code": "0110-07012", "spec": "60mg/3mL", "package": "30支/盒" },
              { "code": "0110-07013", "spec": "200mg/3mL", "package": "50支/盒" },
              { "code": "0110-07014", "spec": "500mg/3mL", "package": "50支/盒" },
              { "code": "0110-07015", "spec": "500mg/6mL", "package": "30支/盒" },
              { "code": "0110-07016", "spec": "1000mg/3mL", "package": "30支/盒" },
              { "code": "0110-07017", "spec": "1000mg/6mL", "package": "30支/盒" },
              { "code": "0110-07018", "spec": "2000mg/12mL", "package": "20支/盒" },
              { "code": "0110-07019", "spec": "5000mg/20mL", "package": "20支/盒" }
            ]
          },
          {
            id: "nh2",
            categoryId: "spe",
            name: "SPE-NH2",
            fullName: "NH2（氨丙基硅烷键合硅胶）",
            description: "去除水溶液中的强阴离子",
            details: "氨丙基硅烷键合硅胶，适用于去除水溶液中的强阴离子。",
            parameters: ["碳含量: 4.5%", "粒径: 50-75μm", "比表面积: 200 m²/g", "平均孔径: 70Å"],
            applications: ["去除水溶液中的强阴离子（如磺酸根）", "生物基质（尿液、血液）中的药物及代谢物（如肾上腺素拮抗剂、水杨酸）", "去除蔬菜水果样品中的脂肪酸、有机酸等"],
            standards: ["NY/T 761-2008", "GB/T 20769-2008", "GB 23200.8-2016", "GB 23200.14-2016", "NY/T 1679-2009", "GB/T 20771-2008"],
            orderInfo: [
                { "code": "详细订购信息，请联系我们。", "spec": "", "package": "" }
              ]
        },
          {
            id: "psa",
            categoryId: "spe",
            name: "SPE-PSA",
            fullName: "PSA（乙二胺-N-丙基硅烷键合硅胶）",
            description: "检测体液中的镇静类药物",
            details: "乙二胺-N-丙基硅烷键合硅胶，适用于检测体液中的镇静类药物。",
            parameters: ["碳含量: 8%", "粒径: 50-75μm", "比表面积: 500 m²/g", "平均孔径: 70Å"],
            applications: ["检测体液中的镇静类药物", "去除食品基质中的脂肪酸、有机酸、色素、金属离子等"],
            standards: ["NY/T468-2006"],
            orderInfo: [
                { "code": "详细订购信息，请联系我们。", "spec": "", "package": "" }
              ]
          }

      ]
    },
    {
      title: "无机吸附剂",
      products: [
        {
          id: "florisil",
          categoryId: "spe",
          name: "SPE-Florisil",
          fullName: "Florisil（农残级佛罗里硅土）",
          description: "检测食品中的有机氯农药、有机磷农药残留和真菌毒素",
          details: "用于农药多残留检测的无机吸附剂。",
          parameters: ["粒径：60-100目"],
          applications: ["食品中农药多残留检测","检测环境中多环芳烃化合物、多氯联苯"],
          standards: ["EPA 608","NY/T 761-2008","NY/T 1720-2009","HJ 715-2014","HJ 743-2015","GB 5009.265-2016"],
          orderInfo: [
            { code: "0310-0021", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0310-0031", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0310-0041", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0310-0051", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0310-0061", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0310-0071", spec: "2000mg/6mL", package: "30支/盒" },
            { code: "0310-0081", spec: "2000mg/12mL", package: "20支/盒" },
            { code: "0310-0091", spec: "4000mg/12mL", package: "20支/盒" }
          ]
        },
        {
          id: "gcb",
          categoryId: "spe",
          name: "SPE-GCB",
          fullName: "GCB（石墨化碳黑）",
          description: "去除色素",
          details: "石墨化碳黑吸附剂，用于去除色素。",
          parameters: ["粒径：100-300目"],
          applications: ["去除水果和蔬菜中的色素（如叶绿素、叶黄素）"],
          standards: ["EPA 523","EPA 535","GB 23200.8-2016"],
          orderInfo: [
            { code: "0310-03121", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0310-03123", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0310-03124", spec: "250mg/6mL", package: "30支/盒" },
            { code: "0310-03125", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0310-03126", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0310-03127", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0310-03128", spec: "1000mg/12mL", package: "20支/盒" }
          ]
        },
        {
            id: "gcb-nh2",
            categoryId: "spe",
            name: "SPE-GCB/NH2",
            fullName: "GCB/NH2复合型",
            description: "色素去除与阴离子交换",
            details: "石墨化碳黑与氨丙基硅胶复合填料。",
            applications: ["食品中农药多残留的检测"],
            standards: ["NY/T1379-2007","GB23200.8-2016"],
            orderInfo: [
              { code: "0510-00501", spec: "500mg/500mg/6mL", package: "30支/盒" },
              { code: "0510-00020", spec: "1000mg/1000mg/12mL", package: "20支/盒" }
            ]
          },
          {
            id: "gcb-psa",
            categoryId: "spe",
            name: "SPE-GCB/PSA",
            fullName: "GCB/PSA复合型",
            description: "色素去除与极性化合物净化",
            details: "石墨化碳黑与乙二胺-N-丙基硅胶复合填料。",
            applications: ["在食品农药多残留检测中去除脂肪酸等成分"],
            standards: ["NY/T 1379-2007","GB 23200.8-2016"],
            orderInfo: [
                { code: "0510-00503", spec: "500mg/500mg/6mL", package: "30支/盒" },
                { code: "0510-00504", spec: "500mg/500mg/6mL", package: "20支/盒" }
            ]
          },
        {
          id: "alumina-a",
          categoryId: "spe",
          name: "SPE-Alumina-A",
          fullName: "Alumina A（酸性）",
          description: "阳离子交换",
          details: "酸性氧化铝，用于阳离子交换。",
          parameters: ["基体: 氧化铝颗粒","粒径: 50-200μm","pH: 4.0","保留机理: 正相","作用基团：铝羟基"],
          orderInfo: [
            { code: "0310-11245", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0310-11220", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0310-11330", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0310-11440", spec: "1000mg/3mL", package: "50支/盒" },
            { code: "0310-11240", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0310-11230", spec: "1000mg/6mL", package: "30支/盒" }
          ]
        },
        {
          id: "alumina-b",
          categoryId: "spe",
          name: "SPE-Alumina-B",
          fullName: "Alumina B（碱性）",
          description: "阴离子交换",
          details: "碱性氧化铝，用于阴离子交换。",
          parameters: ["基体: 氧化铝颗粒","粒径: 50-200μm","pH: 10.0","保留机理: 正相","作用基团：铝羟基"],
          orderInfo: [
            { code: "0310-11231", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0310-11232", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0310-11233", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0310-11234", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0310-11235", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0310-11236", spec: "2000mg/6mL", package: "30支/盒" },
            { code: "0310-11237", spec: "2000mg/12mL", package: "20支/盒" },
            { code: "0310-11230", spec: "5000mg/12mL", package: "20支/盒" }
          ]
        },
        {
          id: "alumina-n",
          categoryId: "spe",
          name: "SPE-Alumina-N",
          fullName: "Alumina N（中性）",
          description: "杂环类物质吸附",
          details: "中性氧化铝，用于杂环类物质吸附。",
          parameters: ["基体: 氧化铝颗粒","粒径: 50-200μm","pH: 7.5","保留机理: 正相","作用基团：铝羟基"],
          orderInfo: [
            { code: "0310-12235", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0310-11730", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0310-11238", spec: "200mg/6mL", package: "30支/盒" },
            { code: "0310-18230", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0310-11239", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0310-11211", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0310-11212", spec: "2000mg/6mL", package: "30支/盒" },
            { code: "0310-12530", spec: "5000mg/12mL", package: "20支/盒" },
            { code: "0310-15530", spec: "1000mg/60mL", package: "10支/盒" }
          ]
        },
        {
            id: "drying",
            categoryId: "spe",
            name: "SPE-Drying",
            fullName: "干燥型",
            description: "去除水分",
            details: "装填Na₂SO₄或MgSO₄，用于去除样品中的水分。",
            applications: ["样品脱水"],
            orderInfo: [
              { code: "0310-03001", spec: "200mg/6mL", package: "30支/盒" },
              { code: "0310-03021", spec: "2000mg/6mL", package: "30支/盒" }
            ]
          }
      ]
    },
    {
      title: "复合型",
      products: [
        {
          id: "c8-sax",
          categoryId: "spe",
          name: "SPE-C8/SAX",
          fullName: "C8/SAX",
          description: "生物基质中的酸性药物",
          details: "结合C8和强阴离子交换功能的复合型吸附剂。",
          parameters: ["比表面积：510m²/g", "粒径：40-75 μm", "平均孔径：70Å"],
          orderInfo: [
            { code: "0510-42212", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0510-42213", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0510-42214", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0510-42215", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0510-42216", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0510-42217", spec: "1000mg/12mL", package: "20支/盒" },
            { code: "0510-42218", spec: "2000mg/12mL", package: "20支/盒" }
          ]
        },,
        {
          id: "c8-scx",
          categoryId: "spe",
          name: "SPE-C8/SCX",
          fullName: "C8/SCX",
          description: "生物基质中的碱性药物",
          details: "结合C8和强阳离子交换功能的复合型吸附剂。",
          parameters: ["比表面积：510m²/g", "粒径：40-75 μm", "平均孔径：70Å"],
          orderInfo: [
            { code: "0510-42219", spec: "100mg/1mL", package: "100支/盒" },
            { code: "0510-42220", spec: "200mg/3mL", package: "50支/盒" },
            { code: "0510-42221", spec: "500mg/3mL", package: "50支/盒" },
            { code: "0510-42222", spec: "500mg/6mL", package: "30支/盒" },
            { code: "0510-42223", spec: "1000mg/6mL", package: "30支/盒" },
            { code: "0510-42224", spec: "1000mg/12mL", package: "20支/盒" },
            { code: "0510-42225", spec: "2000mg/12mL", package: "20支/盒" }
          ]
        },
      ]
    },
  ],
}