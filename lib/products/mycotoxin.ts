// 真菌毒素免疫亲和柱产品数据
export const mycotoxin = {
  id: "mycotoxin",
  title: "真菌毒素免疫亲和柱",
  description: "专业用于真菌毒素检测的免疫亲和柱，确保检测结果准确可靠。",
  image:
    "https://readdy.ai/api/search-image?query=Professional%20immunoaffinity%20columns%20for%20mycotoxin%20analysis%20displayed%20in%20laboratory%20setting%2C%20showing%20specialized%20columns%20with%20antibody%20binding%20sites%2C%20high-precision%20analytical%20equipment%20arranged%20on%20clean%20white%20surface%20with%20technical%20lighting&width=400&height=300&seq=15&orientation=landscape",
  products: [
    {
      id: "aflatoxin-total",
      categoryId: "mycotoxin",
      name: "黄曲霉毒素Total",
      fullName:"黄曲霉毒素免疫亲和柱",
      description: "基于抗原-抗体特异性反应，通过键合在凝胶上的抗体与黄曲霉毒素结合，实现分离净化。",
      details: "采用特异性单克隆抗体，专一性强",
      specifications: ["3mL规格"],
      applications: [
        "适用于食品中黄曲霉毒素B族和G族的测定（如谷物、饲料、中药材等复杂基质）。"
      ],
      standards: [
        "GB 5009.22-2016","GB 5009.24-2016"
      ],
      orderInfo: [
        {code: "10020-12", spec: "3mL", package: "25支/盒" }
      ]
    },
    {
      id: "aflatoxin-b1",
      categoryId: "mycotoxin",
      name: "黄曲霉毒素B1",
      fullName:"黄曲霉毒素B1免疫亲和柱",
      description: "采用高效价、高纯度单克隆抗体，特异性结合黄曲霉毒素B1",
      details: "采用高效价、高纯度单克隆抗体，特异性结合黄曲霉毒素B1",
      specifications: ["3mL规格"],
      applications: [
        "适用于复杂基质（谷物、食品、饲料、中药材等）中黄曲霉毒素B的靶向提取净化。"
      ],
      orderInfo: [
        { code: "10020-14", spec: "3mL", package: "25支/盒" }
      ]
    },
    {
      id: "aflatoxin-m1",
      categoryId: "mycotoxin",
      name: "黄曲霉毒素M1",
      fullName:"黄曲霉毒素M1免疫亲和柱",
      description: "黄曲霉毒素M1检测",
      details: "特异性单克隆抗体靶向结合黄曲霉毒素M1",
      specifications: ["3mL规格"],
      applications: [
        "乳制品、饲料等复杂基质中M1的精准净化"
      ],
      orderInfo: [
        { code: "10020-13", spec: "3mL", package: "25支/盒" }
      ]
    },
    {
      id: "zearalenone",
      categoryId: "mycotoxin",
      name: "玉米赤霉烯酮（ZEA）",
      fullName:"玉米赤霉烯酮免疫亲和柱",
      description: "专针对玉米赤霉烯酮的镰刀菌毒素污染，特异性提取净化霉变谷物（玉米、小麦、大麦等）及奶类样本。",
      details: "高特异性抗体，回收率好",
      specifications: ["3mL规格"],
      applications: [
        "霉变谷物（玉米、小麦、大麦等）检测"
      ],
      standards: ["GB 5009.209-2016"],
      orderInfo: [
        { code: "10020-16", spec: "3mL", package: "25支/盒" }
      ]
    },
    {
      id: "t2-toxin",
      categoryId: "mycotoxin",
      name: "T-2毒素",
      fullName:"T-2毒素免疫亲和柱",
      description: "特异性净化小麦、玉米等谷物中的T-2毒素（强毒性镰刀菌毒素）",
      details: "抗体亲和力强，专一性好",
      specifications: ["3mL规格"],
      applications: [
        "小麦、玉米等谷物中T-2毒素检测"
      ],
      standards: ["GB 5009.118-2016"],
      orderInfo: [
        { code: "10020-18", spec: "3mL", package: "25支/盒" }
      ]
    },
    {
      id: "don",
      categoryId: "mycotoxin",
      name: "呕吐毒素（DON）",
      fullName:"呕吐毒素免疫亲和柱",
      description: "特异性分离脱氧雪腐镰刀菌烯醇（DON），欧盟三级致癌物分类，需严格管控。",
      details: "抗体特异性强，基质干扰小",
      specifications: ["3mL规格"],
      applications: [
        "小麦、玉米等谷物中呕吐毒素检测"
      ],
      standards: ["GB 5009.111-2016"],
      orderInfo: [
        { code: "10020-17", spec: "3mL", package: "25支/盒" }
      ]
    },
    {
      id: "ota",
      categoryId: "mycotoxin",
      name: "赭曲霉毒素A（OTA）",
      fullName:"赭曲霉毒素A免疫亲和柱",
      description: "专用于赭曲霉毒素A检测",
      details: "抗体亲和力强，回收率高",
      specifications: ["3mL规格"],
      applications: [
        "针对霉变谷物（小麦、玉米等）及饲料中的赭曲霉毒素A，特异性吸附净化，减少肝肾毒性风险。"
      ],
      standards: ["GB 5009.96-2016"],
      orderInfo: [
        { code: "10020-15", spec: "3mL", package: "25支/盒" }
      ]
    },
    {
        id: "multi-functional",
        categoryId: "mycotoxin",
        name: "多功能净化柱",
        fullName: "多功能净化柱",
        description: "含多重吸附基质，可选择性吸附脂类、蛋白质、色素等杂质，保留待测组分。适用毒素范围广（展青毒素、黄曲霉毒素B/G/M族、玉米赤霉烯酮、呕吐毒素等）。",
        features: ["快速高效：30秒完成净化","稳定性强：常温保存24个月","高回收率：≥90%，RSD≤5%"],
        specifications: ["3mL规格"],
        use:"提取样品，将提取液加入试管中，将净化柱带橡胶头的一端插入试管，向下压至试管底端，净化后的液体通过填料到达净化柱顶端，将液体倒出，吹干复溶后即可上机检测。",
        standards: ["GB 5009.185-2016", "GB 5009.22-2016"],
        orderInfo: [
            { code: "08500-228", spec: "228多功能净化柱", type: "展青毒素、黄曲霉毒素B1/B2/G1/G2" },
            { code: "08500-226", spec: "226多功能净化柱", type: "玉米赤霉烯酮、黄曲霉毒素B1/B2/G1/G2" },
            { code: "08500-224", spec: "224多功能净化柱", type: "玉米赤霉烯酮" },
            { code: "08500-223", spec: "223多功能净化柱", type: "黄曲霉毒素M1/M" },       
            { code: "08500-230", spec: "230多功能净化柱", type: "呕吐毒素" },
            { code: "08500-229", spec: "229多功能净化柱", type: "赭曲霉毒素" },
            { code: "08500-302", spec: "302多功能净化柱", type: "多合一" }
          ]
      }
  ]
};