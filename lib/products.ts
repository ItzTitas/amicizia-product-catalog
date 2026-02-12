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
    "name": "Aqua-Rena",
    "category": "Poultry",
    "description": "Water sanitizer and disinfectant effective in hard water; bactericidal, fungicidal, algaecidal and virucidal.",
    "composition": "Didecyl Dimethyl Ammonium Chloride – 15 gm per 100 ml",
    "indications": "Drinking water sanitization\nPrevention of waterborne bacterial, viral and fungal diseases",
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
    "description": "Endectocide effective against internal and external parasites (Macrocyclic lactone endectocide).",
    "composition": "Ivermectin – 10 mg per tablet / 10 mg per ml (injection)",
    "indications": "Roundworms\nLungworms\nHeartworm\nGastrointestinal worms\nMange\nMites\nLice\nGrubs\nTicks",
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
    "name": "B-Com Plus",
    "category": "Livestock",
    "description": "Concentrated B-complex and amino acid supplement.",
    "composition": "Vitamin B1, B2, B6, B12\nNiacinamide\nMethionine\nLysine\nVitamin C\nVitamin E\nCholine\nBiotin",
    "indications": "Metabolic disorders\nLiver dysfunction\nGrowth support",
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
    "description": "Homeopathic respiratory support formulation for bacterial respiratory infections in poultry.",
    "composition": "Homeopathic formulation.",
    "indications": "Chronic Respiratory Disease (CRD)\nInfectious Coryza\nFacial swelling, nasal discharge, conjunctivitis, cough, fever\nDrop in feed intake and egg production",
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
    "description": "Third-generation oral cephalosporin antibiotic for gram-positive and gram-negative infections.",
    "composition": "Cefpodoxime Proxetil – 100 mg (Canine) / 200 mg (Livestock)",
    "indications": "Skin infections\nSoft tissue infections\nRespiratory tract infections\nUrinary tract infections\nEar infections",
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
    "description": "Bronchodilator and mucolytic expectorant for respiratory congestion.",
    "composition": "Terbutaline Sulphate – 1.25 mg\nGuaiphenesin – 50 mg\nBromhexine HCl – 4 mg\nMenthol – 1 mg (Canine variant)",
    "indications": "Productive & dry cough\nBronchitis\nPneumonia\nLaryngitis\nSinusitis",
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
    "description": "Anti-coccidial formulation with Vitamin K support to prevent hemorrhagic complications.",
    "composition": "Amprolium HCl – 20% w/w\nMenadione Sodium Bisulphite – 0.25% w/w\nVitamin K – 40 mg",
    "indications": "Coccidiosis (Poultry, Bovine, Swine)",
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
    "description": "Combination anti-protozoal, antibacterial and anti-diarrhoeal bolus for mixed gastrointestinal infections.",
    "composition": "Metronidazole – 1000 mg\nFurazolidone – 500 mg\nLoperamide HCl – 7.5 mg",
    "indications": "Acute diarrhoea\nDysentery\nProtozoal and bacterial enteritis\nAmoebiasis\nGiardiasis\nSalmonellosis",
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
    "description": "Oral vitamin supplement for supportive therapy during infections.",
    "composition": "Vitamin A\nVitamin E\nNiacinamide",
    "indications": "Infection management support\nNutritional deficiency",
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
    "description": "Broad-spectrum benzimidazole anthelmintic safe for use in pregnancy.",
    "composition": "Fenbendazole – 1.5 g bolus / 150 mg tablet",
    "indications": "Gastrointestinal roundworms\nHookworms\nLungworms\nWhipworms\nTapeworms",
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
    "name": "Floxin-L",
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
    "description": "Balanced multivitamin and amino acid tonic for growth, immunity enhancement and metabolic support.",
    "composition": "Vitamin A – 10,00,000 IU\nVitamin D3 – 2,00,000 IU\nVitamin B1 – 350 mg\nVitamin B6 – 200 mg\nVitamin B12 – 2000 mcg\nVitamin E – 800 mg\nVitamin C – 500 mg\nCholine Chloride – 400 mg\nDe-Pantothenol – 1500 mg\nFolic Acid – 10 mg\nBiotin – 250 mcg\nInositol – 200 mcg\nNiacinamide – 1.25 mg\n18 Amino Acids including Methionine, Lysine, Threonine, Tryptophan, Arginine, Histidine, Valine, Leucine, Isoleucine, etc.",
    "indications": "Nutritional deficiency\nGrowth retardation\nGeneral debility\nStress (transport, deworming, illness)\nConvalescence\nPregnancy and lactation support",
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
    "description": "Vitamin-amino acid tonic supporting metabolism and productivity.",
    "composition": "12 Vitamins\n18 Amino Acids (including Methionine, Lysine, Threonine, Valine, Leucine etc.)",
    "indications": "Growth promotion\nNutritional deficiency\nStress conditions\nConvalescence",
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
    "description": "Homeopathic support formulation used during clinical and subclinical IBD outbreaks and for immune support.",
    "composition": "Homeopathic formulation.",
    "indications": "Infectious Bursal Disease (Gumboro / IBD)\nAssociated symptoms: diarrhoea, lethargy, ruffled feathers, anorexia, tremors, poor coordination",
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
    "description": "Homeopathic preventive and therapeutic preparation intended for IBH/HHS management and associated hepatic pathology.",
    "composition": "Homeopathic formulation (specific ingredients not detailed in brochure).",
    "indications": "Inclusion Body Hepatitis (IBH)\nHepatitis Hydropericardium Syndrome (HHS)\nHaemorrhagic and necrobiotic liver & kidney changes\nHydropericardium syndrome (Litchi heart)",
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
    "description": "Immunomodulator improving cellular and humoral immune response.",
    "composition": "Glycine\nSelenium\nL-Lysine\nDL-Methionine\nVitamin E\nVitamin C\nYeast Extract\nAmino Nitrogen",
    "indications": "Immunosuppression\nPre & post vaccination\nAntibiotic-associated immune depression",
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
    "description": "Immunomodulator enhancing antibody response and cellular immunity.",
    "composition": "Glycine – 100 mg\nVitamin E – 35 mg\nSelenium – 8.5 ppm\nVitamin C – 40 mg\nSodium & Potassium Chloride\nManganese, Magnesium, Zinc\nAmino Nitrogen – 10,000 ppm\nVitamin B12 – 5 mcg\nImmunoactive Polysaccharides",
    "indications": "Immunosuppression\nPre & post vaccination support\nPost infection recovery\nStress-related immune depression",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Immune Pet.png"
    ],
    "skus": [
      {
        "id": "immune-pet-0",
        "name": "200 ml",
        "code": "IMM-1",
        "unitSize": "200 ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "iroliv",
    "slug": "iroliv",
    "name": "Iro-Liv",
    "category": "Poultry",
    "description": "Oral haematinic with digestive and hepatoprotective properties.",
    "composition": "Liver extract\nFerrous salts\nB-complex vitamins\nPapain\nDiastase\nCalcium Lactate",
    "indications": "Anaemia\nWeakness\nFatty liver syndrome",
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
    "description": "Oral haematinic with liver support properties to improve hemoglobin synthesis and metabolism.",
    "composition": "Ferrous Gluconate – 200 mg\nFerrous Chloride – 100 mg\nVitamin B1\nVitamin B2\nFolic Acid – 20 mg\nCopper Sulphate – 25 mg\nCobalt Chloride – 5 mg\nZinc – 50 mg\nCalcium Lactate – 300 mg\nLiver Fraction – 150 mg\nBiotin",
    "indications": "Iron deficiency anemia\nWeakness and debility\nHepatic dysfunction\nPregnancy and lactation support",
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
    "name": "Iro-Liv Power",
    "category": "Poultry",
    "description": "Iron and calcium supplement with hepatoprotective activity.",
    "composition": "Malt Extract\nCalcium Gluconate\nFerric Ammonium Citrate\nCopper Sulphate\nVitamin D3\nNiacinamide\nBiotin\nCholine Chloride\nFolic Acid\nVitamin B12\nSilymarin\nTricholine Citrate",
    "indications": "Anaemia\nFatty liver\nPoor egg shell quality",
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
    "description": "Calcium-phosphorus supplement fortified with Vitamin D3 and antioxidants for skeletal health.",
    "composition": "Calcium – 600 mg\nPhosphorus – 300 mg\nVitamin D3 – 1600 IU\nVitamin B12 – 20 mcg\nMagnesium\nSodium\nIodine\nIron\nLycopene – 5 mg\nLutein – 6 mg",
    "indications": "Calcium deficiency\nBone development disorders\nOsteoporosis\nFracture recovery\nLactation support",
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
    "description": "Nutritional supplement containing enzymes, probiotics, vitamins and minerals to improve digestion, gut microbiota and feed efficiency.",
    "composition": "Enzymes: Cellulase, Xylanase, Protease, Amylase, Phytase, Lipase, Beta Glucanase\nProbiotics: Lactobacillus acidophilus, L. sporogenes, Bacillus coagulans, Saccharomyces cerevisiae, Bifidobacterium bifidum\nVitamins: A, D3, E, K3, B1, B2, B6, B12, Biotin, Folic Acid, Niacin\nMinerals: Calcium, Phosphorus, Magnesium, Manganese, Zinc, Iron, Copper, Potassium, Cobalt, Selenium\nPrebiotic: Fructo-oligosaccharide (FOS)",
    "indications": "Poor growth\nPoor feed conversion ratio (FCR)\nGut flora imbalance",
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
    "name": "No-Coli",
    "category": "Livestock",
    "description": "Homeopathic formulation intended for prevention and supportive management of colibacillosis.",
    "composition": "Homeopathic formulation.",
    "indications": "E. coli infections\nDiarrhoea (mild to severe)\nDepression, poor growth, reduced feed intake",
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
    "description": "Broad-spectrum tetracycline antibiotic for systemic and intrauterine use.",
    "composition": "Oxytetracycline Hydrochloride – 500 mg",
    "indications": "Reproductive tract infections\nMetritis\nPyometra\nUterine infections\nPost-parturition infections",
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
    "name": "Oxyvet Gold",
    "category": "Livestock",
    "description": "Broad-spectrum antibiotic with antioxidant support.",
    "composition": "Tetracycline Hydrochloride\nVitamin E\nSelenium\nNiacinamide",
    "indications": "CRD, coryza, fowl cholera, typhoid, secondary bacterial infections.",
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
    "description": "Complete nutritional supplement for improved digestion, feed efficiency and survival rate.",
    "composition": "Multiple probiotics\nMultiple enzymes\nFOS (Prebiotic)\nVitamins A, D3, E, K3, B-complex\nMinerals (Calcium, Zinc, Iron, Selenium etc.)",
    "indications": "Poor growth\nPoor FCR\nGut health imbalance\nHigh antibiotic usage",
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
    "name": "PIPZIN-Vet",
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
    "description": "NSAID-based anti-inflammatory and antipyretic bolus with proteolytic enzyme support.",
    "composition": "Aceclofenac – 300 mg\nParacetamol – 1500 mg\nSerratiopeptidase – 75 mg",
    "indications": "Fever\nInflammatory conditions\nMastitis\nMetritis\nOsteoarthritis\nPost-operative pain",
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
    "description": "Broad-spectrum third-generation cephalosporin injectable antibiotic for systemic bacterial infections in livestock.",
    "composition": "Ceftriaxone Sodium I.P. – 125 mg / 250 mg / 500 mg / 1 g / 2 g / 3 g per vial",
    "indications": "Gastrointestinal tract infections\nRespiratory tract infections\nGenital & urinary tract infections\nSkin, wound, joint & bone infections\nSepticaemia, bacteraemia",
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
    "description": "Extended-spectrum beta-lactam antibiotic with beta-lactamase inhibitor for resistant and mixed infections.",
    "composition": "Ceftriaxone Sodium + Tazobactam Sodium (various strengths up to 4.5 g combination)",
    "indications": "Severe respiratory infections (HS, pneumonia, bronchitis)\nUrogenital infections (metritis, endometritis, pyometra)\nMastitis\nAbscesses & maggoted wounds\nSepticaemia",
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
    "description": "Sulfonamide antibacterial bolus for systemic infections.",
    "composition": "Sulphadimidine – 5 g",
    "indications": "Haemorrhagic septicaemia\nBronchopneumonia\nCalf diarrhoea\nCoccidiosis\nMastitis (supportive)",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Sulphaquin Gold Family.png"
    ],
    "skus": [
      {
        "id": "sulphaquin-gold-0",
        "name": "100 ml",
        "code": "SUL-1",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "sulphaquin-gold-1",
        "name": "1 L",
        "code": "SUL-2",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "sulphaquin-gold-2",
        "name": "5 L",
        "code": "SUL-3",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "ultraveet",
    "slug": "ultraveet",
    "name": "Ultraveet",
    "category": "Livestock",
    "description": "Multivitamin tonic and immunostimulant.",
    "composition": "Vitamin A\nVitamin B12\nVitamin D3\nVitamin C\nVitamin E\nVitamin K\nBiotin",
    "indications": "Stress\nVaccination support\nFertility\nGrowth retardation",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Ultraveet Family.png"
    ],
    "skus": [
      {
        "id": "ultraveet-0",
        "name": "30 ml",
        "code": "ULT-1",
        "unitSize": "30 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "ultraveet-1",
        "name": "60 ml",
        "code": "ULT-2",
        "unitSize": "60 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "ultraveet-2",
        "name": "100 ml",
        "code": "ULT-3",
        "unitSize": "100 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "ultraveet-3",
        "name": "500 ml",
        "code": "ULT-4",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "ultraveet-4",
        "name": "1 L",
        "code": "ULT-5",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "vimigold",
    "slug": "vimigold",
    "name": "Vimigold",
    "category": "Livestock",
    "description": "Complete vitamin-mineral supplement with enhanced bioavailability.",
    "composition": "High-dose vitamins A, D3, E, K3\nChelated minerals (Zinc, Copper, Iodine, Iron, Selenium, Chromium)\nLive yeast culture\nMethionine\nLysine",
    "indications": "Poor production\nInfertility\nMineral deficiency\nStress",
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
    "description": "Endectocide combining benzimidazole and avermectin for internal and external parasite control.",
    "composition": "Albendazole – 750 mg\nIvermectin – 25 mg",
    "indications": "Nematodes\nCestodes\nTrematodes (at higher dose)\nLice\nTicks\nMites",
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
        "id": "zymoliv-gold-bolus-0",
        "name": "4 x 1 strip",
        "code": "ZYM-1",
        "unitSize": "4 x 1 strip",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "zymoliv-gold",
    "slug": "zymoliv-gold",
    "name": "Zymoliv Gold",
    "category": "Livestock",
    "description": "Digestive enzyme and liver-support liquid formulation improving appetite, metabolism and feed utilization.",
    "composition": "Liver Fraction (1.25 gm per 100 ml)\nYeast Extract\nVitamin B1, B2, B6\nNicotinamide\nLysine HCl\nDL-Methionine\nL-Tryptophan\nBiotin\nCholine Chloride\nDiastase\nPepsin",
    "indications": "Indigestion\nAnorexia\nFatty liver syndrome\nAflatoxicosis & Mycotoxicosis",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Zymoliv Gold Family.png"
    ],
    "skus": [
      {
        "id": "zymoliv-gold-0",
        "name": "200 ml",
        "code": "ZYM-1",
        "unitSize": "200 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "zymoliv-gold-1",
        "name": "500 ml",
        "code": "ZYM-2",
        "unitSize": "500 ml",
        "packSize": "1 Unit"
      },
      {
        "id": "zymoliv-gold-2",
        "name": "1 L",
        "code": "ZYM-3",
        "unitSize": "1 L",
        "packSize": "1 Unit"
      },
      {
        "id": "zymoliv-gold-3",
        "name": "5 L",
        "code": "ZYM-4",
        "unitSize": "5 L",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "zymoliv-gold-pet",
    "slug": "zymoliv-gold-pet",
    "name": "Zymoliv Gold Pet",
    "category": "Canine",
    "description": "Digestive enzyme and hepatoprotective liquid improving appetite, digestion and liver function.",
    "composition": "Liver Fraction – 750 mg\nVitamin B Complex\nLysine – 100 mg\nDL-Methionine – 50 mg\nL-Tryptophan – 50 mg\nBiotin – 100 mg\nCholine Chloride – 100 mg\nDiastase\nPepsin\nSilymarin – 40 mg",
    "indications": "Indigestion\nAnorexia\nHepatic dysfunction\nAflatoxicosis\nFatty liver",
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
    "description": "Long-acting injectable endectocide for internal and external parasites.",
    "composition": "Doramectin – 10 mg per ml",
    "indications": "Gastrointestinal roundworms\nLungworms\nLice\nMange mites\nTicks",
    "dosage": "",
    "packaging": "Standard Packaging",
    "images": [
      "/images/products/Amido.png"
    ],
    "skus": [
      {
        "id": "amido-0",
        "name": "10 ml",
        "code": "AMI-1",
        "unitSize": "10 ml",
        "packSize": "1 Unit"
      }
    ]
  },
  {
    "id": "amixin",
    "slug": "amixin",
    "name": "Amixin",
    "category": "Livestock",
    "description": "Cephalosporin antibiotic for gram-positive bacterial infections.",
    "composition": "Cephalexin – 75 mg per gram",
    "indications": "Bacterial soft tissue infections.",
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
    "id": "darmelo",
    "slug": "darmelo",
    "name": "Darmelo",
    "category": "Livestock",
    "description": "Topical dermatological ointment for parasitic and infectious skin conditions.",
    "composition": "Miticidal, antifungal, antiseptic and anti-inflammatory formulation.",
    "indications": "Mange (sarcoptic, demodectic, psoroptic, chorioptic)\nRingworm\nMaggot wounds\nUlcerated & septic wounds\nFoot lesions",
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
    "description": "Contact ectoparasiticide for spray or dip application.",
    "composition": "Deltamethrin – 12.5 mg per ml",
    "indications": "Ticks\nFlies\nLice\nMites",
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
    "description": "Broad-spectrum disinfectant for livestock housing and equipment.",
    "composition": "Benzalkonium Chloride – 13.6%\nDidecyl Dimethyl Ammonium Chloride – 9.2%\nTributyltin Oxide – 1.0%",
    "indications": "Farm sanitation and biosecurity management.",
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
    "description": "Water-soluble antibacterial powder for poultry bacterial infections.",
    "composition": "Furaltadone 200 mg per gram",
    "indications": "Coliform infections, salmonellosis, respiratory infections, pullorum disease.",
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
    "category": "Canine",
    "description": "Digestive enzyme and palatability modifier tablet designed to discourage stool consumption and improve digestion.",
    "composition": "Monosodium Glutamate – 200 mg\nOleoresin Capsicum – 0.021 mg\nDL-Methionine – 60 mg\nAlpha Amylase – 20 mg\nLipase – 4 mg\nPapaya Extract – 7 mg\nYucca Schidigera Extract – 75 mg\nFructo Oligosaccharides – 10 mg",
    "indications": "Coprophagia (stool eating)\nLitter box raiding\nFoul stool odor",
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
    "description": "Oral rehydration and electrolyte solution with probiotic support.",
    "composition": "Amla, Vitamin E, Vitamin C, Glycine, Calcium Lactate, Potassium Chloride, Magnesium Sulphate, Sodium Chloride, Sodium Citrate, Dextrose, Lactobacillus acidophilus",
    "indications": "Dehydration\nDiarrhoea\nVomiting\nHeat stress\nPost-parturition recovery",
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
    "name": "Piggo CSFend",
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
    "description": "Topical ectoparasiticidal medicated soap.",
    "composition": "Permethrin – 5% w/w\nCetrimide – 1% w/w\nAloe Vera – 1% w/w",
    "indications": "Ticks\nFleas\nLice\nMites",
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
    "category": "Canine",
    "description": "Herbal cleansing shampoo and antiseptic herbal soap for dermatological maintenance and skin care.",
    "composition": "Arnica, Neem, Cantheris, Aloe Vera, Amla, Heena (Shampoo)\nNeem Extract, Vitamin E, Aloe Vera (Soap)",
    "indications": "Skin hygiene\nCoat maintenance\nMild skin infections\nRoutine hygiene",
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
    "category": "Canine",
    "description": "Medicated ectoparasiticidal soap.",
    "composition": "Permethrin – 1% w/w",
    "indications": "Ticks\nFleas\nLice",
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
    "category": "Canine",
    "description": "Topical ectoparasiticide for external parasite control.",
    "composition": "Propoxur – 10 mg per gram",
    "indications": "Ticks\nFleas\nLice",
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
