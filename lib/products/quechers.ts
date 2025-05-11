// QuEChERS产品数据
export const quechers = {
    id: "quechers",
    title: "QuEChERS产品",
    description: "QuEChERS（快速、简便、廉价、有效、耐用和安全）是一种高效的前处理方法，专为食品（如水果、蔬菜、肉类）、环境水样及土壤中的农药残留、兽药残留和污染物检测而设计。其核心是通过分散固相萃取技术，快速分离目标物与干扰组分（如脂肪酸、色素、脂类），适用于多种国际和国内标准。",
    image:
      "https://readdy.ai/api/search-image?query=Complete%20QUECHERS%20extraction%20kit%20displayed%20professionally%2C%20showing%20extraction%20tubes%2C%20salt%20packets%2C%20and%20ceramic%20homogenizers%2C%20sample%20preparation%20materials%20for%20pesticide%20analysis%20arranged%20neatly%20on%20clean%20laboratory%20surface%20with%20professional%20lighting&width=400&height=300&seq=14&orientation=landscape",  
  products: [
    {
      id: "extraction-salts",
      categoryId: "quechers",
      name: "萃取盐包",
      fullName: "萃取盐包",
      description: "可在加入有机溶剂后再加入萃取盐，防止样品局部过热",
      features: ["操作简便","处理速度快","溶剂消耗量小","相比于常规的固相萃取小柱成本更低"],
      specifications: [
        "4g MgSO4 + 1g NaCl",
        "4g MgSO4 + 1g NaCl + 1g TSCD + 0.5g DHS",
        "6g MgSO4 + 1.5g NaOAc",
        "4g Na2SO4 + 1g NaCl",
        "Vet Drugs Residue兽残专用"
      ],
      orderInfo: [
        { code: "08500-1210", description: "4g MgSO4, 1g NaCl, 1g TSCD, 0.5g DHS", function: "提取", package: "50包/盒" },
        { code: "08500-1211", description: "6g MgSO4, 1.5g NaOAc", function: "提取", package: "50包/盒" },
        { code: "08500-1212", description: "4g MgSO4, 1g NaCl", function: "提取", package: "50包/盒" },
        { code: "08500-1209", description: "4g Na2SO4, 1g NaCl", function: "提取", package: "50包/盒" },
        { code: "08500-1213", description: "Vet Drugs Residue兽残专用", function: "提取", package: "50包/盒" },
        { code: "08500-1214", description: "带50ml离心管: 4g MgSO4, 1g NaCl, 1g TSCD, 0.5g DHS", function: "提取", package: "50包/盒" },
        { code: "08500-1215", description: "带50ml离心管: 6g MgSO4, 1.5g NaOAc", function: "提取", package: "50包/盒" },
        { code: "08500-1216", description: "带50ml离心管: 4g Na2SO4, 1g NaCl", function: "提取", package: "50包/盒" }
      ]
    },
    {
      id: "cleanup-tubes",
      categoryId: "quechers",
      name: "净化管",
      fullName: "净化管",
      description: "净化管是由吸附剂和无水MgSO4组成",
      features: ["PSA主要吸附：脂肪酸、有机酸、糖类","C18主要吸附：脂肪","GCB主要吸附：色素"],
      specifications: [
        "150mg MgSO4 + 50mg PSA",
        "150mg MgSO4 + 50mg PSA + 50mg C18",
        "150mg MgSO4 + 50mg PSA + 50mg GCB",
        "150mg MgSO4 + 50mg C18",
        "150mg MgSO4 + 50mg PSA + 50mg C18 + 50mg GCB",
        "150mg MgSO4 + 50mg PSA + 50mg C18 + 7.5mg GCB"
      ],
      orderInfo: [
        { code: "08500-1217", product: "2mL", description: "150mg MgSO4, 50mg PSA", function: "净化", package: "100支/盒", suitable: "一般水果和蔬菜" },
        { code: "08500-1229", product: "15mL", description: "1200mg MgSO4, 400mg PSA", function: "净化", package: "50支/盒", suitable: "一般水果和蔬菜" },
        { code: "08500-1220", product: "2mL", description: "150mg MgSO4, 50mg PSA, 50mg C18", function: "净化", package: "100支/盒", suitable: "含脂和蜡的水果和蔬菜" },
        { code: "08500-1232", product: "15mL", description: "1200mg MgSO4, 400mg PSA, 400mg C18", function: "净化", package: "50支/盒", suitable: "含脂和蜡的水果和蔬菜" },
        { code: "08500-1223", product: "2mL", description: "150mg MgSO4, 50mg PSA, 50mg GCB", function: "净化", package: "100支/盒", suitable: "含色素的水果和蔬菜" },
        { code: "08500-1225", product: "2mL", description: "150mg MgSO4, 50mg PSA, 50mg C18, 50mg GCB", function: "净化", package: "100支/盒", suitable: "含色素和脂肪的水果和蔬菜" },
        { code: "08500-1245", product: "15mL", description: "1200mg MgSO4, 400mg PSA, 400mg GCB", function: "净化", package: "50支/盒", suitable: "含色素的水果和蔬菜" },
        { code: "08500-1239", product: "15mL", description: "1200mg MgSO4, 400mg PSA, 400mg C18, 400mg GCB", function: "净化", package: "50支/盒", suitable: "含色素和脂肪的水果和蔬菜" },
        { code: "08500-1221", product: "2mL", description: "150mg MgSO4, 50mg C18", function: "净化", package: "100支/盒", suitable: "肉类中的药物残留" },
        { code: "08500-1237", product: "15mL", description: "1200mg MgSO4, 400mg C18", function: "净化", package: "50支/盒", suitable: "肉类中的药物残留" },
        { code: "08500-1226", product: "2mL", description: "150mg MgSO4, 50mg PSA, 50mg C18, 7.5mg GCB", function: "净化", package: "100支/盒", suitable: "所有食品类型（通用）" },
        { code: "08500-1241", product: "15mL", description: "900mg MgSO4, 300mg PSA, 300mg C18, 45mg GCB", function: "净化", package: "50支/盒", suitable: "所有食品类型（通用）" }
      ]
    },
    {
      id: "ceramic-homogenizers",
      categoryId: "quechers",
      name: "陶瓷均质子",
      fullName: "净陶瓷均质子",
      description: "提高样品均质化效率，确保萃取盐与样品充分混合",
      features: ["材质：惰性陶瓷，无杂质溶出。","适配规格：专为50mL离心管设计。"],
      specifications: [
        "直径4mm",
        "直径5mm",
        "直径6mm"
      ],
      orderInfo: [
        { code: "08500-1250", product: "50mL陶瓷均质子", description: "用于50mL萃取管", package: "100个/瓶" }
      ]
    },
    {
      id: "multi-functional-filters",
      categoryId: "quechers",
      name: "多功能过滤器",
      fullName: "多功能过滤器",
      description: "将净化与过滤步骤合二为一，直接过滤提取液至上机样品瓶",
      features: ["集成吸附剂（如MgSO4、PSA等）与针式过滤器。","样品用量少（仅需1mL提取液），减少污染。。"],
      specifications: [
        "MgSO4(150mg), PSA(25mg)",
        "MgSO4(150mg), PSA(25mg), C18(25mg)",
        "MgSO4(150mg), PSA(25mg), C18(25mg), GCB(5mg)",
        "MgSO4(150mg), PSA(50mg)",
        "MgSO4(150mg), PSA(50mg), C18(50mg)",
        "MgSO4(150mg), PSA(50mg), C18(50mg), GCB(5mg)",
        "PSA(50mg)",
        "MgSO4(150mg), PSA(50mg), PSD(20mg)",
        "MgSO4(150mg), PSA(50mg), C18(50mg), PSD(20mg)"
      ],
      use:"使用2ml一次性注射器吸取1ml样品溶液，然后吸入1ml空气，在前端装上QUECHERS多功能过滤器后旋紧，推动注射器塞杆，使样品溶液匀速通过过滤器至进样小瓶中，上样检测。",
      orderInfo: [
        { code: "08500-SX1001", composition: "MgSO4(150mg), PSA(25mg)", specification: "50个/盒", suitable: "常规水果蔬菜" },
        { code: "08500-SX1002", composition: "MgSO4(150mg), PSA(25mg), C18(25mg)", specification: "50个/盒", suitable: "含脂肪和蜡质的产品" },
        { code: "08500-SX1003", composition: "MgSO4(150mg), PSA(25mg), C18(25mg), GCB(5mg)", specification: "50个/盒", suitable: "含色素和脂肪的产品" },
        { code: "08500-SOX2001", composition: "MgSO4(150mg), PSA(50mg)", specification: "50个/盒", suitable: "常规水果蔬菜" },
        { code: "08500-SOX2002", composition: "MgSO4(150mg), PSA(50mg), C18(50mg)", specification: "50个/盒", suitable: "含脂肪和蜡质的产品" },
        { code: "08500-SOX2003", composition: "MgSO4(150mg), PSA(50mg), C18(50mg), GCB(5mg)", specification: "50个/盒", suitable: "含色素和脂肪的产品" },
        { code: "08500-SX3001", composition: "PSA(50mg)", specification: "50个/盒", suitable: "动物产品中金刚烷胺等药物残留检测" },
        { code: "08500-SX3002", composition: "MgSO4(150mg), PSA(50mg), PSD(20mg)", specification: "50个/盒", suitable: "适用于含色素的产品" },
        { code: "08500-SX3003", composition: "MgSO4(150mg), PSA(50mg), C18(50mg), PSD(20mg)", specification: "50个/盒", suitable: "含脂肪酸和色素的产品" }
      ]
    }
  ]
}