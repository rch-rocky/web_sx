// 离子色谱前处理柱产品数据
export const ionChromatography = {

  id: "ion-chromatography",
  title: "离子色谱前处理柱",
  description: "离子色谱分析中,有机物、金属离子以及其他干扰离子会影响目标物的分析。使用反相吸附或离子交换原理的预处理小柱,可以有效去除这些干扰物,保证结果的准确性。",
  image:
    "https://readdy.ai/api/search-image?query=High%20performance%20liquid%20chromatography%20HPLC%20columns%20of%20various%20sizes%20displayed%20professionally%2C%20showing%20stainless%20steel%20columns%20with%20end%20fittings%2C%20analytical%20grade%20separation%20columns%20on%20clean%20laboratory%20surface%20with%20soft%20lighting&width=400&height=300&seq=12&orientation=landscape",
  products: [
    {
      id: "h-column",
      categoryId: "ion-chromatography",
      name: "H柱",
      fullName:"IC-H离子小柱",
      description: "去除金属离子，中和强碱性样品",
      details: "采用H型强酸性阳离子交换树脂",
      specifications: ["1.0cc"],
      applications: [
        "去除碱土金属（如Ca²⁺、Mg²⁺）、过渡金属离子及碳酸根（CO₃²⁻）",
        "中和强碱性样品"
      ],
      orderInfo: [
        { code: "0410-25580", spec: "1.0cc", package: "50支/盒" }
      ]
    },
    {
      id: "na-column",
      categoryId: "ion-chromatography",
      name: "Na柱",
      fullName:"IC-Na离子小柱",
      description: "去除多价阳离子",
      details: "采用Na型强酸性阳离子交换树脂",
      specifications: ["1.0cc"],
      applications: [
        "选择性去除多价阳离子（如Ca²⁺、Mg²⁺、过渡金属离子）",
        "用于硝酸盐类检测（无需酸化样品）"
      ],
      orderInfo: [
        { code: "0410-25777", spec: "1.0cc", package: "50支/盒" }
      ]
    },
    {
      id: "rp-column",
      categoryId: "ion-chromatography",
      name: "RP柱",
      fullName:"IC-RP离子小柱",
      description: "去除疏水化合物",
      details: "采用聚苯乙烯/二乙烯苯高聚物",
      specifications: ["1CC"],
      applications: [
        "去除疏水性物质（如芳香染料、芳香族羧酸、碳氢化合物、表面活性剂等）",
        "适用pH范围极广（pH 0-14）"
      ],
      orderInfo: [
        { code: "0410-25555", spec: "1CC", package: "50支/盒" }
      ]
    },
    {
      id: "ag-column",
      categoryId: "ion-chromatography",
      name: "Ag柱",
      fullName:"IC-Ag离子小柱",
      description: "去除卤素离子",
      details: "采用Ag型强酸性阳离子交换树脂（磺化树脂）",
      specifications: ["1.0cc"],
      applications: [
        "去除阴离子：Cl⁻、Br⁻、I⁻、AsO₄³⁻、CrO₄²⁻、CN⁻、MoO₄²⁻、PO₄³⁻、SeO₃²⁻、SO₃²⁻、SCN⁻、S²⁻、WO₄²⁻等",
        "需配合H柱或Na柱使用（如SIH10或SINA10）"
      ],
      orderInfo: [
        { code: "0410-25888", spec: "1.0cc", package: "50支/盒" }
      ]
    },
    {
      id: "ba-column",
      categoryId: "ion-chromatography",
      name: "Ba柱",
      fullName:"IC-Ba离子小柱",
      description: "去除硫酸根",
      details: "采用Ba型强酸性阳离子交换树脂（磺酸钡）",
      specifications: ["1.0cc"],
      applications: [
        "专门去除样品中的硫酸根离子（SO₄²⁻）"
      ],
      orderInfo: [
        { code: "0410-25999", spec: "1.0cc", package: "50支/盒" }
      ]
    },
    {
      id: "c18-column",
      categoryId: "ion-chromatography",
      name: "C18柱",
      fullName:"IC-C18离子小柱",
      description: "脱盐及去除有机物",
      details: "采用反相C18填料",
      specifications: ["300mg"],
      applications: [
        "代替离子交换柱对小分子和中等分子进行脱盐",
        "去除疏水性有机物（适合pH 2-8的样品液）"
      ],
      orderInfo: [
        { code: "0410-25444", spec: "300mg", package: "50支/盒" }
      ]
    },
    {
      id: "ag-na-column",
      categoryId: "ion-chromatography",
      name: "Ag/Na柱",
      fullName:"IC-Ag/Na离子小柱",
      description: "同时去除Ag柱和Na柱目标离子",
      details: "采用Ag型和Na型树脂组合",
      specifications: ["1.0cc"],
      applications: [
        "同时去除Ag柱目标阴离子（Cl⁻、Br⁻等）和Na柱目标多价阳离子（Ca²⁺、Mg²⁺等）",
        "简化多步骤处理流程（无需单独使用Ag柱和Na柱）"
      ],
      orderInfo: [
        { code: "0410-25000", spec: "1.0cc", package: "50支/盒" }
      ]
    },
    {
      id: "ag-h-column",
      categoryId: "ion-chromatography",
      name: "Ag/H柱",
      fullName:"IC-Ag/H离子小柱",
      description: "同时去除Ag柱目标离子并中和碱性样品",
      details: "采用Ag型和H型树脂组合",
      specifications: ["1.0cc"],
      applications: [
        "去除Ag柱目标阴离子（Cl⁻、Br⁻等）",
        "中和强碱性样品（H柱功能）"
      ],
      orderInfo: [
        { code: "0410-25333", spec: "1.0cc", package: "50支/盒" }
      ]
    }
  ]
}