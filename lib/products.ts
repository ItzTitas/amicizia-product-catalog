export type Category = "Livestock" | "Poultry" | "Canine";

export interface SKU {
  id: string;
  name: string;
  code: string;
  unitSize: string;
  packSize: string;
  price?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  description: string;
  composition?: string;
  indications?: string;
  dosage?: string;
  packaging?: string;
  brochureUrl?: string;
  images: string[];
  skus: SKU[];
}

export const categories: Category[] = ["Livestock", "Poultry", "Canine"];

export const products: Product[] = [
  {
    "id": "amical-gold",
    "slug": "amical-gold",
    "name": "Amical Gold",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Amical Gold Family.png"
    ],
    "skus": [
      {
        "id": "amical-gold-0",
        "name": "100 ml",
        "code": "AMI-1",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "amical-gold-1",
        "name": "1 L",
        "code": "AMI-2",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "amical-gold-2",
        "name": "5 L",
        "code": "AMI-3",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "aquarena",
    "slug": "aquarena",
    "name": "AquaRena",
    "category": "Poultry",
    "description": "Drinking W ater Sanitizer for Cattle, Swine, Poultry and Aqua Culture. To prevent water borne diseases of Bacterial, V iral and Fungal origin.",
    "composition": "Each 100 ml contains : Didecyl Dimethyl Ammonium Chloride :15 gm.Fast acting Bactericide, Fungicide, Algaecide and V irucide.Odourless Sanitizer and Deodorizer .Non staining.Effective in 400 ppm hardwater .Safe to use on all wettable surfaces.",
    "indications": "Drinking W ater Sanitizer for Cattle, Swine, Poultry and Aqua Culture. To prevent water borne diseases of Bacterial, V iral and Fungal origin.",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/AquaRena Family.png"
    ],
    "skus": [
      {
        "id": "aquarena-0",
        "name": "100 ml",
        "code": "AQU-1",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "aquarena-1",
        "name": "500ml",
        "code": "AQU-2",
        "unitSize": "500ml",
        "packSize": "1 Unit"
      },
      {
        "id": "aquarena-2",
        "name": "1 Lit",
        "code": "AQU-3",
        "unitSize": "1 Lit",
        "packSize": "1 Unit"
      },
      {
        "id": "aquarena-3",
        "name": "5 Lit",
        "code": "AQU-4",
        "unitSize": "5 Lit",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "avimec",
    "slug": "avimec",
    "name": "Avimec",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Avimec Tablets.png"
    ],
    "skus": [
      {
        "id": "avimec-0",
        "name": "1 ml",
        "code": "AVI-1",
        "unitSize": "1 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "avimec-1",
        "name": "10 ml",
        "code": "AVI-2",
        "unitSize": "10 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "avimec-2",
        "name": "100 ml",
        "code": "AVI-3",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "avimec-3",
        "name": "10 mg tablet",
        "code": "AVI-4",
        "unitSize": "10 mg tablet",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "bcom-plus",
    "slug": "bcom-plus",
    "name": "BCom Plus",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/BCom Plus Family.png"
    ],
    "skus": [
      {
        "id": "bcom-plus-0",
        "name": "1 L",
        "code": "BCO-1",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "bcom-plus-1",
        "name": "100 ml",
        "code": "BCO-2",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "bcom-plus-2",
        "name": "500 ml",
        "code": "BCO-3",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "bcom-plus-3",
        "name": "5 L",
        "code": "BCO-4",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "c-cure",
    "slug": "c-cure",
    "name": "C-Cure",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/C-Cure Family.png"
    ],
    "skus": [
      {
        "id": "c-cure-0",
        "name": "500 ml",
        "code": "C-C-1",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "c-cure-1",
        "name": "1 L",
        "code": "C-C-2",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "canotil",
    "slug": "canotil",
    "name": "Canotil",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Canotil Bolus.png"
    ],
    "skus": [
      {
        "id": "canotil-0",
        "name": "100 mg",
        "code": "CAN-1",
        "unitSize": "100 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "canotil-1",
        "name": "200 mg",
        "code": "CAN-2",
        "unitSize": "200 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "cough-null",
    "slug": "cough-null",
    "name": "Cough Null",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Cough Null Family.png"
    ],
    "skus": [
      {
        "id": "cough-null-0",
        "name": "1 L",
        "code": "COU-1",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "cough-null-1",
        "name": "100 ml",
        "code": "COU-2",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "cough-null-2",
        "name": "500 ml",
        "code": "COU-3",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "coxiguard",
    "slug": "coxiguard",
    "name": "Coxiguard",
    "category": "Poultry",
    "description": "Poultry , Bovine & Swine Coccidiosis.",
    "composition": "Each 30 gms. contains :Amprolium Hcl IP : 20% w/w | Menadione Sodium Bisulphite IPEquivalent to Menadione : 0.25% w/w | V itamin K : 40 mg",
    "indications": "Poultry , Bovine & Swine Coccidiosis.",
    "dosage": "Poultry: Prevention : 1 gm per ltr . of waterTreatment :2 gm per ltr . of water for 5-7 daysBovine & Swine : 5 gm along with Ultravit 5 ml twice daily or as advised by Veterinarian.",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Coxiguard Family.png"
    ],
    "skus": [
      {
        "id": "coxiguard-0",
        "name": "80 mg",
        "code": "COX-1",
        "unitSize": "80 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "coxiguard-1",
        "name": "100 mg",
        "code": "COX-2",
        "unitSize": "100 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "diaronil",
    "slug": "diaronil",
    "name": "Diaronil",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Diaronil Bolus.png"
    ],
    "skus": [
      {
        "id": "diaronil-0",
        "name": "4's strip",
        "code": "DIA-1",
        "unitSize": "4's strip",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "enciflox",
    "slug": "enciflox",
    "name": "Enciflox",
    "category": "Canine",
    "description": "High quality Canine product by Amicizia Life Science.",
    "composition": "Each 10 gms. provides Vitamin A:1000 IU Vitamin E Niacinamide : : 5 mg. 100 mg.",
    "indications": "",
    "dosage": "Poultry : For prevention 1gm. in 2-3 litres of water. For Mild Infection 1gm. in 2 litres of water for 3-4 days For Severe Infection 2gm. per litre of water for 3-4 days Small Animals : 5-10 gm/daily Large Animals : 15-20 gm/daily | Or as advised by veterinarian. Orally for 4-5 days",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Enciflox Family.png"
    ],
    "skus": [
      {
        "id": "enciflox-0",
        "name": "50 mg",
        "code": "ENC-1",
        "unitSize": "50 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "enciflox-1",
        "name": "100 mg",
        "code": "ENC-2",
        "unitSize": "100 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "fenvet",
    "slug": "fenvet",
    "name": "Fenvet",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Fenvet Tablets.png"
    ],
    "skus": [
      {
        "id": "fenvet-0",
        "name": "1.5 mg",
        "code": "FEN-1",
        "unitSize": "1.5 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "fenvet-1",
        "name": "150 mg",
        "code": "FEN-2",
        "unitSize": "150 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "floxin",
    "slug": "floxin",
    "name": "Floxin",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Floxin L Family.png"
    ],
    "skus": [
      {
        "id": "floxin-0",
        "name": "1 L",
        "code": "FLO-1",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "floxin-1",
        "name": "100 ml",
        "code": "FLO-2",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "floxin-2",
        "name": "500 ml",
        "code": "FLO-3",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "gout-null",
    "slug": "gout-null",
    "name": "Gout Null",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Gout Null Family.png"
    ],
    "skus": [
      {
        "id": "gout-null-0",
        "name": "250 ml",
        "code": "GOU-1",
        "unitSize": "250 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "gout-null-1",
        "name": "500 ml",
        "code": "GOU-2",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "gout-null-2",
        "name": "1 L",
        "code": "GOU-3",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "grow-best",
    "slug": "grow-best",
    "name": "Grow-Best",
    "category": "Canine",
    "description": "High quality Canine product by Amicizia Life Science.",
    "composition": "Each 20 ml provides : Vitamin A: 1000,000 IU. | Vitamin B12: 2000 mg |Choline Chloride: 400 mg. Biotin: 250 mcg | Vitamin D3: 200000 IU. | Vitamin E: 800 mg. | De Pantothenol : 1500 mg. Vitamin B1: 350 mg | Vitamin K3: 500 mg | Folic acid: 10 mg. | Niacinamide: 1.25 mg. | Inositol: 200 mcg L-Methionine: 500 mg. | L-Tryptophan: 10 mg | Aspartic Acid: 145 mg | Proline: 51mg | Cystine:15 mg Isoleucine:12 mg | L-Lysine: 250 mg. | Histidine:90 mg | Serine:68 mg | Glycine:50 mg | Valine:110 mg Tyrosin",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Grow-Best family.png"
    ],
    "skus": [
      {
        "id": "grow-best-0",
        "name": "250 ml",
        "code": "GRO-1",
        "unitSize": "250 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "grow-best-1",
        "name": "500 ml",
        "code": "GRO-2",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "grow-best-2",
        "name": "1 L",
        "code": "GRO-3",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "grow-best-3",
        "name": "5 L",
        "code": "GRO-4",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "growbest-power",
    "slug": "growbest-power",
    "name": "Grow-Best Power",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/GrowBest Power Family.png"
    ],
    "skus": [
      {
        "id": "growbest-power-0",
        "name": "250 ml",
        "code": "GRO-1",
        "unitSize": "250 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "growbest-power-1",
        "name": "500 ml",
        "code": "GRO-2",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "growbest-power-2",
        "name": "1 L",
        "code": "GRO-3",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "growbest-power-3",
        "name": "5 L",
        "code": "GRO-4",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "gumbo-null",
    "slug": "gumbo-null",
    "name": "Gumbo Null",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Gumbo Null 250ml.png"
    ],
    "skus": [
      {
        "id": "gumbo-null-0",
        "name": "500 ml",
        "code": "GUM-1",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "gumbo-null-1",
        "name": "1 L",
        "code": "GUM-2",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "ibh-shield",
    "slug": "ibh-shield",
    "name": "IBH Shield",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/IBH Shield 500ml.png"
    ],
    "skus": [
      {
        "id": "ibh-shield-0",
        "name": "500 ml",
        "code": "IBH-1",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "ibh-shield-1",
        "name": "1 L",
        "code": "IBH-2",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "immune",
    "slug": "immune",
    "name": "Immune",
    "category": "Livestock",
    "description": "Maintains and Tone-up Immune System (Immunosuppresion due to Season Change –Summer Season, Rainy Season, Winter Season), High Production, due to usage of Strong Antibiotic. Acts as Immunomodulator . Increase Resistance against Bacterial and V iral infection, Increase CMI, Maintains Homeostasis, Reduced V accination failures (Pre & Post V accination to improve Antibody Titer). Adjuvant in the treatment of Gastro-Enteritis ,V omiting, post Antibiotic Treatment. Co therapy with Dermal, Occular & Ot",
    "composition": "Glycine : 50mg Selenium : 200mcg L-Lycin : 8 mg DL Methynine : 5 mgAloevera : 200mcg Sodium Chloride : 6.25 mg Manganese Sulphate : 2.5mg Vitamin E : 100 mgVitamin C : 10.5mgBiotin- : 300mcgPotassium Chloride : 5mgYeast Extract : 10mg Amino Nitrogen : 10000 ppm",
    "indications": "Maintains and Tone-up Immune System (Immunosuppresion due to Season Change –Summer Season, Rainy Season, Winter Season), High Production, due to usage of Strong Antibiotic. Acts as Immunomodulator . Increase Resistance against Bacterial and V iral infection, Increase CMI, Maintains Homeostasis, Reduced V accination failures (Pre & Post V accination to improve Antibody Titer). Adjuvant in the treatment of Gastro-Enteritis ,V omiting, post Antibiotic Treatment. Co therapy with Dermal, Occular & Ot",
    "dosage": "Cattle, Buf falo, Horse & Pig :40 ml to 50 ml daily ,Calf, Goat, Sheep & Piglet : 20ml to 30 ml daily , Poultry (For 100 birds) : Chicks- 5-10 ml. daily , Broilers- 20-30 ml. daily, Layers- 50 ml. daily or as directed by V eterinarian.",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Immune Family.png"
    ],
    "skus": [
      {
        "id": "immune-0",
        "name": "1 L",
        "code": "IMM-1",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "immune-1",
        "name": "100 ml",
        "code": "IMM-2",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "immune-2",
        "name": "500 ml",
        "code": "IMM-3",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "immune-pet",
    "slug": "immune-pet",
    "name": "Immune Pet",
    "category": "Canine",
    "description": "High quality Canine product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Immune Pet.png"
    ],
    "skus": [
      {
        "id": "immune-pet-std",
        "name": "Standard Pack",
        "code": "IMM-1",
        "unitSize": "Standard",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "iroliv",
    "slug": "iroliv",
    "name": "Iroliv",
    "category": "Poultry",
    "description": "For weak and debilitated animals.Better Egg shell quality Improves Flock uniformityBetter Liver Function Protects Liver from ToxinReduce Toxins in Liver .",
    "composition": "",
    "indications": "For weak and debilitated animals.Better Egg shell quality Improves Flock uniformityBetter Liver Function Protects Liver from ToxinReduce Toxins in Liver .",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Iroliv Family.png"
    ],
    "skus": [
      {
        "id": "iroliv-0",
        "name": "1 L",
        "code": "IRO-1",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "iroliv-1",
        "name": "100 ml",
        "code": "IRO-2",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "iroliv-2",
        "name": "500 ml",
        "code": "IRO-3",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "iroliv-3",
        "name": "5 L",
        "code": "IRO-4",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "iroliv-pet",
    "slug": "iroliv-pet",
    "name": "Iroliv Pet",
    "category": "Canine",
    "description": "High quality Canine product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Iroliv Pet 200ml.png"
    ],
    "skus": [
      {
        "id": "iroliv-pet-0",
        "name": "200ml",
        "code": "IRO-1",
        "unitSize": "200ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "iroliv-power",
    "slug": "iroliv-power",
    "name": "Iroliv Power",
    "category": "Poultry",
    "description": "For weak and debilitated animals.Better Egg shell quality Improves Flock uniformityBetter Liver Function Protects Liver from ToxinReduce Toxins in Liver .",
    "composition": "",
    "indications": "For weak and debilitated animals.Better Egg shell quality Improves Flock uniformityBetter Liver Function Protects Liver from ToxinReduce Toxins in Liver .",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Iroliv Power 5kg.png"
    ],
    "skus": [
      {
        "id": "iroliv-power-0",
        "name": "1 kg",
        "code": "IRO-1",
        "unitSize": "1 kg",
        "packSize": "1 Unit"
      },
      {
        "id": "iroliv-power-1",
        "name": "2 kg",
        "code": "IRO-2",
        "unitSize": "2 kg",
        "packSize": "1 Unit"
      },
      {
        "id": "iroliv-power-2",
        "name": "5 kg",
        "code": "IRO-3",
        "unitSize": "5 kg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "kalshine-gold",
    "slug": "kalshine-gold",
    "name": "Kalshine Gold",
    "category": "Canine",
    "description": "High quality Canine product by Amicizia Life Science.",
    "composition": "Each 20 ml Provides:Composition :Each 10 ml Provides:Liver Fraction :750 mg (Soluble Liver fraction from 16 .25 gm of fresh Liver) with Vitamin B12 activity equivalent to 5 mcgThiamine (Vitamin B1) : 20 mgRiboflavin (Vitamin B2) : 20 mgPyridoxine HCL IP (Vitamin B6) : 2 mgNicotinamide IP : 60 mgLysin Hydrochloride : 100 mgDL Mytheonine : 50 mgL-Tryptophan : 50 mg Biotin : 100 mgCholine Chloride : 100 mg Diastase IP (1:1200) : 100 mg( Fungal Diastase derived from Aspergillus Oryzae)Pepsine IP (1:",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Kalshine Gold 5lts.png"
    ],
    "skus": [
      {
        "id": "kalshine-gold-0",
        "name": "1 L",
        "code": "KAL-1",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "kalshine-gold-1",
        "name": "2 L",
        "code": "KAL-2",
        "unitSize": "2 L",
        "packSize": "1 Unit"
      },
      {
        "id": "kalshine-gold-2",
        "name": "5 L",
        "code": "KAL-3",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      },
      {
        "id": "kalshine-gold-3",
        "name": "10 L",
        "code": "KAL-4",
        "unitSize": "10 L",
        "packSize": "1 Unit"
      },
      {
        "id": "kalshine-gold-4",
        "name": "500 ml",
        "code": "KAL-5",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "kalshine-gold-pet",
    "slug": "kalshine-gold-pet",
    "name": "Kalshine Gold Pet",
    "category": "Canine",
    "description": "High quality Canine product by Amicizia Life Science.",
    "composition": "Each 20 ml Provides:Composition :Each 10 ml Provides:Liver Fraction :750 mg (Soluble Liver fraction from 16 .25 gm of fresh Liver) with Vitamin B12 activity equivalent to 5 mcgThiamine (Vitamin B1) : 20 mgRiboflavin (Vitamin B2) : 20 mgPyridoxine HCL IP (Vitamin B6) : 2 mgNicotinamide IP : 60 mgLysin Hydrochloride : 100 mgDL Mytheonine : 50 mgL-Tryptophan : 50 mg Biotin : 100 mgCholine Chloride : 100 mg Diastase IP (1:1200) : 100 mg( Fungal Diastase derived from Aspergillus Oryzae)Pepsine IP (1:",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Kalshine Gold Pet 200ml.png"
    ],
    "skus": [
      {
        "id": "kalshine-gold-pet-0",
        "name": "200ml",
        "code": "KAL-1",
        "unitSize": "200ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "more-grow",
    "slug": "more-grow",
    "name": "More Grow",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/More Grow 500gm.png"
    ],
    "skus": [
      {
        "id": "more-grow-0",
        "name": "1 kg",
        "code": "MOR-1",
        "unitSize": "1 kg",
        "packSize": "1 Unit"
      },
      {
        "id": "more-grow-1",
        "name": "500 mg",
        "code": "MOR-2",
        "unitSize": "500 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "more-pork",
    "slug": "more-pork",
    "name": "More Pork",
    "category": "Livestock",
    "description": "Vitamin A, D3, E, K3, B1, B2, B6, B12, Biotin, Folic Acid & NiacinCalcium, Phosphorus, Magnesium Manganese, Zinc, Iron, Copper , Potassium, Cobalt & SeleniumFortified with Fructo-Oligosaccharide.Probiotics: Probiotics are “Good” bacteria that help to keep digestive system healthy by controlling growth of harmful bacteria & increasing the number of helpful friendly bacteria Prevent the adhesion of pathogens to the mucosal surface by competition Stimulate local immune defences Restore & Increases ",
    "composition": "Enzymes: Cellulase, Xylanase,Protease,Amylase, Phytase, Lipase, Beta Gluconase, AmylaseProbiotics : Lactobacillus acidophilus, Lactobacillus Sporogenes, Bacillus coagulans, Saccharomyces Cerevisiae, Bifidolacterium bifidum",
    "indications": "Vitamin A, D3, E, K3, B1, B2, B6, B12, Biotin, Folic Acid & NiacinCalcium, Phosphorus, Magnesium Manganese, Zinc, Iron, Copper , Potassium, Cobalt & SeleniumFortified with Fructo-Oligosaccharide.Probiotics: Probiotics are “Good” bacteria that help to keep digestive system healthy by controlling growth of harmful bacteria & increasing the number of helpful friendly bacteria Prevent the adhesion of pathogens to the mucosal surface by competition Stimulate local immune defences Restore & Increases ",
    "dosage": "Large Animal : 20gm to 30 gm twice daily | Small Animal : 5gm to 10 gm twice daily2kg to 2.5 kg More pork continuously mix with per Tonne of Feed thoroughly & mix when it is cold after cooking or as directed by V eterinarian.",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/More Pork Family.png"
    ],
    "skus": [
      {
        "id": "more-pork-0",
        "name": "100 mg",
        "code": "MOR-1",
        "unitSize": "100 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "more-pork-1",
        "name": "500 mg",
        "code": "MOR-2",
        "unitSize": "500 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "more-pork-2",
        "name": "1 kg",
        "code": "MOR-3",
        "unitSize": "1 kg",
        "packSize": "1 Unit"
      },
      {
        "id": "more-pork-3",
        "name": "30 kg",
        "code": "MOR-4",
        "unitSize": "30 kg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "neoxy-forte",
    "slug": "neoxy-forte",
    "name": "Neoxy Forte",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Neoxy Forte 50gms.png"
    ],
    "skus": [
      {
        "id": "neoxy-forte-0",
        "name": "50 mg",
        "code": "NEO-1",
        "unitSize": "50 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "no-coli",
    "slug": "no-coli",
    "name": "No Coli",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/No Coli Family.png"
    ],
    "skus": [
      {
        "id": "no-coli-0",
        "name": "500 ml",
        "code": "NO--1",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "no-coli-1",
        "name": "1 L",
        "code": "NO--2",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "oxygold",
    "slug": "oxygold",
    "name": "Oxygold",
    "category": "Livestock",
    "description": "Follow up therapy after Antibiotic InjectionAs Pessary :In the prevention and treatment of infection following Parturation,Dystokia, Abortion, Retention of Placenta, Metritis, Pyometra & Cervicitis.",
    "composition": "Each uncoated Bolus ContainsOxytetracyclin Hydrochloride IP :500 Mg",
    "indications": "Follow up therapy after Antibiotic InjectionAs Pessary :In the prevention and treatment of infection following Parturation,Dystokia, Abortion, Retention of Placenta, Metritis, Pyometra & Cervicitis.",
    "dosage": "1bolus per 50 Kg body weight orally for 3 days to 5 days For Gential Tract use: 1-2 bolus in Uterus or as advised by V eterinarian",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Oxy Gold Bolus.png"
    ],
    "skus": [
      {
        "id": "oxygold-0",
        "name": "4's strip",
        "code": "OXY-1",
        "unitSize": "4's strip",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "oxy-vetgold",
    "slug": "oxy-vetgold",
    "name": "Oxy Vetgold",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Oxy Vetgold.png"
    ],
    "skus": [
      {
        "id": "oxy-vetgold-0",
        "name": "100 mg",
        "code": "OXY-1",
        "unitSize": "100 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "pgf",
    "slug": "pgf",
    "name": "PGF",
    "category": "Poultry",
    "description": "Drinking W ater Sanitizer for Cattle, Swine, Poultry and Aqua Culture. To prevent water borne diseases of Bacterial, V iral and Fungal origin.",
    "composition": "Each kg provides:PROBIOTICS: Lactobacillus acidophilus , Lactobacillus Sporogenes , Sacharomyces cerevisiae , Sacharomyces boulardii , Bacillus coagulans , Bacillus subtilis, Lactobacillus rhamnosus & Bifidobacterium bifidum ENZYMES: Protease, Lipase, Cellulase, Xylanase, Phytase, Amylase & Beta GluconasePREBIOTICS : Fortified with Fructo-Oligosaccharide in Dextrose baseMINERAL:Calcium: 100 gmPhosphorus: 50gmMagnesium: 10000 mgManganese: 54000 mgZinc: 52000 mgIron : 20000 mgCopper : 2000 mgIodin",
    "indications": "Drinking W ater Sanitizer for Cattle, Swine, Poultry and Aqua Culture. To prevent water borne diseases of Bacterial, V iral and Fungal origin.",
    "dosage": "Poultry Growth Formula as W ater Soluble: 1st week: 1gm in 2 Lit. of water 2nd week onwards: 1gm in 4 Lit. of water Poultry Growth Formula as Feed Premix: Mix evenly & thoroughlyBroiler: 500 gm of PGF/ Ton of Feed Layer: 750 gm to 1000 gm of PGF /T on of feed",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/PGF Family.png"
    ],
    "skus": [
      {
        "id": "pgf-0",
        "name": "1 kg",
        "code": "PGF-1",
        "unitSize": "1 kg",
        "packSize": "1 Unit"
      },
      {
        "id": "pgf-1",
        "name": "250 mg",
        "code": "PGF-2",
        "unitSize": "250 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "pgf-2",
        "name": "500 mg",
        "code": "PGF-3",
        "unitSize": "500 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "pipzin-vet",
    "slug": "pipzin-vet",
    "name": "Pipzin Vet",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Pipzin Vet 30ml.png"
    ],
    "skus": [
      {
        "id": "pipzin-vet-0",
        "name": "30 ml",
        "code": "PIP-1",
        "unitSize": "30 ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "primasol",
    "slug": "primasol",
    "name": "Primasol",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Primasol 500ml.png"
    ],
    "skus": [
      {
        "id": "primasol-0",
        "name": "100 ml",
        "code": "PRI-1",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "primasol-1",
        "name": "500 ml",
        "code": "PRI-2",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "pyronull",
    "slug": "pyronull",
    "name": "Pyronull",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Pyronull Bolus.png"
    ],
    "skus": [
      {
        "id": "pyronull-0",
        "name": "4's strip",
        "code": "PYR-1",
        "unitSize": "4's strip",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "safety-vet",
    "slug": "safety-vet",
    "name": "Safety Vet",
    "category": "Livestock",
    "description": "Gastrointestinal tract ,Respiratory tract,Genital tract, Urinary tract, Skin, W ound, Joint, Bone & Soft Tissue Infections. Septicaemia, Bacteraemia & as a general antibiotic when broad spectrum activity is required.",
    "composition": "Each vial contains: Ceftriaxone Sodium I.P .125 mg/250 mg / 500 mg /1 gm / 2 gm / 3 gm",
    "indications": "Gastrointestinal tract ,Respiratory tract,Genital tract, Urinary tract, Skin, W ound, Joint, Bone & Soft Tissue Infections. Septicaemia, Bacteraemia & as a general antibiotic when broad spectrum activity is required.",
    "dosage": "5mg to 10mg per kg Body weight by IV/IM route for 3 to 5 days or as advised by V eterinarian.",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Savety Vet 1.125gms.png",
      "/images/products/Savety Vet 125gms.png",
      "/images/products/Savety Vet 1gms.png",
      "/images/products/Savety Vet 250gms.png",
      "/images/products/Savety Vet 2gms.png"
    ],
    "skus": [
      {
        "id": "safety-vet-0",
        "name": "1.125 mg",
        "code": "SAF-1",
        "unitSize": "1.125 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "safety-vet-1",
        "name": "125 mg",
        "code": "SAF-2",
        "unitSize": "125 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "safety-vet-2",
        "name": "1 mg",
        "code": "SAF-3",
        "unitSize": "1 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "safety-vet-3",
        "name": "250 mg",
        "code": "SAF-4",
        "unitSize": "250 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "safety-vet-4",
        "name": "2 mg",
        "code": "SAF-5",
        "unitSize": "2 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "safety-vet-5",
        "name": "500 mg",
        "code": "SAF-6",
        "unitSize": "500 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "safety-vet-6",
        "name": "3 mg",
        "code": "SAF-7",
        "unitSize": "3 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "safety-vet-plus",
    "slug": "safety-vet-plus",
    "name": "Safety Vet Plus",
    "category": "Livestock",
    "description": "Gastrointestinal tract ,Respiratory tract (HS, Pneumonia, Bronchitis), Uro-Genital tract (Metritis, Endometritis, Pyometra) Skin & Soft tissue ( Abscess, Surgical W ound, Maggoted wound), Joint & Bone Infections. Masitis Septicaemia, Bacteraemia, Pre-operaive prophylaxis & post-operative treatment & disease of unknown etiology when broad spectrum activity is required.",
    "composition": "",
    "indications": "Gastrointestinal tract ,Respiratory tract (HS, Pneumonia, Bronchitis), Uro-Genital tract (Metritis, Endometritis, Pyometra) Skin & Soft tissue ( Abscess, Surgical W ound, Maggoted wound), Joint & Bone Infections. Masitis Septicaemia, Bacteraemia, Pre-operaive prophylaxis & post-operative treatment & disease of unknown etiology when broad spectrum activity is required.",
    "dosage": "5 to 10mg per kg Body weight by IV/IM route for 3 to 5 days or as advised by V eterinarian.",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Savety Vet Plus 281.25.png",
      "/images/products/Savety Vet Plus 562.5gms.png"
    ],
    "skus": [
      {
        "id": "safety-vet-plus-0",
        "name": "562.5gm",
        "code": "SAF-1",
        "unitSize": "562.5gm",
        "packSize": "1 Unit"
      },
      {
        "id": "safety-vet-plus-1",
        "name": "281.25 mg",
        "code": "SAF-2",
        "unitSize": "281.25 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "safety-vet-plus-2",
        "name": "562.50 mg",
        "code": "SAF-3",
        "unitSize": "562.50 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "safety-vet-plus-3",
        "name": "1.125 gm",
        "code": "SAF-4",
        "unitSize": "1.125 gm",
        "packSize": "1 Unit"
      },
      {
        "id": "safety-vet-plus-4",
        "name": "3.375 gm.",
        "code": "SAF-5",
        "unitSize": "3.375 gm.",
        "packSize": "1 Unit"
      },
      {
        "id": "safety-vet-plus-5",
        "name": "4.5 gmAnswer for All T ypes of Productive",
        "code": "SAF-6",
        "unitSize": "4.5 gmAnswer for All T ypes of Productive",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "sulphaquin-gold",
    "slug": "sulphaquin-gold",
    "name": "Sulphaquin Gold",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Sulphaquin Gold Family.png"
    ],
    "skus": [
      {
        "id": "sulphaquin-gold-std",
        "name": "Standard Pack",
        "code": "SUL-1",
        "unitSize": "Standard",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "ultraveet",
    "slug": "ultraveet",
    "name": "Ultraveet",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Ultraveet Family.png"
    ],
    "skus": [
      {
        "id": "ultraveet-std",
        "name": "Standard Pack",
        "code": "ULT-1",
        "unitSize": "Standard",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "vimigold",
    "slug": "vimigold",
    "name": "Vimigold",
    "category": "Livestock",
    "description": "VIMIGOLD Improves General Health, Productivity and Ensures Magic Ef fects on Growth and Performance. Improves Milk Production and Fat Percentage of Milk.Improves the Resistance Power . Improves Fertility , Corrects Nervous condition. It contains Metho Chelated Minerals, so high bio-availability helps to correct Post Partum Anestrous.Vimigold helps Quick weight gain. Helps to overcome stress, V itamin and Mineral deficiencies. Improves FCR. V imigold provide complete nutrition to Fish for quick g",
    "composition": "Vitamin A : 1200000 I.U. | V itamin E : 1200 I.U | V itamin D3 : 120000 I.U. Vitamin K3 : 200 mg. | Niacinamide : 4 gm | Fluorine : 60 mg. | Cobalt : 150 mg. Zinc : 9600 mg. | Copper : 1200 mg. | Iodine : 3000 mg. | Calcium : 200 gmMagnesium : 6000 mg | Phosphorus : 100 gm. | Live Yeast Culture : 180 gm. Iron : 2500 mg. | Sulphur : 0.70% | Manganese : 2000 mg. | Chromium : 80 mgSodium : 8 mg. | Potassium : 100 mg. | Selenium : 10 mg.DL Methionine : 2.2 gm | L-L ysine : 4.4 gm",
    "indications": "VIMIGOLD Improves General Health, Productivity and Ensures Magic Ef fects on Growth and Performance. Improves Milk Production and Fat Percentage of Milk.Improves the Resistance Power . Improves Fertility , Corrects Nervous condition. It contains Metho Chelated Minerals, so high bio-availability helps to correct Post Partum Anestrous.Vimigold helps Quick weight gain. Helps to overcome stress, V itamin and Mineral deficiencies. Improves FCR. V imigold provide complete nutrition to Fish for quick g",
    "dosage": "Cow and Buf falo : 25–30 gm per day . | Calf, Sheep, Pig & Goat : 15–20 gm per day .100 gm VIMIGOLD per 10 kg of Fish feed, Poultry: 1-2 kg per ton of feed or as advised by V eterinarian.",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Vimigold Family.png"
    ],
    "skus": [
      {
        "id": "vimigold-0",
        "name": "250 gm",
        "code": "VIM-1",
        "unitSize": "250 gm",
        "packSize": "1 Unit"
      },
      {
        "id": "vimigold-1",
        "name": "1 kg",
        "code": "VIM-2",
        "unitSize": "1 kg",
        "packSize": "1 Unit"
      },
      {
        "id": "vimigold-2",
        "name": "5 kg",
        "code": "VIM-3",
        "unitSize": "5 kg",
        "packSize": "1 Unit"
      },
      {
        "id": "vimigold-3",
        "name": "30 kg.A  Unique",
        "code": "VIM-4",
        "unitSize": "30 kg.A  Unique",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "wormnull-dp",
    "slug": "wormnull-dp",
    "name": "Wormnull-DP",
    "category": "Livestock",
    "description": "Albendazole is a synthetic Anthelmintic which belongs to the group of Benzimidazole derivatives and provides an action against a wide range of worms like Tapeworms (Cestodes), and Round worms,Pinworms, Whipworms, Hookworms, Filariae (Nematodes) and also against adult Fluke (T rematode) at higher dose. Ivermectin(A vermectin group) Infestations of Lice , Ticks, Mites and Scabies in Sheep, Goat, Cattle, Buf falo & Swine.",
    "composition": "Each 30 ml contains Albendazole (Micronised ) IP : 750 mg | Ivermectin IP : 25 Mg",
    "indications": "Albendazole is a synthetic Anthelmintic which belongs to the group of Benzimidazole derivatives and provides an action against a wide range of worms like Tapeworms (Cestodes), and Round worms,Pinworms, Whipworms, Hookworms, Filariae (Nematodes) and also against adult Fluke (T rematode) at higher dose. Ivermectin(A vermectin group) Infestations of Lice , Ticks, Mites and Scabies in Sheep, Goat, Cattle, Buf falo & Swine.",
    "dosage": "5 mg Micronised W ormnull DP per kg of body weight Large Animals - 60-90ml | Small Animals - 5-10ml or as directed by V eterinarian.In all animals, repeating the treatment 3 weeks after first dose and thereafter every 4 to 6 months, of fers better control of the worms infestation & enhances Production , Reproduction & Performance.",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Wormnull Family.png"
    ],
    "skus": [
      {
        "id": "wormnull-0",
        "name": "30ml",
        "code": "WOR-1",
        "unitSize": "30ml",
        "packSize": "1 Unit"
      },
      {
        "id": "wormnull-1",
        "name": "60ml",
        "code": "WOR-2",
        "unitSize": "60ml",
        "packSize": "1 Unit"
      },
      {
        "id": "wormnull-2",
        "name": "90 mlFreedom from T icks",
        "code": "WOR-3",
        "unitSize": "90 mlFreedom from T icks",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "zymoliv-gold-bolus",
    "slug": "zymoliv-gold-bolus",
    "name": "Zymoliv Gold Bolus",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Zymoliv Gold Bolus.png"
    ],
    "skus": [
      {
        "id": "zymoliv-gold-bolus-std",
        "name": "Standard Pack",
        "code": "ZYM-1",
        "unitSize": "Standard",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "zymoliv-gold",
    "slug": "zymoliv-gold",
    "name": "Zymoliv Gold",
    "category": "Livestock",
    "description": "High quality Livestock product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Zymoliv Gold Family.png"
    ],
    "skus": [
      {
        "id": "zymoliv-gold-std",
        "name": "Standard Pack",
        "code": "ZYM-1",
        "unitSize": "Standard",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "zymoliv-gold-pet",
    "slug": "zymoliv-gold-pet",
    "name": "Zymoliv Gold Pet",
    "category": "Canine",
    "description": "High quality Canine product by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Zymoliv Gold Pet 200ml.png"
    ],
    "skus": [
      {
        "id": "zymoliv-gold-pet-0",
        "name": "200ml",
        "code": "ZYM-1",
        "unitSize": "200ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "amido",
    "slug": "amido",
    "name": "Amido",
    "category": "Livestock",
    "description": "Amido by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Amido.png"
    ],
    "skus": [
      {
        "id": "amido-0",
        "name": "1 ml",
        "code": "AMI-1",
        "unitSize": "1 ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "amixin",
    "slug": "amixin",
    "name": "Amixin",
    "category": "Livestock",
    "description": "Amixin by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "amixin-0",
        "name": "20 mg",
        "code": "AMI-1",
        "unitSize": "20 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "avical",
    "slug": "avical",
    "name": "Avical",
    "category": "Livestock",
    "description": "Avical by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "avical-0",
        "name": "1 L",
        "code": "AVI-1",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "avical-1",
        "name": "100 ml",
        "code": "AVI-2",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "avical-2",
        "name": "500 ml",
        "code": "AVI-3",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "avical-3",
        "name": "5 L",
        "code": "AVI-4",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "darmelo",
    "slug": "darmelo",
    "name": "Darmelo",
    "category": "Livestock",
    "description": "Darmel by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "darmel-0",
        "name": "50 mg",
        "code": "DAR-1",
        "unitSize": "50 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "deltrin",
    "slug": "deltrin",
    "name": "Deltrin",
    "category": "Livestock",
    "description": "Deltrin by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "deltrin-0",
        "name": "5 mg",
        "code": "DEL-1",
        "unitSize": "5 mg",
        "packSize": "1 Unit"
      },
      {
        "id": "deltrin-1",
        "name": "50 mg",
        "code": "DEL-2",
        "unitSize": "50 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "farmsafe",
    "slug": "farmsafe",
    "name": "Farmsafe",
    "category": "Livestock",
    "description": "Farmsafe by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "farmsafe-0",
        "name": "1 L",
        "code": "FAR-1",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "farmsafe-1",
        "name": "250 ml",
        "code": "FAR-2",
        "unitSize": "250 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "farmsafe-2",
        "name": "500 ml",
        "code": "FAR-3",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "farmsafe-3",
        "name": "5 L",
        "code": "FAR-4",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "furavet",
    "slug": "furavet",
    "name": "Furavet",
    "category": "Livestock",
    "description": "Furavet by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "furavet-0",
        "name": "50 mg",
        "code": "FUR-1",
        "unitSize": "50 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "good-habit",
    "slug": "good-habit",
    "name": "Good Habit",
    "category": "Livestock",
    "description": "Good Habit by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "good-habit-0",
        "name": "30 tabs",
        "code": "GOO-1",
        "unitSize": "30 tabs",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "growbest-pet-gel",
    "slug": "growbest-pet-gel",
    "name": "Growbest Pet Gel",
    "category": "Canine",
    "description": "Growbest Pet Gel by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "growbest-pet-gel-0",
        "name": "200 mg",
        "code": "GRO-1",
        "unitSize": "200 mg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "orasol",
    "slug": "orasol",
    "name": "Orasol",
    "category": "Livestock",
    "description": "Orasol by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "orasol-0",
        "name": "1 L",
        "code": "ORA-1",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "orasol-1",
        "name": "250 ml",
        "code": "ORA-2",
        "unitSize": "250 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "orasol-2",
        "name": "500 ml",
        "code": "ORA-3",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "orasol-3",
        "name": "5 L",
        "code": "ORA-4",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "piggo-csfend",
    "slug": "piggo-csfend",
    "name": "Piggo csfEND",
    "category": "Livestock",
    "description": "Piggo csfEND by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Piggo CSFend.png"
    ],
    "skus": [
      {
        "id": "piggo-csfend-0",
        "name": "100 ml",
        "code": "PIG-1",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "piggo-farmsafe",
    "slug": "piggo-farmsafe",
    "name": "Piggo Farmsafe",
    "category": "Livestock",
    "description": "Piggo Farmsafe by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Piggo Farmsafe.jpeg"
    ],
    "skus": [
      {
        "id": "piggo-farmsafe-0",
        "name": "100 ml",
        "code": "PIG-1",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "deltrin-soap",
    "slug": "deltrin-soap",
    "name": "Deltrin Soap",
    "category": "Livestock",
    "description": "Deltrin Soap by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "deltrin-soap-0",
        "name": "75 gm",
        "code": "DEL-S-1",
        "unitSize": "75 gm",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "piggo-iron-bloom",
    "slug": "piggo-iron-bloom",
    "name": "Piggo Iron Bloom",
    "category": "Livestock",
    "description": "Piggo Iron Bloom by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "piggo-iron-bloom-0",
        "name": "500 gm",
        "code": "PIG-I-1",
        "unitSize": "500 gm",
        "packSize": "1 Unit"
      },
      {
        "id": "piggo-iron-bloom-1",
        "name": "1 kg",
        "code": "PIG-I-2",
        "unitSize": "1 kg",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "piggo-swinocal",
    "slug": "piggo-swinocal",
    "name": "Piggo Swinocal",
    "category": "Livestock",
    "description": "Piggo Swinocal by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "piggo-swinocal-0",
        "name": "1 L",
        "code": "PIG-S-1",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "piggo-swinocal-1",
        "name": "5 L",
        "code": "PIG-S-2",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "piggo-swinoliv",
    "slug": "piggo-swinoliv",
    "name": "Piggo Swinoliv",
    "category": "Livestock",
    "description": "Piggo Swinoliv by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "piggo-swinoliv-0",
        "name": "1 L",
        "code": "PIG-L-1",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "piggo-swinoliv-1",
        "name": "5 L",
        "code": "PIG-L-2",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "shinofur-natural",
    "slug": "shinofur-natural",
    "name": "Shinofur Natural",
    "category": "Livestock",
    "description": "Shinofur Natural by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "shinofur-natural-0",
        "name": "75 gm",
        "code": "SHI-N-1",
        "unitSize": "75 gm",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "shinofur-power",
    "slug": "shinofur-power",
    "name": "Shinofur Power",
    "category": "Livestock",
    "description": "Shinofur Power by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [],
    "skus": [
      {
        "id": "shinofur-power-0",
        "name": "75 gm",
        "code": "SHI-P-1",
        "unitSize": "75 gm",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "nulltix",
    "slug": "nulltix",
    "name": "Nulltix",
    "category": "Livestock",
    "description": "Nulltix by Amicizia Life Science.",
    "composition": "",
    "indications": "",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Nulltix.png"
    ],
    "skus": [
      {
        "id": "nulltix-0",
        "name": "100 mg",
        "code": "NUL-1",
        "unitSize": "100 mg",
        "packSize": "1 Unit"
      }
    ]
  }
];
