import { features } from "process";

// 专用柱产品数据
export const specialized = {
  id: "specialized",
  title: "专用柱",
  description: "提供各种专用柱，满足特定样品和分析需求。",
  image:
    "https://readdy.ai/api/search-image?query=Specialized%20chromatography%20columns%20for%20specific%20applications%20displayed%20professionally%2C%20showing%20various%20column%20types%20with%20different%20sorbents%20and%20configurations%2C%20high-precision%20analytical%20equipment%20arranged%20on%20clean%20laboratory%20surface%20with%20technical%20lighting&width=400&height=300&seq=16&orientation=landscape",
  products: [
    {
      id: "chloropropanol",
      categoryId: "specialized",
      name: "氯丙醇专用柱",
      fullName: "氯丙醇专用柱",
      description: "主要成分为高纯度硅藻土，用于液液萃取，优化有机相与水相接触，提升净化效果和回收率。",

      specifications: ["4000mg/20mL", "5000mg/20mL"],
      standards: ["GB/T5009.191-2006"],
      orderInfo: [
        { code: "0777-00600", spec: "4000mg/20mL", package: "20支/盒" },
        { code: "0777-00601", spec: "5000mg/20mL", package: "20支/盒" }
      ]
    },
    {
      id: "benzopyrene",
      categoryId: "specialized",
      name: "BAP苯并芘专用柱",
      fullName: "BAP苯并芘专用柱",
      description: "专为苯并(a)芘检测优化，分为普通版和分子印迹版。分子印迹版采用分子印迹技术，特异性吸附苯并(a)芘，除油效果更佳。",
      features: "分子印迹版特异性吸附，净化效果更好。",
      specifications: ["250mg/6mL", "500mg/6mL"],
      standards: ["GB/T5009.27-2016"],
      orderInfo: [
        { typea:"森熹SX苯并芘专用柱",code: "0555-34455", spec: "250mg/6mL", package: "30支/盒" },
        { typea:"森熹SX苯并芘分子印迹柱",code: "0555-21144", spec: "500mg/6mL", package: "30支/盒" }
      ]
    },
    {
      id: "tea",
      categoryId: "specialized",
      name: "DPT茶叶专用柱",
      fullName: "DPT茶叶专用柱",
      description: "三种填料按特定比例混合，去除茶叶中色素、茶多酚、有机酸、金属离子等干扰物，适用复杂基质样品检测。",
      features: "方法简单、适用性强，支持多农药残留检测。",
      specifications: ["1000mg/6mL", "2000mg/12mL"],
      standards: ["GB/T23204-2008", "GB23200.13-2016"],
      orderInfo: [
        { code: "0666-1112", spec: "1000mg/6mL", package: "30支/盒" },
        { code: "0666-1114", spec: "2000mg/12mL", package: "20支/盒" }
      ]
    },
    {
      id: "antioxidant",
      categoryId: "specialized",
      name: "AOX抗氧化剂专用柱",
      fullName: "AOX抗氧化剂专用柱",
      description: "用于检测食品中抗氧化剂，支持食用油中抗氧化剂的固相萃取。",
      specifications: ["500mg/6mL"],
      standards: ["GB5009.32-2016"],
      orderInfo: [
        { code: "0666-1117", spec: "500mg/6mL", package: "30支/盒" }
      ]
    },
    {
      id: "azo-dyes",
      categoryId: "specialized",
      name: "偶氮染料检测柱",
      fullName: "偶氮染料检测柱",
      description: "检测纺织品中禁用偶氮染料，还原条件下分解产生的致癌芳香胺。",
      features:["硅藻土经特殊工艺处理","特有的筛板流速控制技术","满足国标方法","中国纤检权威测试通过"],
      specifications: ["偶氮染料检测柱"],
      standards: ["GB/T17592-2011"],
      orderInfo: [
        { code: "0510-00500", spec: "偶氮染料检测柱", package: "4支/包" }
      ]
    },
    {
      id: "polyamide",
      categoryId: "specialized",
      name: "PA聚酰胺柱",
      fullName: "PA聚酰胺柱",
      description: "通过氢键吸附合成色素，用于人工合成色素检测。",
      features: "脱色效果好、回收率高",
      specifications: ["500mg/6mL", "1000mg/6mL"],
      standards: ["GB5009.35-2016", "GB/T9695.6-2008", "GB/T21916-2008", "GB/T22807-2008"],
      orderInfo: [
        { code: "0310-05041", spec: "500mg/6mL", package: "30支/盒" },
        { code: "0310-05042", spec: "1000mg/6mL", package: "30支/盒" }
      ]
    },
    {
      id: "sudan-red",
      categoryId: "specialized",
      name: "SDR苏丹红专用柱",
      fullName: "SDR苏丹红专用柱",
      description: "分为氧化铝层析柱和分子印迹柱，用于食品中苏丹红染料检测，分子印迹柱特异性吸附四种苏丹红。",
      features: "四种苏丹红回收率>85%，专为苏丹红萃取优化",
      specifications: ["500mg/6mL", "1000mg/6mL", "2000mg/6mL"],
      standards: ["GB/T19681-2005"],
      orderInfo: [
        { code: "0666-1115", spec: "500mg/6mL", package: "30支/盒" },
        { code: "0666-1111", spec: "1000mg/6mL", package: "30支/盒" },
        { code: "0666-1110", spec: "2000mg/6mL", package: "30支/盒" }
      ]
    },
    {
      id: "honey",
      categoryId: "specialized",
      name: "HON蜂蜜检测专用柱",
      fullName: "HON蜂蜜检测专用柱",
      description: "检测蜂蜜中寡糖成分，鉴别掺假（如糖浆添加）。",
      features: ["专为蜂蜜中寡糖检测优化","减少有机溶剂的使用","方便与薄层色谱(TLC)联用"],
      specifications: ["500mg/6mL"],
      standards: ["《中华人民共和国药典2015版·蜂蜜》"],
      orderInfo: [
        { code: "0666-1118", spec: "500mg/6mL", package: "30支/盒" }
      ]
    },
    {
      id: "plasticizer",
      categoryId: "specialized",
      name: "PSA/Silica塑化剂检测柱",
      fullName: "PSA/Silica塑化剂检测柱",
      description: "检测邻苯二甲酸酯类（PAEs）增塑剂，避免食品接触材料迁移污染。",
      features: ["化学惰性的玻璃柱管","超纯纤维筛板","回收率满足标准要求"],
      specifications: ["500mg/500mg/6mL"],
      orderInfo: [
        { code: "0510-33112", spec: "500mg/500mg/6mL", package: "30支/盒" }
      ]
    },
    {
      id: "alkyl-mercury",
      categoryId: "specialized",
      name: "烷基汞检测专用柱",
      fullName: "烷基汞检测专用柱",
      description: "装填巯基棉，用于水、沉积物、土壤等样品中痕量砷及烷基汞的吸附、富集。",
      specifications: ["200mg/6mL", "2000mg/6mL"],
      orderInfo: [
        { code: "0310-03001", spec: "200mg/6mL", package: "30支/盒" },
        { code: "0310-03021", spec: "2000mg/6mL", package: "30支/盒" }
      ]
    },
    {
      id: "dnph",
      categoryId: "specialized",
      name: "DNPH专用柱",
      fullName: "DNPH专用柱",
      description: "吸附醛酮类物质衍生物，用于空气、车内挥发性有机物（VOCs）中醛酮化合物的测定。",
      specifications: ["350mg/1mL", "350mg/3mL", "1000mg/6mL"],
      parameters:["吸附剂：DNPH/硅胶","颗粒尺寸：120-200 μm","DNPH载量：0.45%","采样量：150μg±15%（按甲醛计）","景值：甲醛≤0.15、乙醛≤0.10、丙酮≤0.30","存储条件：避光冷藏（-20℃）","保质期8个月","压降800ml/min流速：<35英寸水柱"],
      use: "采样:将采样管与气体采样泵连接，设定固定采样流速后开始采样。\n洗脱:采样结束后立即在采样端连接空柱管或注射器，以乙腈为洗脱液将反应后的2，4-二硝基苯腙洗脱下来用于HPLC分析。",
      standards: ["HJ683", "HJ/T400-2007"],
      orderInfo: [
        { typeb:"DNPH柱",code: "0666-1123", spec: "350mg/1mL", package: "20支/盒" },
        { typeb:"DNPH柱",code: "0666-1124", spec: "350mg/3mL", package: "20支/盒" },
        { typeb:"DNPH柱",code: "0666-1125", spec: "1000mg/6mL", package: "20支/盒" },
        { typeb:"除臭氧管",code: "0666-1126", spec: "1000mg/1mL", package: "20支/盒" },
        { typeb:"除臭氧管",code: "0666-1127", spec: "1500mg/3mL", package: "20支/盒" }
      ],
      
    }
   
  ]
}