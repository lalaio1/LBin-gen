const validCards = [
  {
    "card": "4082769336417",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 2.121699571609497,
    "tries": 2
  },
  {
    "card": "213174862843220",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0270726680755615,
    "tries": 3
  },
  {
    "card": "675934036756",
    "bank": "ALLOCATED TO SWITCH",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.2345480918884277,
    "tries": 4
  },
  {
    "card": "213140708710931",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0098514556884766,
    "tries": 5
  },
  {
    "card": "370295932941626",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.5398035049438477,
    "tries": 6
  },
  {
    "card": "4320059100433540",
    "bank": "Desconhecido",
    "country": "Barbados",
    "brand": "visa",
    "type": "credit",
    "time": 0.7632946968078613,
    "tries": 7
  },
  {
    "card": "4911971348713",
    "bank": "BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 0.7191691398620605,
    "tries": 9
  },
  {
    "card": "4757152552066090",
    "bank": "BANK OF EAST ASIA, LTD.",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0807125568389893,
    "tries": 10
  },
  {
    "card": "4336171726811652",
    "bank": "ST. GEORGE BANK, LTD.",
    "country": "Australia",
    "brand": "visa",
    "type": "debit",
    "time": 0.723970890045166,
    "tries": 11
  },
  {
    "card": "4839918157816002",
    "bank": "PJSC BANK KYIVSKA RUS",
    "country": "Ukraine",
    "brand": "visa",
    "type": "credit",
    "time": 0.7089846134185791,
    "tries": 12
  },
  {
    "card": "4388394767714893",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0510990619659424,
    "tries": 20
  },
  {
    "card": "4012410353201456991",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7660090923309326,
    "tries": 33
  },
  {
    "card": "4330330066587",
    "bank": "AHLI BANK Q.S.C.",
    "country": "Qatar",
    "brand": "visa",
    "type": "debit",
    "time": 0.7546229362487793,
    "tries": 47
  },
  {
    "card": "676125381779",
    "bank": "Desconhecido",
    "country": "Norway",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7929246425628662,
    "tries": 54
  },
  {
    "card": "3538917276505849",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7676794528961182,
    "tries": 60
  },
  {
    "card": "639044281231",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7377266883850098,
    "tries": 78
  },
  {
    "card": "375802085540454",
    "bank": "Desconhecido",
    "country": "Switzerland",
    "brand": "amex",
    "type": "Desconhecido",
    "time": 0.7884137630462646,
    "tries": 86
  },
  {
    "card": "4447545693030752607",
    "bank": "PULASKI BANK AND TRUST COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7989234924316406,
    "tries": 93
  },
  {
    "card": "4907209518907038",
    "bank": "ALPHA BANK, LTD.",
    "country": "Cyprus",
    "brand": "visa",
    "type": "debit",
    "time": 0.7431495189666748,
    "tries": 100
  },
  {
    "card": "4344530473813684",
    "bank": "LANDESBANK BERLIN AG",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 1.1481640338897705,
    "tries": 107
  },
  {
    "card": "4392889856543206",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.857595682144165,
    "tries": 113
  },
  {
    "card": "213175684067302",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.048844575881958,
    "tries": 120
  },
  {
    "card": "4331341346140997263",
    "bank": "BANCO FINANCIERA COMERCIAL HONDURENA, S.A.",
    "country": "Honduras",
    "brand": "visa",
    "type": "credit",
    "time": 1.4255256652832031,
    "tries": 126
  },
  {
    "card": "4647449765880589966",
    "bank": "NUCOR EMPLOYEE'S C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 2.1001410484313965,
    "tries": 134
  },
  {
    "card": "4644773219528250",
    "bank": "MERCANTILE BANK, LTD.",
    "country": "South Africa",
    "brand": "visa",
    "type": "credit",
    "time": 4.523968696594238,
    "tries": 139
  },
  {
    "card": "4523848106641618",
    "bank": "STANDARD CHARTERED BANK (TAIWAN), LTD.",
    "country": "Taiwan, Province of China[a]",
    "brand": "visa",
    "type": "credit",
    "time": 2.3376846313476562,
    "tries": 147
  },
  {
    "card": "4988591052204662",
    "bank": "CITIBANK - COLOMBIA",
    "country": "Colombia",
    "brand": "visa",
    "type": "credit",
    "time": 0.7457036972045898,
    "tries": 158
  },
  {
    "card": "370279494446075",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 3.3073935508728027,
    "tries": 163
  },
  {
    "card": "4464558265069405826",
    "bank": "Desconhecido",
    "country": "Romania",
    "brand": "visa",
    "type": "credit",
    "time": 0.8069474697113037,
    "tries": 177
  },
  {
    "card": "4083095797771570586",
    "bank": "AMERIABANK CJSC",
    "country": "Armenia",
    "brand": "visa",
    "type": "debit",
    "time": 1.3452155590057373,
    "tries": 183
  },
  {
    "card": "6581528453188470",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.750274658203125,
    "tries": 190
  },
  {
    "card": "4978820637828",
    "bank": "CAISSE NATIONALE DES CAISSES D'EPARGNE (CNCE)",
    "country": "France",
    "brand": "visa",
    "type": "debit",
    "time": 0.7782528400421143,
    "tries": 205
  },
  {
    "card": "4945725758383626",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7635996341705322,
    "tries": 220
  },
  {
    "card": "180069222155894",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7393081188201904,
    "tries": 235
  },
  {
    "card": "4694844185850065306",
    "bank": "FOUR OAKS BANK AND TRUST COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7419373989105225,
    "tries": 249
  },
  {
    "card": "567683691339",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7572636604309082,
    "tries": 256
  },
  {
    "card": "5488330167592139",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.8649594783782959,
    "tries": 264
  },
  {
    "card": "4622352267441322",
    "bank": "BANK VTB24 (CJSC)",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "credit",
    "time": 3.321838140487671,
    "tries": 271
  },
  {
    "card": "4812257191797873",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 4.143847942352295,
    "tries": 276
  },
  {
    "card": "4987905673261797892",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 2.6874661445617676,
    "tries": 279
  },
  {
    "card": "6011436388594699",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0666711330413818,
    "tries": 284
  },
  {
    "card": "213196963039150",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7734110355377197,
    "tries": 291
  },
  {
    "card": "4367648507159",
    "bank": "ROYAL BANK OF CANADA",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7404289245605469,
    "tries": 298
  },
  {
    "card": "4697152130830184",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8048272132873535,
    "tries": 312
  },
  {
    "card": "4685927557508",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 0.7770256996154785,
    "tries": 319
  },
  {
    "card": "30442515516613",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7223093509674072,
    "tries": 326
  },
  {
    "card": "4484495953510440310",
    "bank": "GOVERNOR AND COMPANY OF THE BANK OF IRELAND",
    "country": "Ireland",
    "brand": "visa",
    "type": "credit",
    "time": 0.9041435718536377,
    "tries": 333
  },
  {
    "card": "676283118302",
    "bank": "Desconhecido",
    "country": "Turkey",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.387446641921997,
    "tries": 341
  },
  {
    "card": "4697961290565",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1434054374694824,
    "tries": 350
  },
  {
    "card": "4563348381008",
    "bank": "BANCO BHD, S.A., BANCO MZLTIPLE",
    "country": "Dominican Republic",
    "brand": "visa",
    "type": "credit",
    "time": 0.8349480628967285,
    "tries": 357
  },
  {
    "card": "180061996411553",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.774296760559082,
    "tries": 365
  },
  {
    "card": "377464390801135",
    "bank": "AMERICAN EXPRESS",
    "country": "New Zealand",
    "brand": "amex",
    "type": "credit",
    "time": 0.7974207401275635,
    "tries": 380
  },
  {
    "card": "4709537493594070824",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8104496002197266,
    "tries": 387
  },
  {
    "card": "4661912774265093387",
    "bank": "FIA CARD SERVICES, NATIONAL ASSOCIATION (2)",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7545740604400635,
    "tries": 403
  },
  {
    "card": "4930044676921526",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7614870071411133,
    "tries": 411
  },
  {
    "card": "3568853786501338",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8217229843139648,
    "tries": 418
  },
  {
    "card": "4142570141625917057",
    "bank": "AIB GROUP (UK) PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "credit",
    "time": 0.7602260112762451,
    "tries": 426
  },
  {
    "card": "4054095642094256581",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9755208492279053,
    "tries": 434
  },
  {
    "card": "4629679484669",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7886996269226074,
    "tries": 441
  },
  {
    "card": "4924747439907768",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7824485301971436,
    "tries": 449
  },
  {
    "card": "4275680058048447",
    "bank": "PROVIDENCE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7335155010223389,
    "tries": 465
  },
  {
    "card": "4752853946392382",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8462769985198975,
    "tries": 472
  },
  {
    "card": "4497021388156232",
    "bank": "Desconhecido",
    "country": "Mexico",
    "brand": "visa",
    "type": "debit",
    "time": 0.7621674537658691,
    "tries": 480
  },
  {
    "card": "4693085725752278",
    "bank": "INFIBANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7876198291778564,
    "tries": 488
  },
  {
    "card": "4684159555501061252",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7582731246948242,
    "tries": 495
  },
  {
    "card": "36541127455732",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "discover",
    "type": "credit",
    "time": 0.7569522857666016,
    "tries": 503
  },
  {
    "card": "4510543806439844",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7925620079040527,
    "tries": 518
  },
  {
    "card": "4073916492788715188",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7932393550872803,
    "tries": 526
  },
  {
    "card": "38181675175008",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7634704113006592,
    "tries": 534
  },
  {
    "card": "38703034612205",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8014001846313477,
    "tries": 541
  },
  {
    "card": "30029317139411",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7735171318054199,
    "tries": 549
  },
  {
    "card": "4110403881000242775",
    "bank": "BANCO DE CREDITO Y DESARROLLO SOCIAL MEGABANCO S.A. - (MEGABANCO S.A.)",
    "country": "Colombia",
    "brand": "visa",
    "type": "credit",
    "time": 0.7545533180236816,
    "tries": 557
  },
  {
    "card": "4539362474747",
    "bank": "CITI",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7604002952575684,
    "tries": 565
  },
  {
    "card": "639042735485",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7587010860443115,
    "tries": 572
  },
  {
    "card": "38309635709455",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8223588466644287,
    "tries": 580
  },
  {
    "card": "30002285254389",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7744700908660889,
    "tries": 588
  },
  {
    "card": "4578336466979806",
    "bank": "Desconhecido",
    "country": "Kazakhstan",
    "brand": "visa",
    "type": "credit",
    "time": 0.790358304977417,
    "tries": 596
  },
  {
    "card": "587006756650",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7615871429443359,
    "tries": 603
  },
  {
    "card": "3529948406201539",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.984358549118042,
    "tries": 618
  },
  {
    "card": "4678593215955508",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.776714563369751,
    "tries": 626
  },
  {
    "card": "180025608198130",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7626817226409912,
    "tries": 633
  },
  {
    "card": "38953777501962",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8230504989624023,
    "tries": 638
  },
  {
    "card": "6011020599570050",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 2.3903563022613525,
    "tries": 645
  },
  {
    "card": "4484406339537399721",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7110390663146973,
    "tries": 655
  },
  {
    "card": "30431335261112",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8180019855499268,
    "tries": 662
  },
  {
    "card": "4579250906336541044",
    "bank": "TELLER, A.S.",
    "country": "Kuwait",
    "brand": "visa",
    "type": "credit",
    "time": 0.7505881786346436,
    "tries": 669
  },
  {
    "card": "3566506237129768",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.796442985534668,
    "tries": 676
  },
  {
    "card": "4452698701881787",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8853728771209717,
    "tries": 681
  },
  {
    "card": "4078740371243890",
    "bank": "Desconhecido",
    "country": "Peru",
    "brand": "visa",
    "type": "debit",
    "time": 0.7859199047088623,
    "tries": 688
  },
  {
    "card": "4039700734206575160",
    "bank": "DOWN EAST C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.3884491920471191,
    "tries": 696
  },
  {
    "card": "4502083906606117",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.3748934268951416,
    "tries": 699
  },
  {
    "card": "5214638301017776",
    "bank": "NIPPON SHINPAN CO., LTD.",
    "country": "Japan",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0588765144348145,
    "tries": 706
  },
  {
    "card": "4855650611445321",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7668771743774414,
    "tries": 713
  },
  {
    "card": "4673861839342436",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8452701568603516,
    "tries": 721
  },
  {
    "card": "4382994062555515",
    "bank": "VISA",
    "country": "Singapore",
    "brand": "visa",
    "type": "debit",
    "time": 0.7184607982635498,
    "tries": 742
  },
  {
    "card": "180020923821714",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7266330718994141,
    "tries": 750
  },
  {
    "card": "4103953540807698",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8579130172729492,
    "tries": 757
  },
  {
    "card": "3586536610985698",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7154078483581543,
    "tries": 773
  },
  {
    "card": "3554228212977905",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.6990737915039062,
    "tries": 781
  },
  {
    "card": "3530954587906687",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9195618629455566,
    "tries": 789
  },
  {
    "card": "4780686322218867614",
    "bank": "Desconhecido",
    "country": "France",
    "brand": "visa",
    "type": "debit",
    "time": 0.7586212158203125,
    "tries": 796
  },
  {
    "card": "30323859084444",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7806198596954346,
    "tries": 804
  },
  {
    "card": "3532568210646466",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7475807666778564,
    "tries": 811
  },
  {
    "card": "4646389187006936",
    "bank": "Desconhecido",
    "country": "Bolivia (Plurinational State of)",
    "brand": "visa",
    "type": "debit",
    "time": 0.781806468963623,
    "tries": 819
  },
  {
    "card": "4843739734738",
    "bank": "FIRST NATIONAL BANK OF OMAHA",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7470369338989258,
    "tries": 843
  },
  {
    "card": "4175490812565871",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7038841247558594,
    "tries": 850
  },
  {
    "card": "3550548389001641",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7188284397125244,
    "tries": 858
  },
  {
    "card": "4840873207480701879",
    "bank": "SAMSUNG CARD CO., LTD.",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "credit",
    "time": 0.7702231407165527,
    "tries": 866
  },
  {
    "card": "3531238807079569",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9998385906219482,
    "tries": 873
  },
  {
    "card": "4158629721535027",
    "bank": "BANK OF OHIO COUNTY, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7705566883087158,
    "tries": 905
  },
  {
    "card": "4473254855657253",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7654767036437988,
    "tries": 921
  },
  {
    "card": "30036165203777",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7469944953918457,
    "tries": 929
  },
  {
    "card": "4664078765991661",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8101470470428467,
    "tries": 936
  },
  {
    "card": "3571215455825791",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7704198360443115,
    "tries": 944
  },
  {
    "card": "4622324166005",
    "bank": "ANZ BANK, LTD.",
    "country": "Australia",
    "brand": "visa",
    "type": "debit",
    "time": 0.777395486831665,
    "tries": 952
  },
  {
    "card": "30458917487146",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8476912975311279,
    "tries": 960
  },
  {
    "card": "378166200637562",
    "bank": "AMERICAN EXPRESS US",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7885723114013672,
    "tries": 968
  },
  {
    "card": "4877524575123295",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7325587272644043,
    "tries": 976
  },
  {
    "card": "180008829322895",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.6211493015289307,
    "tries": 999
  },
  {
    "card": "3554804555479061",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9511380195617676,
    "tries": 1004
  },
  {
    "card": "30011113878707",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7932977676391602,
    "tries": 1011
  },
  {
    "card": "4537502686038323",
    "bank": "BANK OF NOVA SCOTIA",
    "country": "Canada",
    "brand": "visa",
    "type": "credit",
    "time": 0.7817907333374023,
    "tries": 1034
  },
  {
    "card": "180070956753326",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7132830619812012,
    "tries": 1042
  },
  {
    "card": "4778566776132500",
    "bank": "NEVADA COMMERCE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7590961456298828,
    "tries": 1050
  },
  {
    "card": "4027233072779273",
    "bank": "NMB BANK, LTD.",
    "country": "Zimbabwe",
    "brand": "visa",
    "type": "credit",
    "time": 0.8060369491577148,
    "tries": 1058
  },
  {
    "card": "4078268540890553526",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7266895771026611,
    "tries": 1073
  },
  {
    "card": "180089962566498",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.734081506729126,
    "tries": 1096
  },
  {
    "card": "180042914756907",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7571651935577393,
    "tries": 1104
  },
  {
    "card": "38043992042263",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7454030513763428,
    "tries": 1111
  },
  {
    "card": "3585853380290634",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7623302936553955,
    "tries": 1119
  },
  {
    "card": "4386634338748268460",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.6979074478149414,
    "tries": 1127
  },
  {
    "card": "30133390558115",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7369740009307861,
    "tries": 1135
  },
  {
    "card": "180047116686851",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.264211893081665,
    "tries": 1141
  },
  {
    "card": "374650641260492",
    "bank": "AMERICAN EXPRESS",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "credit",
    "time": 3.285412311553955,
    "tries": 1151
  },
  {
    "card": "4540822223339223",
    "bank": "LA FEDERATION DES CAISSES DESJARDINS DU QUEBEC",
    "country": "Canada",
    "brand": "visa",
    "type": "None",
    "time": 5.117746591567993,
    "tries": 1152
  },
  {
    "card": "5379903118561973",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.7463605403900146,
    "tries": 1158
  },
  {
    "card": "180018486512613",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.761878252029419,
    "tries": 1164
  },
  {
    "card": "6011912122348246",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.7268333435058594,
    "tries": 1172
  },
  {
    "card": "4049779443737568",
    "bank": "IOWA CORPORATE CENTRAL C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7317087650299072,
    "tries": 1180
  },
  {
    "card": "4520265500820339",
    "bank": "TD BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7171549797058105,
    "tries": 1204
  },
  {
    "card": "4326339186103988089",
    "bank": "CARROLLTON BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7848389148712158,
    "tries": 1211
  },
  {
    "card": "3558071049505846",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7317280769348145,
    "tries": 1219
  },
  {
    "card": "4774470573537785",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7950184345245361,
    "tries": 1227
  },
  {
    "card": "4145598547088282642",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7136573791503906,
    "tries": 1235
  },
  {
    "card": "30599136456691",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7436246871948242,
    "tries": 1243
  },
  {
    "card": "4489891023165701",
    "bank": "NATIONAL CITY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7338762283325195,
    "tries": 1251
  },
  {
    "card": "5304283983183389",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.6968073844909668,
    "tries": 1259
  },
  {
    "card": "4885345248068170322",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7736690044403076,
    "tries": 1267
  },
  {
    "card": "4691179359758149",
    "bank": "MICARD CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.7430722713470459,
    "tries": 1274
  },
  {
    "card": "3571536891532398",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.782850980758667,
    "tries": 1282
  },
  {
    "card": "4014376833734",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7672698497772217,
    "tries": 1297
  },
  {
    "card": "676226464508",
    "bank": "Desconhecido",
    "country": "Slovenia",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7442121505737305,
    "tries": 1304
  },
  {
    "card": "3565320750381462",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7755153179168701,
    "tries": 1312
  },
  {
    "card": "30037466122070",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8085365295410156,
    "tries": 1320
  },
  {
    "card": "4971030002208266",
    "bank": "CCF - CREDIT DE COMMERCIAL DE FRANCE, S.A.",
    "country": "France",
    "brand": "visa",
    "type": "debit",
    "time": 0.7799484729766846,
    "tries": 1328
  },
  {
    "card": "5259876603780214",
    "bank": "EUROSTANDARD BANK AD SKOPJE",
    "country": "Macedonia (the former Yugoslav Republic of)",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.754096269607544,
    "tries": 1336
  },
  {
    "card": "4663347293984089",
    "bank": "ORCHARD BANK (HSBC GROUP)",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.4509286880493164,
    "tries": 1343
  },
  {
    "card": "4284247829913781341",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.9386498928070068,
    "tries": 1356
  },
  {
    "card": "372323547321220",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.1152937412261963,
    "tries": 1363
  },
  {
    "card": "3554989041562107",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7712357044219971,
    "tries": 1370
  },
  {
    "card": "4836211123294072622",
    "bank": "Desconhecido",
    "country": "Norway",
    "brand": "visa",
    "type": "debit",
    "time": 0.7749025821685791,
    "tries": 1377
  },
  {
    "card": "3575549203966614",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7572517395019531,
    "tries": 1393
  },
  {
    "card": "4989164590786746",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7465641498565674,
    "tries": 1401
  },
  {
    "card": "6571342855957033",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7472982406616211,
    "tries": 1409
  },
  {
    "card": "378572734349386",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7575855255126953,
    "tries": 1418
  },
  {
    "card": "639053753559",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7409918308258057,
    "tries": 1426
  },
  {
    "card": "213192227106778",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7200970649719238,
    "tries": 1449
  },
  {
    "card": "213173904866553",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.770301103591919,
    "tries": 1457
  },
  {
    "card": "4066312539900995",
    "bank": "ELECTRIC SERVICE C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7382240295410156,
    "tries": 1465
  },
  {
    "card": "4533147646552650",
    "bank": "CREDIT AGRICOLE, S.A.",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 0.7628171443939209,
    "tries": 1474
  },
  {
    "card": "4117004930524537",
    "bank": "BANCO SANTANDER TOTTA, S.A.",
    "country": "Portugal",
    "brand": "visa",
    "type": "credit",
    "time": 0.7661771774291992,
    "tries": 1481
  },
  {
    "card": "3549253059745536",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7596392631530762,
    "tries": 1489
  },
  {
    "card": "4030749701870694876",
    "bank": "Desconhecido",
    "country": "Zambia",
    "brand": "visa",
    "type": "debit",
    "time": 0.7692298889160156,
    "tries": 1497
  },
  {
    "card": "4569439510837326",
    "bank": "TELLER, A.S.",
    "country": "Norway",
    "brand": "visa",
    "type": "debit",
    "time": 0.6986567974090576,
    "tries": 1505
  },
  {
    "card": "4799580420786744509",
    "bank": "Desconhecido",
    "country": "Nepal",
    "brand": "visa",
    "type": "credit",
    "time": 0.737196683883667,
    "tries": 1513
  },
  {
    "card": "4979602499650",
    "bank": "CREDIT INDUSTRIEL ET COMMERCIAL",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 0.7363443374633789,
    "tries": 1521
  },
  {
    "card": "675942384628",
    "bank": "ALLOCATED TO SWITCH",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7301576137542725,
    "tries": 1537
  },
  {
    "card": "3544336762147341",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.755441427230835,
    "tries": 1545
  },
  {
    "card": "4110519498300508358",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7743120193481445,
    "tries": 1553
  },
  {
    "card": "6011994527102238",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.7645730972290039,
    "tries": 1561
  },
  {
    "card": "6512290237270777",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7260119915008545,
    "tries": 1569
  },
  {
    "card": "585848278321",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7384610176086426,
    "tries": 1585
  },
  {
    "card": "639053060385",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7386629581451416,
    "tries": 1593
  },
  {
    "card": "3552746194189993",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.75905442237854,
    "tries": 1601
  },
  {
    "card": "5254483593867732",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7681171894073486,
    "tries": 1609
  },
  {
    "card": "3529800060515367",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7338559627532959,
    "tries": 1617
  },
  {
    "card": "6516604279898988",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7669274806976318,
    "tries": 1624
  },
  {
    "card": "4495169352739392",
    "bank": "TELESIS COMMUNITY C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8559644222259521,
    "tries": 1632
  },
  {
    "card": "30548925947857",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7182667255401611,
    "tries": 1640
  },
  {
    "card": "30543220954260",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7766640186309814,
    "tries": 1646
  },
  {
    "card": "6011930202285336",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.7241315841674805,
    "tries": 1654
  },
  {
    "card": "180008476133306",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7264785766601562,
    "tries": 1678
  },
  {
    "card": "4385943877244343200",
    "bank": "Desconhecido",
    "country": "Bangladesh",
    "brand": "visa",
    "type": "debit",
    "time": 0.7114741802215576,
    "tries": 1687
  },
  {
    "card": "4436614599975392",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7484617233276367,
    "tries": 1694
  },
  {
    "card": "180038073703359",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9449446201324463,
    "tries": 1708
  },
  {
    "card": "4720053738448",
    "bank": "FIRST NATIONAL BANK OF SANTA FE",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8072078227996826,
    "tries": 1724
  },
  {
    "card": "30471188504119",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.014272928237915,
    "tries": 1731
  },
  {
    "card": "3542105361664127",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7866246700286865,
    "tries": 1738
  },
  {
    "card": "30485683069345",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.133716106414795,
    "tries": 1758
  },
  {
    "card": "30445214776198",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.715562105178833,
    "tries": 1764
  },
  {
    "card": "4538554136858",
    "bank": "MITSUBISHI UFJ FINANCIAL GROUP, INC.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.732062816619873,
    "tries": 1771
  },
  {
    "card": "38513429156993",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8461194038391113,
    "tries": 1779
  },
  {
    "card": "4238578723571",
    "bank": "TLC COMMUNITY C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.74680495262146,
    "tries": 1787
  },
  {
    "card": "38714455695488",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7670331001281738,
    "tries": 1794
  },
  {
    "card": "4044664590719932262",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9648678302764893,
    "tries": 1809
  },
  {
    "card": "38278307712990",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.760901927947998,
    "tries": 1817
  },
  {
    "card": "3536449791793173",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7165944576263428,
    "tries": 1825
  },
  {
    "card": "6513899897676443",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7628293037414551,
    "tries": 1833
  },
  {
    "card": "3579317542804904",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7454559803009033,
    "tries": 1841
  },
  {
    "card": "6011474622507342",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7272157669067383,
    "tries": 1849
  },
  {
    "card": "4311491680333",
    "bank": "METABANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7588403224945068,
    "tries": 1856
  },
  {
    "card": "30536713925409",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 2.360832452774048,
    "tries": 1870
  },
  {
    "card": "4802814547731931",
    "bank": "M AND I (MARSHALL AND ILSLEY) BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 3.421788454055786,
    "tries": 1872
  },
  {
    "card": "180078371570373",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.765249490737915,
    "tries": 1875
  },
  {
    "card": "6541988045612438",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7325270175933838,
    "tries": 1880
  },
  {
    "card": "4385977940528",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7603721618652344,
    "tries": 1887
  },
  {
    "card": "4898850319129883",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9115636348724365,
    "tries": 1894
  },
  {
    "card": "3536608380803145",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8017539978027344,
    "tries": 1909
  },
  {
    "card": "6011770809356886",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8222973346710205,
    "tries": 1916
  },
  {
    "card": "30375059475426",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7567274570465088,
    "tries": 1930
  },
  {
    "card": "3572478496362971",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.750237226486206,
    "tries": 1938
  },
  {
    "card": "6586542194450540",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7803800106048584,
    "tries": 1946
  },
  {
    "card": "4816598533999941",
    "bank": "CITIBANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7563450336456299,
    "tries": 1961
  },
  {
    "card": "3549929445694674",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7692985534667969,
    "tries": 1969
  },
  {
    "card": "4431264994782536369",
    "bank": "FIRST NATIONAL BANK OF OMAHA",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7384569644927979,
    "tries": 1977
  },
  {
    "card": "4302780837606833",
    "bank": "OTP BANKA SRBIJA A.D. NOVI SAD",
    "country": "Serbia",
    "brand": "visa",
    "type": "debit",
    "time": 0.7025325298309326,
    "tries": 1985
  },
  {
    "card": "4804672577585637",
    "bank": "VISA NORGE A/S",
    "country": "Norway",
    "brand": "visa",
    "type": "credit",
    "time": 0.7612555027008057,
    "tries": 1993
  },
  {
    "card": "3575867802508433",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7746481895446777,
    "tries": 2001
  },
  {
    "card": "4326506223886897166",
    "bank": "PALM DESERT NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7222652435302734,
    "tries": 2009
  },
  {
    "card": "4043819354585918384",
    "bank": "E. SUN COMMERCIAL BANK, LTD.",
    "country": "Taiwan, Province of China[a]",
    "brand": "visa",
    "type": "credit",
    "time": 0.7575535774230957,
    "tries": 2017
  },
  {
    "card": "36411937416821",
    "bank": "CITIBANK",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7175748348236084,
    "tries": 2025
  },
  {
    "card": "4384188309722539965",
    "bank": "LEA COMMUNITY F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.765711784362793,
    "tries": 2033
  },
  {
    "card": "6011439251766196",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0192866325378418,
    "tries": 2041
  },
  {
    "card": "4292969320116852286",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.3056681156158447,
    "tries": 2047
  },
  {
    "card": "180074779584777",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7630252838134766,
    "tries": 2055
  },
  {
    "card": "4285452940599",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7407300472259521,
    "tries": 2078
  },
  {
    "card": "6011066969585194",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7588992118835449,
    "tries": 2086
  },
  {
    "card": "676197483743",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7479407787322998,
    "tries": 2094
  },
  {
    "card": "3540402048887623",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7562255859375,
    "tries": 2110
  },
  {
    "card": "4759985571493",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.034297227859497,
    "tries": 2117
  },
  {
    "card": "589835532591",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9037024974822998,
    "tries": 2124
  },
  {
    "card": "4940940352661757469",
    "bank": "BANCO COOPERATIVO ESPANOL, S.A.",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 0.7359952926635742,
    "tries": 2140
  },
  {
    "card": "4240121424241616",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7323818206787109,
    "tries": 2148
  },
  {
    "card": "4994356903375281",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.881603479385376,
    "tries": 2156
  },
  {
    "card": "5553946997522283",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7826385498046875,
    "tries": 2164
  },
  {
    "card": "4183280758868891700",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7938663959503174,
    "tries": 2171
  },
  {
    "card": "30399462609249",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7365100383758545,
    "tries": 2178
  },
  {
    "card": "30072440642570",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 2.185460090637207,
    "tries": 2186
  },
  {
    "card": "4576496951166889",
    "bank": "Desconhecido",
    "country": "Ghana",
    "brand": "visa",
    "type": "debit",
    "time": 6.943059682846069,
    "tries": 2187
  },
  {
    "card": "3531609919443986",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.6422464847564697,
    "tries": 2190
  },
  {
    "card": "30172640891439",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 2.021663188934326,
    "tries": 2193
  },
  {
    "card": "4465723733003",
    "bank": "BURNS NATIONAL BANK OF DURANGO",
    "country": "Andorra",
    "brand": "visa",
    "type": "credit",
    "time": 0.7416415214538574,
    "tries": 2202
  },
  {
    "card": "4913747731578858761",
    "bank": "EUROBANK TEKFEN, A.S.",
    "country": "Turkey",
    "brand": "visa",
    "type": "credit",
    "time": 0.7578153610229492,
    "tries": 2210
  },
  {
    "card": "4414597135705",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.873744010925293,
    "tries": 2226
  },
  {
    "card": "4231930749194",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7514450550079346,
    "tries": 2242
  },
  {
    "card": "377078286853222",
    "bank": "LLOYDS TSB AIRMILES",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "credit",
    "time": 0.7393529415130615,
    "tries": 2250
  },
  {
    "card": "213170487996401",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.746854305267334,
    "tries": 2266
  },
  {
    "card": "38524090568424",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7080917358398438,
    "tries": 2274
  },
  {
    "card": "4779058288380388",
    "bank": "BANCO COOPERATIVO ESPANOL, S.A.",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 0.7408194541931152,
    "tries": 2282
  },
  {
    "card": "213145215874419",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7416448593139648,
    "tries": 2290
  },
  {
    "card": "4099983038862976",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.754657506942749,
    "tries": 2298
  },
  {
    "card": "4990583804996462121",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.791532039642334,
    "tries": 2315
  },
  {
    "card": "4743323729464717557",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7572722434997559,
    "tries": 2322
  },
  {
    "card": "6011256944469545",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7529094219207764,
    "tries": 2330
  },
  {
    "card": "502031401800",
    "bank": "Desconhecido",
    "country": "Spain",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7983605861663818,
    "tries": 2338
  },
  {
    "card": "3538135955141840",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7503597736358643,
    "tries": 2346
  },
  {
    "card": "4552760241931",
    "bank": "BANCO COOPERATIVO ESPANOL, S.A.",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 0.712925910949707,
    "tries": 2362
  },
  {
    "card": "3540929072100705",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 2.299177646636963,
    "tries": 2368
  },
  {
    "card": "4566894387410032",
    "bank": "MITSUBISHI UFJ FINANCIAL GROUP, INC.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.7660269737243652,
    "tries": 2373
  },
  {
    "card": "4532519732521",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7761142253875732,
    "tries": 2389
  },
  {
    "card": "3563966944689087",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.893775463104248,
    "tries": 2399
  },
  {
    "card": "6567371924050658",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8141176700592041,
    "tries": 2414
  },
  {
    "card": "4134972294586046",
    "bank": "SOMERSET TRUST COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.725846529006958,
    "tries": 2420
  },
  {
    "card": "4513381570958567",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7846341133117676,
    "tries": 2428
  },
  {
    "card": "676259531116",
    "bank": "Desconhecido",
    "country": "Estonia",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.158733606338501,
    "tries": 2434
  },
  {
    "card": "180029327184728",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.098855972290039,
    "tries": 2439
  },
  {
    "card": "5107377446037098",
    "bank": "SHINHAN CARD CO., LTD.",
    "country": "Korea (Republic of)",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8639898300170898,
    "tries": 2444
  },
  {
    "card": "4406921224536",
    "bank": "BANCO DE LA PROVINCIA DE BUENOS AIRES",
    "country": "Argentina",
    "brand": "visa",
    "type": "credit",
    "time": 0.7741541862487793,
    "tries": 2452
  },
  {
    "card": "4028515208996",
    "bank": "HSBC PHILIPPINE AIRLINES MABUHAY MILES",
    "country": "Philippines",
    "brand": "visa",
    "type": "credit",
    "time": 0.7976152896881104,
    "tries": 2460
  },
  {
    "card": "379625448231859",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7512567043304443,
    "tries": 2484
  },
  {
    "card": "4117710145838286211",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7093856334686279,
    "tries": 2500
  },
  {
    "card": "4390670977992105352",
    "bank": "CHEQUEMAX",
    "country": "El Salvador",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7698714733123779,
    "tries": 2516
  },
  {
    "card": "3586694458275977",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7087705135345459,
    "tries": 2524
  },
  {
    "card": "3561051423239282",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7421257495880127,
    "tries": 2548
  },
  {
    "card": "4635230725821",
    "bank": "WASHITA VALLEY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7558348178863525,
    "tries": 2556
  },
  {
    "card": "3567339280408528",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8818421363830566,
    "tries": 2564
  },
  {
    "card": "213129928824861",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7174015045166016,
    "tries": 2572
  },
  {
    "card": "4941467181223608",
    "bank": "BANCO BHD, S.A.",
    "country": "Dominican Republic",
    "brand": "visa",
    "type": "credit",
    "time": 0.7460334300994873,
    "tries": 2580
  },
  {
    "card": "4892642796592071",
    "bank": "CALIFORNIA BANK AND TRUST",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7429523468017578,
    "tries": 2588
  },
  {
    "card": "6011021278172721",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7255094051361084,
    "tries": 2596
  },
  {
    "card": "4490425647769135629",
    "bank": "SEAPORT CITIZENS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7137150764465332,
    "tries": 2604
  },
  {
    "card": "3570058641303740",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7591207027435303,
    "tries": 2620
  },
  {
    "card": "30113021390799",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7246782779693604,
    "tries": 2636
  },
  {
    "card": "180051247043669",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.759951114654541,
    "tries": 2644
  },
  {
    "card": "4870789101693593",
    "bank": "Desconhecido",
    "country": "Serbia",
    "brand": "visa",
    "type": "debit",
    "time": 0.7661948204040527,
    "tries": 2652
  },
  {
    "card": "6504889476671908",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7947285175323486,
    "tries": 2668
  },
  {
    "card": "4055656068843437",
    "bank": "SERVICES C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7452499866485596,
    "tries": 2676
  },
  {
    "card": "6011269985556211",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.745704174041748,
    "tries": 2683
  },
  {
    "card": "4439414826497220",
    "bank": "FIRSTCARIBBEAN INTERNATIONAL BANK (BARBADOS), LTD.",
    "country": "Saint Lucia",
    "brand": "visa",
    "type": "credit",
    "time": 0.7729730606079102,
    "tries": 2692
  },
  {
    "card": "4472524387556532047",
    "bank": "SANGAMON SCHOOLS C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7351453304290771,
    "tries": 2700
  },
  {
    "card": "4606901951815031749",
    "bank": "SOUTHTRUST BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7481582164764404,
    "tries": 2706
  },
  {
    "card": "6011438770412605",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7718827724456787,
    "tries": 2714
  },
  {
    "card": "4019463055752977",
    "bank": "POWELL VALLEY NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.73294997215271,
    "tries": 2722
  },
  {
    "card": "675979978193",
    "bank": "BANK OF IRELAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7404308319091797,
    "tries": 2730
  },
  {
    "card": "4914299654818538",
    "bank": "BARBADOS NATIONAL BANK",
    "country": "Barbados",
    "brand": "visa",
    "type": "credit",
    "time": 0.7304565906524658,
    "tries": 2738
  },
  {
    "card": "3582000990727752",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7429511547088623,
    "tries": 2763
  },
  {
    "card": "4130956898870724293",
    "bank": "COMMERCIAL INTERNATIONAL BANK",
    "country": "Egypt",
    "brand": "visa",
    "type": "debit",
    "time": 0.7796056270599365,
    "tries": 2779
  },
  {
    "card": "30517647779625",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7472939491271973,
    "tries": 2787
  },
  {
    "card": "4266455901842796",
    "bank": "NORTH SOUND BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.716975212097168,
    "tries": 2810
  },
  {
    "card": "4613891927982226",
    "bank": "VIRGINIA BEACH SCHOOLS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.767632246017456,
    "tries": 2818
  },
  {
    "card": "4825760281379481353",
    "bank": "FIRSTAR BANK USA",
    "country": "Germany",
    "brand": "visa",
    "type": "debit",
    "time": 0.7819571495056152,
    "tries": 2826
  },
  {
    "card": "180055110286776",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7383363246917725,
    "tries": 2834
  },
  {
    "card": "3588198509132169",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7368488311767578,
    "tries": 2842
  },
  {
    "card": "374914845357383",
    "bank": "AMERICAN EXPRESS",
    "country": "France",
    "brand": "amex",
    "type": "Desconhecido",
    "time": 0.7809286117553711,
    "tries": 2850
  },
  {
    "card": "30209849825667",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7692558765411377,
    "tries": 2857
  },
  {
    "card": "213167553869835",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7967424392700195,
    "tries": 2880
  },
  {
    "card": "30195880944014",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7695558071136475,
    "tries": 2888
  },
  {
    "card": "579250833392",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7675204277038574,
    "tries": 2896
  },
  {
    "card": "4863523790853534",
    "bank": "UNIBANCA, S.A",
    "country": "Peru",
    "brand": "visa",
    "type": "debit",
    "time": 0.6988222599029541,
    "tries": 2903
  },
  {
    "card": "6569777497472590",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7624638080596924,
    "tries": 2927
  },
  {
    "card": "3571201143780630",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7556264400482178,
    "tries": 2935
  },
  {
    "card": "639024908431",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.747401237487793,
    "tries": 2943
  },
  {
    "card": "4943287070780",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7544200420379639,
    "tries": 2966
  },
  {
    "card": "4287258405751346072",
    "bank": "HUDSON VALLEY F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7067556381225586,
    "tries": 2974
  },
  {
    "card": "5383386138925846",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.7616903781890869,
    "tries": 2982
  },
  {
    "card": "5538916797011514",
    "bank": "FIFTH THIRD BANK",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7779231071472168,
    "tries": 2989
  },
  {
    "card": "4639963833921505",
    "bank": "ALABAMA STATE EMPLOYEES C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7654404640197754,
    "tries": 2997
  },
  {
    "card": "38634494996640",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.760796308517456,
    "tries": 3003
  },
  {
    "card": "4848793548700",
    "bank": "CJSC CREDEXBANK",
    "country": "Belarus",
    "brand": "visa",
    "type": "credit",
    "time": 0.7928452491760254,
    "tries": 3010
  },
  {
    "card": "3560105204418654",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.4258756637573242,
    "tries": 3014
  },
  {
    "card": "675992853076",
    "bank": "ALLOCATED TO SWITCH",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7465662956237793,
    "tries": 3035
  },
  {
    "card": "4434625734046040",
    "bank": "CUSCAL, LTD.",
    "country": "Australia",
    "brand": "visa",
    "type": "debit",
    "time": 0.7607035636901855,
    "tries": 3042
  },
  {
    "card": "4232726069161042",
    "bank": "LANDESBANK SAAR",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 0.7270400524139404,
    "tries": 3050
  },
  {
    "card": "4285578761988124196",
    "bank": "Desconhecido",
    "country": "Lithuania",
    "brand": "visa",
    "type": "credit",
    "time": 0.7773544788360596,
    "tries": 3058
  },
  {
    "card": "4923360420188181",
    "bank": "NIPPON SHINPAN CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.7725338935852051,
    "tries": 3066
  },
  {
    "card": "372822234262605",
    "bank": "LOCKHEED F.C.U.",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7590012550354004,
    "tries": 3073
  },
  {
    "card": "180097324075199",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7221047878265381,
    "tries": 3081
  },
  {
    "card": "213183312215814",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7383744716644287,
    "tries": 3089
  },
  {
    "card": "639035061097",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7660658359527588,
    "tries": 3097
  },
  {
    "card": "213133927376592",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.763465404510498,
    "tries": 3105
  },
  {
    "card": "4410924130836854989",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 0.7358179092407227,
    "tries": 3113
  },
  {
    "card": "4276705978718",
    "bank": "SAVINGS BANK OF THE RUSSIAN FEDERATION (SBERBANK)",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 0.7476832866668701,
    "tries": 3120
  },
  {
    "card": "377184738753885",
    "bank": "AMERICAN EXPRESS",
    "country": "Thailand",
    "brand": "amex",
    "type": "credit",
    "time": 0.8637187480926514,
    "tries": 3128
  },
  {
    "card": "4889086213817957",
    "bank": "ALLIED BANKING CORPORATION",
    "country": "Philippines",
    "brand": "visa",
    "type": "credit",
    "time": 0.7309567928314209,
    "tries": 3144
  },
  {
    "card": "4481311012114",
    "bank": "BC CARD CO., LTD.",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "debit",
    "time": 0.7489981651306152,
    "tries": 3152
  },
  {
    "card": "4817595667165124",
    "bank": "LA JOYA AREA F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7842721939086914,
    "tries": 3159
  },
  {
    "card": "3543668306400328",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7356743812561035,
    "tries": 3167
  },
  {
    "card": "4226824594765887982",
    "bank": "JSCB BTA KAZAN OJSC",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 0.8068141937255859,
    "tries": 3175
  },
  {
    "card": "374639752686314",
    "bank": "AMERICAN EXPRESS",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "credit",
    "time": 0.7658731937408447,
    "tries": 3183
  },
  {
    "card": "4751699554592876185",
    "bank": "BALKAN INVESTMENT BANK AD BANJA LUKA",
    "country": "Bosnia and Herzegovina",
    "brand": "visa",
    "type": "credit",
    "time": 0.8363571166992188,
    "tries": 3207
  },
  {
    "card": "4098493899132",
    "bank": "BANCO LAFISE BANCENTRO, S.A.",
    "country": "Nicaragua",
    "brand": "visa",
    "type": "debit",
    "time": 0.8010363578796387,
    "tries": 3215
  },
  {
    "card": "4849489669096325",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7960340976715088,
    "tries": 3223
  },
  {
    "card": "4954824916062",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8359358310699463,
    "tries": 3238
  },
  {
    "card": "4594568922385634917",
    "bank": "Desconhecido",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 0.725369930267334,
    "tries": 3252
  },
  {
    "card": "4703734166981",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 0.7323107719421387,
    "tries": 3260
  },
  {
    "card": "4448434579576",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7720985412597656,
    "tries": 3268
  },
  {
    "card": "3549348495927597",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7294862270355225,
    "tries": 3276
  },
  {
    "card": "4378726400439775074",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7916750907897949,
    "tries": 3284
  },
  {
    "card": "4075635176397",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7231297492980957,
    "tries": 3292
  },
  {
    "card": "4214037269884124",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7618227005004883,
    "tries": 3300
  },
  {
    "card": "30418609652464",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7294135093688965,
    "tries": 3307
  },
  {
    "card": "5161176317543223",
    "bank": "Desconhecido",
    "country": "Bahamas",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7940113544464111,
    "tries": 3315
  },
  {
    "card": "3540855368422497",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8175990581512451,
    "tries": 3330
  },
  {
    "card": "6579024750178996",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7223713397979736,
    "tries": 3338
  },
  {
    "card": "4735798837343246",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7707090377807617,
    "tries": 3361
  },
  {
    "card": "30304026960468",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7155599594116211,
    "tries": 3377
  },
  {
    "card": "30067184000308",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7085380554199219,
    "tries": 3383
  },
  {
    "card": "378053228714187",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "Italy",
    "brand": "amex",
    "type": "credit",
    "time": 0.7400832176208496,
    "tries": 3391
  },
  {
    "card": "6011303388264550",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7167112827301025,
    "tries": 3399
  },
  {
    "card": "3541875663965338",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7541165351867676,
    "tries": 3407
  },
  {
    "card": "4488149387240839",
    "bank": "FIA CARD SERVICES, NATIONAL ASSOCIATION (2)",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7696511745452881,
    "tries": 3423
  },
  {
    "card": "372134395154393",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7479724884033203,
    "tries": 3431
  },
  {
    "card": "4169039468668394",
    "bank": "LANDMARK COMMUNITY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7289509773254395,
    "tries": 3439
  },
  {
    "card": "4156489446760053638",
    "bank": "EMPOWER C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7786769866943359,
    "tries": 3447
  },
  {
    "card": "4027650310518",
    "bank": "BANCO PROVINCIAL S.A.I.C.A. - S.A.C.A.",
    "country": "Venezuela (Bolivarian Republic of)",
    "brand": "visa",
    "type": "debit",
    "time": 0.7915911674499512,
    "tries": 3455
  },
  {
    "card": "372984118353841",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7369160652160645,
    "tries": 3471
  },
  {
    "card": "4538830962606",
    "bank": "MITSUBISHI UFJ FINANCIAL GROUP, INC.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.8040759563446045,
    "tries": 3479
  },
  {
    "card": "4990968841475208349",
    "bank": "Desconhecido",
    "country": "France",
    "brand": "visa",
    "type": "debit",
    "time": 0.7071285247802734,
    "tries": 3487
  },
  {
    "card": "6585420376984811",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7313859462738037,
    "tries": 3495
  },
  {
    "card": "38500105230606",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7167503833770752,
    "tries": 3503
  },
  {
    "card": "180088060068316",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7668352127075195,
    "tries": 3511
  },
  {
    "card": "180030854143707",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7154207229614258,
    "tries": 3519
  },
  {
    "card": "30205053106661",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7091267108917236,
    "tries": 3527
  },
  {
    "card": "30314885205475",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7246923446655273,
    "tries": 3535
  },
  {
    "card": "180099655302176",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7335019111633301,
    "tries": 3552
  },
  {
    "card": "213123603300693",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8049993515014648,
    "tries": 3560
  },
  {
    "card": "4335571065667128084",
    "bank": "BERMUDA COMMERCIAL BANK, LTD.",
    "country": "Bermuda",
    "brand": "visa",
    "type": "debit",
    "time": 0.7340743541717529,
    "tries": 3568
  },
  {
    "card": "3549791160524217",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7531142234802246,
    "tries": 3576
  },
  {
    "card": "3556778164953831",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 2.195653200149536,
    "tries": 3583
  },
  {
    "card": "4317315602469282",
    "bank": "CHINESE AMERICAN BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7518415451049805,
    "tries": 3599
  },
  {
    "card": "213141098025666",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7643091678619385,
    "tries": 3607
  },
  {
    "card": "676198558469",
    "bank": "Desconhecido",
    "country": "Latvia",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8023021221160889,
    "tries": 3614
  },
  {
    "card": "180065638058730",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7504470348358154,
    "tries": 3630
  },
  {
    "card": "4368358342385861",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7208821773529053,
    "tries": 3638
  },
  {
    "card": "3548854171401329",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7523472309112549,
    "tries": 3647
  },
  {
    "card": "5548869314159092",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7280638217926025,
    "tries": 3655
  },
  {
    "card": "4509365718416",
    "bank": "STANDARD CHARTERED BANK (HONG KONG), LTD.",
    "country": "Hong Kong",
    "brand": "visa",
    "type": "credit",
    "time": 0.7601289749145508,
    "tries": 3663
  },
  {
    "card": "676216949302",
    "bank": "Desconhecido",
    "country": "Ukraine",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7598612308502197,
    "tries": 3671
  },
  {
    "card": "4021137244358138",
    "bank": "BEOGRADSKA BANKA D. D.",
    "country": "Serbia",
    "brand": "visa",
    "type": "debit",
    "time": 0.7737383842468262,
    "tries": 3679
  },
  {
    "card": "4956280871250258",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7471837997436523,
    "tries": 3687
  },
  {
    "card": "6535329723018093",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7295613288879395,
    "tries": 3695
  },
  {
    "card": "4393783106800630819",
    "bank": "BANQUE MAROCAINE POUR LE COMMERCE ET LINDUSTRIE",
    "country": "Morocco",
    "brand": "visa",
    "type": "debit",
    "time": 0.7185945510864258,
    "tries": 3710
  },
  {
    "card": "4461297380220885",
    "bank": "KLEINBANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7393372058868408,
    "tries": 3718
  },
  {
    "card": "3588458231671755",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8072681427001953,
    "tries": 3727
  },
  {
    "card": "6583067988746427",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7352170944213867,
    "tries": 3735
  },
  {
    "card": "30113654002653",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7166624069213867,
    "tries": 3743
  },
  {
    "card": "213100269607231",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7799253463745117,
    "tries": 3758
  },
  {
    "card": "30244362864629",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.795280933380127,
    "tries": 3766
  },
  {
    "card": "4970874774323730930",
    "bank": "LA POSTE",
    "country": "France",
    "brand": "visa",
    "type": "debit",
    "time": 0.9109523296356201,
    "tries": 3774
  },
  {
    "card": "4635723687108",
    "bank": "BANK OF AMERICA, NATIONAL ASSOCIATION",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7315092086791992,
    "tries": 3782
  },
  {
    "card": "6564714136818631",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7378325462341309,
    "tries": 3790
  },
  {
    "card": "3529796135598414",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.703223466873169,
    "tries": 3798
  },
  {
    "card": "3559638832493098",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7476475238800049,
    "tries": 3814
  },
  {
    "card": "30449305313499",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7575576305389404,
    "tries": 3823
  },
  {
    "card": "3560264104226368",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7538456916809082,
    "tries": 3831
  },
  {
    "card": "4966201443197",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7294385433197021,
    "tries": 3839
  },
  {
    "card": "3581228621605011",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7706384658813477,
    "tries": 3847
  },
  {
    "card": "676318082283",
    "bank": "Desconhecido",
    "country": "Spain",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.725496768951416,
    "tries": 3854
  },
  {
    "card": "3568832205016094",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8105289936065674,
    "tries": 3862
  },
  {
    "card": "30458549476426",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8259882926940918,
    "tries": 3878
  },
  {
    "card": "180010912715175",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7303221225738525,
    "tries": 3887
  },
  {
    "card": "4805562610844980486",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.73561692237854,
    "tries": 3903
  },
  {
    "card": "213137315333461",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7362613677978516,
    "tries": 3911
  },
  {
    "card": "4134357363475",
    "bank": "DUVAL F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.761235237121582,
    "tries": 3919
  },
  {
    "card": "180075314791181",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7568151950836182,
    "tries": 3927
  },
  {
    "card": "213167311894265",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7064549922943115,
    "tries": 3935
  },
  {
    "card": "3563316000447329",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7470908164978027,
    "tries": 3943
  },
  {
    "card": "4641760492337",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7455503940582275,
    "tries": 3975
  },
  {
    "card": "180056258016363",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7361397743225098,
    "tries": 3983
  },
  {
    "card": "4964699232281765105",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.6994366645812988,
    "tries": 3991
  },
  {
    "card": "374089053513256",
    "bank": "AMERICAN EXPRESS",
    "country": "Austria",
    "brand": "amex",
    "type": "credit",
    "time": 0.8405461311340332,
    "tries": 3999
  },
  {
    "card": "3530052862593633",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7565326690673828,
    "tries": 4007
  },
  {
    "card": "5498773601725161",
    "bank": "CREDIT UNION PAYMENT CENTER (LIMITED LIABILITY COMPANY)",
    "country": "Russian Federation",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7079856395721436,
    "tries": 4030
  },
  {
    "card": "5481390235745371",
    "bank": "HSBC BANK MIDDLE EAST",
    "country": "Bahrain",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7302026748657227,
    "tries": 4038
  },
  {
    "card": "571228754685",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7961244583129883,
    "tries": 4046
  },
  {
    "card": "3589909408873441",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.769885778427124,
    "tries": 4054
  },
  {
    "card": "5349886466483857",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.716909646987915,
    "tries": 4062
  },
  {
    "card": "180099988491886",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.775996208190918,
    "tries": 4077
  },
  {
    "card": "4584679084083149156",
    "bank": "Desconhecido",
    "country": "Kyrgyzstan",
    "brand": "visa",
    "type": "debit",
    "time": 0.7782707214355469,
    "tries": 4085
  },
  {
    "card": "4958727477147120",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7815041542053223,
    "tries": 4101
  },
  {
    "card": "213131507456719",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7505667209625244,
    "tries": 4109
  },
  {
    "card": "30530691409726",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.789602518081665,
    "tries": 4117
  },
  {
    "card": "180038458674985",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7559835910797119,
    "tries": 4125
  },
  {
    "card": "4893645513742",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7161729335784912,
    "tries": 4133
  },
  {
    "card": "4764004747467484183",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7975921630859375,
    "tries": 4141
  },
  {
    "card": "374631350364824",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7439632415771484,
    "tries": 4156
  },
  {
    "card": "4706710752542",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7224297523498535,
    "tries": 4164
  },
  {
    "card": "38903021305918",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7144374847412109,
    "tries": 4180
  },
  {
    "card": "6011264454851607",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7671630382537842,
    "tries": 4196
  },
  {
    "card": "3574095857112304",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7496604919433594,
    "tries": 4203
  },
  {
    "card": "180021719123091",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7728445529937744,
    "tries": 4211
  },
  {
    "card": "30283906778051",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7288200855255127,
    "tries": 4219
  },
  {
    "card": "4414672952321",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8030691146850586,
    "tries": 4235
  },
  {
    "card": "30095948746809",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9207208156585693,
    "tries": 4241
  },
  {
    "card": "3530234224493690",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0335476398468018,
    "tries": 4260
  },
  {
    "card": "4661275154115",
    "bank": "BRANCH BANKING AND TRUST COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7792129516601562,
    "tries": 4282
  },
  {
    "card": "6500829526416353",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7667937278747559,
    "tries": 4290
  },
  {
    "card": "676184197678",
    "bank": "Desconhecido",
    "country": "Italy",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7227010726928711,
    "tries": 4298
  },
  {
    "card": "4623549031885093",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7219414710998535,
    "tries": 4314
  },
  {
    "card": "3530554540046439",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7494027614593506,
    "tries": 4322
  },
  {
    "card": "4858902103548220",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7857542037963867,
    "tries": 4338
  },
  {
    "card": "4216945697124",
    "bank": "BANK OF ANTIGUA, LTD.",
    "country": "Antigua and Barbuda",
    "brand": "visa",
    "type": "debit",
    "time": 0.7079200744628906,
    "tries": 4346
  },
  {
    "card": "30486224454855",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7543978691101074,
    "tries": 4370
  },
  {
    "card": "4412765629889",
    "bank": "COMMERCE BANK N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7133655548095703,
    "tries": 4378
  },
  {
    "card": "3540306912102292",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7426507472991943,
    "tries": 4386
  },
  {
    "card": "6011327491153962",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8152351379394531,
    "tries": 4394
  },
  {
    "card": "6011379723016939",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8496630191802979,
    "tries": 4402
  },
  {
    "card": "4786028095251719",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7440304756164551,
    "tries": 4410
  },
  {
    "card": "180057887326942",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.739656925201416,
    "tries": 4426
  },
  {
    "card": "213111988488621",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7509968280792236,
    "tries": 4442
  },
  {
    "card": "4143324938113259",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7006275653839111,
    "tries": 4450
  },
  {
    "card": "4299785976733",
    "bank": "COMMUNITY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7441644668579102,
    "tries": 4467
  },
  {
    "card": "4603285050711969",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7907888889312744,
    "tries": 4491
  },
  {
    "card": "4858409806542694058",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.723876953125,
    "tries": 4499
  },
  {
    "card": "30045190109636",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7433772087097168,
    "tries": 4507
  },
  {
    "card": "3538274417090657",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7237956523895264,
    "tries": 4515
  },
  {
    "card": "4960185074754648",
    "bank": "BANCO DE COMERCIO",
    "country": "Peru",
    "brand": "visa",
    "type": "credit",
    "time": 0.7653119564056396,
    "tries": 4523
  },
  {
    "card": "4331017910029905",
    "bank": "GERBER F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7638528347015381,
    "tries": 4548
  },
  {
    "card": "4974036221127580",
    "bank": "BNP PARIBAS",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 0.7474009990692139,
    "tries": 4556
  },
  {
    "card": "4241407523948659",
    "bank": "U.S. BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7868921756744385,
    "tries": 4563
  },
  {
    "card": "3528342464374613",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7570400238037109,
    "tries": 4586
  },
  {
    "card": "6562379365476907",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.8858864307403564,
    "tries": 4593
  },
  {
    "card": "4770763643694923",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8337323665618896,
    "tries": 4598
  },
  {
    "card": "4533859845097028",
    "bank": "CAISSE NATIONALE DE CREDIT AGRICOLE",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 0.7494161128997803,
    "tries": 4606
  },
  {
    "card": "373573501772664",
    "bank": "AMERICAN EXPRESS",
    "country": "Canada",
    "brand": "amex",
    "type": "credit",
    "time": 0.7327451705932617,
    "tries": 4614
  },
  {
    "card": "372258170227080",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7607691287994385,
    "tries": 4622
  },
  {
    "card": "4999536773003189",
    "bank": "FIRSTCARIBBEAN INTERNATIONAL BANK (JAMAICA), LTD.",
    "country": "Jamaica",
    "brand": "visa",
    "type": "credit",
    "time": 0.7774546146392822,
    "tries": 4637
  },
  {
    "card": "581615704532",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7202134132385254,
    "tries": 4645
  },
  {
    "card": "4987335041390567",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 0.7351059913635254,
    "tries": 4668
  },
  {
    "card": "213148215267907",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8031306266784668,
    "tries": 4676
  },
  {
    "card": "6011998132808394",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.7710611820220947,
    "tries": 4684
  },
  {
    "card": "4686875008917863513",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7281744480133057,
    "tries": 4692
  },
  {
    "card": "6510512267460388",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7678685188293457,
    "tries": 4700
  },
  {
    "card": "4332258984873807",
    "bank": "ITS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7709071636199951,
    "tries": 4708
  },
  {
    "card": "3529696069905553",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7489087581634521,
    "tries": 4724
  },
  {
    "card": "4733655393546",
    "bank": "SIERRA NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7552754878997803,
    "tries": 4732
  },
  {
    "card": "4567674470418",
    "bank": "BANQUE INVIK, S.A.",
    "country": "Luxembourg",
    "brand": "visa",
    "type": "credit",
    "time": 0.7542223930358887,
    "tries": 4739
  },
  {
    "card": "38378997191297",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8150529861450195,
    "tries": 4747
  },
  {
    "card": "3574163314278694",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7157022953033447,
    "tries": 4755
  },
  {
    "card": "4606148491925522",
    "bank": "SOUTHTRUST BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7885596752166748,
    "tries": 4763
  },
  {
    "card": "30567480282005",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.804966926574707,
    "tries": 4771
  },
  {
    "card": "4963498919351",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7720561027526855,
    "tries": 4778
  },
  {
    "card": "3576151680443594",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7367417812347412,
    "tries": 4786
  },
  {
    "card": "30386759558007",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7830264568328857,
    "tries": 4801
  },
  {
    "card": "30412888485878",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7765007019042969,
    "tries": 4808
  },
  {
    "card": "4654740338495148",
    "bank": "Desconhecido",
    "country": "Mauritius",
    "brand": "visa",
    "type": "debit",
    "time": 0.7657725811004639,
    "tries": 4824
  },
  {
    "card": "213178636634930",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7643139362335205,
    "tries": 4832
  },
  {
    "card": "5112752638117903",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7625224590301514,
    "tries": 4846
  },
  {
    "card": "4940745761513",
    "bank": "HOUSING BANK FOR TRADE AND FINANCE",
    "country": "Jordan",
    "brand": "visa",
    "type": "debit",
    "time": 0.8632228374481201,
    "tries": 4854
  },
  {
    "card": "675979991600",
    "bank": "BANK OF IRELAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7730300426483154,
    "tries": 4878
  },
  {
    "card": "3532835022963573",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 5.746104717254639,
    "tries": 4886
  },
  {
    "card": "3547938213516086",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7645649909973145,
    "tries": 4887
  },
  {
    "card": "3589495592295922",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8916552066802979,
    "tries": 4895
  },
  {
    "card": "3564619885762301",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.729623556137085,
    "tries": 4902
  },
  {
    "card": "4021750265610631",
    "bank": "CITIZENS SOUTH BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0216665267944336,
    "tries": 4910
  },
  {
    "card": "4247877864176",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7408418655395508,
    "tries": 4925
  },
  {
    "card": "30441674473798",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7804086208343506,
    "tries": 4939
  },
  {
    "card": "379299941247927",
    "bank": "AMERICAN EXPRESS US",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.8544857501983643,
    "tries": 4947
  },
  {
    "card": "676327623473",
    "bank": "Desconhecido",
    "country": "Slovenia",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8190798759460449,
    "tries": 4954
  },
  {
    "card": "4991817960229235",
    "bank": "ENTRUST F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.744926929473877,
    "tries": 4962
  },
  {
    "card": "30155111318768",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7433736324310303,
    "tries": 4970
  },
  {
    "card": "4726038918948",
    "bank": "WELLS FARGO BANK NEVADA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7991740703582764,
    "tries": 4986
  },
  {
    "card": "373207431276948",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "amex",
    "type": "credit",
    "time": 0.7542994022369385,
    "tries": 4993
  },
  {
    "card": "213195942056038",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8203094005584717,
    "tries": 5001
  },
  {
    "card": "4478716434737",
    "bank": "Desconhecido",
    "country": "Macedonia (the former Yugoslav Republic of)",
    "brand": "visa",
    "type": "debit",
    "time": 0.8666346073150635,
    "tries": 5009
  },
  {
    "card": "30351823949731",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7667677402496338,
    "tries": 5017
  },
  {
    "card": "675969733533",
    "bank": "ROYAL BANK OF SCOTLAND PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8115067481994629,
    "tries": 5024
  },
  {
    "card": "502056674240",
    "bank": "Desconhecido",
    "country": "Spain",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7513556480407715,
    "tries": 5032
  },
  {
    "card": "3584362284348465",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7590780258178711,
    "tries": 5040
  },
  {
    "card": "4382239327412",
    "bank": "AUSTRALIA AND NEW ZEALAND BANKING GROUP, LTD.",
    "country": "Cook Islands",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.801520824432373,
    "tries": 5048
  },
  {
    "card": "180037660312491",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7481749057769775,
    "tries": 5055
  },
  {
    "card": "6512873301399166",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7571425437927246,
    "tries": 5071
  },
  {
    "card": "4198588416660916",
    "bank": "UNIPOL BANCA S.P.A.",
    "country": "Italy",
    "brand": "visa",
    "type": "credit",
    "time": 0.8086872100830078,
    "tries": 5079
  },
  {
    "card": "4579433164918864885",
    "bank": "TELLER, A.S.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 0.7577481269836426,
    "tries": 5094
  },
  {
    "card": "38638511087275",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7826087474822998,
    "tries": 5109
  },
  {
    "card": "30339447472073",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7473886013031006,
    "tries": 5117
  },
  {
    "card": "4543591790956",
    "bank": "TURKIYE IS BANKASI, A.S.",
    "country": "Turkey",
    "brand": "visa",
    "type": "credit",
    "time": 0.7419209480285645,
    "tries": 5125
  },
  {
    "card": "4395347311670103004",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.78824782371521,
    "tries": 5133
  },
  {
    "card": "6588834315519966",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7828505039215088,
    "tries": 5141
  },
  {
    "card": "676215339422",
    "bank": "NATWEST",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.7547037601470947,
    "tries": 5149
  },
  {
    "card": "4439180464322406",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "None",
    "time": 0.779482364654541,
    "tries": 5164
  },
  {
    "card": "4144977770125522",
    "bank": "ISABELLA COMMUNITY C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8642818927764893,
    "tries": 5172
  },
  {
    "card": "6011370935204413",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7617814540863037,
    "tries": 5188
  },
  {
    "card": "3585864162191783",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9178056716918945,
    "tries": 5195
  },
  {
    "card": "30498835227208",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7314672470092773,
    "tries": 5210
  },
  {
    "card": "30442210433296",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7675349712371826,
    "tries": 5218
  },
  {
    "card": "3572399735144071",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7818589210510254,
    "tries": 5225
  },
  {
    "card": "5471964560712800",
    "bank": "ZIP NETWORK",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7639062404632568,
    "tries": 5241
  },
  {
    "card": "30553891660732",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7193822860717773,
    "tries": 5249
  },
  {
    "card": "373169999305073",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7489316463470459,
    "tries": 5257
  },
  {
    "card": "6011354250025744",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7887794971466064,
    "tries": 5265
  },
  {
    "card": "4541352749002264781",
    "bank": "BANCO DE VENEZUELA, S.A.",
    "country": "Venezuela (Bolivarian Republic of)",
    "brand": "visa",
    "type": "credit",
    "time": 0.7273709774017334,
    "tries": 5280
  },
  {
    "card": "378146554619333",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.731400728225708,
    "tries": 5288
  },
  {
    "card": "4423646083810011",
    "bank": "FIRST COMMERCIAL BANK",
    "country": "Taiwan, Province of China[a]",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7334825992584229,
    "tries": 5296
  },
  {
    "card": "180010067327701",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8374202251434326,
    "tries": 5304
  },
  {
    "card": "6511987995987325",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7733685970306396,
    "tries": 5312
  },
  {
    "card": "6011890996700959",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7800900936126709,
    "tries": 5320
  },
  {
    "card": "675906786768",
    "bank": "HALIFAX",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7682530879974365,
    "tries": 5327
  },
  {
    "card": "6011207723664434",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8372879028320312,
    "tries": 5343
  },
  {
    "card": "4276939989945272",
    "bank": "SAVINGS BANK OF THE RUSSIAN FEDERATION (SBERBANK)",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7372503280639648,
    "tries": 5359
  },
  {
    "card": "180008659171743",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7768127918243408,
    "tries": 5367
  },
  {
    "card": "4983236405800932",
    "bank": "Desconhecido",
    "country": "France",
    "brand": "visa",
    "type": "debit",
    "time": 0.8029839992523193,
    "tries": 5374
  },
  {
    "card": "30029374275538",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9118204116821289,
    "tries": 5381
  },
  {
    "card": "4035048481386704",
    "bank": "CITIBANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7639105319976807,
    "tries": 5387
  },
  {
    "card": "374640438991995",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "credit",
    "time": 0.7839531898498535,
    "tries": 5395
  },
  {
    "card": "676258671350",
    "bank": "Desconhecido",
    "country": "Turkey",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7929258346557617,
    "tries": 5403
  },
  {
    "card": "38972152312738",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7558221817016602,
    "tries": 5410
  },
  {
    "card": "5142272354970140",
    "bank": "FIFTH THIRD BANK",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 2.4112489223480225,
    "tries": 5418
  },
  {
    "card": "4056941449207",
    "bank": "Desconhecido",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.085026741027832,
    "tries": 5421
  },
  {
    "card": "4916571308018857",
    "bank": "BANCO BRADESCO, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 0.7389357089996338,
    "tries": 5433
  },
  {
    "card": "5505035826640026",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.7293112277984619,
    "tries": 5440
  },
  {
    "card": "6011020944199423",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7674589157104492,
    "tries": 5448
  },
  {
    "card": "5554648531994908",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.7860438823699951,
    "tries": 5454
  },
  {
    "card": "30501700332266",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7588472366333008,
    "tries": 5462
  },
  {
    "card": "4675717014364",
    "bank": "BANK OF WHITMAN",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7717342376708984,
    "tries": 5470
  },
  {
    "card": "6542911428471510",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7770369052886963,
    "tries": 5478
  },
  {
    "card": "6583401457048009",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8757553100585938,
    "tries": 5501
  },
  {
    "card": "4655834303195350",
    "bank": "KOREA EXCHANGE BANK",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "debit",
    "time": 0.8131098747253418,
    "tries": 5516
  },
  {
    "card": "180059138126444",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7736093997955322,
    "tries": 5524
  },
  {
    "card": "213167777599234",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7399518489837646,
    "tries": 5531
  },
  {
    "card": "4906128645565",
    "bank": "BC CARD CO., LTD.",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "credit",
    "time": 0.7484040260314941,
    "tries": 5539
  },
  {
    "card": "4374308255954",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.794011116027832,
    "tries": 5547
  },
  {
    "card": "6011336774548913",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7520067691802979,
    "tries": 5554
  },
  {
    "card": "6585783827639320",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8032557964324951,
    "tries": 5570
  },
  {
    "card": "180033192133729",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8046679496765137,
    "tries": 5577
  },
  {
    "card": "639049530806",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7624156475067139,
    "tries": 5585
  },
  {
    "card": "180041408261937",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.795983076095581,
    "tries": 5600
  },
  {
    "card": "3554804791604308",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7879598140716553,
    "tries": 5607
  },
  {
    "card": "676356465028",
    "bank": "JSC BANK OF GEORGIA",
    "country": "Georgia",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.761376142501831,
    "tries": 5627
  },
  {
    "card": "501816100074",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7425270080566406,
    "tries": 5642
  },
  {
    "card": "6011411208481005",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9859669208526611,
    "tries": 5649
  },
  {
    "card": "4136191150948679477",
    "bank": "MONEY ONE F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8052113056182861,
    "tries": 5656
  },
  {
    "card": "4475879432406719883",
    "bank": "DEUTSCHER SPARKASSEN UND GIROVERBAND",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 0.815443754196167,
    "tries": 5669
  },
  {
    "card": "30439700800208",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7754848003387451,
    "tries": 5676
  },
  {
    "card": "3569695008428686",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7923362255096436,
    "tries": 5691
  },
  {
    "card": "4630874651920",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8999793529510498,
    "tries": 5699
  },
  {
    "card": "3547741751046106",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7431871891021729,
    "tries": 5721
  },
  {
    "card": "30393677806906",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8056228160858154,
    "tries": 5729
  },
  {
    "card": "3557846958085703",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7854511737823486,
    "tries": 5736
  },
  {
    "card": "4207649072392076",
    "bank": "WESTERN NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7836132049560547,
    "tries": 5744
  },
  {
    "card": "180000296303151",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7953031063079834,
    "tries": 5751
  },
  {
    "card": "6011407636158421",
    "bank": "DISCOVER CARD",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.788367748260498,
    "tries": 5759
  },
  {
    "card": "3553017492362032",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9022805690765381,
    "tries": 5766
  },
  {
    "card": "30370964877121",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7715637683868408,
    "tries": 5781
  },
  {
    "card": "180042298318480",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7994163036346436,
    "tries": 5796
  },
  {
    "card": "30133722657346",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7664713859558105,
    "tries": 5803
  },
  {
    "card": "5335622844827309",
    "bank": "KINKI SHINKIN CREDIT SERVICE CO., LTD.",
    "country": "Japan",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7637979984283447,
    "tries": 5819
  },
  {
    "card": "4010070916127126503",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7966892719268799,
    "tries": 5834
  },
  {
    "card": "4676712213671022615",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.793870210647583,
    "tries": 5842
  },
  {
    "card": "4059886080665032671",
    "bank": "Desconhecido",
    "country": "Trinidad and Tobago",
    "brand": "visa",
    "type": "debit",
    "time": 0.8133409023284912,
    "tries": 5856
  },
  {
    "card": "3586536816650732",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7541377544403076,
    "tries": 5864
  },
  {
    "card": "676108384196",
    "bank": "Desconhecido",
    "country": "Slovakia",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9135358333587646,
    "tries": 5872
  },
  {
    "card": "630499492571",
    "bank": "TSB",
    "country": "Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.887439489364624,
    "tries": 5895
  },
  {
    "card": "378463291405722",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.8081457614898682,
    "tries": 5902
  },
  {
    "card": "4073405208653654",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.79254150390625,
    "tries": 5909
  },
  {
    "card": "4217498988539364",
    "bank": "UMB BANK, N.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 0.7658748626708984,
    "tries": 5932
  },
  {
    "card": "30232880253003",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.797705888748169,
    "tries": 5962
  },
  {
    "card": "377155823845166",
    "bank": "AMERICAN EXPRESS",
    "country": "Thailand",
    "brand": "amex",
    "type": "credit",
    "time": 0.7953352928161621,
    "tries": 5978
  },
  {
    "card": "3543614173389012",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7873363494873047,
    "tries": 6001
  },
  {
    "card": "6011864785183263",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.7546885013580322,
    "tries": 6008
  },
  {
    "card": "213136079460569",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7742702960968018,
    "tries": 6031
  },
  {
    "card": "180024057163612",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7745888233184814,
    "tries": 6039
  },
  {
    "card": "3540030805546437",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.79319167137146,
    "tries": 6046
  },
  {
    "card": "377332988542702",
    "bank": "AMERICAN EXPRESS",
    "country": "Australia",
    "brand": "amex",
    "type": "credit",
    "time": 0.7975161075592041,
    "tries": 6054
  },
  {
    "card": "30037312627124",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7973833084106445,
    "tries": 6061
  },
  {
    "card": "4614830925487",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9077956676483154,
    "tries": 6069
  },
  {
    "card": "639096685917",
    "bank": "Desconhecido",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7727282047271729,
    "tries": 6076
  },
  {
    "card": "4244769821976",
    "bank": "OJSC URALSIB-YUG BANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7813780307769775,
    "tries": 6083
  },
  {
    "card": "6011034986151739",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7905957698822021,
    "tries": 6091
  },
  {
    "card": "4788885203792225",
    "bank": "FIRST DATA RESOURCES, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8203692436218262,
    "tries": 6098
  },
  {
    "card": "4459897071940057",
    "bank": "SANTANDER CONSUMER BANK AG",
    "country": "Germany",
    "brand": "visa",
    "type": "debit",
    "time": 1.582902431488037,
    "tries": 6106
  },
  {
    "card": "675924290223",
    "bank": "NATIONAL WESTMINSTER BANK PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7985689640045166,
    "tries": 6112
  },
  {
    "card": "4769760461085146",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7606611251831055,
    "tries": 6120
  },
  {
    "card": "675988370259",
    "bank": "ALLOCATED TO SWITCH",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9024364948272705,
    "tries": 6135
  },
  {
    "card": "3572477167022237",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7702503204345703,
    "tries": 6142
  },
  {
    "card": "180017531970388",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8384640216827393,
    "tries": 6158
  },
  {
    "card": "6541972696442196",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7756705284118652,
    "tries": 6165
  },
  {
    "card": "4841799112806494",
    "bank": "OLD NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.782785177230835,
    "tries": 6188
  },
  {
    "card": "3539554571587872",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7880733013153076,
    "tries": 6203
  },
  {
    "card": "30110547214354",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8116490840911865,
    "tries": 6211
  },
  {
    "card": "180037407887078",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7613973617553711,
    "tries": 6219
  },
  {
    "card": "4624934907638",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7695529460906982,
    "tries": 6234
  },
  {
    "card": "639095029166",
    "bank": "Desconhecido",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8153514862060547,
    "tries": 6257
  },
  {
    "card": "4833327214668800520",
    "bank": "GULF WINDS FEDERAL CREDIT UNION",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8036553859710693,
    "tries": 6265
  },
  {
    "card": "5122130434613227",
    "bank": "WESTERN STATES BANKCARD ASSOCIATION",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.7301664352416992,
    "tries": 6272
  },
  {
    "card": "4727835068133308",
    "bank": "CAMERON STATE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.808168888092041,
    "tries": 6280
  },
  {
    "card": "4864588011179589793",
    "bank": "CITIBANK",
    "country": "Hong Kong",
    "brand": "visa",
    "type": "credit",
    "time": 0.7799861431121826,
    "tries": 6288
  },
  {
    "card": "213123680046193",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.791905403137207,
    "tries": 6295
  },
  {
    "card": "4581573666349",
    "bank": "ALTURA C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7670845985412598,
    "tries": 6303
  },
  {
    "card": "4188569055260285",
    "bank": "BANKMED S.A.L.",
    "country": "Lebanon",
    "brand": "visa",
    "type": "debit",
    "time": 0.7502212524414062,
    "tries": 6326
  },
  {
    "card": "4350346436718626",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8282935619354248,
    "tries": 6334
  },
  {
    "card": "6591749137853325",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7746150493621826,
    "tries": 6341
  },
  {
    "card": "4527120006037545",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.799170732498169,
    "tries": 6349
  },
  {
    "card": "4763871882762498",
    "bank": "ROYAL BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 0.8156404495239258,
    "tries": 6356
  },
  {
    "card": "3556086805556306",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8451313972473145,
    "tries": 6364
  },
  {
    "card": "4870271672239411",
    "bank": "BARCLAYS BANK PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8710615634918213,
    "tries": 6371
  },
  {
    "card": "213171117028409",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7768969535827637,
    "tries": 6378
  },
  {
    "card": "379385970222053",
    "bank": "AMERICAN EXPRESS US",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.3449902534484863,
    "tries": 6383
  },
  {
    "card": "3562210381414985",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9445450305938721,
    "tries": 6390
  },
  {
    "card": "4449288183069",
    "bank": "NEW ENGLAND BANKCARD ASSOCIATION, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7718241214752197,
    "tries": 6398
  },
  {
    "card": "30570032442887",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8364779949188232,
    "tries": 6405
  },
  {
    "card": "4924706957765",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8118577003479004,
    "tries": 6411
  },
  {
    "card": "30211526239634",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8118524551391602,
    "tries": 6418
  },
  {
    "card": "503887270455",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7874338626861572,
    "tries": 6433
  },
  {
    "card": "4920299027134685245",
    "bank": "NORDEA BANK FINLAND PLC",
    "country": "Finland",
    "brand": "visa",
    "type": "debit",
    "time": 5.3393261432647705,
    "tries": 6437
  },
  {
    "card": "30287875424639",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 3.1065104007720947,
    "tries": 6438
  },
  {
    "card": "370745028815530",
    "bank": "AMERICAN EXPRESS",
    "country": "Mexico",
    "brand": "amex",
    "type": "credit",
    "time": 0.8593258857727051,
    "tries": 6445
  },
  {
    "card": "30406185493296",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7777037620544434,
    "tries": 6459
  },
  {
    "card": "4282445258759",
    "bank": "LANDESBANK BERLIN AG",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 1.0646190643310547,
    "tries": 6473
  },
  {
    "card": "4744444164114",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7840306758880615,
    "tries": 6479
  },
  {
    "card": "4794479082431022",
    "bank": "CHARTER ONE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.7356877326965332,
    "tries": 6495
  },
  {
    "card": "3567745342739843",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8567545413970947,
    "tries": 6501
  },
  {
    "card": "3569722419466145",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7914943695068359,
    "tries": 6509
  },
  {
    "card": "4219049819204930",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7781546115875244,
    "tries": 6517
  },
  {
    "card": "6537785248218708",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7322537899017334,
    "tries": 6524
  },
  {
    "card": "6512667342453739",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7417945861816406,
    "tries": 6532
  },
  {
    "card": "377069452833544",
    "bank": "LLOYDS TSB AIRMILES",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "credit",
    "time": 0.7394564151763916,
    "tries": 6540
  },
  {
    "card": "3529255481814727",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7881209850311279,
    "tries": 6548
  },
  {
    "card": "3560517950601004",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7752969264984131,
    "tries": 6555
  },
  {
    "card": "4573610783682",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8105502128601074,
    "tries": 6562
  },
  {
    "card": "4612885351587676",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "None",
    "time": 0.7545928955078125,
    "tries": 6570
  },
  {
    "card": "4522391913147140",
    "bank": "TORONTO-DOMINION BANK",
    "country": "Iraq",
    "brand": "visa",
    "type": "credit",
    "time": 0.8078923225402832,
    "tries": 6578
  },
  {
    "card": "213162876117319",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8087213039398193,
    "tries": 6585
  },
  {
    "card": "30382567564824",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7824971675872803,
    "tries": 6592
  },
  {
    "card": "3555343610797794",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7825300693511963,
    "tries": 6607
  },
  {
    "card": "676237745945",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7376430034637451,
    "tries": 6615
  },
  {
    "card": "6011957138513432",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7571384906768799,
    "tries": 6623
  },
  {
    "card": "5199115967910825",
    "bank": "Desconhecido",
    "country": "Nigeria",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7785987854003906,
    "tries": 6630
  },
  {
    "card": "4194553399483",
    "bank": "SAFE C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7434430122375488,
    "tries": 6638
  },
  {
    "card": "3586371993528422",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7378134727478027,
    "tries": 6645
  },
  {
    "card": "6011442748750716",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7408690452575684,
    "tries": 6653
  },
  {
    "card": "675982342932",
    "bank": "NATIONAL AUSTRALIA GROUP (UK)",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7620396614074707,
    "tries": 6661
  },
  {
    "card": "4378486671668884",
    "bank": "EASTERN BANK, LTD.",
    "country": "Bangladesh",
    "brand": "visa",
    "type": "credit",
    "time": 0.8061220645904541,
    "tries": 6668
  },
  {
    "card": "4341493765583171",
    "bank": "OJSC BANK URALSIB",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7457709312438965,
    "tries": 6676
  },
  {
    "card": "4185600028314779026",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "Viet Nam",
    "brand": "visa",
    "type": "credit",
    "time": 0.7684059143066406,
    "tries": 6684
  },
  {
    "card": "30427208937481",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7556345462799072,
    "tries": 6691
  },
  {
    "card": "4804631118365560786",
    "bank": "WELLS FARGO BANK NATIONAL ASSOCIATION",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7770040035247803,
    "tries": 6699
  },
  {
    "card": "3551037682502066",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8104021549224854,
    "tries": 6707
  },
  {
    "card": "375698212153546",
    "bank": "AMERICAN EXPRESS",
    "country": "Spain",
    "brand": "amex",
    "type": "credit",
    "time": 0.8235592842102051,
    "tries": 6714
  },
  {
    "card": "372161110495538",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.8384795188903809,
    "tries": 6721
  },
  {
    "card": "30039660002512",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8626224994659424,
    "tries": 6728
  },
  {
    "card": "372112501008356",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7579629421234131,
    "tries": 6736
  },
  {
    "card": "30006523234368",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8769207000732422,
    "tries": 6752
  },
  {
    "card": "6011363458177918",
    "bank": "SAMS CLUB",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7787649631500244,
    "tries": 6759
  },
  {
    "card": "4907875921208733",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7717969417572021,
    "tries": 6774
  },
  {
    "card": "4309211808848625721",
    "bank": "COASTAL COMMUNITY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7773303985595703,
    "tries": 6782
  },
  {
    "card": "4028775618999350",
    "bank": "JSCB TRANSCAPITALBANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 0.8155500888824463,
    "tries": 6789
  },
  {
    "card": "3583038467734546",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7603464126586914,
    "tries": 6797
  },
  {
    "card": "4019991806775",
    "bank": "FIRST NATIONAL BANK OF MICHIGAN",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7288355827331543,
    "tries": 6812
  },
  {
    "card": "379262255321530",
    "bank": "AMERICAN EXPRESS US",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.8233218193054199,
    "tries": 6820
  },
  {
    "card": "213130096213168",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.799710750579834,
    "tries": 6827
  },
  {
    "card": "36254854883668",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "discover",
    "type": "credit",
    "time": 0.7483704090118408,
    "tries": 6835
  },
  {
    "card": "4819057802596",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7903769016265869,
    "tries": 6842
  },
  {
    "card": "3535447716082160",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7755420207977295,
    "tries": 6850
  },
  {
    "card": "3572689660956220",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7291228771209717,
    "tries": 6873
  },
  {
    "card": "30259810096566",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7747197151184082,
    "tries": 6881
  },
  {
    "card": "213130999400953",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7684621810913086,
    "tries": 6889
  },
  {
    "card": "4209187314318",
    "bank": "FIA CARD SERVICES, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7862131595611572,
    "tries": 6912
  },
  {
    "card": "30057933926192",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.773531436920166,
    "tries": 6928
  },
  {
    "card": "501820031430",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8582713603973389,
    "tries": 6942
  },
  {
    "card": "180055731077125",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7333943843841553,
    "tries": 6950
  },
  {
    "card": "213138974226566",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8863587379455566,
    "tries": 6958
  },
  {
    "card": "30002235688777",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7294492721557617,
    "tries": 6965
  },
  {
    "card": "213114110802693",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.771836519241333,
    "tries": 6973
  },
  {
    "card": "4820929072379365",
    "bank": "DOVER-PHILA F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7623164653778076,
    "tries": 6981
  },
  {
    "card": "6543863455710931",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7270002365112305,
    "tries": 6996
  },
  {
    "card": "378585506707482",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7593693733215332,
    "tries": 7003
  },
  {
    "card": "3578579007855926",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7918393611907959,
    "tries": 7011
  },
  {
    "card": "4404874456747452",
    "bank": "SOUTH DIVISION C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8158934116363525,
    "tries": 7034
  },
  {
    "card": "5513598188411468",
    "bank": "ICBA BANCARD, INC.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8178207874298096,
    "tries": 7041
  },
  {
    "card": "4005928283212",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7445456981658936,
    "tries": 7056
  },
  {
    "card": "4925909868105",
    "bank": "TELLER, A.S.",
    "country": "Colombia",
    "brand": "visa",
    "type": "credit",
    "time": 0.7155861854553223,
    "tries": 7072
  },
  {
    "card": "582137931827",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7718298435211182,
    "tries": 7079
  },
  {
    "card": "3577739323636332",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7477836608886719,
    "tries": 7087
  },
  {
    "card": "501800607555",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7531070709228516,
    "tries": 7095
  },
  {
    "card": "4242149050690796",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8573930263519287,
    "tries": 7103
  },
  {
    "card": "6599831012802445",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7285990715026855,
    "tries": 7118
  },
  {
    "card": "180032452773349",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7696142196655273,
    "tries": 7126
  },
  {
    "card": "371459123796657",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.8144552707672119,
    "tries": 7134
  },
  {
    "card": "374043403340332",
    "bank": "AMERICAN EXPRESS",
    "country": "Austria",
    "brand": "amex",
    "type": "credit",
    "time": 0.7394840717315674,
    "tries": 7157
  },
  {
    "card": "213191082005794",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.786865234375,
    "tries": 7165
  },
  {
    "card": "3587671711613458",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8306479454040527,
    "tries": 7185
  },
  {
    "card": "3584656266000121",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7648825645446777,
    "tries": 7192
  },
  {
    "card": "4470938606176471",
    "bank": "SHORELINE C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.754847526550293,
    "tries": 7200
  },
  {
    "card": "374184197419328",
    "bank": "AMERICAN EXPRESS",
    "country": "Belgium",
    "brand": "amex",
    "type": "credit",
    "time": 0.7753551006317139,
    "tries": 7208
  },
  {
    "card": "4612766591170514830",
    "bank": "PJSC CB PRAVEX-BANK",
    "country": "Ukraine",
    "brand": "visa",
    "type": "credit",
    "time": 0.8273789882659912,
    "tries": 7215
  },
  {
    "card": "4764952525189311500",
    "bank": "METABANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7483084201812744,
    "tries": 7223
  },
  {
    "card": "4118451143973875212",
    "bank": "DORAL BANK",
    "country": "Puerto Rico",
    "brand": "visa",
    "type": "debit",
    "time": 0.8491184711456299,
    "tries": 7231
  },
  {
    "card": "4211891822719",
    "bank": "GE MONEY FINANCIAL SERVICES, LTD.",
    "country": "India",
    "brand": "visa",
    "type": "debit",
    "time": 0.9039487838745117,
    "tries": 7239
  },
  {
    "card": "370236271491195",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7732105255126953,
    "tries": 7247
  },
  {
    "card": "3561198403701946",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8398487567901611,
    "tries": 7254
  },
  {
    "card": "4369656354686171052",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.73758864402771,
    "tries": 7262
  },
  {
    "card": "4294524158685582",
    "bank": "JSB DIAMANT",
    "country": "Ukraine",
    "brand": "visa",
    "type": "debit",
    "time": 0.7489712238311768,
    "tries": 7270
  },
  {
    "card": "3539585904040312",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7782087326049805,
    "tries": 7278
  },
  {
    "card": "4134931035409268243",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.840548038482666,
    "tries": 7293
  },
  {
    "card": "4316620836276671",
    "bank": "TOWN NORTH BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.761523962020874,
    "tries": 7301
  },
  {
    "card": "180007967254506",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7494289875030518,
    "tries": 7309
  },
  {
    "card": "3562633406427627",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7805483341217041,
    "tries": 7317
  },
  {
    "card": "4574518153853",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8146119117736816,
    "tries": 7324
  },
  {
    "card": "4232450356998",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7828774452209473,
    "tries": 7332
  },
  {
    "card": "4000001430866814",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8179874420166016,
    "tries": 7340
  },
  {
    "card": "4791657756934024",
    "bank": "FIRST FEDERAL SAVINGS BANK OF ELIZABETHTOWN",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7731454372406006,
    "tries": 7348
  },
  {
    "card": "6516049394087408",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9286684989929199,
    "tries": 7356
  },
  {
    "card": "639024998440",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.741551399230957,
    "tries": 7363
  },
  {
    "card": "213157380848920",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.764380693435669,
    "tries": 7370
  },
  {
    "card": "4686358463281",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7784209251403809,
    "tries": 7378
  },
  {
    "card": "3563216791825156",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.2272212505340576,
    "tries": 7392
  },
  {
    "card": "38508596340081",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7750034332275391,
    "tries": 7399
  },
  {
    "card": "180065396641925",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7618677616119385,
    "tries": 7407
  },
  {
    "card": "180020802498220",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7632036209106445,
    "tries": 7423
  },
  {
    "card": "4283128097027147",
    "bank": "Desconhecido",
    "country": "Hungary",
    "brand": "visa",
    "type": "debit",
    "time": 0.7480969429016113,
    "tries": 7431
  },
  {
    "card": "4828934314487036",
    "bank": "FIRST UNION DIRECT BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0075275897979736,
    "tries": 7439
  },
  {
    "card": "4170463199114246",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8489489555358887,
    "tries": 7446
  },
  {
    "card": "4530834389399",
    "bank": "LA FEDERATION DES CAISSES DESJARDINS DU QUEBEC",
    "country": "Canada",
    "brand": "visa",
    "type": "credit",
    "time": 1.6047606468200684,
    "tries": 7453
  },
  {
    "card": "4373365232978222383",
    "bank": "Desconhecido",
    "country": "Bahrain",
    "brand": "visa",
    "type": "credit",
    "time": 0.7581939697265625,
    "tries": 7460
  },
  {
    "card": "38743572734342",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8107578754425049,
    "tries": 7475
  },
  {
    "card": "4851626241515695",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8648343086242676,
    "tries": 7482
  },
  {
    "card": "4046305590572815",
    "bank": "FIRST NATIONAL BANK",
    "country": "Venezuela (Bolivarian Republic of)",
    "brand": "visa",
    "type": "credit",
    "time": 0.8761448860168457,
    "tries": 7489
  },
  {
    "card": "3577382313545450",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.766836404800415,
    "tries": 7497
  },
  {
    "card": "6011321708004100",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7815670967102051,
    "tries": 7505
  },
  {
    "card": "4783838766066806762",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7255780696868896,
    "tries": 7512
  },
  {
    "card": "4394092717724175923",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8277590274810791,
    "tries": 7518
  },
  {
    "card": "3563021239935389",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8034281730651855,
    "tries": 7526
  },
  {
    "card": "4849174267579738",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7698836326599121,
    "tries": 7541
  },
  {
    "card": "4896786926805881",
    "bank": "Desconhecido",
    "country": "Papua New Guinea",
    "brand": "visa",
    "type": "debit",
    "time": 0.7985055446624756,
    "tries": 7556
  },
  {
    "card": "4037748825608477",
    "bank": "BANCO AGRICOLA, S.A.",
    "country": "El Salvador",
    "brand": "visa",
    "type": "credit",
    "time": 0.7140252590179443,
    "tries": 7564
  },
  {
    "card": "502066738340",
    "bank": "Desconhecido",
    "country": "Spain",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7202000617980957,
    "tries": 7572
  },
  {
    "card": "4215601861230",
    "bank": "CATHOLIC SYRIAN BANK, LTD.",
    "country": "India",
    "brand": "visa",
    "type": "debit",
    "time": 0.744896411895752,
    "tries": 7580
  },
  {
    "card": "3570956972949645",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7389280796051025,
    "tries": 7588
  },
  {
    "card": "4840914495486429527",
    "bank": "BRE BANK SPOLKA AKCYJNA",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 0.8148045539855957,
    "tries": 7595
  },
  {
    "card": "180036414636783",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8514938354492188,
    "tries": 7603
  },
  {
    "card": "30337041246976",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8389816284179688,
    "tries": 7626
  },
  {
    "card": "6011073262686117",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9004209041595459,
    "tries": 7634
  },
  {
    "card": "3560981330527430",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.756711483001709,
    "tries": 7641
  },
  {
    "card": "4632850515538201",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.736614465713501,
    "tries": 7657
  },
  {
    "card": "3574470831149781",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7238740921020508,
    "tries": 7659
  },
  {
    "card": "4477275808828",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "None",
    "time": 0.7983567714691162,
    "tries": 7666
  },
  {
    "card": "6011749466145477",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7582352161407471,
    "tries": 7674
  },
  {
    "card": "4328123162878",
    "bank": "FULTON BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7415235042572021,
    "tries": 7682
  },
  {
    "card": "4918099727061820550",
    "bank": "COMMERCIAL BANK OF QATAR (Q.S.C.)",
    "country": "Qatar",
    "brand": "visa",
    "type": "credit",
    "time": 0.8010697364807129,
    "tries": 7690
  },
  {
    "card": "4068741829840081",
    "bank": "INTEGRITY FIRST BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7775700092315674,
    "tries": 7698
  },
  {
    "card": "639083186457",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7679362297058105,
    "tries": 7706
  },
  {
    "card": "180005633297834",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8725686073303223,
    "tries": 7713
  },
  {
    "card": "38647564628059",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7457048892974854,
    "tries": 7721
  },
  {
    "card": "5423844069130150",
    "bank": "SB OF BTA BANK JSC TEMIRBANK JSC",
    "country": "Kazakhstan",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7185404300689697,
    "tries": 7729
  },
  {
    "card": "30451076085975",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7629542350769043,
    "tries": 7736
  },
  {
    "card": "4829681406669740675",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7303473949432373,
    "tries": 7752
  },
  {
    "card": "4787374009397720",
    "bank": "ERSTE BANK HUNGARY RT.",
    "country": "Hungary",
    "brand": "visa",
    "type": "debit",
    "time": 0.7772390842437744,
    "tries": 7760
  },
  {
    "card": "30184427420332",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7712454795837402,
    "tries": 7768
  },
  {
    "card": "4483166722785653",
    "bank": "JSC RIETUMU BANKA",
    "country": "Latvia",
    "brand": "visa",
    "type": "debit",
    "time": 0.7624497413635254,
    "tries": 7776
  },
  {
    "card": "213184300162471",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7469005584716797,
    "tries": 7783
  },
  {
    "card": "4829151653859575897",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7633521556854248,
    "tries": 7791
  },
  {
    "card": "180064608521751",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7681441307067871,
    "tries": 7806
  },
  {
    "card": "4055954093799603",
    "bank": "BANCO COMERCIAL E DE INVESTIMENTOS SARL",
    "country": "Mozambique",
    "brand": "visa",
    "type": "credit",
    "time": 2.507080554962158,
    "tries": 7830
  },
  {
    "card": "3569071881027070",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.774672269821167,
    "tries": 7835
  },
  {
    "card": "30468906347904",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9497056007385254,
    "tries": 7851
  },
  {
    "card": "4091120478466657",
    "bank": "SISTEMA 4B, S.A.",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 0.7927794456481934,
    "tries": 7858
  },
  {
    "card": "3581306393712965",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7354311943054199,
    "tries": 7881
  },
  {
    "card": "3533808105991190",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.9410183429718018,
    "tries": 7894
  },
  {
    "card": "213199597264434",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 3.1360177993774414,
    "tries": 7897
  },
  {
    "card": "6568872266493587",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 7.7824389934539795,
    "tries": 7901
  },
  {
    "card": "4660115511120",
    "bank": "MUTUAL SECURITY CREDIT UNION, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.6687211990356445,
    "tries": 7906
  },
  {
    "card": "4136030739069793",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7778098583221436,
    "tries": 7914
  },
  {
    "card": "6011948610062360",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8740355968475342,
    "tries": 7929
  },
  {
    "card": "3567771759253029",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7400140762329102,
    "tries": 7936
  },
  {
    "card": "373244173536015",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "amex",
    "type": "credit",
    "time": 0.748185396194458,
    "tries": 7968
  },
  {
    "card": "4134671451659",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7867119312286377,
    "tries": 7983
  },
  {
    "card": "4338056781481445219",
    "bank": "Desconhecido",
    "country": "Mauritius",
    "brand": "visa",
    "type": "debit",
    "time": 0.7994694709777832,
    "tries": 7991
  },
  {
    "card": "4657754865918333508",
    "bank": "BANCO INTERNACIONAL, S.A.",
    "country": "Ecuador",
    "brand": "visa",
    "type": "credit",
    "time": 0.7601616382598877,
    "tries": 7999
  },
  {
    "card": "5319506552572167",
    "bank": "Desconhecido",
    "country": "Ecuador",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7833645343780518,
    "tries": 8007
  },
  {
    "card": "3586989947551768",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7781763076782227,
    "tries": 8014
  },
  {
    "card": "4214237724847",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7687692642211914,
    "tries": 8022
  },
  {
    "card": "675937944857",
    "bank": "ALLOCATED TO SWITCH",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7413778305053711,
    "tries": 8030
  },
  {
    "card": "30128883315130",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8456308841705322,
    "tries": 8038
  },
  {
    "card": "4940116452667701",
    "bank": "BANCO BILBAO VIZCAYA ARGENTARIA S.A. (BBVA)",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 0.7472405433654785,
    "tries": 8046
  },
  {
    "card": "4921648682921794083",
    "bank": "BANCO DE ORO UNIBANK, INC.",
    "country": "Philippines",
    "brand": "visa",
    "type": "credit",
    "time": 0.7286515235900879,
    "tries": 8054
  },
  {
    "card": "6011407407728030",
    "bank": "DISCOVER CARD",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.7390532493591309,
    "tries": 8062
  },
  {
    "card": "4259562484300248",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8277192115783691,
    "tries": 8070
  },
  {
    "card": "3535012041394993",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.768841028213501,
    "tries": 8078
  },
  {
    "card": "213195446831050",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8316113948822021,
    "tries": 8085
  },
  {
    "card": "4648063635715897",
    "bank": "INTRUST BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7723023891448975,
    "tries": 8093
  },
  {
    "card": "676180639889",
    "bank": "Desconhecido",
    "country": "Italy",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7820484638214111,
    "tries": 8101
  },
  {
    "card": "4794777709132679",
    "bank": "FIRSTCARIBBEAN INTERNATIONAL BANK (BARBADOS), LTD.",
    "country": "Saint Vincent and the Grenadines",
    "brand": "visa",
    "type": "debit",
    "time": 0.7772579193115234,
    "tries": 8132
  },
  {
    "card": "6588533309854179",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7802984714508057,
    "tries": 8148
  },
  {
    "card": "3542471043286600",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.73335862159729,
    "tries": 8155
  },
  {
    "card": "3551688919785419",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8944520950317383,
    "tries": 8163
  },
  {
    "card": "4373465694237",
    "bank": "PEOPLES TRUST COMPANY",
    "country": "Canada",
    "brand": "visa",
    "type": "debit",
    "time": 0.7332332134246826,
    "tries": 8179
  },
  {
    "card": "5245902554995507",
    "bank": "Desconhecido",
    "country": "Luxembourg",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7859182357788086,
    "tries": 8186
  },
  {
    "card": "4686444805044818",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7375590801239014,
    "tries": 8194
  },
  {
    "card": "6011412517761814",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7973604202270508,
    "tries": 8202
  },
  {
    "card": "4632519621901878101",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7690176963806152,
    "tries": 8223
  },
  {
    "card": "6553618133385697",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7753748893737793,
    "tries": 8239
  },
  {
    "card": "30078669886707",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7254889011383057,
    "tries": 8247
  },
  {
    "card": "3573901084438506",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7599773406982422,
    "tries": 8255
  },
  {
    "card": "3534890335029446",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.762958288192749,
    "tries": 8279
  },
  {
    "card": "3586166128917320",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7590248584747314,
    "tries": 8286
  },
  {
    "card": "373362639627770",
    "bank": "AMERICAN EXPRESS",
    "country": "Canada",
    "brand": "amex",
    "type": "credit",
    "time": 0.805060863494873,
    "tries": 8294
  },
  {
    "card": "30349488129342",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7620129585266113,
    "tries": 8302
  },
  {
    "card": "3538679188029066",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7436761856079102,
    "tries": 8325
  },
  {
    "card": "180028920040808",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7290477752685547,
    "tries": 8333
  },
  {
    "card": "30291770506797",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8189437389373779,
    "tries": 8341
  },
  {
    "card": "4236143539787",
    "bank": "MERCANTIL, C.A., BANCO UNIVERS.A.L.",
    "country": "Venezuela (Bolivarian Republic of)",
    "brand": "visa",
    "type": "credit",
    "time": 0.7325906753540039,
    "tries": 8348
  },
  {
    "card": "213127522982150",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7427442073822021,
    "tries": 8356
  },
  {
    "card": "676165113736",
    "bank": "Desconhecido",
    "country": "Czechia",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8084328174591064,
    "tries": 8364
  },
  {
    "card": "3564166127000264",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7682089805603027,
    "tries": 8371
  },
  {
    "card": "4027988060009864",
    "bank": "PIRAEUS BANK, S.A.",
    "country": "Greece",
    "brand": "visa",
    "type": "credit",
    "time": 0.7271981239318848,
    "tries": 8379
  },
  {
    "card": "4187430373993993",
    "bank": "ACCESS BANK PLC",
    "country": "Nigeria",
    "brand": "visa",
    "type": "debit",
    "time": 0.7943484783172607,
    "tries": 8387
  },
  {
    "card": "4694109999550199",
    "bank": "AMEGY BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7397365570068359,
    "tries": 8395
  },
  {
    "card": "371019333439702",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7281734943389893,
    "tries": 8403
  },
  {
    "card": "4595884386079420",
    "bank": "Desconhecido",
    "country": "Norway",
    "brand": "visa",
    "type": "credit",
    "time": 0.7751154899597168,
    "tries": 8411
  },
  {
    "card": "3564452599216905",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8131494522094727,
    "tries": 8427
  },
  {
    "card": "4532838898283470",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7685647010803223,
    "tries": 8435
  },
  {
    "card": "30230527266750",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7200443744659424,
    "tries": 8450
  },
  {
    "card": "4216762012259146",
    "bank": "ICICI BANK, LTD.",
    "country": "Sri Lanka",
    "brand": "visa",
    "type": "debit",
    "time": 0.7207345962524414,
    "tries": 8458
  },
  {
    "card": "213108642375871",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7357308864593506,
    "tries": 8474
  },
  {
    "card": "4743534026230625122",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.776552677154541,
    "tries": 8482
  },
  {
    "card": "3563892005856649",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7319369316101074,
    "tries": 8498
  },
  {
    "card": "30490748586655",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7420451641082764,
    "tries": 8514
  },
  {
    "card": "4097308104111516",
    "bank": "EUROBANK EFG BULGARIA A.D.",
    "country": "Bulgaria",
    "brand": "visa",
    "type": "debit",
    "time": 0.7524776458740234,
    "tries": 8521
  },
  {
    "card": "3557754490703280",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.801732063293457,
    "tries": 8529
  },
  {
    "card": "30442150998100",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7283153533935547,
    "tries": 8545
  },
  {
    "card": "4209919509019438",
    "bank": "TIB - THE INDEPENDENT BANKERSBANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7358038425445557,
    "tries": 8552
  },
  {
    "card": "30425575036358",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.792255163192749,
    "tries": 8561
  },
  {
    "card": "4477657420409099",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7435104846954346,
    "tries": 8576
  },
  {
    "card": "180030721446671",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.759000301361084,
    "tries": 8584
  },
  {
    "card": "3577207980836892",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7276589870452881,
    "tries": 8592
  },
  {
    "card": "3579946066069583",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7977356910705566,
    "tries": 8600
  },
  {
    "card": "30255013636836",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7425813674926758,
    "tries": 8608
  },
  {
    "card": "6513276054922821",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.80924391746521,
    "tries": 8623
  },
  {
    "card": "4109006477515216",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7609584331512451,
    "tries": 8631
  },
  {
    "card": "4946602213605",
    "bank": "NORDEA BANK NORGE ASA HK",
    "country": "Norway",
    "brand": "visa",
    "type": "credit",
    "time": 0.7764897346496582,
    "tries": 8646
  },
  {
    "card": "6011039282404625",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.869760274887085,
    "tries": 8653
  },
  {
    "card": "213149525513832",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7718403339385986,
    "tries": 8669
  },
  {
    "card": "4534042969773879200",
    "bank": "DC CARD CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.8675637245178223,
    "tries": 8684
  },
  {
    "card": "4078267348376306",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 2.6226232051849365,
    "tries": 8690
  },
  {
    "card": "3565426608472922",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0189695358276367,
    "tries": 8695
  },
  {
    "card": "4545628069145235",
    "bank": "CONSTRUCTION F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0172593593597412,
    "tries": 8701
  },
  {
    "card": "3570561912118689",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9210331439971924,
    "tries": 8720
  },
  {
    "card": "30081345797728",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9196426868438721,
    "tries": 8727
  },
  {
    "card": "30388160057363",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9205617904663086,
    "tries": 8734
  },
  {
    "card": "374262171319464",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "Desconhecido",
    "time": 0.9307434558868408,
    "tries": 8754
  },
  {
    "card": "503818525456",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9966306686401367,
    "tries": 8761
  },
  {
    "card": "4407485490378829",
    "bank": "SERVIRED S.C.",
    "country": "Spain",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8943219184875488,
    "tries": 8767
  },
  {
    "card": "30528419629757",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7731332778930664,
    "tries": 8782
  },
  {
    "card": "371564932342666",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7954659461975098,
    "tries": 8804
  },
  {
    "card": "4823784825201",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0132911205291748,
    "tries": 8811
  },
  {
    "card": "3538304708766002",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8582048416137695,
    "tries": 8818
  },
  {
    "card": "4543064537117546258",
    "bank": "ROYAL BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9510407447814941,
    "tries": 8825
  },
  {
    "card": "213173680407200",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.722116231918335,
    "tries": 8832
  },
  {
    "card": "30304997067798",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8884539604187012,
    "tries": 8839
  },
  {
    "card": "4439725147136761",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8749403953552246,
    "tries": 8846
  },
  {
    "card": "180098264180551",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9035258293151855,
    "tries": 8853
  },
  {
    "card": "4722968908041",
    "bank": "Desconhecido",
    "country": "Malaysia",
    "brand": "visa",
    "type": "debit",
    "time": 0.7747480869293213,
    "tries": 8861
  },
  {
    "card": "4218342551870",
    "bank": "KWANGJU BANK, LTD.",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "credit",
    "time": 0.878633975982666,
    "tries": 8868
  },
  {
    "card": "4303445266442821405",
    "bank": "RBS (RD EUROPE) GMBH",
    "country": "Austria",
    "brand": "visa",
    "type": "credit",
    "time": 0.9000139236450195,
    "tries": 8883
  },
  {
    "card": "4782425506960660",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8820517063140869,
    "tries": 8889
  },
  {
    "card": "3535622617288047",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9229483604431152,
    "tries": 8901
  },
  {
    "card": "4650009781004",
    "bank": "FIRST USA BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8552103042602539,
    "tries": 8908
  },
  {
    "card": "377327734301122",
    "bank": "AMERICAN EXPRESS",
    "country": "Australia",
    "brand": "amex",
    "type": "credit",
    "time": 0.7959072589874268,
    "tries": 8916
  },
  {
    "card": "4355172531321064958",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8878698348999023,
    "tries": 8931
  },
  {
    "card": "30176847383132",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0593111515045166,
    "tries": 8938
  },
  {
    "card": "4039917648596775",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8440499305725098,
    "tries": 8945
  },
  {
    "card": "4077840619890659",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9332847595214844,
    "tries": 8957
  },
  {
    "card": "4153015938089955",
    "bank": "Desconhecido",
    "country": "Finland",
    "brand": "visa",
    "type": "debit",
    "time": 0.9856336116790771,
    "tries": 8963
  },
  {
    "card": "4039755439131273",
    "bank": "TAPER LOCK C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7554941177368164,
    "tries": 8970
  },
  {
    "card": "3539702115053303",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.729830265045166,
    "tries": 8978
  },
  {
    "card": "30133489290687",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8115019798278809,
    "tries": 9006
  },
  {
    "card": "371952332883589",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.764106035232544,
    "tries": 9014
  },
  {
    "card": "4617377058013862",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.750516414642334,
    "tries": 9028
  },
  {
    "card": "5313571940920797",
    "bank": "NATIONAL AUSTRALIA BANK, LTD.",
    "country": "Australia",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7279186248779297,
    "tries": 9043
  },
  {
    "card": "4365278719412464169",
    "bank": "Desconhecido",
    "country": "New Zealand",
    "brand": "visa",
    "type": "debit",
    "time": 0.7318620681762695,
    "tries": 9051
  },
  {
    "card": "377945336522538",
    "bank": "Desconhecido",
    "country": "Hungary",
    "brand": "amex",
    "type": "credit",
    "time": 0.7795016765594482,
    "tries": 9059
  },
  {
    "card": "213177650902132",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7762243747711182,
    "tries": 9067
  },
  {
    "card": "4246823100416842",
    "bank": "MARRIOTT EMPLOYEES F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9706487655639648,
    "tries": 9074
  },
  {
    "card": "4259163795311154",
    "bank": "BANCO BICE",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8141553401947021,
    "tries": 9082
  },
  {
    "card": "4512208457774125",
    "bank": "ROYAL BANK OF CANADA",
    "country": "Canada",
    "brand": "visa",
    "type": "credit",
    "time": 0.8745474815368652,
    "tries": 9089
  },
  {
    "card": "4311969312163258",
    "bank": "PNCBANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.4338750839233398,
    "tries": 9101
  },
  {
    "card": "180017389974011",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7865526676177979,
    "tries": 9108
  },
  {
    "card": "180063115969263",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.835465669631958,
    "tries": 9123
  },
  {
    "card": "6552159773078566",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8327810764312744,
    "tries": 9139
  },
  {
    "card": "180002263380998",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7917225360870361,
    "tries": 9146
  },
  {
    "card": "372580078264521",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.8403980731964111,
    "tries": 9153
  },
  {
    "card": "213187286223993",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9169590473175049,
    "tries": 9167
  },
  {
    "card": "4042762842802859",
    "bank": "HDFC BANK, LTD.",
    "country": "India",
    "brand": "visa",
    "type": "credit",
    "time": 0.8927981853485107,
    "tries": 9173
  },
  {
    "card": "3535877358137304",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9204270839691162,
    "tries": 9180
  },
  {
    "card": "4232943780275",
    "bank": "HELLENIC POST CREDIT, CREDIT COMPANY SOCIETE ANONYME",
    "country": "Greece",
    "brand": "visa",
    "type": "credit",
    "time": 0.8189260959625244,
    "tries": 9187
  },
  {
    "card": "4101187118172811",
    "bank": "FIRST FINANCIAL",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7359592914581299,
    "tries": 9194
  },
  {
    "card": "4591019482137388545",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9932303428649902,
    "tries": 9201
  },
  {
    "card": "6578650507325364",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8087253570556641,
    "tries": 9208
  },
  {
    "card": "379494955469505",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "amex",
    "type": "credit",
    "time": 0.8712308406829834,
    "tries": 9215
  },
  {
    "card": "3530464049328447",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7833211421966553,
    "tries": 9223
  },
  {
    "card": "4509889659583",
    "bank": "ANZ BANK, LTD.",
    "country": "Australia",
    "brand": "visa",
    "type": "credit",
    "time": 0.7898550033569336,
    "tries": 9238
  },
  {
    "card": "676383158851",
    "bank": "BANK HANDLOWY W WARSZAWIE, S.A.",
    "country": "Poland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8326060771942139,
    "tries": 9246
  },
  {
    "card": "180037336554583",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7740631103515625,
    "tries": 9253
  },
  {
    "card": "30074879928942",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8179748058319092,
    "tries": 9260
  },
  {
    "card": "30151625343764",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9203355312347412,
    "tries": 9267
  },
  {
    "card": "4636267626236513591",
    "bank": "Desconhecido",
    "country": "Ukraine",
    "brand": "visa",
    "type": "credit",
    "time": 0.9230248928070068,
    "tries": 9274
  },
  {
    "card": "4419130441405174",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7787213325500488,
    "tries": 9289
  },
  {
    "card": "30509006272102",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9909310340881348,
    "tries": 9296
  },
  {
    "card": "6584514035734962",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.079521894454956,
    "tries": 9303
  },
  {
    "card": "3576618472701389",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.4678304195404053,
    "tries": 9317
  },
  {
    "card": "4473248614603517",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7679998874664307,
    "tries": 9323
  },
  {
    "card": "4242960753586671",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0315794944763184,
    "tries": 9330
  },
  {
    "card": "4016215899552737197",
    "bank": "PINNACLE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.3411426544189453,
    "tries": 9344
  },
  {
    "card": "180076195419777",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7324621677398682,
    "tries": 9350
  },
  {
    "card": "4245439178791155",
    "bank": "CJSC INDUSTRIAL SAVINGS BANK, CJSC PROMSBERBANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 0.80202317237854,
    "tries": 9358
  },
  {
    "card": "3538630950280882",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8508727550506592,
    "tries": 9372
  },
  {
    "card": "4765762878375953958",
    "bank": "STREATOR ONIZED C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.910602331161499,
    "tries": 9379
  },
  {
    "card": "3555436098062770",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7472748756408691,
    "tries": 9387
  },
  {
    "card": "4459892536280694",
    "bank": "SANTANDER CONSUMER BANK AG",
    "country": "Germany",
    "brand": "visa",
    "type": "debit",
    "time": 0.8189833164215088,
    "tries": 9395
  },
  {
    "card": "213144070637615",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.4215657711029053,
    "tries": 9409
  },
  {
    "card": "213129074460700",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7550578117370605,
    "tries": 9416
  },
  {
    "card": "377645642074782",
    "bank": "Desconhecido",
    "country": "Sweden",
    "brand": "amex",
    "type": "Desconhecido",
    "time": 0.9185142517089844,
    "tries": 9424
  },
  {
    "card": "4082453815634031105",
    "bank": "BANCO NACIONAL DE MEXICO, S.A.",
    "country": "Mexico",
    "brand": "visa",
    "type": "credit",
    "time": 0.7625734806060791,
    "tries": 9438
  },
  {
    "card": "3589749275895485",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.495175838470459,
    "tries": 9445
  },
  {
    "card": "3584544244425869",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7516000270843506,
    "tries": 9453
  },
  {
    "card": "6533995856072800",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 4.816139221191406,
    "tries": 9460
  },
  {
    "card": "30497002979906",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0541057586669922,
    "tries": 9463
  },
  {
    "card": "3536027868557042",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7742912769317627,
    "tries": 9476
  },
  {
    "card": "5422771833183465",
    "bank": "F AND M BANK - WINCHESTER",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.9854083061218262,
    "tries": 9491
  },
  {
    "card": "30379123950299",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7959914207458496,
    "tries": 9495
  },
  {
    "card": "568514692306",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7393419742584229,
    "tries": 9503
  },
  {
    "card": "4376746839123631",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7994585037231445,
    "tries": 9510
  },
  {
    "card": "4131977883118815",
    "bank": "SCOTT C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7468140125274658,
    "tries": 9518
  },
  {
    "card": "30163853003465",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8465895652770996,
    "tries": 9525
  },
  {
    "card": "3588011877816661",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0127379894256592,
    "tries": 9532
  },
  {
    "card": "30361082266008",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8454616069793701,
    "tries": 9544
  },
  {
    "card": "180079458196256",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.779855489730835,
    "tries": 9552
  },
  {
    "card": "4857488157228464",
    "bank": "DEUTSCHE BANK S.A.E.",
    "country": "Switzerland",
    "brand": "visa",
    "type": "credit",
    "time": 1.495049238204956,
    "tries": 9571
  },
  {
    "card": "4080918228167365",
    "bank": "SECURITY STATE BANK OF HOWARD LAKE",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9010734558105469,
    "tries": 9592
  },
  {
    "card": "3533454674434641",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8012096881866455,
    "tries": 9599
  },
  {
    "card": "30022853659553",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7900452613830566,
    "tries": 9606
  },
  {
    "card": "36545692678958",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "discover",
    "type": "credit",
    "time": 0.7841498851776123,
    "tries": 9614
  },
  {
    "card": "4454418469925",
    "bank": "AMERICAN SAVINGS BANK, F.S.B.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.72255539894104,
    "tries": 9622
  },
  {
    "card": "4920632494212",
    "bank": "Desconhecido",
    "country": "Bolivia (Plurinational State of)",
    "brand": "visa",
    "type": "credit",
    "time": 0.8341646194458008,
    "tries": 9629
  },
  {
    "card": "502029543274",
    "bank": "ASPIDER SOLUTIONS",
    "country": "Netherlands",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8407073020935059,
    "tries": 9635
  },
  {
    "card": "4895318788636864",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7258045673370361,
    "tries": 9650
  },
  {
    "card": "38155010717500",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8923385143280029,
    "tries": 9657
  },
  {
    "card": "38491701828334",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8551325798034668,
    "tries": 9670
  },
  {
    "card": "3581712013485975",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0093066692352295,
    "tries": 9677
  },
  {
    "card": "4128195021227407",
    "bank": "CITIBANK (SOUTH DAKOTA), N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0061025619506836,
    "tries": 9683
  },
  {
    "card": "4638049629002",
    "bank": "FIRST NATIONAL BANK OF OMAHA",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9844658374786377,
    "tries": 9687
  },
  {
    "card": "3583217369718407",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9244375228881836,
    "tries": 9694
  },
  {
    "card": "4450334252741558",
    "bank": "FIRST TENNESSEE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8728504180908203,
    "tries": 9700
  },
  {
    "card": "213161210329069",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9203915596008301,
    "tries": 9707
  },
  {
    "card": "3542147101162129",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9207758903503418,
    "tries": 9713
  },
  {
    "card": "4768884174864430",
    "bank": "UNION BANK COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.485802412033081,
    "tries": 9719
  },
  {
    "card": "4872957607220728",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7652513980865479,
    "tries": 9726
  },
  {
    "card": "4515080307257339",
    "bank": "ROYAL BANK OF CANADA",
    "country": "Canada",
    "brand": "visa",
    "type": "credit",
    "time": 0.9863271713256836,
    "tries": 9734
  },
  {
    "card": "3589494444778094",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8436589241027832,
    "tries": 9749
  },
  {
    "card": "38685679978498",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.749290943145752,
    "tries": 9756
  },
  {
    "card": "180045519023177",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8053586483001709,
    "tries": 9764
  },
  {
    "card": "376663948536918",
    "bank": "AMERICAN EXPRESS",
    "country": "Mexico",
    "brand": "amex",
    "type": "credit",
    "time": 0.9229950904846191,
    "tries": 9771
  },
  {
    "card": "180011888689840",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7868227958679199,
    "tries": 9778
  },
  {
    "card": "4651832229547138581",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8929638862609863,
    "tries": 9786
  },
  {
    "card": "639053759960",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7755374908447266,
    "tries": 9792
  },
  {
    "card": "4015552026119367",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8769717216491699,
    "tries": 9800
  },
  {
    "card": "676170408493",
    "bank": "Desconhecido",
    "country": "Turkey",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8162038326263428,
    "tries": 9806
  },
  {
    "card": "4402797690040682113",
    "bank": "BANK HANDLOWY W WARSZAWIE, S.A.",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 1.022981882095337,
    "tries": 9813
  },
  {
    "card": "5117516317050965",
    "bank": "CHASE MANHATTAN BANK USA, N.A.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.023547887802124,
    "tries": 9819
  },
  {
    "card": "503842032206",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.1967620849609375,
    "tries": 9826
  },
  {
    "card": "6586654109802788",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8244225978851318,
    "tries": 9832
  },
  {
    "card": "376428467951355",
    "bank": "BANCO BRADESCO",
    "country": "Brazil",
    "brand": "amex",
    "type": "credit",
    "time": 0.9331345558166504,
    "tries": 9846
  },
  {
    "card": "180061779068638",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9284007549285889,
    "tries": 9868
  },
  {
    "card": "213104063420296",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7710511684417725,
    "tries": 9881
  },
  {
    "card": "4857960701813678",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8317630290985107,
    "tries": 9902
  },
  {
    "card": "4913964800818054790",
    "bank": "BANCO COMERCIAL",
    "country": "Uruguay",
    "brand": "visa",
    "type": "credit",
    "time": 0.789438009262085,
    "tries": 9909
  },
  {
    "card": "4360885825881127215",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0212044715881348,
    "tries": 9916
  },
  {
    "card": "373136835028458",
    "bank": "CITIBANK",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.9092895984649658,
    "tries": 9923
  },
  {
    "card": "213183718275917",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9682183265686035,
    "tries": 9929
  },
  {
    "card": "3556436765256803",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8720731735229492,
    "tries": 9935
  },
  {
    "card": "3561832366339464",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7967381477355957,
    "tries": 9942
  },
  {
    "card": "30066418813965",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7456264495849609,
    "tries": 9950
  },
  {
    "card": "4852197542492328814",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8432190418243408,
    "tries": 9972
  },
  {
    "card": "180072521594011",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8374860286712646,
    "tries": 9979
  },
  {
    "card": "3578368545673839",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9928102493286133,
    "tries": 10000
  },
  {
    "card": "372658585094753",
    "bank": "AMERICAN EXPRESS",
    "country": "Puerto Rico",
    "brand": "amex",
    "type": "credit",
    "time": 0.8439738750457764,
    "tries": 10006
  },
  {
    "card": "4225668476227966193",
    "bank": "ARKANSAS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.919161319732666,
    "tries": 10013
  },
  {
    "card": "6011400422000444",
    "bank": "DISCOVER CARD",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.8720564842224121,
    "tries": 10025
  },
  {
    "card": "180092134320406",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9870426654815674,
    "tries": 10033
  },
  {
    "card": "3569916945346140",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9244792461395264,
    "tries": 10045
  },
  {
    "card": "3562754186162968",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8816478252410889,
    "tries": 10052
  },
  {
    "card": "4143621408335530",
    "bank": "CAPITAL ONE BANK (USA), N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9877674579620361,
    "tries": 10058
  },
  {
    "card": "30382602919413",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9932570457458496,
    "tries": 10064
  },
  {
    "card": "3588355459597920",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7565693855285645,
    "tries": 10078
  },
  {
    "card": "4193871393437069929",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9558477401733398,
    "tries": 10086
  },
  {
    "card": "374992780326860",
    "bank": "RECETTE GENERALE DES FINA",
    "country": "France",
    "brand": "amex",
    "type": "credit",
    "time": 0.9982700347900391,
    "tries": 10092
  },
  {
    "card": "4549051164957360",
    "bank": "BANCO POPULAR DE PUERTO RICO",
    "country": "Puerto Rico",
    "brand": "visa",
    "type": "credit",
    "time": 1.044914722442627,
    "tries": 10098
  },
  {
    "card": "213179192759657",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0042285919189453,
    "tries": 10105
  },
  {
    "card": "6503127203165667",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236725807189941,
    "tries": 10111
  },
  {
    "card": "4102362505053473",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9630532264709473,
    "tries": 10117
  },
  {
    "card": "676376940950",
    "bank": "Desconhecido",
    "country": "Lithuania",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7673013210296631,
    "tries": 10131
  },
  {
    "card": "583937014293",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0047039985656738,
    "tries": 10138
  },
  {
    "card": "4692526194654389",
    "bank": "FIRSTCARIBBEAN INTERNATIONAL BANK (BARBADOS), LTD.",
    "country": "Anguilla",
    "brand": "visa",
    "type": "debit",
    "time": 0.9440028667449951,
    "tries": 10144
  },
  {
    "card": "4331316500169",
    "bank": "TOTAL SYSTEM SERVICES, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9704210758209229,
    "tries": 10151
  },
  {
    "card": "4944916796696415",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0224037170410156,
    "tries": 10171
  },
  {
    "card": "180088133538725",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9498143196105957,
    "tries": 10190
  },
  {
    "card": "4765341157672937",
    "bank": "CREDICORP BANK, S.A.",
    "country": "Panama",
    "brand": "visa",
    "type": "credit",
    "time": 1.1160356998443604,
    "tries": 10196
  },
  {
    "card": "213154029265392",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0067918300628662,
    "tries": 10202
  },
  {
    "card": "180026394861931",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9362573623657227,
    "tries": 10209
  },
  {
    "card": "4922590109583614",
    "bank": "MIEGIN CARD CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.8731896877288818,
    "tries": 10215
  },
  {
    "card": "4000328752044492",
    "bank": "STATE BANK OF INDIA",
    "country": "India",
    "brand": "visa",
    "type": "debit",
    "time": 2.9666881561279297,
    "tries": 10222
  },
  {
    "card": "4724680876117801036",
    "bank": "Desconhecido",
    "country": "Pakistan",
    "brand": "visa",
    "type": "debit",
    "time": 0.9478340148925781,
    "tries": 10225
  },
  {
    "card": "4416813231328668126",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.228562593460083,
    "tries": 10231
  },
  {
    "card": "4296453138933128",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.881291389465332,
    "tries": 10243
  },
  {
    "card": "3557522984470561",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9422988891601562,
    "tries": 10276
  },
  {
    "card": "30367647523395",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236144065856934,
    "tries": 10282
  },
  {
    "card": "213166963678091",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9054336547851562,
    "tries": 10289
  },
  {
    "card": "30035667791727",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1666927337646484,
    "tries": 10295
  },
  {
    "card": "213152278368792",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8958117961883545,
    "tries": 10302
  },
  {
    "card": "4431916905881445",
    "bank": "FIRST INTERNATIONAL BANK AND TRUST",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8504281044006348,
    "tries": 10308
  },
  {
    "card": "3555137683638509",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8719696998596191,
    "tries": 10314
  },
  {
    "card": "4014349224527025",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9613080024719238,
    "tries": 10326
  },
  {
    "card": "3586892208987301",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8414032459259033,
    "tries": 10333
  },
  {
    "card": "4038178027205465649",
    "bank": "BANCO CUSCATLAN DE COSTA RICA, S.A.",
    "country": "Costa Rica",
    "brand": "visa",
    "type": "credit",
    "time": 0.8254413604736328,
    "tries": 10340
  },
  {
    "card": "3584312205214064",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9869136810302734,
    "tries": 10347
  },
  {
    "card": "3554067104441079",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.3926796913146973,
    "tries": 10373
  },
  {
    "card": "180014487208863",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7964036464691162,
    "tries": 10379
  },
  {
    "card": "3540938871412252",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8565120697021484,
    "tries": 10386
  },
  {
    "card": "213185234096875",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8008172512054443,
    "tries": 10399
  },
  {
    "card": "30501497518655",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0221989154815674,
    "tries": 10405
  },
  {
    "card": "379236663322553",
    "bank": "AMERICAN EXPRESS US",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.1385776996612549,
    "tries": 10419
  },
  {
    "card": "503871187889",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9206879138946533,
    "tries": 10425
  },
  {
    "card": "676184796438",
    "bank": "Desconhecido",
    "country": "Italy",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.834259033203125,
    "tries": 10445
  },
  {
    "card": "3555776599727698",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8480017185211182,
    "tries": 10452
  },
  {
    "card": "4019774458346036148",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0489585399627686,
    "tries": 10459
  },
  {
    "card": "4075276948776164",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9198770523071289,
    "tries": 10471
  },
  {
    "card": "6599750867087573",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0004520416259766,
    "tries": 10484
  },
  {
    "card": "376019553503562",
    "bank": "AMERICAN EXPRESS",
    "country": "Australia",
    "brand": "amex",
    "type": "credit",
    "time": 1.1201534271240234,
    "tries": 10490
  },
  {
    "card": "4845539210340970",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0166871547698975,
    "tries": 10503
  },
  {
    "card": "4985535112001496",
    "bank": "Desconhecido",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.0010743141174316,
    "tries": 10509
  },
  {
    "card": "4078712459268694428",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.2276806831359863,
    "tries": 10521
  },
  {
    "card": "4258669080889",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9682433605194092,
    "tries": 10527
  },
  {
    "card": "4682155836224187",
    "bank": "SINGAPORE BANKING CORP., LTD.",
    "country": "Cambodia",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0017116069793701,
    "tries": 10534
  },
  {
    "card": "6504204696060561",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8291869163513184,
    "tries": 10540
  },
  {
    "card": "4934970473373",
    "bank": "STANDARD CHARTERED BANK",
    "country": "Indonesia",
    "brand": "visa",
    "type": "credit",
    "time": 0.9579482078552246,
    "tries": 10547
  },
  {
    "card": "675915795776",
    "bank": "NEWCASTLE BUILDING SOCIETY",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9130716323852539,
    "tries": 10559
  },
  {
    "card": "30133955324275",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9171993732452393,
    "tries": 10566
  },
  {
    "card": "4716141964082530",
    "bank": "U.S. BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8585293292999268,
    "tries": 10572
  },
  {
    "card": "6597305857948417",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8550949096679688,
    "tries": 10579
  },
  {
    "card": "4434553613875422",
    "bank": "CUSCAL, LTD.",
    "country": "Australia",
    "brand": "visa",
    "type": "debit",
    "time": 0.8393149375915527,
    "tries": 10585
  },
  {
    "card": "4856791603419",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.857184648513794,
    "tries": 10591
  },
  {
    "card": "180006789354031",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0604007244110107,
    "tries": 10598
  },
  {
    "card": "6532249385381725",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.086550235748291,
    "tries": 10609
  },
  {
    "card": "4467298393487810415",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8101768493652344,
    "tries": 10621
  },
  {
    "card": "4939742124298253",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0151898860931396,
    "tries": 10627
  },
  {
    "card": "6557025359969566",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.2139439582824707,
    "tries": 10634
  },
  {
    "card": "4924921180512651",
    "bank": "AVAL GOLD, S.A.",
    "country": "Guatemala",
    "brand": "visa",
    "type": "credit",
    "time": 1.1337006092071533,
    "tries": 10640
  },
  {
    "card": "180047332223182",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9712846279144287,
    "tries": 10646
  },
  {
    "card": "4650846669826",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0102601051330566,
    "tries": 10652
  },
  {
    "card": "4942066042526330412",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8127024173736572,
    "tries": 10658
  },
  {
    "card": "3564123004484608",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9546222686767578,
    "tries": 10664
  },
  {
    "card": "4535520299127005593",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "Congo",
    "brand": "visa",
    "type": "debit",
    "time": 1.0057647228240967,
    "tries": 10670
  },
  {
    "card": "376139749726917",
    "bank": "AMERICAN EXPRESS",
    "country": "Japan",
    "brand": "amex",
    "type": "credit",
    "time": 0.918534517288208,
    "tries": 10676
  },
  {
    "card": "4814490131646",
    "bank": "Desconhecido",
    "country": "Gabon",
    "brand": "visa",
    "type": "debit",
    "time": 0.8837430477142334,
    "tries": 10689
  },
  {
    "card": "3572080591541481",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9614357948303223,
    "tries": 10696
  },
  {
    "card": "4631577138055153",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0157470703125,
    "tries": 10702
  },
  {
    "card": "4273986957559927",
    "bank": "BRD - GROUPE SOCIETE GENERALE, S.A.",
    "country": "Romania",
    "brand": "visa",
    "type": "debit",
    "time": 1.3303158283233643,
    "tries": 10708
  },
  {
    "card": "30421609349008",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8915011882781982,
    "tries": 10727
  },
  {
    "card": "4414535965423178",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.072342872619629,
    "tries": 10734
  },
  {
    "card": "4620082853079",
    "bank": "TAPIOLA PANKKI OY",
    "country": "Finland",
    "brand": "visa",
    "type": "debit",
    "time": 0.9452531337738037,
    "tries": 10739
  },
  {
    "card": "373328732376334",
    "bank": "AMERICAN EXPRESS",
    "country": "Canada",
    "brand": "amex",
    "type": "credit",
    "time": 0.8352303504943848,
    "tries": 10759
  },
  {
    "card": "4985081720185",
    "bank": "CITIBANK INTERNATIONAL",
    "country": "China",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9641566276550293,
    "tries": 10770
  },
  {
    "card": "3587537069124820",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7569265365600586,
    "tries": 10777
  },
  {
    "card": "6011441354465924",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7389953136444092,
    "tries": 10785
  },
  {
    "card": "4968466317548290",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9995441436767578,
    "tries": 10792
  },
  {
    "card": "4092137200732717850",
    "bank": "WEST PLAINS BANK AND TRUST COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8360588550567627,
    "tries": 10799
  },
  {
    "card": "676215285385",
    "bank": "NATWEST",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.9827089309692383,
    "tries": 10806
  },
  {
    "card": "180010410386859",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7369050979614258,
    "tries": 10827
  },
  {
    "card": "4722015371668457",
    "bank": "U.S. BANK N.A. ND",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9790802001953125,
    "tries": 10833
  },
  {
    "card": "213175848134782",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9158387184143066,
    "tries": 10845
  },
  {
    "card": "4261928738783070665",
    "bank": "WACHOVIA BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7322137355804443,
    "tries": 10851
  },
  {
    "card": "4401520510914",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9711930751800537,
    "tries": 10859
  },
  {
    "card": "4395084875798",
    "bank": "Desconhecido",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 0.9609930515289307,
    "tries": 10865
  },
  {
    "card": "30367928384434",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9705004692077637,
    "tries": 10878
  },
  {
    "card": "4017563543415566",
    "bank": "WACHOVIA BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8145599365234375,
    "tries": 10884
  },
  {
    "card": "6577928523645663",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.2350199222564697,
    "tries": 10892
  },
  {
    "card": "36206278348090",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "discover",
    "type": "credit",
    "time": 0.8715372085571289,
    "tries": 10910
  },
  {
    "card": "5199161356018580",
    "bank": "BANK OF MONTREAL",
    "country": "Canada",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.751213788986206,
    "tries": 10924
  },
  {
    "card": "213134265397083",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.93829345703125,
    "tries": 10932
  },
  {
    "card": "5207145646641475",
    "bank": "ABN AMRO BANK, N.V.",
    "country": "Netherlands",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.8134994506835938,
    "tries": 10939
  },
  {
    "card": "4671350474304",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9869585037231445,
    "tries": 10946
  },
  {
    "card": "501878027249",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0595755577087402,
    "tries": 10953
  },
  {
    "card": "38731645900461",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1858079433441162,
    "tries": 10963
  },
  {
    "card": "6011273016519230",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.051922082901001,
    "tries": 10969
  },
  {
    "card": "4773868460594895",
    "bank": "HSBC BANK BRASIL S.A. - BANCO MULTIPLO",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 0.8203639984130859,
    "tries": 10983
  },
  {
    "card": "4746622838723632506",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.1686089038848877,
    "tries": 10991
  },
  {
    "card": "4201900579152",
    "bank": "HANA BANK",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "credit",
    "time": 2.372812032699585,
    "tries": 11004
  },
  {
    "card": "373259466770683",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "amex",
    "type": "credit",
    "time": 6.236417293548584,
    "tries": 11005
  },
  {
    "card": "4873762940856334157",
    "bank": "CAPITAL ONE, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0052828788757324,
    "tries": 11008
  },
  {
    "card": "4503105517379484",
    "bank": "CANADIAN IMPERIAL BANK OF COMMERCE",
    "country": "Canada",
    "brand": "visa",
    "type": "credit",
    "time": 1.1987957954406738,
    "tries": 11013
  },
  {
    "card": "6011881236291735",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0113022327423096,
    "tries": 11018
  },
  {
    "card": "4077924918224968404",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.4848742485046387,
    "tries": 11028
  },
  {
    "card": "4180702332924583",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 2.161623001098633,
    "tries": 11034
  },
  {
    "card": "213142371354278",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 3.891796350479126,
    "tries": 11046
  },
  {
    "card": "30022604468114",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.3692615032196045,
    "tries": 11049
  },
  {
    "card": "5164172828562981",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 2.872565746307373,
    "tries": 11053
  },
  {
    "card": "4395832048189667",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9800190925598145,
    "tries": 11057
  },
  {
    "card": "4491929137882336",
    "bank": "BANCO DE CREDITO DE BOLIVIA, S.A.",
    "country": "Bolivia (Plurinational State of)",
    "brand": "visa",
    "type": "debit",
    "time": 1.6347241401672363,
    "tries": 11063
  },
  {
    "card": "4177859385638992",
    "bank": "BC MOLDINDCONBANK, S.A.",
    "country": "Moldova (Republic of)",
    "brand": "visa",
    "type": "debit",
    "time": 0.891634464263916,
    "tries": 11068
  },
  {
    "card": "30278183049036",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0071868896484375,
    "tries": 11081
  },
  {
    "card": "3566288009150807",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7497117519378662,
    "tries": 11089
  },
  {
    "card": "676245645871",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7618343830108643,
    "tries": 11097
  },
  {
    "card": "4101517388017595",
    "bank": "Desconhecido",
    "country": "Hong Kong",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7552227973937988,
    "tries": 11104
  },
  {
    "card": "30276190027151",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8954968452453613,
    "tries": 11119
  },
  {
    "card": "4190001125996785",
    "bank": "U.S. BANK NATIONAL ASSOCIATION, ND",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7604172229766846,
    "tries": 11126
  },
  {
    "card": "6577456178487207",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8419294357299805,
    "tries": 11134
  },
  {
    "card": "30139623109246",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7672429084777832,
    "tries": 11141
  },
  {
    "card": "3567093512276415",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7725152969360352,
    "tries": 11149
  },
  {
    "card": "30364233352545",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.792238712310791,
    "tries": 11157
  },
  {
    "card": "4101760411088836896",
    "bank": "BANCO COLPATRIA - RED MULTIBANCA COLPATRIA, S.A.",
    "country": "Colombia",
    "brand": "visa",
    "type": "debit",
    "time": 0.7529520988464355,
    "tries": 11170
  },
  {
    "card": "3570261710444102",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.896782636642456,
    "tries": 11185
  },
  {
    "card": "5323707409669149",
    "bank": "FIRST DATA CONO SUR, S.R.L.",
    "country": "Argentina",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.412754774093628,
    "tries": 11189
  },
  {
    "card": "3584231867611500",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 2.840832471847534,
    "tries": 11194
  },
  {
    "card": "4557965023084539",
    "bank": "HSBC BANK PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "credit",
    "time": 5.395296812057495,
    "tries": 11198
  },
  {
    "card": "3574478296068966",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 3.3705625534057617,
    "tries": 11199
  },
  {
    "card": "213195030457387",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.945904016494751,
    "tries": 11204
  },
  {
    "card": "4446773120673604684",
    "bank": "ZIRAAT BANKASI",
    "country": "Turkey",
    "brand": "visa",
    "type": "credit",
    "time": 1.2407209873199463,
    "tries": 11211
  },
  {
    "card": "4985120320323015474",
    "bank": "RAIFFEISEN ZENTRALBANK OESTERREICH AG",
    "country": "Austria",
    "brand": "visa",
    "type": "credit",
    "time": 1.0259416103363037,
    "tries": 11217
  },
  {
    "card": "639039224501",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0271375179290771,
    "tries": 11223
  },
  {
    "card": "3571241082876429",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7460067272186279,
    "tries": 11235
  },
  {
    "card": "4519687952526630",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7520256042480469,
    "tries": 11243
  },
  {
    "card": "4551754442243975",
    "bank": "BANCO ITAU URUGUAY, S.A.",
    "country": "Uruguay",
    "brand": "visa",
    "type": "credit",
    "time": 0.7526869773864746,
    "tries": 11250
  },
  {
    "card": "4142959694767796078",
    "bank": "UNIBANK, S.A.",
    "country": "Haiti",
    "brand": "visa",
    "type": "credit",
    "time": 0.8005552291870117,
    "tries": 11265
  },
  {
    "card": "213188703082780",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7560877799987793,
    "tries": 11280
  },
  {
    "card": "4559051012631305",
    "bank": "OKLAHOMA CENTRAL C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.807258129119873,
    "tries": 11287
  },
  {
    "card": "30372204016817",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.13031005859375,
    "tries": 11300
  },
  {
    "card": "4991344344079947605",
    "bank": "WINGS FINANCIAL C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233533382415771,
    "tries": 11305
  },
  {
    "card": "676363715811",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8548932075500488,
    "tries": 11312
  },
  {
    "card": "3530936039646433",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7341575622558594,
    "tries": 11320
  },
  {
    "card": "4580289147373095",
    "bank": "ISRAEL CREDIT CARDS",
    "country": "Israel",
    "brand": "visa",
    "type": "credit",
    "time": 0.8105177879333496,
    "tries": 11326
  },
  {
    "card": "3557606732920108",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7637691497802734,
    "tries": 11340
  },
  {
    "card": "3532746245763346",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0303242206573486,
    "tries": 11347
  },
  {
    "card": "4528581001225089",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7915811538696289,
    "tries": 11354
  },
  {
    "card": "213107490523178",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8064353466033936,
    "tries": 11361
  },
  {
    "card": "3587646622130479",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.775493860244751,
    "tries": 11368
  },
  {
    "card": "30497188689485",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9772868156433105,
    "tries": 11375
  },
  {
    "card": "6533451202208441",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7927906513214111,
    "tries": 11382
  },
  {
    "card": "6011875855427943",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7315075397491455,
    "tries": 11398
  },
  {
    "card": "4367441097577295",
    "bank": "BANCORP BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7338252067565918,
    "tries": 11406
  },
  {
    "card": "38859257291760",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7469172477722168,
    "tries": 11414
  },
  {
    "card": "4610509565914136379",
    "bank": "SAN FRANCISCO FIRE C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8437783718109131,
    "tries": 11422
  },
  {
    "card": "180062368241891",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7476093769073486,
    "tries": 11437
  },
  {
    "card": "180030814008412",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7411763668060303,
    "tries": 11452
  },
  {
    "card": "6514209739717034",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9374923706054688,
    "tries": 11460
  },
  {
    "card": "30293607471393",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7684929370880127,
    "tries": 11467
  },
  {
    "card": "6011880163533242",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 2.1275758743286133,
    "tries": 11473
  },
  {
    "card": "3546233858900618",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7406108379364014,
    "tries": 11480
  },
  {
    "card": "4360376986081929226",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7614915370941162,
    "tries": 11488
  },
  {
    "card": "213163239413890",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8472561836242676,
    "tries": 11495
  },
  {
    "card": "30444096556356",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9947872161865234,
    "tries": 11501
  },
  {
    "card": "4415499770873198529",
    "bank": "BANCO NACIONAL DE MEXICO, S.A.",
    "country": "Mexico",
    "brand": "visa",
    "type": "debit",
    "time": 0.7860691547393799,
    "tries": 11507
  },
  {
    "card": "3547162517937050",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7362942695617676,
    "tries": 11527
  },
  {
    "card": "4749313764370935109",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7940726280212402,
    "tries": 11535
  },
  {
    "card": "30387104106989",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7572495937347412,
    "tries": 11543
  },
  {
    "card": "3564303678245747",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7540743350982666,
    "tries": 11550
  },
  {
    "card": "3567973983675924",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7622711658477783,
    "tries": 11557
  },
  {
    "card": "213195271683980",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7542984485626221,
    "tries": 11565
  },
  {
    "card": "3564237277138863",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.857304573059082,
    "tries": 11580
  },
  {
    "card": "4275838906232",
    "bank": "UNITED BANK OF PHILADELPHIA",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8822662830352783,
    "tries": 11586
  },
  {
    "card": "4039551310570",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "China",
    "brand": "visa",
    "type": "credit",
    "time": 0.9612822532653809,
    "tries": 11592
  },
  {
    "card": "6580784168864480",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7474353313446045,
    "tries": 11600
  },
  {
    "card": "373180312733495",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7524960041046143,
    "tries": 11607
  },
  {
    "card": "4669759305633997",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.5716629028320312,
    "tries": 11614
  },
  {
    "card": "4667218385781764",
    "bank": "PROMISANT, LTD.",
    "country": "Bermuda",
    "brand": "visa",
    "type": "None",
    "time": 0.8260471820831299,
    "tries": 11620
  },
  {
    "card": "30471463516572",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7784824371337891,
    "tries": 11634
  },
  {
    "card": "6581582754134592",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0935537815093994,
    "tries": 11641
  },
  {
    "card": "4618184731097372",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0275466442108154,
    "tries": 11647
  },
  {
    "card": "3539844725173772",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.980994462966919,
    "tries": 11652
  },
  {
    "card": "4235352031260403",
    "bank": "U.S. BANK N.A. ND",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7613749504089355,
    "tries": 11659
  },
  {
    "card": "3577650622200011",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7996616363525391,
    "tries": 11666
  },
  {
    "card": "676182358504",
    "bank": "Desconhecido",
    "country": "Italy",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.778057336807251,
    "tries": 11674
  },
  {
    "card": "180099343516088",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9237320423126221,
    "tries": 11681
  },
  {
    "card": "180053810070863",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.05084228515625,
    "tries": 11688
  },
  {
    "card": "4613694128188",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0125243663787842,
    "tries": 11694
  },
  {
    "card": "4532862117028425",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8069257736206055,
    "tries": 11701
  },
  {
    "card": "4888127400799748",
    "bank": "HORIZON BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8118715286254883,
    "tries": 11723
  },
  {
    "card": "6516614017423403",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8504598140716553,
    "tries": 11736
  },
  {
    "card": "6514167258758773",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7770216464996338,
    "tries": 11744
  },
  {
    "card": "4181670722699281798",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8143408298492432,
    "tries": 11751
  },
  {
    "card": "3558940680125462",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7866098880767822,
    "tries": 11757
  },
  {
    "card": "180014848939925",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0716047286987305,
    "tries": 11764
  },
  {
    "card": "5201184578832147",
    "bank": "CAPITAL ONE",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.9381186962127686,
    "tries": 11771
  },
  {
    "card": "4522290213746546",
    "bank": "UNION BANK AND TRUST COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9602978229522705,
    "tries": 11783
  },
  {
    "card": "4671758359008441",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9658515453338623,
    "tries": 11795
  },
  {
    "card": "6011305409192041",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9965064525604248,
    "tries": 11801
  },
  {
    "card": "38708911436867",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.776557207107544,
    "tries": 11808
  },
  {
    "card": "213102700413591",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.789731502532959,
    "tries": 11816
  },
  {
    "card": "371434249891187",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.8256564140319824,
    "tries": 11823
  },
  {
    "card": "4797224393490490",
    "bank": "AS SEB PANK",
    "country": "Estonia",
    "brand": "visa",
    "type": "debit",
    "time": 0.7451190948486328,
    "tries": 11831
  },
  {
    "card": "180095982802607",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7462773323059082,
    "tries": 11839
  },
  {
    "card": "4972804619114222988",
    "bank": "CREDIT LYONNAIS",
    "country": "France",
    "brand": "visa",
    "type": "debit",
    "time": 0.7185783386230469,
    "tries": 11846
  },
  {
    "card": "180078343261358",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1124777793884277,
    "tries": 11853
  },
  {
    "card": "4178309058774",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7696821689605713,
    "tries": 11859
  },
  {
    "card": "4031123294825752",
    "bank": "KEYBANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9822492599487305,
    "tries": 11866
  },
  {
    "card": "6519173624395998",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1722478866577148,
    "tries": 11872
  },
  {
    "card": "4717378966870227148",
    "bank": "MIDDLESEX SAVINGS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7504398822784424,
    "tries": 11880
  },
  {
    "card": "4046439358943301822",
    "bank": "CITIZENSFIRST C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9849810600280762,
    "tries": 11886
  },
  {
    "card": "3580610251223598",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7638518810272217,
    "tries": 11894
  },
  {
    "card": "180095299589681",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1084487438201904,
    "tries": 11900
  },
  {
    "card": "585814109476",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8197484016418457,
    "tries": 11920
  },
  {
    "card": "30358527641340",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.932368278503418,
    "tries": 11933
  },
  {
    "card": "3554574763598537",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9525291919708252,
    "tries": 11947
  },
  {
    "card": "6572338787003952",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7449400424957275,
    "tries": 11953
  },
  {
    "card": "4375895080078731538",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.76456618309021,
    "tries": 11969
  },
  {
    "card": "5588702656256666",
    "bank": "MERCANTIL, C.A., BANCO UNIVERS.A.L.",
    "country": "Venezuela (Bolivarian Republic of)",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7517518997192383,
    "tries": 11983
  },
  {
    "card": "30598695828811",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0843780040740967,
    "tries": 11990
  },
  {
    "card": "378325109292610",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.755481481552124,
    "tries": 12004
  },
  {
    "card": "6504332573586752",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8221886157989502,
    "tries": 12012
  },
  {
    "card": "213197023234724",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8215310573577881,
    "tries": 12018
  },
  {
    "card": "30427047534200",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9327032566070557,
    "tries": 12026
  },
  {
    "card": "213129198950461",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8730137348175049,
    "tries": 12033
  },
  {
    "card": "4227901234026",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9176249504089355,
    "tries": 12039
  },
  {
    "card": "4778973964988778",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.762404203414917,
    "tries": 12047
  },
  {
    "card": "4532758152043",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "India",
    "brand": "visa",
    "type": "debit",
    "time": 0.9576444625854492,
    "tries": 12055
  },
  {
    "card": "4615085025018532",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.961277961730957,
    "tries": 12061
  },
  {
    "card": "4717865536263900",
    "bank": "FIRST NATIONAL BANK OF GRIFFIN",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7681312561035156,
    "tries": 12075
  },
  {
    "card": "4493993266219254",
    "bank": "U.S. BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.793607234954834,
    "tries": 12083
  },
  {
    "card": "3574942444440880",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8679807186126709,
    "tries": 12098
  },
  {
    "card": "6011355878011149",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7523772716522217,
    "tries": 12106
  },
  {
    "card": "4835831098541",
    "bank": "SONY FINANCE INTERNATIONAL",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.7367115020751953,
    "tries": 12113
  },
  {
    "card": "4674150261776561",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8395719528198242,
    "tries": 12128
  },
  {
    "card": "3538219847405173",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0223610401153564,
    "tries": 12134
  },
  {
    "card": "4439961028119890428",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8433609008789062,
    "tries": 12147
  },
  {
    "card": "639012636887",
    "bank": "Desconhecido",
    "country": "Slovakia",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8990089893341064,
    "tries": 12153
  },
  {
    "card": "4508428705686873",
    "bank": "BANCO DE LA CIUDAD DE BUENOS AIRES",
    "country": "Argentina",
    "brand": "visa",
    "type": "credit",
    "time": 0.8425257205963135,
    "tries": 12161
  },
  {
    "card": "4420640783292",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9217960834503174,
    "tries": 12167
  },
  {
    "card": "4260958299748638943",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9552502632141113,
    "tries": 12172
  },
  {
    "card": "213148535846836",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9530861377716064,
    "tries": 12178
  },
  {
    "card": "213111856836513",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.026291847229004,
    "tries": 12192
  },
  {
    "card": "4390729870713181",
    "bank": "BANCO AGRICOLA, S.A.",
    "country": "El Salvador",
    "brand": "visa",
    "type": "credit",
    "time": 1.010995864868164,
    "tries": 12205
  },
  {
    "card": "4515870649768492",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7606279850006104,
    "tries": 12212
  },
  {
    "card": "4199611141460334",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 2.049839973449707,
    "tries": 12219
  },
  {
    "card": "3570989219445184",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.5323631763458252,
    "tries": 12223
  },
  {
    "card": "30144219866498",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.098381757736206,
    "tries": 12229
  },
  {
    "card": "676384818560",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.986635684967041,
    "tries": 12237
  },
  {
    "card": "4985943661838221791",
    "bank": "Desconhecido",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 1.1412317752838135,
    "tries": 12242
  },
  {
    "card": "4948495838626025",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9393982887268066,
    "tries": 12248
  },
  {
    "card": "4448008769648291",
    "bank": "MELLON BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7589209079742432,
    "tries": 12255
  },
  {
    "card": "503826141155",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.222898006439209,
    "tries": 12269
  },
  {
    "card": "372877218757871",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 2.491215705871582,
    "tries": 12275
  },
  {
    "card": "676363532893",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8324861526489258,
    "tries": 12281
  },
  {
    "card": "3566619512550663",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.806175708770752,
    "tries": 12287
  },
  {
    "card": "213131236999070",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8045797348022461,
    "tries": 12294
  },
  {
    "card": "3574643809187872",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7573308944702148,
    "tries": 12323
  },
  {
    "card": "5582534541046630",
    "bank": "TELLER, A.S.",
    "country": "Denmark",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.9169678688049316,
    "tries": 12338
  },
  {
    "card": "4856342989180420",
    "bank": "HALYK SAVINGS BANK OF KAZAKHSTAN",
    "country": "Kazakhstan",
    "brand": "visa",
    "type": "credit",
    "time": 0.8439052104949951,
    "tries": 12346
  },
  {
    "card": "213172451345540",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7653188705444336,
    "tries": 12354
  },
  {
    "card": "3566446774327923",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7677290439605713,
    "tries": 12361
  },
  {
    "card": "30504293870692",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8237490653991699,
    "tries": 12369
  },
  {
    "card": "4777542346803",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.012782096862793,
    "tries": 12376
  },
  {
    "card": "374623516193064",
    "bank": "AMERICAN EXPRESS",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "credit",
    "time": 0.8644566535949707,
    "tries": 12383
  },
  {
    "card": "4237845973804569862",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7371749877929688,
    "tries": 12391
  },
  {
    "card": "3582503128812297",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7953057289123535,
    "tries": 12399
  },
  {
    "card": "180048168528850",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7707545757293701,
    "tries": 12414
  },
  {
    "card": "378793610204483",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.7440361976623535,
    "tries": 12422
  },
  {
    "card": "180077826706392",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7114980220794678,
    "tries": 12429
  },
  {
    "card": "4279131438887829",
    "bank": "SAVINGS BANK OF THE RUSSIAN FEDERATION (SBERBANK)",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0036799907684326,
    "tries": 12436
  },
  {
    "card": "4166180565825315921",
    "bank": "NORTH VALLEY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9416799545288086,
    "tries": 12443
  },
  {
    "card": "4990518705127795638",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9131884574890137,
    "tries": 12463
  },
  {
    "card": "180039620006759",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8462827205657959,
    "tries": 12469
  },
  {
    "card": "6011897217475253",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9205656051635742,
    "tries": 12483
  },
  {
    "card": "30052661230289",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7258100509643555,
    "tries": 12490
  },
  {
    "card": "4206132452334",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7632534503936768,
    "tries": 12497
  },
  {
    "card": "3531356602560003",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9127283096313477,
    "tries": 12504
  },
  {
    "card": "30250834216926",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.98683762550354,
    "tries": 12525
  },
  {
    "card": "4550959314320212",
    "bank": "CAIRO AMMAN BANK",
    "country": "Jordan",
    "brand": "visa",
    "type": "debit",
    "time": 0.7505125999450684,
    "tries": 12532
  },
  {
    "card": "6011015452662945",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.770963191986084,
    "tries": 12540
  },
  {
    "card": "378427127633724",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.986137866973877,
    "tries": 12547
  },
  {
    "card": "4443757616121",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8401358127593994,
    "tries": 12554
  },
  {
    "card": "6593199757943907",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7408802509307861,
    "tries": 12561
  },
  {
    "card": "4162616489614809",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8414359092712402,
    "tries": 12569
  },
  {
    "card": "4065298031401",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8618333339691162,
    "tries": 12576
  },
  {
    "card": "4973222027240190438",
    "bank": "NATIXIS",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 0.920583963394165,
    "tries": 12583
  },
  {
    "card": "213193571820436",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023465633392334,
    "tries": 12590
  },
  {
    "card": "4481320162840895386",
    "bank": "BC CARD CO., LTD.",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "debit",
    "time": 0.9216723442077637,
    "tries": 12597
  },
  {
    "card": "4581577779801089373",
    "bank": "ALTURA C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.6969642639160156,
    "tries": 12612
  },
  {
    "card": "4230573818141888926",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0224084854125977,
    "tries": 12619
  },
  {
    "card": "3560246723299652",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9825928211212158,
    "tries": 12626
  },
  {
    "card": "584143385949",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7825238704681396,
    "tries": 12633
  },
  {
    "card": "5130634188364465",
    "bank": "MASTERCARD FRANCE S.A.S.",
    "country": "France",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.7495748996734619,
    "tries": 12641
  },
  {
    "card": "3556455595992460",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9603650569915771,
    "tries": 12655
  },
  {
    "card": "30595974732151",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0521252155303955,
    "tries": 12662
  },
  {
    "card": "3586834158547586",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8401732444763184,
    "tries": 12670
  },
  {
    "card": "30251037562330",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7372612953186035,
    "tries": 12677
  },
  {
    "card": "30518464087506",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7412686347961426,
    "tries": 12684
  },
  {
    "card": "4263408259831567",
    "bank": "EFG EUROBANK ERGASIAS, S.A.",
    "country": "Greece",
    "brand": "visa",
    "type": "credit",
    "time": 0.8523812294006348,
    "tries": 12692
  },
  {
    "card": "4006187668743363",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7162599563598633,
    "tries": 12698
  },
  {
    "card": "30180713892366",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7131955623626709,
    "tries": 12706
  },
  {
    "card": "379364995971382",
    "bank": "AMERICAN EXPRESS US",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0223970413208008,
    "tries": 12713
  },
  {
    "card": "4499070033069470",
    "bank": "BANK OF TENNESSEE",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9860529899597168,
    "tries": 12720
  },
  {
    "card": "180019269318350",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0895380973815918,
    "tries": 12727
  },
  {
    "card": "4361521488574385",
    "bank": "WESTERN F.C.U.",
    "country": "India",
    "brand": "visa",
    "type": "credit",
    "time": 0.7473263740539551,
    "tries": 12734
  },
  {
    "card": "6535809183511976",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.768730878829956,
    "tries": 12742
  },
  {
    "card": "4810776713596572",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7681682109832764,
    "tries": 12750
  },
  {
    "card": "4617497754079726",
    "bank": "ICICI BANK, LTD.",
    "country": "India",
    "brand": "visa",
    "type": "credit",
    "time": 0.7367947101593018,
    "tries": 12758
  },
  {
    "card": "5145496029754152",
    "bank": "FIDELITY INFORMATION SERVICES, INC.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.7302072048187256,
    "tries": 12766
  },
  {
    "card": "4437034375089045708",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7439632415771484,
    "tries": 12774
  },
  {
    "card": "213125077283586",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7263901233673096,
    "tries": 12782
  },
  {
    "card": "213130583236367",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7658133506774902,
    "tries": 12788
  },
  {
    "card": "4820579331502",
    "bank": "SUNCOAST SCHOOLS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8327274322509766,
    "tries": 12803
  },
  {
    "card": "4829631345608",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7590289115905762,
    "tries": 12817
  },
  {
    "card": "3588183963591944",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8175373077392578,
    "tries": 12831
  },
  {
    "card": "4353775126063561",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7838418483734131,
    "tries": 12846
  },
  {
    "card": "5116831120052574",
    "bank": "HERITAGE INTERNATIONAL BANK AND TRUST, LTD.",
    "country": "Belize",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.8136508464813232,
    "tries": 12854
  },
  {
    "card": "213103098459790",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7291035652160645,
    "tries": 12861
  },
  {
    "card": "36181247132422",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "discover",
    "type": "credit",
    "time": 0.8541712760925293,
    "tries": 12877
  },
  {
    "card": "4598270059381615",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7638123035430908,
    "tries": 12893
  },
  {
    "card": "3564347479964246",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7793798446655273,
    "tries": 12900
  },
  {
    "card": "30576831591105",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7460896968841553,
    "tries": 12915
  },
  {
    "card": "213144622016110",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8188183307647705,
    "tries": 12923
  },
  {
    "card": "3572847487430080",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8977205753326416,
    "tries": 12944
  },
  {
    "card": "4402487051830219670",
    "bank": "FIDELITY STATE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.7657063007354736,
    "tries": 12960
  },
  {
    "card": "4046202766377493",
    "bank": "USALLIANCE F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8999030590057373,
    "tries": 12973
  },
  {
    "card": "4204324625060603",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9872381687164307,
    "tries": 12986
  },
  {
    "card": "4132724241444056",
    "bank": "NATIONAL INDUSTRIAL CREDIT BANK, LTD.",
    "country": "Kenya",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.76798415184021,
    "tries": 12993
  },
  {
    "card": "4484593166641440",
    "bank": "BANCO SANTANDER RIO, S.A.",
    "country": "Argentina",
    "brand": "visa",
    "type": "credit",
    "time": 0.798375129699707,
    "tries": 13006
  },
  {
    "card": "30290646545070",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.775604248046875,
    "tries": 13022
  },
  {
    "card": "4569722890217452",
    "bank": "TELLER, A.S.",
    "country": "Norway",
    "brand": "visa",
    "type": "debit",
    "time": 0.8196320533752441,
    "tries": 13029
  },
  {
    "card": "180026255440320",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8724353313446045,
    "tries": 13035
  },
  {
    "card": "377033922645219",
    "bank": "LLOYDS TSB AIRMILES",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "credit",
    "time": 0.8025140762329102,
    "tries": 13049
  },
  {
    "card": "30010722327569",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7628312110900879,
    "tries": 13063
  },
  {
    "card": "4455760540443752",
    "bank": "ABU DHABI COMMERCIAL BANK",
    "country": "United Arab Emirates",
    "brand": "visa",
    "type": "credit",
    "time": 0.9815199375152588,
    "tries": 13075
  },
  {
    "card": "4168755153098677",
    "bank": "FIA CARD SERVICES, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.7633721828460693,
    "tries": 13082
  },
  {
    "card": "30259175152939",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9211704730987549,
    "tries": 13095
  },
  {
    "card": "180020279738496",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8562510013580322,
    "tries": 13102
  },
  {
    "card": "30290025864142",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9244201183319092,
    "tries": 13123
  },
  {
    "card": "180017269803819",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8465368747711182,
    "tries": 13129
  },
  {
    "card": "4277568257252159",
    "bank": "ING BANK SLASKI, S.A.",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 0.9946713447570801,
    "tries": 13136
  },
  {
    "card": "639071316868",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9213664531707764,
    "tries": 13143
  },
  {
    "card": "4315846034237",
    "bank": "METABANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8326897621154785,
    "tries": 13150
  },
  {
    "card": "4524255233881340",
    "bank": "TAIWAN SHIN KONG COMMERCIAL BANK",
    "country": "Taiwan, Province of China[a]",
    "brand": "visa",
    "type": "credit",
    "time": 0.9843082427978516,
    "tries": 13156
  },
  {
    "card": "4005372460903057",
    "bank": "BANK OF CAMDEN",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9219832420349121,
    "tries": 13163
  },
  {
    "card": "4390229353996609771",
    "bank": "BANCO MERCANTIL DO BRASIL, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 0.925147294998169,
    "tries": 13170
  },
  {
    "card": "4343526791677844",
    "bank": "INTERPAYMENT SERVICES, LTD.",
    "country": "Denmark",
    "brand": "visa",
    "type": "debit",
    "time": 0.9791274070739746,
    "tries": 13177
  },
  {
    "card": "3564247864502900",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8702404499053955,
    "tries": 13183
  },
  {
    "card": "4488099786090",
    "bank": "BOKF, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8417975902557373,
    "tries": 13190
  },
  {
    "card": "4331890596476",
    "bank": "INDUSTRIAL C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9195382595062256,
    "tries": 13197
  },
  {
    "card": "30599286604595",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8627679347991943,
    "tries": 13203
  },
  {
    "card": "6011312591118065",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7981321811676025,
    "tries": 13210
  },
  {
    "card": "4676887223856886",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0010266304016113,
    "tries": 13217
  },
  {
    "card": "213156664924118",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0693423748016357,
    "tries": 13231
  },
  {
    "card": "3544893181577060",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.7929239273071289,
    "tries": 13245
  },
  {
    "card": "4572537802716",
    "bank": "Desconhecido",
    "country": "Hungary",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7743573188781738,
    "tries": 13253
  },
  {
    "card": "4823600515606",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.7679836750030518,
    "tries": 13261
  },
  {
    "card": "3566134970425507",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0237724781036377,
    "tries": 13267
  },
  {
    "card": "213195424074665",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0617396831512451,
    "tries": 13274
  },
  {
    "card": "4442012369567",
    "bank": "SERVICES C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9943993091583252,
    "tries": 13281
  },
  {
    "card": "5345731265056484",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.1104464530944824,
    "tries": 13288
  },
  {
    "card": "6554395578048176",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.7998311519622803,
    "tries": 13301
  },
  {
    "card": "213125717383101",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8528199195861816,
    "tries": 13308
  },
  {
    "card": "4376857770878602",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8411421775817871,
    "tries": 13315
  },
  {
    "card": "4371819898936216489",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9331047534942627,
    "tries": 13321
  },
  {
    "card": "4392161247909367",
    "bank": "BANCO BILBAO VIZCAYA ARGENTARIA COLOMBIA S.A. BBVA COLOMBIA",
    "country": "Colombia",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.851978063583374,
    "tries": 13334
  },
  {
    "card": "6563116152157822",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8186264038085938,
    "tries": 13341
  },
  {
    "card": "4920309169100942",
    "bank": "SVENSKA HANDELSBANKEN AB (PUBL)",
    "country": "Finland",
    "brand": "visa",
    "type": "debit",
    "time": 0.8208017349243164,
    "tries": 13354
  },
  {
    "card": "6011787157726411",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.9190711975097656,
    "tries": 13361
  },
  {
    "card": "6011005297803879",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.001244306564331,
    "tries": 13374
  },
  {
    "card": "4743806004782870",
    "bank": "PEOPLES NATIONAL BANK , N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8663008213043213,
    "tries": 13381
  },
  {
    "card": "4786518597090912",
    "bank": "BANCORP BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.021637201309204,
    "tries": 13387
  },
  {
    "card": "30119891169635",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.024186611175537,
    "tries": 13393
  },
  {
    "card": "4206359779362862331",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023407220840454,
    "tries": 13399
  },
  {
    "card": "6556473889667642",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.925377607345581,
    "tries": 13405
  },
  {
    "card": "180083977771490",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0227785110473633,
    "tries": 13411
  },
  {
    "card": "6513965988006095",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236971378326416,
    "tries": 13423
  },
  {
    "card": "4431374765089024",
    "bank": "FIRST COMMUNITY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9366121292114258,
    "tries": 13429
  },
  {
    "card": "180080520439302",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0239787101745605,
    "tries": 13435
  },
  {
    "card": "3531222869801391",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234289169311523,
    "tries": 13441
  },
  {
    "card": "213182744881987",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234723091125488,
    "tries": 13453
  },
  {
    "card": "3555398401909495",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.5352940559387207,
    "tries": 13459
  },
  {
    "card": "6576071208511420",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0228235721588135,
    "tries": 13465
  },
  {
    "card": "4498985547057185",
    "bank": "5STAR BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233359336853027,
    "tries": 13471
  },
  {
    "card": "213160988507567",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235342979431152,
    "tries": 13483
  },
  {
    "card": "4078548729770419005",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0228376388549805,
    "tries": 13489
  },
  {
    "card": "4579884318081031",
    "bank": "MAGYAR KULKERESKEDELMI BANK RT. (HUNGARIAN FOREIGN TRADE BANK)",
    "country": "Hungary",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236613750457764,
    "tries": 13495
  },
  {
    "card": "6509300155860098",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9229583740234375,
    "tries": 13501
  },
  {
    "card": "4832679662819",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233826637268066,
    "tries": 13506
  },
  {
    "card": "3544486035138500",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233862400054932,
    "tries": 13512
  },
  {
    "card": "4318688303577357865",
    "bank": "ERSTE AND STEIERMARKISCHE BANK D.D.",
    "country": "Croatia",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0244803428649902,
    "tries": 13518
  },
  {
    "card": "4046882463050442",
    "bank": "SUNSET SCIENCE PARK FEDERAL CREDIT UNION",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235650539398193,
    "tries": 13530
  },
  {
    "card": "3545717264911251",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1257827281951904,
    "tries": 13535
  },
  {
    "card": "586884281211",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023073673248291,
    "tries": 13542
  },
  {
    "card": "4668102758323",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1255183219909668,
    "tries": 13547
  },
  {
    "card": "4248448017435",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235021114349365,
    "tries": 13553
  },
  {
    "card": "6553650117962100",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9208416938781738,
    "tries": 13559
  },
  {
    "card": "30099180037141",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236177444458008,
    "tries": 13565
  },
  {
    "card": "180049376852231",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9221105575561523,
    "tries": 13571
  },
  {
    "card": "4845539233290",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0244181156158447,
    "tries": 13576
  },
  {
    "card": "4354688521231676",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9210350513458252,
    "tries": 13583
  },
  {
    "card": "4997072957960913",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233125686645508,
    "tries": 13589
  },
  {
    "card": "30062581971318",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233137607574463,
    "tries": 13601
  },
  {
    "card": "4948337440760429306",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9827072620391846,
    "tries": 13619
  },
  {
    "card": "6546180450982440",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9207155704498291,
    "tries": 13638
  },
  {
    "card": "3558955296505881",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0238502025604248,
    "tries": 13650
  },
  {
    "card": "2228908181463114",
    "bank": "Desconhecido",
    "country": "Czechia",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0240347385406494,
    "tries": 13662
  },
  {
    "card": "30434068279590",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236635208129883,
    "tries": 13668
  },
  {
    "card": "3548523699530204",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232093334197998,
    "tries": 13674
  },
  {
    "card": "30165339658879",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0370254516601562,
    "tries": 13680
  },
  {
    "card": "4075051360085263410",
    "bank": "ITAU",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.0934255123138428,
    "tries": 13692
  },
  {
    "card": "375778781412935",
    "bank": "AMERICAN EXPRESS",
    "country": "Sweden",
    "brand": "amex",
    "type": "credit",
    "time": 0.9211037158966064,
    "tries": 13698
  },
  {
    "card": "4857741136485872",
    "bank": "Desconhecido",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232329368591309,
    "tries": 13704
  },
  {
    "card": "4233216202372960",
    "bank": "LORAIN NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232858657836914,
    "tries": 13710
  },
  {
    "card": "371053339043978",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.9169301986694336,
    "tries": 13716
  },
  {
    "card": "4124401283712",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0283722877502441,
    "tries": 13722
  },
  {
    "card": "38537080045617",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023423671722412,
    "tries": 13728
  },
  {
    "card": "4234081353675",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9201910495758057,
    "tries": 13746
  },
  {
    "card": "4069044361221003",
    "bank": "CFC STANBIC BANK, LTD.",
    "country": "Kenya",
    "brand": "visa",
    "type": "debit",
    "time": 1.023766279220581,
    "tries": 13751
  },
  {
    "card": "4074142108456",
    "bank": "BANCO CITIBANK, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233373641967773,
    "tries": 13763
  },
  {
    "card": "180097431514890",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9210011959075928,
    "tries": 13776
  },
  {
    "card": "4879926819411",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0244007110595703,
    "tries": 13781
  },
  {
    "card": "6577847540792797",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.028686285018921,
    "tries": 13787
  },
  {
    "card": "4698136011197234",
    "bank": "Desconhecido",
    "country": "Hungary",
    "brand": "visa",
    "type": "debit",
    "time": 1.0267786979675293,
    "tries": 13792
  },
  {
    "card": "639066568721",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9220016002655029,
    "tries": 13798
  },
  {
    "card": "4686122084953509",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.02341890335083,
    "tries": 13804
  },
  {
    "card": "30255287045854",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9208383560180664,
    "tries": 13810
  },
  {
    "card": "4696340026946898",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9209897518157959,
    "tries": 13822
  },
  {
    "card": "3556667456957750",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023529052734375,
    "tries": 13834
  },
  {
    "card": "6011061337650762",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023456335067749,
    "tries": 13846
  },
  {
    "card": "4979662529412",
    "bank": "CREDIT INDUSTRIEL ET COMMERCIAL",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211483001708984,
    "tries": 13853
  },
  {
    "card": "4663233422079191",
    "bank": "ORCHARD BANK (HSBC GROUP)",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9199061393737793,
    "tries": 13859
  },
  {
    "card": "213102939449143",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9214823246002197,
    "tries": 13865
  },
  {
    "card": "180035972073314",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0213994979858398,
    "tries": 13871
  },
  {
    "card": "4987667594267044",
    "bank": "Desconhecido",
    "country": "Viet Nam",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234265327453613,
    "tries": 13877
  },
  {
    "card": "676183148011",
    "bank": "Desconhecido",
    "country": "Italy",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0233938694000244,
    "tries": 13883
  },
  {
    "card": "4548611208672423",
    "bank": "WESTPAC BANKING CORPORATION",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232279300689697,
    "tries": 13889
  },
  {
    "card": "6011919099502028",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.0227818489074707,
    "tries": 13901
  },
  {
    "card": "6502169994366766",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0141994953155518,
    "tries": 13907
  },
  {
    "card": "374907299026595",
    "bank": "AMERICAN EXPRESS",
    "country": "France",
    "brand": "amex",
    "type": "Desconhecido",
    "time": 1.0278539657592773,
    "tries": 13913
  },
  {
    "card": "371979123277812",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0243980884552002,
    "tries": 13919
  },
  {
    "card": "4984793322232630",
    "bank": "NUEVO BANCO COMERCIAL, S.A.",
    "country": "Uruguay",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229837894439697,
    "tries": 13937
  },
  {
    "card": "213176113602628",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.024061918258667,
    "tries": 13943
  },
  {
    "card": "4111789190692",
    "bank": "Desconhecido",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9210565090179443,
    "tries": 13949
  },
  {
    "card": "4705184989499",
    "bank": "PINELLAS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235519409179688,
    "tries": 13955
  },
  {
    "card": "4073722468413",
    "bank": "INTERKOOPBANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232970714569092,
    "tries": 13973
  },
  {
    "card": "3550539365128649",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234780311584473,
    "tries": 13979
  },
  {
    "card": "30470650198319",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9186208248138428,
    "tries": 13985
  },
  {
    "card": "30433565312201",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0239293575286865,
    "tries": 13991
  },
  {
    "card": "4991612839085355029",
    "bank": "SYNERGY ONE F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0226757526397705,
    "tries": 13998
  },
  {
    "card": "4755475038414654187",
    "bank": "GUARDIAN BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023082971572876,
    "tries": 14009
  },
  {
    "card": "639013278911",
    "bank": "Desconhecido",
    "country": "Latvia",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0229182243347168,
    "tries": 14016
  },
  {
    "card": "4416356595330719082",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.087249755859375,
    "tries": 14027
  },
  {
    "card": "4740691266703041085",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0250046253204346,
    "tries": 14045
  },
  {
    "card": "676180410372",
    "bank": "Desconhecido",
    "country": "Italy",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023163080215454,
    "tries": 14051
  },
  {
    "card": "4470402261169",
    "bank": "AMERICAN TRUST AND SAVINGS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023475170135498,
    "tries": 14063
  },
  {
    "card": "378182566159448",
    "bank": "AMERICAN EXPRESS US",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0250568389892578,
    "tries": 14069
  },
  {
    "card": "38068875669841",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8765580654144287,
    "tries": 14075
  },
  {
    "card": "4385459830628678",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9213564395904541,
    "tries": 14093
  },
  {
    "card": "30430533326073",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023637056350708,
    "tries": 14099
  },
  {
    "card": "4322437857281",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0219054222106934,
    "tries": 14105
  },
  {
    "card": "4221765172976790",
    "bank": "Desconhecido",
    "country": "Germany",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0084781646728516,
    "tries": 14111
  },
  {
    "card": "370708691333355",
    "bank": "AMERICAN EXPRESS",
    "country": "Mexico",
    "brand": "amex",
    "type": "credit",
    "time": 1.023042917251587,
    "tries": 14117
  },
  {
    "card": "213146017257720",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0248305797576904,
    "tries": 14123
  },
  {
    "card": "3576712396832295",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233933925628662,
    "tries": 14129
  },
  {
    "card": "639072938256",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9211313724517822,
    "tries": 14135
  },
  {
    "card": "180050487804681",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023740530014038,
    "tries": 14141
  },
  {
    "card": "4327500307909678",
    "bank": "TRI-POINTE COMMUNITY C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023514986038208,
    "tries": 14147
  },
  {
    "card": "4526112945957835",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.92071533203125,
    "tries": 14153
  },
  {
    "card": "4330083305983495",
    "bank": "CREDIT LIBANAIS S.A.L.",
    "country": "Lebanon",
    "brand": "visa",
    "type": "credit",
    "time": 0.9208714962005615,
    "tries": 14159
  },
  {
    "card": "4586733991941",
    "bank": "Desconhecido",
    "country": "Germany",
    "brand": "visa",
    "type": "debit",
    "time": 1.02215576171875,
    "tries": 14166
  },
  {
    "card": "584854472522",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0256927013397217,
    "tries": 14171
  },
  {
    "card": "4089592594859052",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.921471118927002,
    "tries": 14178
  },
  {
    "card": "4372649989947389060",
    "bank": "Desconhecido",
    "country": "Austria",
    "brand": "visa",
    "type": "debit",
    "time": 0.920846700668335,
    "tries": 14184
  },
  {
    "card": "3558682530489967",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9466915130615234,
    "tries": 14196
  },
  {
    "card": "4481299418945",
    "bank": "WELLS FARGO BANK NEVADA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9980471134185791,
    "tries": 14202
  },
  {
    "card": "213138775490676",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211380481719971,
    "tries": 14208
  },
  {
    "card": "4255389314689",
    "bank": "SWEDBANK AB",
    "country": "Lithuania",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235445499420166,
    "tries": 14215
  },
  {
    "card": "213183253863143",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236434936523438,
    "tries": 14220
  },
  {
    "card": "4761005474778909",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234463214874268,
    "tries": 14233
  },
  {
    "card": "4828662796218",
    "bank": "WACHOVIA BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9205889701843262,
    "tries": 14239
  },
  {
    "card": "4127943543861430",
    "bank": "BRB-BANCO DE BRASILIA, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233750343322754,
    "tries": 14245
  },
  {
    "card": "3578848770044434",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.920769453048706,
    "tries": 14251
  },
  {
    "card": "30573570433219",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9210813045501709,
    "tries": 14263
  },
  {
    "card": "6011351394798012",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235564708709717,
    "tries": 14269
  },
  {
    "card": "3581362519536994",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232014656066895,
    "tries": 14275
  },
  {
    "card": "4511805016143113",
    "bank": "ERSTE BANK HUNGARY RT.",
    "country": "Hungary",
    "brand": "visa",
    "type": "debit",
    "time": 1.0243892669677734,
    "tries": 14281
  },
  {
    "card": "4114799097675",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234637260437012,
    "tries": 14293
  },
  {
    "card": "6505288408827309",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0226390361785889,
    "tries": 14299
  },
  {
    "card": "4535791688808",
    "bank": "ROCK BRANCH COMMUNITY BANK, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234038829803467,
    "tries": 14311
  },
  {
    "card": "30291880528426",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0241563320159912,
    "tries": 14317
  },
  {
    "card": "4209280542403877",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.921123743057251,
    "tries": 14329
  },
  {
    "card": "5533700373684562",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 1.0233919620513916,
    "tries": 14347
  },
  {
    "card": "4508813415618942481",
    "bank": "BANCO SANTANDER CHILE",
    "country": "Chile",
    "brand": "visa",
    "type": "credit",
    "time": 0.921311616897583,
    "tries": 14353
  },
  {
    "card": "30439667153179",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0241727828979492,
    "tries": 14371
  },
  {
    "card": "3567502642599090",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1260223388671875,
    "tries": 14407
  },
  {
    "card": "4175626655753",
    "bank": "VORBASSE-HEJNSVIG SPAREKASSE",
    "country": "Denmark",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236880779266357,
    "tries": 14412
  },
  {
    "card": "3579182190109497",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.921065092086792,
    "tries": 14418
  },
  {
    "card": "3578204007748647",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235943794250488,
    "tries": 14424
  },
  {
    "card": "4684666130652814",
    "bank": "INTERSTATE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.921414852142334,
    "tries": 14430
  },
  {
    "card": "4858436085796960",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233197212219238,
    "tries": 14436
  },
  {
    "card": "30464237281250",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0234770774841309,
    "tries": 14442
  },
  {
    "card": "180004852738149",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232679843902588,
    "tries": 14448
  },
  {
    "card": "4966932925233943157",
    "bank": "BANCO BILBAO VIZCAYA ARGENTARIA S.A. (BBVA)",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 0.9170823097229004,
    "tries": 14460
  },
  {
    "card": "6011784492759967",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.0235881805419922,
    "tries": 14478
  },
  {
    "card": "3553457610981919",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0225508213043213,
    "tries": 14484
  },
  {
    "card": "30407648252923",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023542881011963,
    "tries": 14502
  },
  {
    "card": "30282284250758",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9861235618591309,
    "tries": 14508
  },
  {
    "card": "30097788881241",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9207272529602051,
    "tries": 14514
  },
  {
    "card": "4538630307637782",
    "bank": "MITSUBISHI UFJ FINANCIAL GROUP, INC.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235140323638916,
    "tries": 14526
  },
  {
    "card": "4610210490225",
    "bank": "BRIGHT STAR CREDIT UNION",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0223913192749023,
    "tries": 14532
  },
  {
    "card": "4501468335571811",
    "bank": "BARCLAYS BANK PLC",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233964920043945,
    "tries": 14537
  },
  {
    "card": "4316303429119237924",
    "bank": "FIA CARD SERVICES, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9209444522857666,
    "tries": 14543
  },
  {
    "card": "3563160878978795",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235280990600586,
    "tries": 14561
  },
  {
    "card": "3551285599740929",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0237839221954346,
    "tries": 14567
  },
  {
    "card": "4421961548095856",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.1261498928070068,
    "tries": 14579
  },
  {
    "card": "6547717419321753",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023552417755127,
    "tries": 14591
  },
  {
    "card": "180004340084940",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235390663146973,
    "tries": 14597
  },
  {
    "card": "4695428474900318",
    "bank": "COMMUNITY CHOICE C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023390293121338,
    "tries": 14609
  },
  {
    "card": "4135511420986",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235252380371094,
    "tries": 14615
  },
  {
    "card": "6011432089045859",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9206914901733398,
    "tries": 14626
  },
  {
    "card": "675911591682",
    "bank": "BARCLAYS BANK PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9205031394958496,
    "tries": 14632
  },
  {
    "card": "30136212345033",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0234932899475098,
    "tries": 14639
  },
  {
    "card": "3539482486681814",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9212009906768799,
    "tries": 14645
  },
  {
    "card": "30533412065934",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9211833477020264,
    "tries": 14657
  },
  {
    "card": "378107017588481",
    "bank": "AMERICAN EXPRESS US",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0225155353546143,
    "tries": 14663
  },
  {
    "card": "4328240783299706111",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0251944065093994,
    "tries": 14668
  },
  {
    "card": "3534465238146926",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0221166610717773,
    "tries": 14674
  },
  {
    "card": "6011748073389643",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.98044753074646,
    "tries": 14686
  },
  {
    "card": "4924981530619143",
    "bank": "VISA ARGENTINA, S.A.",
    "country": "Argentina",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235199928283691,
    "tries": 14692
  },
  {
    "card": "4258636427772985",
    "bank": "KOOKMIN BANK",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234477519989014,
    "tries": 14698
  },
  {
    "card": "180051621703615",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.125713586807251,
    "tries": 14716
  },
  {
    "card": "4523480947613471",
    "bank": "Desconhecido",
    "country": "Panama",
    "brand": "visa",
    "type": "credit",
    "time": 1.1252245903015137,
    "tries": 14727
  },
  {
    "card": "3534711841691695",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.2276508808135986,
    "tries": 14733
  },
  {
    "card": "4098765322575062",
    "bank": "CB BFG-CREDIT",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0247275829315186,
    "tries": 14738
  },
  {
    "card": "3547453124531539",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0238256454467773,
    "tries": 14745
  },
  {
    "card": "213160553281275",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0227115154266357,
    "tries": 14750
  },
  {
    "card": "374164549797654",
    "bank": "AMERICAN EXPRESS",
    "country": "Belgium",
    "brand": "amex",
    "type": "credit",
    "time": 1.130906343460083,
    "tries": 14756
  },
  {
    "card": "6551617865011853",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9204690456390381,
    "tries": 14762
  },
  {
    "card": "5147141081218534",
    "bank": "JACK HENRY AND ASSOCIATES",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.815377950668335,
    "tries": 14768
  },
  {
    "card": "4199213162769196",
    "bank": "COOPERATIVA DE AHORRO Y CREDITO ORIENTAL",
    "country": "Puerto Rico",
    "brand": "visa",
    "type": "credit",
    "time": 1.0230960845947266,
    "tries": 14775
  },
  {
    "card": "4362453081112851",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0237140655517578,
    "tries": 14781
  },
  {
    "card": "30541071729633",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231945514678955,
    "tries": 14787
  },
  {
    "card": "4565990497380023",
    "bank": "UNITED OVERSEAS BANK, LTD.",
    "country": "Singapore",
    "brand": "visa",
    "type": "debit",
    "time": 0.9213526248931885,
    "tries": 14793
  },
  {
    "card": "4662106317699938",
    "bank": "PARK NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9212591648101807,
    "tries": 14799
  },
  {
    "card": "675920380713",
    "bank": "CLYDESDALE BANK PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232703685760498,
    "tries": 14805
  },
  {
    "card": "4172573766425326",
    "bank": "UNICREDIT S.P.A.",
    "country": "Italy",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235626697540283,
    "tries": 14823
  },
  {
    "card": "3574503467815505",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0227229595184326,
    "tries": 14835
  },
  {
    "card": "4159940016852269",
    "bank": "UNITED MEDICAL BANK, F.S.B.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9209492206573486,
    "tries": 14847
  },
  {
    "card": "180069576728908",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023444414138794,
    "tries": 14853
  },
  {
    "card": "5225756223554291",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.921940803527832,
    "tries": 14865
  },
  {
    "card": "4793968163550374674",
    "bank": "BANCO MERCANTIL FINASA S.A. - SAO PAULO",
    "country": "Brazil",
    "brand": "visa",
    "type": "debit",
    "time": 0.9256224632263184,
    "tries": 14883
  },
  {
    "card": "4569429490832",
    "bank": "TELLER, A.S.",
    "country": "Norway",
    "brand": "visa",
    "type": "debit",
    "time": 0.9230191707611084,
    "tries": 14901
  },
  {
    "card": "3570513116600681",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.024848222732544,
    "tries": 14907
  },
  {
    "card": "4605589790114",
    "bank": "LAKE TRUST C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229053497314453,
    "tries": 14919
  },
  {
    "card": "30000280112610",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231523513793945,
    "tries": 14925
  },
  {
    "card": "4896861905401",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0362012386322021,
    "tries": 14930
  },
  {
    "card": "180040240460467",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0230717658996582,
    "tries": 14936
  },
  {
    "card": "4214548620684",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232865810394287,
    "tries": 14960
  },
  {
    "card": "4144024050523454",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229246616363525,
    "tries": 14972
  },
  {
    "card": "4836240531755241384",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0229191780090332,
    "tries": 14978
  },
  {
    "card": "4375181484769",
    "bank": "SUBSIDIARY BANK SBERBANK OF RUSSIA PJSC",
    "country": "Ukraine",
    "brand": "visa",
    "type": "debit",
    "time": 1.1231980323791504,
    "tries": 14983
  },
  {
    "card": "4811202791200416",
    "bank": "BANK OF HAWAII CREDIT CARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.1264545917510986,
    "tries": 14989
  },
  {
    "card": "3531143843928656",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0229463577270508,
    "tries": 14995
  },
  {
    "card": "213173226120044",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0346596240997314,
    "tries": 15001
  },
  {
    "card": "6562446216384984",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233511924743652,
    "tries": 15007
  },
  {
    "card": "6575974650890591",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023749828338623,
    "tries": 15013
  },
  {
    "card": "213159879003793",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0972464084625244,
    "tries": 15019
  },
  {
    "card": "4822999465988393",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.02359938621521,
    "tries": 15025
  },
  {
    "card": "4848817032944691",
    "bank": "CJSC CREDEXBANK",
    "country": "Belarus",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211723804473877,
    "tries": 15031
  },
  {
    "card": "3558826473175964",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232141017913818,
    "tries": 15043
  },
  {
    "card": "5216629498709315",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.9208462238311768,
    "tries": 15049
  },
  {
    "card": "4425434618360939409",
    "bank": "CORNER BANQUE (LUXEMBOURG), S.A.",
    "country": "Liechtenstein",
    "brand": "visa",
    "type": "credit",
    "time": 1.0269012451171875,
    "tries": 15055
  },
  {
    "card": "4464138530055978",
    "bank": "VERITY C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0225028991699219,
    "tries": 15067
  },
  {
    "card": "180074290401022",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0230495929718018,
    "tries": 15073
  },
  {
    "card": "4105508168104",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0075719356536865,
    "tries": 15079
  },
  {
    "card": "501851400033",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0237774848937988,
    "tries": 15085
  },
  {
    "card": "4661508881724",
    "bank": "GE CAPITAL CONSUMER CARD CO.",
    "country": "Colombia",
    "brand": "visa",
    "type": "credit",
    "time": 1.0242905616760254,
    "tries": 15091
  },
  {
    "card": "4832452281533876",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023524522781372,
    "tries": 15097
  },
  {
    "card": "4372524815013710",
    "bank": "Desconhecido",
    "country": "Austria",
    "brand": "visa",
    "type": "debit",
    "time": 1.0238242149353027,
    "tries": 15109
  },
  {
    "card": "4152591526632",
    "bank": "CITICORP PAYMENT SERVICES, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0196583271026611,
    "tries": 15116
  },
  {
    "card": "4835274136078421969",
    "bank": "BOC CREDIT CARD (INTERNATIONAL), LTD.",
    "country": "Hong Kong",
    "brand": "visa",
    "type": "credit",
    "time": 1.023573398590088,
    "tries": 15122
  },
  {
    "card": "676261175555",
    "bank": "Desconhecido",
    "country": "Azerbaijan",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232422351837158,
    "tries": 15134
  },
  {
    "card": "6557518336947747",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235517024993896,
    "tries": 15140
  },
  {
    "card": "4807507550023973",
    "bank": "M AND I (MARSHALL AND ILSLEY) BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9204254150390625,
    "tries": 15152
  },
  {
    "card": "4601611168063583",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235388278961182,
    "tries": 15164
  },
  {
    "card": "4401863051655819048",
    "bank": "F BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9212253093719482,
    "tries": 15176
  },
  {
    "card": "589697117838",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9234161376953125,
    "tries": 15182
  },
  {
    "card": "6011946604886224",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0234684944152832,
    "tries": 15188
  },
  {
    "card": "180000289377568",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234589576721191,
    "tries": 15194
  },
  {
    "card": "378389247828131",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0248441696166992,
    "tries": 15200
  },
  {
    "card": "4183950134716718",
    "bank": "Desconhecido",
    "country": "Zambia",
    "brand": "visa",
    "type": "credit",
    "time": 1.0199344158172607,
    "tries": 15206
  },
  {
    "card": "589140360498",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0236542224884033,
    "tries": 15217
  },
  {
    "card": "4377400847206772624",
    "bank": "EASTERN BANK, LTD.",
    "country": "Bangladesh",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230062007904053,
    "tries": 15223
  },
  {
    "card": "3554172522595173",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9167218208312988,
    "tries": 15235
  },
  {
    "card": "3555845499570480",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0241639614105225,
    "tries": 15247
  },
  {
    "card": "3544989805638252",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235774517059326,
    "tries": 15253
  },
  {
    "card": "373890760839319",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.9207944869995117,
    "tries": 15259
  },
  {
    "card": "6011746758130209",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9207127094268799,
    "tries": 15265
  },
  {
    "card": "4688515566758791",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9208714962005615,
    "tries": 15271
  },
  {
    "card": "3541141549834473",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9207260608673096,
    "tries": 15277
  },
  {
    "card": "180041339378545",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232312679290771,
    "tries": 15283
  },
  {
    "card": "3535167578906419",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.125547170639038,
    "tries": 15295
  },
  {
    "card": "4510649455353",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234289169311523,
    "tries": 15305
  },
  {
    "card": "4306049723544219",
    "bank": "MUNICIPAL EMPLOYEES CREDIT UNION OF BALTIMORE, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234651565551758,
    "tries": 15311
  },
  {
    "card": "4376871878954618489",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9179608821868896,
    "tries": 15323
  },
  {
    "card": "4158369232255593838",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232429504394531,
    "tries": 15329
  },
  {
    "card": "6539132265794899",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0234010219573975,
    "tries": 15335
  },
  {
    "card": "584884352900",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0238456726074219,
    "tries": 15340
  },
  {
    "card": "5260335892714605",
    "bank": "CHASE MANHATTAN BANK (USA)",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 1.0234882831573486,
    "tries": 15346
  },
  {
    "card": "676211698557",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232021808624268,
    "tries": 15352
  },
  {
    "card": "4527813700794",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9209558963775635,
    "tries": 15358
  },
  {
    "card": "4001889590400112",
    "bank": "LUFTHANSA AIRPLUS SERVICEKARTEN GMBH",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 1.023446798324585,
    "tries": 15364
  },
  {
    "card": "4490708638959046",
    "bank": "DARLINGTON COUNTY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234472751617432,
    "tries": 15370
  },
  {
    "card": "4389235794222880",
    "bank": "SWEDBANK, A.S.",
    "country": "Latvia",
    "brand": "visa",
    "type": "credit",
    "time": 1.125633955001831,
    "tries": 15376
  },
  {
    "card": "4174516607695639",
    "bank": "USB BANK PLC",
    "country": "Cyprus",
    "brand": "visa",
    "type": "debit",
    "time": 1.0228183269500732,
    "tries": 15382
  },
  {
    "card": "6011902263201932",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.0239078998565674,
    "tries": 15388
  },
  {
    "card": "4039875300773399",
    "bank": "FIVE STAR BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0237007141113281,
    "tries": 15411
  },
  {
    "card": "3550420663149662",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234284400939941,
    "tries": 15417
  },
  {
    "card": "4140090135834832946",
    "bank": "CITIBANK",
    "country": "Indonesia",
    "brand": "visa",
    "type": "credit",
    "time": 1.0240540504455566,
    "tries": 15423
  },
  {
    "card": "180006925688029",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8485112190246582,
    "tries": 15435
  },
  {
    "card": "4036927247508579",
    "bank": "VISA ARGENTINA, S.A.",
    "country": "Argentina",
    "brand": "visa",
    "type": "credit",
    "time": 1.0231006145477295,
    "tries": 15441
  },
  {
    "card": "38735833756825",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9210805892944336,
    "tries": 15447
  },
  {
    "card": "4426009996706",
    "bank": "U.S. BANK N.A. ND",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9213716983795166,
    "tries": 15453
  },
  {
    "card": "371061205495305",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.126469373703003,
    "tries": 15459
  },
  {
    "card": "3583724968183354",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023106575012207,
    "tries": 15465
  },
  {
    "card": "4913206575060",
    "bank": "ATLANTIC BANK, LTD.",
    "country": "Belize",
    "brand": "visa",
    "type": "credit",
    "time": 1.15616774559021,
    "tries": 15477
  },
  {
    "card": "3539753772924443",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.3356397151947021,
    "tries": 15482
  },
  {
    "card": "378946768143701",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.8982272148132324,
    "tries": 15488
  },
  {
    "card": "4784447178955072202",
    "bank": "WAYNE TEACHERS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234224796295166,
    "tries": 15494
  },
  {
    "card": "4639842693413896",
    "bank": "SUNRISE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023010015487671,
    "tries": 15512
  },
  {
    "card": "3558506757903691",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.920910120010376,
    "tries": 15518
  },
  {
    "card": "3533673592357705",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.330476999282837,
    "tries": 15529
  },
  {
    "card": "180077847187077",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1359221935272217,
    "tries": 15535
  },
  {
    "card": "3568671648575310",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0230884552001953,
    "tries": 15540
  },
  {
    "card": "6561286849920841",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9208664894104004,
    "tries": 15546
  },
  {
    "card": "180082575208269",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9204468727111816,
    "tries": 15552
  },
  {
    "card": "4362151487085947840",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0229580402374268,
    "tries": 15558
  },
  {
    "card": "372251258241768",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0234034061431885,
    "tries": 15564
  },
  {
    "card": "30545982543413",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0226836204528809,
    "tries": 15582
  },
  {
    "card": "4868859127802504",
    "bank": "ITS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.1259491443634033,
    "tries": 15594
  },
  {
    "card": "213154586215897",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1235945224761963,
    "tries": 15604
  },
  {
    "card": "4707085669386",
    "bank": "U.S. BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234453678131104,
    "tries": 15610
  },
  {
    "card": "4426286287662",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9953768253326416,
    "tries": 15622
  },
  {
    "card": "4777036011009522362",
    "bank": "REGIONS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0150668621063232,
    "tries": 15628
  },
  {
    "card": "6011031941186487",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.125645399093628,
    "tries": 15633
  },
  {
    "card": "4489979443828",
    "bank": "NATIONAL CITY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.921431303024292,
    "tries": 15639
  },
  {
    "card": "3560203621283122",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023660659790039,
    "tries": 15645
  },
  {
    "card": "4613124257654797",
    "bank": "NORDSTROM F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234308242797852,
    "tries": 15651
  },
  {
    "card": "4341264076284241",
    "bank": "NATIONAL SOCIETE GENERALE BANK S.A.E.",
    "country": "Egypt",
    "brand": "visa",
    "type": "credit",
    "time": 1.022843837738037,
    "tries": 15657
  },
  {
    "card": "38250914346371",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230627059936523,
    "tries": 15663
  },
  {
    "card": "3530800811176987",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232222080230713,
    "tries": 15669
  },
  {
    "card": "213171827432149",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9207320213317871,
    "tries": 15675
  },
  {
    "card": "6545344297960594",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0228300094604492,
    "tries": 15681
  },
  {
    "card": "4331277863984726",
    "bank": "ITS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0410778522491455,
    "tries": 15699
  },
  {
    "card": "4644321265257687",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235302448272705,
    "tries": 15711
  },
  {
    "card": "4327968919792743",
    "bank": "OMNI BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023543119430542,
    "tries": 15717
  },
  {
    "card": "4211654374726",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9209809303283691,
    "tries": 15723
  },
  {
    "card": "4769848770047244",
    "bank": "Desconhecido",
    "country": "Namibia",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236616134643555,
    "tries": 15729
  },
  {
    "card": "4862065227521",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0258121490478516,
    "tries": 15735
  },
  {
    "card": "3578470791911671",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023338794708252,
    "tries": 15741
  },
  {
    "card": "4190920957036883",
    "bank": "KATAHDIN F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.92099928855896,
    "tries": 15748
  },
  {
    "card": "3582145157511893",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.050961971282959,
    "tries": 15754
  },
  {
    "card": "4876484398655",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233819484710693,
    "tries": 15772
  },
  {
    "card": "4175832348364784",
    "bank": "VORDINGBORG BANK A/S",
    "country": "Denmark",
    "brand": "visa",
    "type": "debit",
    "time": 1.0233776569366455,
    "tries": 15789
  },
  {
    "card": "4971269446942",
    "bank": "CCF - CREDIT DE COMMERCIAL DE FRANCE, S.A.",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 1.0247607231140137,
    "tries": 15795
  },
  {
    "card": "3586963765448506",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0261285305023193,
    "tries": 15801
  },
  {
    "card": "4997217240224839",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9210419654846191,
    "tries": 15807
  },
  {
    "card": "30034708224467",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.137589693069458,
    "tries": 15819
  },
  {
    "card": "6011009055082742",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0226788520812988,
    "tries": 15830
  },
  {
    "card": "3577794353084275",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0167505741119385,
    "tries": 15836
  },
  {
    "card": "4065366846611936",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0238378047943115,
    "tries": 15843
  },
  {
    "card": "4320915182248",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1078126430511475,
    "tries": 15848
  },
  {
    "card": "371515584462236",
    "bank": "AMERICAN EXPRESS",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.023343563079834,
    "tries": 15853
  },
  {
    "card": "3574954661606820",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235204696655273,
    "tries": 15859
  },
  {
    "card": "3528103865427222",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0227835178375244,
    "tries": 15871
  },
  {
    "card": "4737312148664",
    "bank": "RIVERSIDE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.1258854866027832,
    "tries": 15883
  },
  {
    "card": "4748328844994418081",
    "bank": "CATHAY UNITED BANK",
    "country": "Taiwan, Province of China[a]",
    "brand": "visa",
    "type": "credit",
    "time": 1.125960111618042,
    "tries": 15889
  },
  {
    "card": "4228151236570",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1265857219696045,
    "tries": 15895
  },
  {
    "card": "4745299868611518",
    "bank": "Desconhecido",
    "country": "Brazil",
    "brand": "visa",
    "type": "debit",
    "time": 1.0233330726623535,
    "tries": 15900
  },
  {
    "card": "501855408685",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0234522819519043,
    "tries": 15906
  },
  {
    "card": "3554093769519165",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0241386890411377,
    "tries": 15912
  },
  {
    "card": "6011741280337471",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.920708417892456,
    "tries": 15918
  },
  {
    "card": "4583554014233137",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023369312286377,
    "tries": 15924
  },
  {
    "card": "4254034407810231957",
    "bank": "BANKATLANTIC",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232493877410889,
    "tries": 15936
  },
  {
    "card": "4742524635623",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9213423728942871,
    "tries": 15942
  },
  {
    "card": "3567997068647094",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0160136222839355,
    "tries": 15948
  },
  {
    "card": "4182130994955257",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235447883605957,
    "tries": 15954
  },
  {
    "card": "4953041397090625",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1188173294067383,
    "tries": 15960
  },
  {
    "card": "30203698295858",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0234463214874268,
    "tries": 15972
  },
  {
    "card": "30509933850368",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023362398147583,
    "tries": 15977
  },
  {
    "card": "6517865351147037",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0064826011657715,
    "tries": 15983
  },
  {
    "card": "4145349568021",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0313897132873535,
    "tries": 15989
  },
  {
    "card": "3557733673801822",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9216389656066895,
    "tries": 16008
  },
  {
    "card": "377735655076970",
    "bank": "AUSTRALIA AND NEW ZEALAND BANKING GROUP LTD. FREQUENT FLYER",
    "country": "Australia",
    "brand": "amex",
    "type": "credit",
    "time": 1.024188756942749,
    "tries": 16020
  },
  {
    "card": "180090563305450",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9206879138946533,
    "tries": 16032
  },
  {
    "card": "4335394580845548",
    "bank": "SHOSHONE FIRST BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.921358585357666,
    "tries": 16038
  },
  {
    "card": "4240602669008307",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 2.143198251724243,
    "tries": 16043
  },
  {
    "card": "4776515876662891151",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0229263305664062,
    "tries": 16049
  },
  {
    "card": "4926622860295682329",
    "bank": "WESCOM CENTRAL CREDIT UNION",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0241334438323975,
    "tries": 16054
  },
  {
    "card": "6011034886312597",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9204628467559814,
    "tries": 16066
  },
  {
    "card": "4766863291810395",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023099660873413,
    "tries": 16078
  },
  {
    "card": "30195836165557",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0100808143615723,
    "tries": 16090
  },
  {
    "card": "4048474820738568",
    "bank": "CREDIT LIBANAIS S.A.L.",
    "country": "Lebanon",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236680507659912,
    "tries": 16102
  },
  {
    "card": "3586860436671328",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0274031162261963,
    "tries": 16108
  },
  {
    "card": "30451991234492",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.921255350112915,
    "tries": 16114
  },
  {
    "card": "376384813677683",
    "bank": "AMERICAN EXPRESS",
    "country": "Hong Kong",
    "brand": "amex",
    "type": "credit",
    "time": 1.0239808559417725,
    "tries": 16120
  },
  {
    "card": "4958804907439",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0201740264892578,
    "tries": 16126
  },
  {
    "card": "3537395078728417",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0270459651947021,
    "tries": 16131
  },
  {
    "card": "4675699842030",
    "bank": "ITS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9246327877044678,
    "tries": 16137
  },
  {
    "card": "4045560424058377123",
    "bank": "ABRI C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0274066925048828,
    "tries": 16143
  },
  {
    "card": "30278193027725",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9616332054138184,
    "tries": 16149
  },
  {
    "card": "3542438426339546",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0422003269195557,
    "tries": 16155
  },
  {
    "card": "3560290060790824",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9212522506713867,
    "tries": 16160
  },
  {
    "card": "30181901913337",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231068134307861,
    "tries": 16166
  },
  {
    "card": "3568617953942785",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0218133926391602,
    "tries": 16173
  },
  {
    "card": "4064446279988",
    "bank": "NLB RAZVOJNA BANKA JSC BANJA LUKA",
    "country": "Bosnia and Herzegovina",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1354103088378906,
    "tries": 16178
  },
  {
    "card": "30390156179763",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9213063716888428,
    "tries": 16184
  },
  {
    "card": "675974424037",
    "bank": "ROYAL BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0269064903259277,
    "tries": 16202
  },
  {
    "card": "377210067690602",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "amex",
    "type": "credit",
    "time": 0.9272398948669434,
    "tries": 16208
  },
  {
    "card": "3537509282203401",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023075819015503,
    "tries": 16214
  },
  {
    "card": "6513649723325321",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0229029655456543,
    "tries": 16220
  },
  {
    "card": "4790354209803",
    "bank": "ING BANK SLASKI, S.A.",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 1.1658313274383545,
    "tries": 16226
  },
  {
    "card": "4969912774892",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0237479209899902,
    "tries": 16231
  },
  {
    "card": "4226834598721754051",
    "bank": "Desconhecido",
    "country": "Paraguay",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1321032047271729,
    "tries": 16237
  },
  {
    "card": "503814325539",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0258262157440186,
    "tries": 16255
  },
  {
    "card": "4260744456001",
    "bank": "BANCO CATHAY DE COSTA RICA, S.A.",
    "country": "Costa Rica",
    "brand": "visa",
    "type": "credit",
    "time": 1.1244330406188965,
    "tries": 16261
  },
  {
    "card": "4695964870575732477",
    "bank": "BARCLAYS BANK DELAWARE",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8878676891326904,
    "tries": 16267
  },
  {
    "card": "30566452972874",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0287842750549316,
    "tries": 16279
  },
  {
    "card": "3557636640530061",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9202182292938232,
    "tries": 16285
  },
  {
    "card": "373321023561151",
    "bank": "AMERICAN EXPRESS",
    "country": "Canada",
    "brand": "amex",
    "type": "credit",
    "time": 0.9210648536682129,
    "tries": 16297
  },
  {
    "card": "4857823450535993",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.02557373046875,
    "tries": 16303
  },
  {
    "card": "4684702592711417620",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232300758361816,
    "tries": 16321
  },
  {
    "card": "4390902901285509",
    "bank": "OJSC JSCB CONVERSBANK-MOSCOW",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 0.9210448265075684,
    "tries": 16327
  },
  {
    "card": "180056085853988",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0193367004394531,
    "tries": 16333
  },
  {
    "card": "4203887983612976",
    "bank": "Desconhecido",
    "country": "Nicaragua",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0225343704223633,
    "tries": 16339
  },
  {
    "card": "30442947432264",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.2202954292297363,
    "tries": 16344
  },
  {
    "card": "4245437986937242",
    "bank": "CJSC INDUSTRIAL SAVINGS BANK, CJSC PROMSBERBANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 0.9208414554595947,
    "tries": 16349
  },
  {
    "card": "4122020371512",
    "bank": "HSBC BANK NEVADA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.2253069877624512,
    "tries": 16355
  },
  {
    "card": "4680500706966544",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.1228923797607422,
    "tries": 16367
  },
  {
    "card": "4473793970448",
    "bank": "OJSC BANK URALSIB",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.020061731338501,
    "tries": 16372
  },
  {
    "card": "4111832120354117",
    "bank": "Desconhecido",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.2245450019836426,
    "tries": 16384
  },
  {
    "card": "30254082011526",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0185394287109375,
    "tries": 16389
  },
  {
    "card": "180050001978334",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0216326713562012,
    "tries": 16395
  },
  {
    "card": "30293723560087",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0237183570861816,
    "tries": 16400
  },
  {
    "card": "4418223550771212",
    "bank": "FIRST NATIONAL BANK OF OMAHA",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.135195255279541,
    "tries": 16418
  },
  {
    "card": "3563758155039858",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023103952407837,
    "tries": 16435
  },
  {
    "card": "4379993624289568",
    "bank": "Desconhecido",
    "country": "Argentina",
    "brand": "visa",
    "type": "debit",
    "time": 1.123870611190796,
    "tries": 16441
  },
  {
    "card": "38116814603270",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9238429069519043,
    "tries": 16447
  },
  {
    "card": "4348720000510731",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023557186126709,
    "tries": 16459
  },
  {
    "card": "6593405454840332",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.026869773864746,
    "tries": 16465
  },
  {
    "card": "4809599262795228",
    "bank": "BANKER'S BANK OF KANSAS, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0228872299194336,
    "tries": 16470
  },
  {
    "card": "3553869398706799",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9213109016418457,
    "tries": 16482
  },
  {
    "card": "180090337562105",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.019763469696045,
    "tries": 16488
  },
  {
    "card": "4146091270305614",
    "bank": "SOCIETE GENERALE DE BANQUES EN COTE D'IVOIRE (SGBCI)",
    "country": "Côte d'Ivoire",
    "brand": "visa",
    "type": "debit",
    "time": 1.023545503616333,
    "tries": 16500
  },
  {
    "card": "4617971587648747549",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "credit",
    "time": 1.024003267288208,
    "tries": 16512
  },
  {
    "card": "38786280587080",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.020566463470459,
    "tries": 16518
  },
  {
    "card": "30162221149281",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8498661518096924,
    "tries": 16524
  },
  {
    "card": "675976290816",
    "bank": "ROYAL BANK OF SCOTLAND PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.2905073165893555,
    "tries": 16530
  },
  {
    "card": "4558875102639642726",
    "bank": "CREDIT AGRICOLE, S.A.",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 1.0027308464050293,
    "tries": 16535
  },
  {
    "card": "4888337665016",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0237641334533691,
    "tries": 16540
  },
  {
    "card": "180063907333280",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236976146697998,
    "tries": 16552
  },
  {
    "card": "3543240401541941",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0275843143463135,
    "tries": 16558
  },
  {
    "card": "30115373554666",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8794562816619873,
    "tries": 16564
  },
  {
    "card": "4145624422772744",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1352148056030273,
    "tries": 16582
  },
  {
    "card": "3539411461573779",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9207878112792969,
    "tries": 16588
  },
  {
    "card": "4153569743400922",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235021114349365,
    "tries": 16594
  },
  {
    "card": "4510164058053373985",
    "bank": "ROYAL BANK OF CANADA",
    "country": "Canada",
    "brand": "visa",
    "type": "debit",
    "time": 1.0237078666687012,
    "tries": 16600
  },
  {
    "card": "4363178294093106",
    "bank": "Desconhecido",
    "country": "Indonesia",
    "brand": "visa",
    "type": "debit",
    "time": 1.023087501525879,
    "tries": 16618
  },
  {
    "card": "4752787024769865",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1256723403930664,
    "tries": 16630
  },
  {
    "card": "5158530982253390",
    "bank": "BANCO GUIPUZCOANO, S.A.",
    "country": "Spain",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.023390769958496,
    "tries": 16636
  },
  {
    "card": "4499261014052415069",
    "bank": "ITS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236127376556396,
    "tries": 16642
  },
  {
    "card": "36184425177862",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "discover",
    "type": "credit",
    "time": 1.0237224102020264,
    "tries": 16648
  },
  {
    "card": "6513573446384029",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231566429138184,
    "tries": 16654
  },
  {
    "card": "3533556256958050",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211733341217041,
    "tries": 16660
  },
  {
    "card": "213150046895583",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234088897705078,
    "tries": 16666
  },
  {
    "card": "373070623481183",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 2.6647884845733643,
    "tries": 16689
  },
  {
    "card": "4286555010933018",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234136581420898,
    "tries": 16699
  },
  {
    "card": "639052866840",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0239105224609375,
    "tries": 16706
  },
  {
    "card": "6011490274796025",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9211852550506592,
    "tries": 16711
  },
  {
    "card": "6576412588119014",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0250861644744873,
    "tries": 16717
  },
  {
    "card": "3549799031269904",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0398716926574707,
    "tries": 16723
  },
  {
    "card": "213178975481612",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232791900634766,
    "tries": 16729
  },
  {
    "card": "4355271959701517",
    "bank": "HERITAGE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9290416240692139,
    "tries": 16735
  },
  {
    "card": "3583853395912216",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0230462551116943,
    "tries": 16740
  },
  {
    "card": "6506094569348542",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1331236362457275,
    "tries": 16746
  },
  {
    "card": "180073013976518",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9202935695648193,
    "tries": 16752
  },
  {
    "card": "6011799704723692",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.0232090950012207,
    "tries": 16759
  },
  {
    "card": "38679639852596",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230934619903564,
    "tries": 16765
  },
  {
    "card": "30136328666645",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1268086433410645,
    "tries": 16770
  },
  {
    "card": "4099897133573",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0231940746307373,
    "tries": 16776
  },
  {
    "card": "4003113427716918676",
    "bank": "INTESA SANPAOLO S.P.A.",
    "country": "Italy",
    "brand": "visa",
    "type": "debit",
    "time": 1.0222370624542236,
    "tries": 16788
  },
  {
    "card": "3535953454518844",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9942352771759033,
    "tries": 16794
  },
  {
    "card": "4766958734121573859",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9190680980682373,
    "tries": 16800
  },
  {
    "card": "567354935569",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.1255245208740234,
    "tries": 16806
  },
  {
    "card": "4989001603975691387",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0228984355926514,
    "tries": 16812
  },
  {
    "card": "4158890580849897",
    "bank": "CHEYENNE-LARAMIE COUNTY EMPLOYEES F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236599445343018,
    "tries": 16818
  },
  {
    "card": "379206213686096",
    "bank": "AMERICAN EXPRESS US",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.9162886142730713,
    "tries": 16830
  },
  {
    "card": "4410650890772",
    "bank": "Desconhecido",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232625007629395,
    "tries": 16842
  },
  {
    "card": "180069363098838",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209420680999756,
    "tries": 16848
  },
  {
    "card": "4997490234302424689",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1346795558929443,
    "tries": 16853
  },
  {
    "card": "3583050526644087",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0226705074310303,
    "tries": 16859
  },
  {
    "card": "379079979705800",
    "bank": "TRAVELLERS CHEQUE",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "debit",
    "time": 1.218454122543335,
    "tries": 16865
  },
  {
    "card": "4180020131569061083",
    "bank": "M AND I (MARSHALL AND ILSLEY) BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023144006729126,
    "tries": 16870
  },
  {
    "card": "3571626365871313",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211447238922119,
    "tries": 16877
  },
  {
    "card": "373010603281542",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.1285696029663086,
    "tries": 16895
  },
  {
    "card": "3576723663975402",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.125793695449829,
    "tries": 16900
  },
  {
    "card": "4257484247459",
    "bank": "CITIBANK AG",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 1.024094581604004,
    "tries": 16906
  },
  {
    "card": "4072454909682316",
    "bank": "BANK OF LAKEVIEW",
    "country": "El Salvador",
    "brand": "visa",
    "type": "debit",
    "time": 0.9134681224822998,
    "tries": 16912
  },
  {
    "card": "6011906129358448",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.023536205291748,
    "tries": 16924
  },
  {
    "card": "180021886380011",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.921269416809082,
    "tries": 16930
  },
  {
    "card": "4555190770575132",
    "bank": "BBVA BANCOMER, S.A.",
    "country": "Mexico",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233557224273682,
    "tries": 16942
  },
  {
    "card": "4769148752076885",
    "bank": "BOKF NATIONAL ASSOCIATION",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0239968299865723,
    "tries": 16954
  },
  {
    "card": "30426426508561",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9203836917877197,
    "tries": 16972
  },
  {
    "card": "3553026546169483",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235581398010254,
    "tries": 16978
  },
  {
    "card": "6511183678998751",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.2279052734375,
    "tries": 16984
  },
  {
    "card": "6011039626586228",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9812800884246826,
    "tries": 16990
  },
  {
    "card": "4668541330510",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.035602331161499,
    "tries": 16996
  },
  {
    "card": "4239336986133679",
    "bank": "ST. GEORGE BANK, LTD.",
    "country": "Kenya",
    "brand": "visa",
    "type": "credit",
    "time": 1.33367919921875,
    "tries": 17001
  },
  {
    "card": "4548558842174035217",
    "bank": "SERVICES C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230858325958252,
    "tries": 17013
  },
  {
    "card": "4817954437871620",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023378610610962,
    "tries": 17025
  },
  {
    "card": "4908281476417127",
    "bank": "ABN AMRO (MAGYAR) BANK RT.",
    "country": "Hungary",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235321521759033,
    "tries": 17031
  },
  {
    "card": "4425626334199312580",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230190753936768,
    "tries": 17037
  },
  {
    "card": "3536636165960798",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0243926048278809,
    "tries": 17043
  },
  {
    "card": "3538425809780566",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.022655963897705,
    "tries": 17073
  },
  {
    "card": "180032712090617",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.024533748626709,
    "tries": 17079
  },
  {
    "card": "213108510811528",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9207959175109863,
    "tries": 17085
  },
  {
    "card": "6502857951461212",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.4288103580474854,
    "tries": 17091
  },
  {
    "card": "6011338642416059",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1257965564727783,
    "tries": 17097
  },
  {
    "card": "30515675120399",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.2290160655975342,
    "tries": 17102
  },
  {
    "card": "4378957817308361",
    "bank": "Desconhecido",
    "country": "Viet Nam",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232021808624268,
    "tries": 17108
  },
  {
    "card": "30134870198299",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023007869720459,
    "tries": 17114
  },
  {
    "card": "4479224141336669",
    "bank": "STONEBRIDGE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0106205940246582,
    "tries": 17120
  },
  {
    "card": "4860071523065649",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0265536308288574,
    "tries": 17144
  },
  {
    "card": "639054041939",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0235950946807861,
    "tries": 17150
  },
  {
    "card": "180012304067553",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.921513557434082,
    "tries": 17156
  },
  {
    "card": "3551254931279152",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.022613763809204,
    "tries": 17162
  },
  {
    "card": "30114817940458",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0229201316833496,
    "tries": 17168
  },
  {
    "card": "3562513411478106",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1120696067810059,
    "tries": 17174
  },
  {
    "card": "3576477556722765",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.953148365020752,
    "tries": 17180
  },
  {
    "card": "676321098409",
    "bank": "Desconhecido",
    "country": "Spain",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9203689098358154,
    "tries": 17192
  },
  {
    "card": "3544155142432516",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0226070880889893,
    "tries": 17198
  },
  {
    "card": "4673548225804",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.024230718612671,
    "tries": 17204
  },
  {
    "card": "213130098137472",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234403610229492,
    "tries": 17210
  },
  {
    "card": "38608615627995",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0223450660705566,
    "tries": 17217
  },
  {
    "card": "3572278897394874",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231077671051025,
    "tries": 17229
  },
  {
    "card": "3544304022469095",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9213430881500244,
    "tries": 17235
  },
  {
    "card": "3542410029518339",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.022508144378662,
    "tries": 17241
  },
  {
    "card": "5491601500536040",
    "bank": "UBS AG",
    "country": "Switzerland",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.9213120937347412,
    "tries": 17247
  },
  {
    "card": "4550870869716",
    "bank": "BANCO 21",
    "country": "Spain",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0230045318603516,
    "tries": 17253
  },
  {
    "card": "4962918542197723181",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235118865966797,
    "tries": 17265
  },
  {
    "card": "3540784637122201",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0132689476013184,
    "tries": 17271
  },
  {
    "card": "4901054437707",
    "bank": "BANCO ITAU, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236704349517822,
    "tries": 17277
  },
  {
    "card": "4763864462246",
    "bank": "ROYAL BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.022942066192627,
    "tries": 17283
  },
  {
    "card": "4511543475700376",
    "bank": "BARCLAYS BANK PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "None",
    "time": 1.9424092769622803,
    "tries": 17289
  },
  {
    "card": "36482659960346",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "discover",
    "type": "credit",
    "time": 0.9209282398223877,
    "tries": 17294
  },
  {
    "card": "4323264913668",
    "bank": "Desconhecido",
    "country": "Saudi Arabia",
    "brand": "visa",
    "type": "credit",
    "time": 1.0240206718444824,
    "tries": 17300
  },
  {
    "card": "4798759589347672",
    "bank": "NETBANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0239994525909424,
    "tries": 17306
  },
  {
    "card": "4602539384228510373",
    "bank": "BAY CITIES C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9173450469970703,
    "tries": 17312
  },
  {
    "card": "4139103791207145725",
    "bank": "SOUTH CENTRAL BANK OF BARREN COUNTY, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235340595245361,
    "tries": 17318
  },
  {
    "card": "4327672819774385",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.921454668045044,
    "tries": 17324
  },
  {
    "card": "30111512551853",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1209559440612793,
    "tries": 17331
  },
  {
    "card": "4769578144574",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0230984687805176,
    "tries": 17336
  },
  {
    "card": "36410405896001",
    "bank": "Desconhecido",
    "country": "Venezuela (Bolivarian Republic of)",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233790874481201,
    "tries": 17348
  },
  {
    "card": "676268744296",
    "bank": "Desconhecido",
    "country": "Slovenia",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9204869270324707,
    "tries": 17366
  },
  {
    "card": "30186947266517",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9787471294403076,
    "tries": 17378
  },
  {
    "card": "4577818014212",
    "bank": "Desconhecido",
    "country": "Uganda",
    "brand": "visa",
    "type": "credit",
    "time": 1.0230634212493896,
    "tries": 17384
  },
  {
    "card": "5148571603260136",
    "bank": "US AIRWAYS DIVIDEND MILES",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0279269218444824,
    "tries": 17401
  },
  {
    "card": "3538140517325618",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.2264962196350098,
    "tries": 17407
  },
  {
    "card": "6011062249336714",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0053317546844482,
    "tries": 17412
  },
  {
    "card": "3563617697342602",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236690044403076,
    "tries": 17418
  },
  {
    "card": "4538614310166954954",
    "bank": "MITSUBISHI UFJ NICOS CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.0230090618133545,
    "tries": 17424
  },
  {
    "card": "180072128264018",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232081413269043,
    "tries": 17436
  },
  {
    "card": "4645723875630782",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232746601104736,
    "tries": 17448
  },
  {
    "card": "4128571607738373",
    "bank": "CITIBANK (SOUTH DAKOTA), N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9205131530761719,
    "tries": 17454
  },
  {
    "card": "6011095696091499",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233485698699951,
    "tries": 17460
  },
  {
    "card": "4692883094978491772",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0215027332305908,
    "tries": 17467
  },
  {
    "card": "6011479886713262",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023496150970459,
    "tries": 17473
  },
  {
    "card": "6568521278977109",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.027069091796875,
    "tries": 17479
  },
  {
    "card": "213116264443687",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.055403709411621,
    "tries": 17484
  },
  {
    "card": "4123981170999193535",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235435962677002,
    "tries": 17490
  },
  {
    "card": "3568953520085455",
    "bank": "CHINA CONSTRUCTION BANK",
    "country": "China",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9213004112243652,
    "tries": 17497
  },
  {
    "card": "4523233733805144",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0228233337402344,
    "tries": 17503
  },
  {
    "card": "4674281588136682",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.920952558517456,
    "tries": 17509
  },
  {
    "card": "4399097584142225",
    "bank": "NATIONAL CITY BANK OF KENTUCKY",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232951641082764,
    "tries": 17515
  },
  {
    "card": "4262266545475271",
    "bank": "MBNA AMERICA BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0231480598449707,
    "tries": 17527
  },
  {
    "card": "213118747021395",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236072540283203,
    "tries": 17533
  },
  {
    "card": "4674594878272584235",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.920860767364502,
    "tries": 17539
  },
  {
    "card": "4871731903111316",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023411512374878,
    "tries": 17545
  },
  {
    "card": "4985771659016664516",
    "bank": "CITIBANK",
    "country": "China",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0249361991882324,
    "tries": 17551
  },
  {
    "card": "213168350330195",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0226972103118896,
    "tries": 17557
  },
  {
    "card": "4814223659311175",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1224820613861084,
    "tries": 17569
  },
  {
    "card": "30483980186953",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.2274143695831299,
    "tries": 17575
  },
  {
    "card": "3562696453197252",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0229113101959229,
    "tries": 17581
  },
  {
    "card": "4610090200968076",
    "bank": "BA MERCHANT SERVICES, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1265881061553955,
    "tries": 17587
  },
  {
    "card": "4115865333681872",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235507488250732,
    "tries": 17593
  },
  {
    "card": "4722891145120912",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023223876953125,
    "tries": 17599
  },
  {
    "card": "30056384477051",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0239462852478027,
    "tries": 17604
  },
  {
    "card": "180099727105086",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0229289531707764,
    "tries": 17610
  },
  {
    "card": "4918486961584319",
    "bank": "CAIXA DESTALVIS DE CATALUNYA (CAJA DE AHORROS DE CATALUNA)",
    "country": "Spain",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232911109924316,
    "tries": 17616
  },
  {
    "card": "30568167292291",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.022170066833496,
    "tries": 17622
  },
  {
    "card": "6011100834297196",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233452320098877,
    "tries": 17628
  },
  {
    "card": "4805572227526",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9554336071014404,
    "tries": 17634
  },
  {
    "card": "4802909271620852",
    "bank": "CARDINAL BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231750011444092,
    "tries": 17640
  },
  {
    "card": "4546170877822970888",
    "bank": "ING DIBA",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229949951171875,
    "tries": 17646
  },
  {
    "card": "6011274046033127",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231690406799316,
    "tries": 17652
  },
  {
    "card": "4655969289774749639",
    "bank": "comdirect bank AG",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 1.0156776905059814,
    "tries": 17658
  },
  {
    "card": "180011020675939",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9526946544647217,
    "tries": 17664
  },
  {
    "card": "30117133914370",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9255375862121582,
    "tries": 17670
  },
  {
    "card": "30444472081722",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0226173400878906,
    "tries": 17676
  },
  {
    "card": "6590290380704270",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0234169960021973,
    "tries": 17682
  },
  {
    "card": "4054024440600085",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9225099086761475,
    "tries": 17689
  },
  {
    "card": "4508844002023378627",
    "bank": "SCOTIABANK DE PUERTO RICO",
    "country": "Puerto Rico",
    "brand": "visa",
    "type": "credit",
    "time": 1.023172378540039,
    "tries": 17695
  },
  {
    "card": "4005787579872935322",
    "bank": "Desconhecido",
    "country": "China",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230903625488281,
    "tries": 17701
  },
  {
    "card": "676224947355",
    "bank": "CESKOSLOVENSKA OBCHODNI BANKA, A.S.",
    "country": "Czechia",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0233571529388428,
    "tries": 17706
  },
  {
    "card": "38684734128934",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236330032348633,
    "tries": 17712
  },
  {
    "card": "6554623581073034",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0237195491790771,
    "tries": 17719
  },
  {
    "card": "676363857100",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.022998571395874,
    "tries": 17743
  },
  {
    "card": "4101622125561269064",
    "bank": "BANK OF VALLETTA P.L.C",
    "country": "Malta",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235440731048584,
    "tries": 17749
  },
  {
    "card": "180013742377265",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9208488464355469,
    "tries": 17755
  },
  {
    "card": "4133049016293",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0230529308319092,
    "tries": 17767
  },
  {
    "card": "180019522125550",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234529972076416,
    "tries": 17773
  },
  {
    "card": "4342372128759927",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235052108764648,
    "tries": 17779
  },
  {
    "card": "6011297360032060",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9204847812652588,
    "tries": 17785
  },
  {
    "card": "4301531391062835",
    "bank": "U.S. BANK N.A. ND",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236539840698242,
    "tries": 17791
  },
  {
    "card": "38454670015861",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0228838920593262,
    "tries": 17797
  },
  {
    "card": "180045184258900",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9206631183624268,
    "tries": 17803
  },
  {
    "card": "30520022569322",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023364543914795,
    "tries": 17809
  },
  {
    "card": "4762476839869890",
    "bank": "ROYAL BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234932899475098,
    "tries": 17815
  },
  {
    "card": "6551679530280875",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.920278787612915,
    "tries": 17821
  },
  {
    "card": "4163778034460127",
    "bank": "Desconhecido",
    "country": "Italy",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231993198394775,
    "tries": 17827
  },
  {
    "card": "4333280891953304726",
    "bank": "BANK HANDLOWY W WARSZAWIE, S.A.",
    "country": "Poland",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236575603485107,
    "tries": 17839
  },
  {
    "card": "4551050216793",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230097770690918,
    "tries": 17845
  },
  {
    "card": "379686246909088",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0236105918884277,
    "tries": 17851
  },
  {
    "card": "30006189953871",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9209740161895752,
    "tries": 17857
  },
  {
    "card": "3547917356080258",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211456775665283,
    "tries": 17869
  },
  {
    "card": "4868125441874748",
    "bank": "ESSEX BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.921278715133667,
    "tries": 17881
  },
  {
    "card": "5582509904059503",
    "bank": "CHASE",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0213353633880615,
    "tries": 17887
  },
  {
    "card": "4466634609142836",
    "bank": "SERVICES C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236773490905762,
    "tries": 17893
  },
  {
    "card": "4165051701800",
    "bank": "CITIBANK",
    "country": "Hong Kong",
    "brand": "visa",
    "type": "debit",
    "time": 0.9208576679229736,
    "tries": 17899
  },
  {
    "card": "675919602614",
    "bank": "NEWCASTLE BUILDING SOCIETY",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0237483978271484,
    "tries": 17905
  },
  {
    "card": "4581963508929",
    "bank": "ENTERCARD SVERIGE AB",
    "country": "Sweden",
    "brand": "visa",
    "type": "credit",
    "time": 1.0224254131317139,
    "tries": 17911
  },
  {
    "card": "376870822380418",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "Brazil",
    "brand": "amex",
    "type": "credit",
    "time": 1.051725149154663,
    "tries": 17917
  },
  {
    "card": "5101018417457156",
    "bank": "UBS AG",
    "country": "Switzerland",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.022951364517212,
    "tries": 17924
  },
  {
    "card": "4645661119548814397",
    "bank": "Desconhecido",
    "country": "Bangladesh",
    "brand": "visa",
    "type": "credit",
    "time": 1.0238661766052246,
    "tries": 17930
  },
  {
    "card": "374337224682330",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0230903625488281,
    "tries": 17936
  },
  {
    "card": "3556067423771790",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235199928283691,
    "tries": 17942
  },
  {
    "card": "4332670978645379982",
    "bank": "FIRST NATIONAL BANK IN GARRETSON",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229084491729736,
    "tries": 17954
  },
  {
    "card": "4141128929690",
    "bank": "CAROLINA TRUST F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9554767608642578,
    "tries": 17977
  },
  {
    "card": "4775735364131900",
    "bank": "AS DNB NORD BANKA",
    "country": "Latvia",
    "brand": "visa",
    "type": "debit",
    "time": 1.022918939590454,
    "tries": 17983
  },
  {
    "card": "373024640548466",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "amex",
    "type": "credit",
    "time": 1.023805856704712,
    "tries": 18013
  },
  {
    "card": "30424022709907",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230817794799805,
    "tries": 18031
  },
  {
    "card": "4285055968538105417",
    "bank": "Desconhecido",
    "country": "Kenya",
    "brand": "visa",
    "type": "credit",
    "time": 1.023874282836914,
    "tries": 18037
  },
  {
    "card": "4888298758571722",
    "bank": "BREWERY C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234794616699219,
    "tries": 18043
  },
  {
    "card": "4477896128136935022",
    "bank": "SESLOC FEDERAL CREDIT UNION",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.02309250831604,
    "tries": 18049
  },
  {
    "card": "4117253305376235",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0233585834503174,
    "tries": 18061
  },
  {
    "card": "6011434407011167",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0235233306884766,
    "tries": 18067
  },
  {
    "card": "213163580539277",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023463487625122,
    "tries": 18073
  },
  {
    "card": "676293767593",
    "bank": "Desconhecido",
    "country": "Spain",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0233280658721924,
    "tries": 18079
  },
  {
    "card": "4755948146032670821",
    "bank": "BANK OF EVANSVILLE",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236353874206543,
    "tries": 18085
  },
  {
    "card": "676245149445",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0241501331329346,
    "tries": 18091
  },
  {
    "card": "377577434589323",
    "bank": "CENTURION",
    "country": "Bosnia and Herzegovina",
    "brand": "amex",
    "type": "credit",
    "time": 0.921156644821167,
    "tries": 18097
  },
  {
    "card": "3586970067439000",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234096050262451,
    "tries": 18103
  },
  {
    "card": "3552793083264677",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9207830429077148,
    "tries": 18109
  },
  {
    "card": "4055220285498",
    "bank": "FIRST FINANCIAL BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232186317443848,
    "tries": 18115
  },
  {
    "card": "3547048522952699",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0223479270935059,
    "tries": 18121
  },
  {
    "card": "4693013430200",
    "bank": "NASA F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.024775505065918,
    "tries": 18127
  },
  {
    "card": "4194615057558",
    "bank": "AL RAJHI BANKING AND INVESTMENT CORP.",
    "country": "Saudi Arabia",
    "brand": "visa",
    "type": "debit",
    "time": 0.9250805377960205,
    "tries": 18146
  },
  {
    "card": "180057018562167",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9199879169464111,
    "tries": 18152
  },
  {
    "card": "5168324612185463",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0245952606201172,
    "tries": 18158
  },
  {
    "card": "6582378166256555",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232737064361572,
    "tries": 18164
  },
  {
    "card": "30143381067539",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0224616527557373,
    "tries": 18176
  },
  {
    "card": "4728684239165",
    "bank": "FIRSTRAND BANK, LTD.",
    "country": "South Africa",
    "brand": "visa",
    "type": "debit",
    "time": 1.0229754447937012,
    "tries": 18182
  },
  {
    "card": "4394999244974759177",
    "bank": "Desconhecido",
    "country": "France",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230774879455566,
    "tries": 18188
  },
  {
    "card": "4430788699719235",
    "bank": "PNC BANK, N.A.",
    "country": "Paraguay",
    "brand": "visa",
    "type": "debit",
    "time": 0.9209849834442139,
    "tries": 18200
  },
  {
    "card": "639078162273",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0181610584259033,
    "tries": 18206
  },
  {
    "card": "3588076429167095",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232911109924316,
    "tries": 18212
  },
  {
    "card": "4210336085570974375",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.022792100906372,
    "tries": 18218
  },
  {
    "card": "4034721745767270",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9209578037261963,
    "tries": 18224
  },
  {
    "card": "4035023961113811",
    "bank": "BANK OF THE WEST",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023364782333374,
    "tries": 18242
  },
  {
    "card": "180053780683554",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233631134033203,
    "tries": 18248
  },
  {
    "card": "4493822166319775",
    "bank": "UNITED WORKERS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229716300964355,
    "tries": 18272
  },
  {
    "card": "4559077423504922",
    "bank": "BEDFORD LOAN AND DEPOSIT BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231671333312988,
    "tries": 18278
  },
  {
    "card": "4011881024247",
    "bank": "ENTREPRISE DES POSTES ET TELECOMMUNICATIONS",
    "country": "Luxembourg",
    "brand": "visa",
    "type": "debit",
    "time": 0.9193909168243408,
    "tries": 18284
  },
  {
    "card": "3550616332369769",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234391689300537,
    "tries": 18302
  },
  {
    "card": "4993737633639134279",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9211630821228027,
    "tries": 18308
  },
  {
    "card": "30179593986868",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231232643127441,
    "tries": 18320
  },
  {
    "card": "3574446801478541",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235986709594727,
    "tries": 18332
  },
  {
    "card": "4472796141150858",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "None",
    "time": 0.9204196929931641,
    "tries": 18338
  },
  {
    "card": "3536640292715182",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.024113655090332,
    "tries": 18344
  },
  {
    "card": "4288163405134",
    "bank": "U.S. BANK N.A. ND",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.022812843322754,
    "tries": 18350
  },
  {
    "card": "6011473779090342",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231175422668457,
    "tries": 18356
  },
  {
    "card": "4494643085709857",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0303337574005127,
    "tries": 18374
  },
  {
    "card": "30388573673772",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0238895416259766,
    "tries": 18381
  },
  {
    "card": "30519047342822",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233337879180908,
    "tries": 18387
  },
  {
    "card": "4972149502292",
    "bank": "CREDIT LYONNAIS",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 1.0239126682281494,
    "tries": 18393
  },
  {
    "card": "3585141436842990",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9219989776611328,
    "tries": 18399
  },
  {
    "card": "180029399104539",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023653268814087,
    "tries": 18411
  },
  {
    "card": "4880894047916291124",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235052108764648,
    "tries": 18417
  },
  {
    "card": "379315376853979",
    "bank": "AMERICAN EXPRESS US",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0232999324798584,
    "tries": 18423
  },
  {
    "card": "4176170944847142582",
    "bank": "OTP BANKA SLOVENSKO, A.S.",
    "country": "Slovakia",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0226500034332275,
    "tries": 18429
  },
  {
    "card": "213187226254280",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9220268726348877,
    "tries": 18441
  },
  {
    "card": "38755261721950",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023339033126831,
    "tries": 18447
  },
  {
    "card": "4097606409400397",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9208452701568604,
    "tries": 18459
  },
  {
    "card": "4019233000254043",
    "bank": "CONNEX C.U., INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9206678867340088,
    "tries": 18465
  },
  {
    "card": "4262198806673",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0241994857788086,
    "tries": 18471
  },
  {
    "card": "4079367682376216",
    "bank": "ITS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234801769256592,
    "tries": 18477
  },
  {
    "card": "4048753812192",
    "bank": "BANGKOK BANK PUBLIC CO., LTD.",
    "country": "Thailand",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234029293060303,
    "tries": 18483
  },
  {
    "card": "4331534156240",
    "bank": "ZIVNOSTENSKA BANKA",
    "country": "Czechia",
    "brand": "visa",
    "type": "credit",
    "time": 0.9212369918823242,
    "tries": 18489
  },
  {
    "card": "4709323523466102",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023406744003296,
    "tries": 18495
  },
  {
    "card": "4953328684424",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233213901519775,
    "tries": 18501
  },
  {
    "card": "4485211055818",
    "bank": "ABN AMRO BANK, N.V.",
    "country": "Netherlands",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9211289882659912,
    "tries": 18519
  },
  {
    "card": "3551707208171949",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0025413036346436,
    "tries": 18525
  },
  {
    "card": "4211850981512945",
    "bank": "CITIBANK INTERNATIONAL PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0218753814697266,
    "tries": 18537
  },
  {
    "card": "374010333732078",
    "bank": "AMERICAN EXPRESS",
    "country": "Austria",
    "brand": "amex",
    "type": "credit",
    "time": 1.02311372756958,
    "tries": 18543
  },
  {
    "card": "4824728817260100851",
    "bank": "WIRECARD BANK AG",
    "country": "Germany",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236375331878662,
    "tries": 18549
  },
  {
    "card": "675939630348",
    "bank": "HSBC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0235650539398193,
    "tries": 18560
  },
  {
    "card": "180031988459456",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0237596035003662,
    "tries": 18566
  },
  {
    "card": "30000321637468",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9212291240692139,
    "tries": 18572
  },
  {
    "card": "4998546263329638734",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234978199005127,
    "tries": 18578
  },
  {
    "card": "30532526373440",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9277091026306152,
    "tries": 18584
  },
  {
    "card": "4757326281316386",
    "bank": "ROYAL BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0615079402923584,
    "tries": 18596
  },
  {
    "card": "30239878637147",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0211193561553955,
    "tries": 18621
  },
  {
    "card": "30006149224819",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0237298011779785,
    "tries": 18633
  },
  {
    "card": "3562080253610790",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0204763412475586,
    "tries": 18639
  },
  {
    "card": "30427914391098",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235702991485596,
    "tries": 18645
  },
  {
    "card": "373093468333657",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.061633825302124,
    "tries": 18651
  },
  {
    "card": "4616075976620",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.02327299118042,
    "tries": 18657
  },
  {
    "card": "3577473814857914",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232489109039307,
    "tries": 18663
  },
  {
    "card": "30584740893653",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236492156982422,
    "tries": 18669
  },
  {
    "card": "4391432804192",
    "bank": "KRUNGTHAI CARD PUBLIC CO., LTD.",
    "country": "Thailand",
    "brand": "visa",
    "type": "credit",
    "time": 0.9218740463256836,
    "tries": 18675
  },
  {
    "card": "3563287539794038",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209468364715576,
    "tries": 18687
  },
  {
    "card": "180071505220809",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023364782333374,
    "tries": 18699
  },
  {
    "card": "675967138909",
    "bank": "ROYAL BANK OF SCOTLAND PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9603488445281982,
    "tries": 18711
  },
  {
    "card": "3536861884034143",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0216920375823975,
    "tries": 18723
  },
  {
    "card": "4368667161741989421",
    "bank": "MONEY ONE F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0225803852081299,
    "tries": 18729
  },
  {
    "card": "4984222031743",
    "bank": "BANCO DO BRASIL, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "debit",
    "time": 0.921151876449585,
    "tries": 18759
  },
  {
    "card": "4094025565544299",
    "bank": "BARCLAYS BANK PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 0.8367362022399902,
    "tries": 18765
  },
  {
    "card": "4980209122392277091",
    "bank": "SUMITOMO MITSUI CARD CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233664512634277,
    "tries": 18771
  },
  {
    "card": "4945470206171550",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023289442062378,
    "tries": 18777
  },
  {
    "card": "3564165255651534",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0235507488250732,
    "tries": 18783
  },
  {
    "card": "30469239452973",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0229675769805908,
    "tries": 18789
  },
  {
    "card": "676233587812",
    "bank": "CESKOSLOVENSKA OBCHODNI BANKA, A.S.",
    "country": "Czechia",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9211070537567139,
    "tries": 18796
  },
  {
    "card": "213143423637744",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0226776599884033,
    "tries": 18802
  },
  {
    "card": "180096317344950",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.921210527420044,
    "tries": 18820
  },
  {
    "card": "4366315676598936449",
    "bank": "QUAD CITY BANK AND TRUST COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0258691310882568,
    "tries": 18826
  },
  {
    "card": "30026425431136",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0239589214324951,
    "tries": 18838
  },
  {
    "card": "4755890276022178",
    "bank": "FIRST NATIONAL BANK OF MIDLAND",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0230615139007568,
    "tries": 18844
  },
  {
    "card": "4606015533691679",
    "bank": "SOUTHTRUST BANK, N.A.",
    "country": "Bangladesh",
    "brand": "visa",
    "type": "credit",
    "time": 1.0239012241363525,
    "tries": 18850
  },
  {
    "card": "4115477865398579906",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234758853912354,
    "tries": 18856
  },
  {
    "card": "4088377962783",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8902568817138672,
    "tries": 18862
  },
  {
    "card": "4661705020768468747",
    "bank": "BRANCH BANKING AND TRUST COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9205236434936523,
    "tries": 18868
  },
  {
    "card": "30496027500408",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0228986740112305,
    "tries": 18874
  },
  {
    "card": "375358250500401",
    "bank": "AMERICAN EXPRESS",
    "country": "Netherlands",
    "brand": "amex",
    "type": "credit",
    "time": 1.0233876705169678,
    "tries": 18880
  },
  {
    "card": "4164703322000178",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0227646827697754,
    "tries": 18886
  },
  {
    "card": "4511055836329621",
    "bank": "HARRODS BANK, LTD.",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234284400939941,
    "tries": 18892
  },
  {
    "card": "4201247850520798",
    "bank": "Desconhecido",
    "country": "France",
    "brand": "visa",
    "type": "debit",
    "time": 1.0233402252197266,
    "tries": 18898
  },
  {
    "card": "3572687007840834",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023618221282959,
    "tries": 18910
  },
  {
    "card": "30077069320838",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232391357421875,
    "tries": 18916
  },
  {
    "card": "3535351704508048",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235495567321777,
    "tries": 18922
  },
  {
    "card": "4880399695951692",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.02347731590271,
    "tries": 18928
  },
  {
    "card": "4900886162738962",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023136854171753,
    "tries": 18934
  },
  {
    "card": "4351528039384",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234341621398926,
    "tries": 18940
  },
  {
    "card": "3545492875928355",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0237312316894531,
    "tries": 18946
  },
  {
    "card": "3580773165942933",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.024045467376709,
    "tries": 18952
  },
  {
    "card": "30037067722088",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.021583080291748,
    "tries": 18958
  },
  {
    "card": "6011332882697080",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0218722820281982,
    "tries": 18964
  },
  {
    "card": "3532148888759220",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9206492900848389,
    "tries": 18976
  },
  {
    "card": "4755466201451",
    "bank": "SERVICES C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9194467067718506,
    "tries": 18982
  },
  {
    "card": "213119460786339",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232222080230713,
    "tries": 18988
  },
  {
    "card": "3588861041270983",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0219099521636963,
    "tries": 18994
  },
  {
    "card": "3572446077053921",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236973762512207,
    "tries": 19000
  },
  {
    "card": "4312075054313542955",
    "bank": "ATLAS MONT BANKA A.D.",
    "country": "Montenegro",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236437320709229,
    "tries": 19006
  },
  {
    "card": "4027321643107",
    "bank": "UKRAINIAN PROFESSIONAL BANK, OJSC",
    "country": "Ukraine",
    "brand": "visa",
    "type": "debit",
    "time": 0.9182391166687012,
    "tries": 19012
  },
  {
    "card": "30409769555019",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235183238983154,
    "tries": 19024
  },
  {
    "card": "30421394414751",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0228474140167236,
    "tries": 19030
  },
  {
    "card": "373931484121558",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.9214582443237305,
    "tries": 19036
  },
  {
    "card": "4411069172560674",
    "bank": "OHIO HERITAGE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9216101169586182,
    "tries": 19042
  },
  {
    "card": "4600013728269",
    "bank": "ABSA GROUP, LTD.",
    "country": "South Africa",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236568450927734,
    "tries": 19054
  },
  {
    "card": "4708223317474",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0226128101348877,
    "tries": 19066
  },
  {
    "card": "5148204265949867",
    "bank": "CU COOPERATIVE SYSTEMS, INC.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.02327299118042,
    "tries": 19078
  },
  {
    "card": "6011409628793447",
    "bank": "DISCOVER CARD",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.9221773147583008,
    "tries": 19084
  },
  {
    "card": "6503268816995460",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0241303443908691,
    "tries": 19090
  },
  {
    "card": "4608952400804043",
    "bank": "WOODSVILLE GUARANTY SAVINGS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9204761981964111,
    "tries": 19096
  },
  {
    "card": "6011215143847828",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.022728681564331,
    "tries": 19108
  },
  {
    "card": "676399733853",
    "bank": "Desconhecido",
    "country": "Lithuania",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9211580753326416,
    "tries": 19120
  },
  {
    "card": "4741664530694849736",
    "bank": "WELLS FARGO",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0224072933197021,
    "tries": 19132
  },
  {
    "card": "373988888401663",
    "bank": "DELTA SKYMILES",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.022803783416748,
    "tries": 19138
  },
  {
    "card": "4980013331862",
    "bank": "MITSUI SUMITOMO",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.023285150527954,
    "tries": 19144
  },
  {
    "card": "3559446605143233",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236027240753174,
    "tries": 19156
  },
  {
    "card": "4903127698653",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 0.9199392795562744,
    "tries": 19162
  },
  {
    "card": "30592716716139",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235798358917236,
    "tries": 19168
  },
  {
    "card": "3567191769675790",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0254826545715332,
    "tries": 19174
  },
  {
    "card": "4211393683465730734",
    "bank": "BC CARD CO., LTD.",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "credit",
    "time": 1.023932695388794,
    "tries": 19186
  },
  {
    "card": "5528930619208515",
    "bank": "FIRST COMMUNITY CREDIT UNION OF HOUSTON",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.020716905593872,
    "tries": 19192
  },
  {
    "card": "4866820513198578",
    "bank": "PT BANK MANDIRI (PERSERO) TBK",
    "country": "Indonesia",
    "brand": "visa",
    "type": "credit",
    "time": 0.9208986759185791,
    "tries": 19205
  },
  {
    "card": "3589829429287217",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0251080989837646,
    "tries": 19211
  },
  {
    "card": "676372511870",
    "bank": "Desconhecido",
    "country": "Turkey",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0254557132720947,
    "tries": 19217
  },
  {
    "card": "4189615053404794",
    "bank": "Desconhecido",
    "country": "Lithuania",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229690074920654,
    "tries": 19235
  },
  {
    "card": "6562693400705595",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230586528778076,
    "tries": 19241
  },
  {
    "card": "6011901611060487",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.0212056636810303,
    "tries": 19247
  },
  {
    "card": "4625723742290053",
    "bank": "FIRST-CITIZENS BANK AND TRUST COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0240521430969238,
    "tries": 19253
  },
  {
    "card": "3551288715537609",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0212855339050293,
    "tries": 19265
  },
  {
    "card": "30193649254247",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.92745041847229,
    "tries": 19271
  },
  {
    "card": "4686567873800909",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9198024272918701,
    "tries": 19283
  },
  {
    "card": "4098267475791620",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0214416980743408,
    "tries": 19289
  },
  {
    "card": "180023120872613",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0223779678344727,
    "tries": 19301
  },
  {
    "card": "370271168218609",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.9719934463500977,
    "tries": 19314
  },
  {
    "card": "213198775477065",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.024914026260376,
    "tries": 19320
  },
  {
    "card": "4636432695119649426",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236363410949707,
    "tries": 19325
  },
  {
    "card": "4404502328036770491",
    "bank": "HIMALAYAN BANK, LTD.",
    "country": "Nepal",
    "brand": "visa",
    "type": "credit",
    "time": 1.023771047592163,
    "tries": 19331
  },
  {
    "card": "30203378766392",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0237526893615723,
    "tries": 19337
  },
  {
    "card": "180010589932582",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9192450046539307,
    "tries": 19343
  },
  {
    "card": "4948917004001048",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9608325958251953,
    "tries": 19349
  },
  {
    "card": "6542892410723367",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9249265193939209,
    "tries": 19355
  },
  {
    "card": "180033425722173",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.02280855178833,
    "tries": 19361
  },
  {
    "card": "6548418280086265",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0257022380828857,
    "tries": 19367
  },
  {
    "card": "4915562778907",
    "bank": "BANCO PROMERICA, S.A.",
    "country": "Honduras",
    "brand": "visa",
    "type": "credit",
    "time": 1.0228517055511475,
    "tries": 19379
  },
  {
    "card": "30239212565210",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8819451332092285,
    "tries": 19385
  },
  {
    "card": "6599031274249092",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023313283920288,
    "tries": 19391
  },
  {
    "card": "4478546108701064970",
    "bank": "ROYAL BANK OF BAKU JCB",
    "country": "Azerbaijan",
    "brand": "visa",
    "type": "debit",
    "time": 1.0263960361480713,
    "tries": 19397
  },
  {
    "card": "4534736978765309",
    "bank": "MITSUBISHI UFJ FINANCIAL GROUP, INC.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.9199628829956055,
    "tries": 19403
  },
  {
    "card": "4737292496082502139",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9211461544036865,
    "tries": 19409
  },
  {
    "card": "4477177959237043",
    "bank": "HSBC BANK NEVADA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0238943099975586,
    "tries": 19415
  },
  {
    "card": "213183462665933",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235145092010498,
    "tries": 19427
  },
  {
    "card": "4957058617256",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9198338985443115,
    "tries": 19433
  },
  {
    "card": "4034880788460365",
    "bank": "PNC BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023848056793213,
    "tries": 19445
  },
  {
    "card": "374528029086194",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "Desconhecido",
    "time": 1.0240509510040283,
    "tries": 19451
  },
  {
    "card": "4499276010847347",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9210236072540283,
    "tries": 19463
  },
  {
    "card": "3576703835190684",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9206809997558594,
    "tries": 19469
  },
  {
    "card": "213164598614375",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023331880569458,
    "tries": 19475
  },
  {
    "card": "6541958674670676",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0226330757141113,
    "tries": 19481
  },
  {
    "card": "6597393200540867",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0234086513519287,
    "tries": 19487
  },
  {
    "card": "4722928351902",
    "bank": "Desconhecido",
    "country": "United Arab Emirates",
    "brand": "visa",
    "type": "credit",
    "time": 1.0241162776947021,
    "tries": 19494
  },
  {
    "card": "30097148254691",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0234146118164062,
    "tries": 19500
  },
  {
    "card": "379453099766721",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0231258869171143,
    "tries": 19506
  },
  {
    "card": "4910500220373518",
    "bank": "Rand Merchant Bank",
    "country": "South Africa",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231823921203613,
    "tries": 19512
  },
  {
    "card": "4622627678513896",
    "bank": "BANK OF KATHMANDU, LTD.",
    "country": "Nepal",
    "brand": "visa",
    "type": "debit",
    "time": 1.023838758468628,
    "tries": 19518
  },
  {
    "card": "3528558462930243",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023505449295044,
    "tries": 19524
  },
  {
    "card": "30136006569855",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023359775543213,
    "tries": 19530
  },
  {
    "card": "213199766713062",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023658037185669,
    "tries": 19554
  },
  {
    "card": "4805659641705225",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0231702327728271,
    "tries": 19560
  },
  {
    "card": "30026455832252",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9211733341217041,
    "tries": 19566
  },
  {
    "card": "3560606970122438",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023423671722412,
    "tries": 19572
  },
  {
    "card": "6011899764483839",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9204788208007812,
    "tries": 19584
  },
  {
    "card": "4195746109458982404",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232350826263428,
    "tries": 19590
  },
  {
    "card": "5267268452903669",
    "bank": "BANCA MONTE PASCHI BELGIO, S.A.",
    "country": "Belgium",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0236725807189941,
    "tries": 19596
  },
  {
    "card": "371575762584581",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0234410762786865,
    "tries": 19602
  },
  {
    "card": "4538679033844725",
    "bank": "MITSUBISHI UFJ FINANCIAL GROUP, INC.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.9210896492004395,
    "tries": 19608
  },
  {
    "card": "30454476088847",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9209394454956055,
    "tries": 19620
  },
  {
    "card": "4063936767319461",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236802101135254,
    "tries": 19632
  },
  {
    "card": "503887602566",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9206666946411133,
    "tries": 19638
  },
  {
    "card": "4752331018417422890",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232126712799072,
    "tries": 19650
  },
  {
    "card": "30418334539598",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0228917598724365,
    "tries": 19656
  },
  {
    "card": "4861468607734349",
    "bank": "SOUTHEAST BANK, LTD.",
    "country": "Bangladesh",
    "brand": "visa",
    "type": "credit",
    "time": 1.024019718170166,
    "tries": 19663
  },
  {
    "card": "4599522980877434760",
    "bank": "KWANGJU BANK, LTD.",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235059261322021,
    "tries": 19675
  },
  {
    "card": "4510722961168882573",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233135223388672,
    "tries": 19680
  },
  {
    "card": "4169545838569625",
    "bank": "OTP BANK JSC",
    "country": "Ukraine",
    "brand": "visa",
    "type": "credit",
    "time": 1.023186206817627,
    "tries": 19692
  },
  {
    "card": "4032778949893775",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9210190773010254,
    "tries": 19698
  },
  {
    "card": "4993942942410",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235390663146973,
    "tries": 19704
  },
  {
    "card": "4631062293269",
    "bank": "BANK OF OLD MONROE",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9211153984069824,
    "tries": 19711
  },
  {
    "card": "180091940596407",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.02351975440979,
    "tries": 19723
  },
  {
    "card": "4712936130851",
    "bank": "Desconhecido",
    "country": "Indonesia",
    "brand": "visa",
    "type": "credit",
    "time": 1.2356677055358887,
    "tries": 19729
  },
  {
    "card": "213190911544593",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233416557312012,
    "tries": 19734
  },
  {
    "card": "6011773458000896",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0291645526885986,
    "tries": 19741
  },
  {
    "card": "3567584884605231",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0230555534362793,
    "tries": 19759
  },
  {
    "card": "30004684633718",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023695468902588,
    "tries": 19771
  },
  {
    "card": "30172141541749",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233237743377686,
    "tries": 19777
  },
  {
    "card": "4210268906414660",
    "bank": "PJSC CB ACTIVE BANK",
    "country": "Ukraine",
    "brand": "visa",
    "type": "credit",
    "time": 0.9207878112792969,
    "tries": 19795
  },
  {
    "card": "4831808343671",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0230281352996826,
    "tries": 19813
  },
  {
    "card": "4877773330783980",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0999698638916016,
    "tries": 19819
  },
  {
    "card": "5427233927998279",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 1.0231401920318604,
    "tries": 19837
  },
  {
    "card": "6011040084421403",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233783721923828,
    "tries": 19843
  },
  {
    "card": "4227160448010117",
    "bank": "MOSCOMPRIVATBANK (MOSCOW COMMERCIAL BANK)",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "credit",
    "time": 1.0601661205291748,
    "tries": 19848
  },
  {
    "card": "30101988237400",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233526229858398,
    "tries": 19854
  },
  {
    "card": "38550574573978",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0221655368804932,
    "tries": 19860
  },
  {
    "card": "4824457419893065481",
    "bank": "WIRECARD BANK AG",
    "country": "Germany",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234603881835938,
    "tries": 19866
  },
  {
    "card": "3554853066427192",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1261379718780518,
    "tries": 19878
  },
  {
    "card": "676262060061",
    "bank": "Desconhecido",
    "country": "Ukraine",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0233302116394043,
    "tries": 19890
  },
  {
    "card": "4233652011971991212",
    "bank": "Desconhecido",
    "country": "Madagascar",
    "brand": "visa",
    "type": "debit",
    "time": 1.125051736831665,
    "tries": 19902
  },
  {
    "card": "4642605259860973",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "None",
    "time": 0.9239943027496338,
    "tries": 19914
  },
  {
    "card": "30572193973197",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235977172851562,
    "tries": 19920
  },
  {
    "card": "30125777128611",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236070156097412,
    "tries": 19925
  },
  {
    "card": "3570656567491587",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232346057891846,
    "tries": 19932
  },
  {
    "card": "3538577580052993",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234651565551758,
    "tries": 19943
  },
  {
    "card": "4336615049735",
    "bank": "BANK OF CHINA, LTD.",
    "country": "Macao",
    "brand": "visa",
    "type": "credit",
    "time": 1.01944899559021,
    "tries": 19950
  },
  {
    "card": "4223223333632048682",
    "bank": "CADENCE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.1255242824554443,
    "tries": 19961
  },
  {
    "card": "502059689435",
    "bank": "Desconhecido",
    "country": "Spain",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0225918292999268,
    "tries": 19967
  },
  {
    "card": "4673748968179",
    "bank": "MARYLAND BANK AND TRUST COMPANY, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0227115154266357,
    "tries": 19973
  },
  {
    "card": "36330065835612",
    "bank": "(DEFUNCT)",
    "country": "Canada",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231213569641113,
    "tries": 19979
  },
  {
    "card": "4864123385127672",
    "bank": "BANCO DE BOGOTA",
    "country": "Colombia",
    "brand": "visa",
    "type": "credit",
    "time": 0.9213333129882812,
    "tries": 19991
  },
  {
    "card": "30544338541288",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0237095355987549,
    "tries": 19997
  },
  {
    "card": "4969955229044",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0254409313201904,
    "tries": 20003
  },
  {
    "card": "4172648794334735924",
    "bank": "BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0231122970581055,
    "tries": 20009
  },
  {
    "card": "38460155508650",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231473445892334,
    "tries": 20021
  },
  {
    "card": "4291001307681021",
    "bank": "PUBLIC BANK BERHAD",
    "country": "Malaysia",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023240566253662,
    "tries": 20027
  },
  {
    "card": "30164606576815",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.92069411277771,
    "tries": 20033
  },
  {
    "card": "4586880735447673",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023141860961914,
    "tries": 20039
  },
  {
    "card": "30223868027576",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230960845947266,
    "tries": 20045
  },
  {
    "card": "6556427504208992",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230097770690918,
    "tries": 20051
  },
  {
    "card": "180043257457442",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023056983947754,
    "tries": 20057
  },
  {
    "card": "5137433972037293",
    "bank": "MASTERCARD FRANCE S.A.S.",
    "country": "France",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0246376991271973,
    "tries": 20063
  },
  {
    "card": "4518557280655",
    "bank": "SUNCORP-METWAY, LTD.",
    "country": "Australia",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232560634613037,
    "tries": 20069
  },
  {
    "card": "4943922688567061",
    "bank": "BANCO BICA COOPERATIVO LTDO.",
    "country": "Argentina",
    "brand": "visa",
    "type": "debit",
    "time": 1.023240327835083,
    "tries": 20075
  },
  {
    "card": "4333978735992",
    "bank": "BANK MILLENNIUM SPOLKA AKCYJNA",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 1.022918939590454,
    "tries": 20081
  },
  {
    "card": "3576829923388334",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0198678970336914,
    "tries": 20094
  },
  {
    "card": "4346890521491026",
    "bank": "CITIC BANK INTERNATIONAL, LTD.",
    "country": "Hong Kong",
    "brand": "visa",
    "type": "credit",
    "time": 1.1257312297821045,
    "tries": 20100
  },
  {
    "card": "377208068930720",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.023125171661377,
    "tries": 20117
  },
  {
    "card": "4273613575560703",
    "bank": "SUNCOAST SCHOOLS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.021897792816162,
    "tries": 20123
  },
  {
    "card": "5551399284194204",
    "bank": "WRIGHT EXPRESS FINANCIAL SERVICES CORPORATION",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.9218182563781738,
    "tries": 20130
  },
  {
    "card": "4741411838935687",
    "bank": "CREDIT LIBANAIS S.A.L.",
    "country": "Lebanon",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235068798065186,
    "tries": 20142
  },
  {
    "card": "3573174783809019",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0228233337402344,
    "tries": 20148
  },
  {
    "card": "30416484173242",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.02366042137146,
    "tries": 20160
  },
  {
    "card": "5211001416790006",
    "bank": "CHASE MANHATTAN BANK USA, N.A.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 1.0217258930206299,
    "tries": 20165
  },
  {
    "card": "4329235617546300366",
    "bank": "HABERSHAM BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.1250805854797363,
    "tries": 20171
  },
  {
    "card": "5247430287103577",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0229341983795166,
    "tries": 20177
  },
  {
    "card": "3574499235867953",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236008167266846,
    "tries": 20184
  },
  {
    "card": "3568125734600102",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0234792232513428,
    "tries": 20190
  },
  {
    "card": "6011485876887453",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235614776611328,
    "tries": 20196
  },
  {
    "card": "4880494673778044519",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0247552394866943,
    "tries": 20202
  },
  {
    "card": "372698535935226",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0234808921813965,
    "tries": 20208
  },
  {
    "card": "36516757123719",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232927799224854,
    "tries": 20237
  },
  {
    "card": "6500332512482042",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.02315354347229,
    "tries": 20244
  },
  {
    "card": "30186024542731",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0237209796905518,
    "tries": 20255
  },
  {
    "card": "375179900082834",
    "bank": "BANCO BRADESCO",
    "country": "Brazil",
    "brand": "amex",
    "type": "credit",
    "time": 1.023270606994629,
    "tries": 20268
  },
  {
    "card": "4259850625656",
    "bank": "NATIONAL CITY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.921546220779419,
    "tries": 20274
  },
  {
    "card": "4195957431850146600",
    "bank": "Desconhecido",
    "country": "Oman",
    "brand": "visa",
    "type": "credit",
    "time": 1.016831398010254,
    "tries": 20280
  },
  {
    "card": "3553429981504067",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0222101211547852,
    "tries": 20286
  },
  {
    "card": "5229520848681434",
    "bank": "GOLOMT BANK OF MONGOLIA",
    "country": "Mongolia",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.330573320388794,
    "tries": 20292
  },
  {
    "card": "30108594455128",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.046635627746582,
    "tries": 20304
  },
  {
    "card": "4254217658302067",
    "bank": "ONE NEVADA CREDIT UNION",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232300758361816,
    "tries": 20310
  },
  {
    "card": "4788567582388",
    "bank": "PREMIER COMMUNITY C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211857318878174,
    "tries": 20316
  },
  {
    "card": "4322096063245790",
    "bank": "BANC ONE POS SERVICES CORPORATION",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236485004425049,
    "tries": 20322
  },
  {
    "card": "4647207643010957696",
    "bank": "BENNINGTON STATE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0239884853363037,
    "tries": 20328
  },
  {
    "card": "4695177787663",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235612392425537,
    "tries": 20334
  },
  {
    "card": "4559855203678465",
    "bank": "CHASE BANK USA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235342979431152,
    "tries": 20352
  },
  {
    "card": "639075107610",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0237007141113281,
    "tries": 20358
  },
  {
    "card": "4691196051561055137",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9836809635162354,
    "tries": 20364
  },
  {
    "card": "4320587189418099",
    "bank": "SKB-BANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0180118083953857,
    "tries": 20370
  },
  {
    "card": "4474205636189775",
    "bank": "FIRST INDEPENDENT BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9214212894439697,
    "tries": 20376
  },
  {
    "card": "4035053114822448",
    "bank": "CITIBANK (SOUTH DAKOTA), N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0197358131408691,
    "tries": 20382
  },
  {
    "card": "4094913515938895",
    "bank": "FIRST USA BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0217862129211426,
    "tries": 20388
  },
  {
    "card": "4009822884772858601",
    "bank": "FORT BRAGG F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0174987316131592,
    "tries": 20394
  },
  {
    "card": "4332706710020",
    "bank": "WOLVERINE EMPLOYEES C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1253385543823242,
    "tries": 20400
  },
  {
    "card": "377869518838472",
    "bank": "AMERICAN EXPRESS",
    "country": "New Zealand",
    "brand": "amex",
    "type": "credit",
    "time": 0.8803560733795166,
    "tries": 20405
  },
  {
    "card": "30477580067886",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0237200260162354,
    "tries": 20412
  },
  {
    "card": "6588131761347392",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235133171081543,
    "tries": 20418
  },
  {
    "card": "3577428076262138",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0237712860107422,
    "tries": 20424
  },
  {
    "card": "4573902981515",
    "bank": "Desconhecido",
    "country": "Peru",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211997985839844,
    "tries": 20430
  },
  {
    "card": "4750770798146868",
    "bank": "SOUTHEAST BANK AND TRUST",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231614112854004,
    "tries": 20436
  },
  {
    "card": "213137201460238",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234804153442383,
    "tries": 20442
  },
  {
    "card": "4923577001208",
    "bank": "NIPPON SHINPAN CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233705043792725,
    "tries": 20448
  },
  {
    "card": "676173246890",
    "bank": "Desconhecido",
    "country": "Hungary",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9208338260650635,
    "tries": 20454
  },
  {
    "card": "675986839057",
    "bank": "ALLOCATED TO SWITCH",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.1187257766723633,
    "tries": 20460
  },
  {
    "card": "213132228249110",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234034061431885,
    "tries": 20466
  },
  {
    "card": "3531264583770684",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9206914901733398,
    "tries": 20472
  },
  {
    "card": "4873250513394974468",
    "bank": "NORBEL C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234792232513428,
    "tries": 20478
  },
  {
    "card": "4809333221170357859",
    "bank": "EXCHANGE BANK OF MISSOURI",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236599445343018,
    "tries": 20490
  },
  {
    "card": "4055445422918873",
    "bank": "Desconhecido",
    "country": "Nepal",
    "brand": "visa",
    "type": "debit",
    "time": 1.0241761207580566,
    "tries": 20496
  },
  {
    "card": "6553705853689554",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9208464622497559,
    "tries": 20502
  },
  {
    "card": "4592920605371359923",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9208886623382568,
    "tries": 20508
  },
  {
    "card": "213112052634165",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9210624694824219,
    "tries": 20520
  },
  {
    "card": "4542394364258",
    "bank": "UC CARD CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234384536743164,
    "tries": 20545
  },
  {
    "card": "349995948044277",
    "bank": "AMERICAN EXPRESS",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.9208946228027344,
    "tries": 20563
  },
  {
    "card": "4328834325117041",
    "bank": "CITIBANK (SOUTH DAKOTA), N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0199840068817139,
    "tries": 20569
  },
  {
    "card": "213141313729076",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0193798542022705,
    "tries": 20581
  },
  {
    "card": "213102801999092",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.02650785446167,
    "tries": 20587
  },
  {
    "card": "4126778176478",
    "bank": "BANK OF ANN ARBOR",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0265111923217773,
    "tries": 20593
  },
  {
    "card": "639077590698",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232574939727783,
    "tries": 20599
  },
  {
    "card": "3535370818748365",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209601879119873,
    "tries": 20605
  },
  {
    "card": "4827188581875602",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1256811618804932,
    "tries": 20617
  },
  {
    "card": "3560837194229564",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1293056011199951,
    "tries": 20622
  },
  {
    "card": "4260534810805",
    "bank": "PROVIDENT BANK AND TRUST OF BELIZE, LTD.",
    "country": "Belize",
    "brand": "visa",
    "type": "debit",
    "time": 0.9204916954040527,
    "tries": 20628
  },
  {
    "card": "4756109629037711",
    "bank": "FIRST NATIONAL BANK OF OMAHA",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.91973876953125,
    "tries": 20634
  },
  {
    "card": "4583108314895663",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235154628753662,
    "tries": 20640
  },
  {
    "card": "30242601995808",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236406326293945,
    "tries": 20646
  },
  {
    "card": "30377423420179",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230181217193604,
    "tries": 20652
  },
  {
    "card": "213123593111506",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0227878093719482,
    "tries": 20658
  },
  {
    "card": "3544083583668259",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023200511932373,
    "tries": 20681
  },
  {
    "card": "4212068198017298",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9213030338287354,
    "tries": 20687
  },
  {
    "card": "4141715887198186060",
    "bank": "VERMONT NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0216267108917236,
    "tries": 20705
  },
  {
    "card": "4612573921374576157",
    "bank": "JSB SOBINBANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232865810394287,
    "tries": 20711
  },
  {
    "card": "213173953290382",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233697891235352,
    "tries": 20717
  },
  {
    "card": "4803804260894",
    "bank": "HERITAGE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.97623610496521,
    "tries": 20723
  },
  {
    "card": "3544912457807082",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023906946182251,
    "tries": 20735
  },
  {
    "card": "3529945265940207",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023618221282959,
    "tries": 20741
  },
  {
    "card": "38984113183330",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0260658264160156,
    "tries": 20747
  },
  {
    "card": "30268513012200",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9554827213287354,
    "tries": 20753
  },
  {
    "card": "4103477732910466",
    "bank": "ATH COSTA RICA, S.A.",
    "country": "Costa Rica",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211747646331787,
    "tries": 20759
  },
  {
    "card": "180073236095278",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231976509094238,
    "tries": 20771
  },
  {
    "card": "3542132287906697",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023916244506836,
    "tries": 20777
  },
  {
    "card": "4295629352416665",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.022995948791504,
    "tries": 20789
  },
  {
    "card": "4152798307232",
    "bank": "EASTERN BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023526906967163,
    "tries": 20795
  },
  {
    "card": "3589292537535375",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0200798511505127,
    "tries": 20801
  },
  {
    "card": "3581194762155002",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9985270500183105,
    "tries": 20819
  },
  {
    "card": "4806727290881676584",
    "bank": "OLD NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0228748321533203,
    "tries": 20825
  },
  {
    "card": "4837374833461122",
    "bank": "KOMERCNI BANKA, A.S.",
    "country": "Czechia",
    "brand": "visa",
    "type": "debit",
    "time": 0.9210262298583984,
    "tries": 20837
  },
  {
    "card": "4908131560172436771",
    "bank": "MID MINNESOTA F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023139238357544,
    "tries": 20849
  },
  {
    "card": "6547361589270142",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231616497039795,
    "tries": 20855
  },
  {
    "card": "6517408407831609",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0242705345153809,
    "tries": 20867
  },
  {
    "card": "3536274905541817",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232882499694824,
    "tries": 20879
  },
  {
    "card": "373942597617291",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0229136943817139,
    "tries": 20885
  },
  {
    "card": "4541011107562766",
    "bank": "LOMBARD NATWEST BANK, LTD.",
    "country": "Cyprus",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9209544658660889,
    "tries": 20897
  },
  {
    "card": "3584964602325016",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9205343723297119,
    "tries": 20909
  },
  {
    "card": "4118714049714733",
    "bank": "FIRST-CITIZENS BANK AND TRUST COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229287147521973,
    "tries": 20915
  },
  {
    "card": "4247719902182989",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235083103179932,
    "tries": 20921
  },
  {
    "card": "3585167811478928",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232253074645996,
    "tries": 20927
  },
  {
    "card": "213181742284616",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235817432403564,
    "tries": 20939
  },
  {
    "card": "4440875217464150",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236728191375732,
    "tries": 20945
  },
  {
    "card": "4819182257408476443",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232064723968506,
    "tries": 20957
  },
  {
    "card": "4894775489649584752",
    "bank": "Desconhecido",
    "country": "Turkey",
    "brand": "visa",
    "type": "credit",
    "time": 0.9206843376159668,
    "tries": 20963
  },
  {
    "card": "6567855313032822",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231966972351074,
    "tries": 20975
  },
  {
    "card": "4492406180984763",
    "bank": "CITIZENS NATIONAL BANK OF BLUFFTON",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0212254524230957,
    "tries": 20994
  },
  {
    "card": "6011319473699526",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0238471031188965,
    "tries": 20999
  },
  {
    "card": "587459939308",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023193597793579,
    "tries": 21012
  },
  {
    "card": "4126346682147184",
    "bank": "JUNIATA VALLEY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.921851634979248,
    "tries": 21018
  },
  {
    "card": "376253802426792",
    "bank": "Desconhecido",
    "country": "Malaysia",
    "brand": "amex",
    "type": "credit",
    "time": 1.0218794345855713,
    "tries": 21024
  },
  {
    "card": "371057392570736",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0230324268341064,
    "tries": 21030
  },
  {
    "card": "4588527277838406641",
    "bank": "UNION TOGOLAISE DE BANQUE",
    "country": "Togo",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232937335968018,
    "tries": 21036
  },
  {
    "card": "213163169148862",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023430347442627,
    "tries": 21042
  },
  {
    "card": "676356977097",
    "bank": "JSC BANK OF GEORGIA",
    "country": "Georgia",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9206421375274658,
    "tries": 21047
  },
  {
    "card": "3537492781033852",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231070518493652,
    "tries": 21053
  },
  {
    "card": "6502271575194383",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235011577606201,
    "tries": 21060
  },
  {
    "card": "4635263341403268",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0270941257476807,
    "tries": 21066
  },
  {
    "card": "30032231997328",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235111713409424,
    "tries": 21072
  },
  {
    "card": "575351259313",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0230786800384521,
    "tries": 21078
  },
  {
    "card": "180092202403654",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0214159488677979,
    "tries": 21096
  },
  {
    "card": "3574891043079096",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.020949125289917,
    "tries": 21102
  },
  {
    "card": "3576370978004880",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0230724811553955,
    "tries": 21108
  },
  {
    "card": "180072761339150",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023298978805542,
    "tries": 21114
  },
  {
    "card": "675912799763",
    "bank": "STATE BANK OF INDIA - UK",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232970714569092,
    "tries": 21120
  },
  {
    "card": "374757873941671",
    "bank": "AMERICAN EXPRESS",
    "country": "Denmark",
    "brand": "amex",
    "type": "credit",
    "time": 0.9209957122802734,
    "tries": 21132
  },
  {
    "card": "3560257727250922",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023810863494873,
    "tries": 21144
  },
  {
    "card": "4793598000467",
    "bank": "Desconhecido",
    "country": "Ghana",
    "brand": "visa",
    "type": "debit",
    "time": 1.0237507820129395,
    "tries": 21155
  },
  {
    "card": "4959571083984479",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233943462371826,
    "tries": 21161
  },
  {
    "card": "4471671908809858",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232336521148682,
    "tries": 21173
  },
  {
    "card": "4557792927709932",
    "bank": "OVERSEA-CHINESE BANKING CORP., LTD.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9212405681610107,
    "tries": 21179
  },
  {
    "card": "4261827415742743",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230762958526611,
    "tries": 21191
  },
  {
    "card": "4214144783291363167",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0229036808013916,
    "tries": 21197
  },
  {
    "card": "675974230137",
    "bank": "ROYAL BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.921471357345581,
    "tries": 21203
  },
  {
    "card": "4952494719840623447",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.92138671875,
    "tries": 21215
  },
  {
    "card": "3569488137761312",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0240347385406494,
    "tries": 21221
  },
  {
    "card": "4231012460546",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "Kenya",
    "brand": "visa",
    "type": "debit",
    "time": 1.023702621459961,
    "tries": 21233
  },
  {
    "card": "4298984182718684311",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "debit",
    "time": 0.9208459854125977,
    "tries": 21245
  },
  {
    "card": "4536196025901",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235638618469238,
    "tries": 21251
  },
  {
    "card": "3563908967039964",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0224969387054443,
    "tries": 21269
  },
  {
    "card": "3546789153275592",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9207944869995117,
    "tries": 21276
  },
  {
    "card": "4183282527784280019",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0231151580810547,
    "tries": 21282
  },
  {
    "card": "180014710669121",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231006145477295,
    "tries": 21294
  },
  {
    "card": "4216089247132",
    "bank": "SURUGA BANK, LTD.",
    "country": "Sri Lanka",
    "brand": "visa",
    "type": "debit",
    "time": 0.9204363822937012,
    "tries": 21306
  },
  {
    "card": "4986601315740022",
    "bank": "MITSUBISHI UFJ FINANCIAL GROUP, INC.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.0247490406036377,
    "tries": 21312
  },
  {
    "card": "4033160118334",
    "bank": "BRB-BANCO DE BRASILIA, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229430198669434,
    "tries": 21318
  },
  {
    "card": "4743859002339706",
    "bank": "BAY CITIES BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.920576810836792,
    "tries": 21324
  },
  {
    "card": "213117284158131",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023655652999878,
    "tries": 21336
  },
  {
    "card": "3579429340758479",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0227046012878418,
    "tries": 21348
  },
  {
    "card": "4863834406743",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9215900897979736,
    "tries": 21354
  },
  {
    "card": "4011251961412820",
    "bank": "FIRST COMMUNITY F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229449272155762,
    "tries": 21360
  },
  {
    "card": "4702557656508",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9212322235107422,
    "tries": 21372
  },
  {
    "card": "4292763086112",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232505798339844,
    "tries": 21378
  },
  {
    "card": "4678105434269",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234899520874023,
    "tries": 21390
  },
  {
    "card": "4279921302838",
    "bank": "SAVINGS BANK OF THE RUSSIAN FEDERATION (SBERBANK)",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9204986095428467,
    "tries": 21420
  },
  {
    "card": "6594035034963251",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.010047435760498,
    "tries": 21432
  },
  {
    "card": "4802227014789",
    "bank": "FIRST AMERICAN BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0242540836334229,
    "tries": 21438
  },
  {
    "card": "4634613672645872",
    "bank": "Desconhecido",
    "country": "Kenya",
    "brand": "visa",
    "type": "debit",
    "time": 1.0244555473327637,
    "tries": 21450
  },
  {
    "card": "6534777894287957",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9199743270874023,
    "tries": 21456
  },
  {
    "card": "4675095289134146",
    "bank": "CHASE BANK USA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023343563079834,
    "tries": 21463
  },
  {
    "card": "213115414635291",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9220688343048096,
    "tries": 21468
  },
  {
    "card": "5289330561583909",
    "bank": "JSCB ROSBANK",
    "country": "Russian Federation",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.9223878383636475,
    "tries": 21481
  },
  {
    "card": "3564960180572494",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9208345413208008,
    "tries": 21487
  },
  {
    "card": "379162722682532",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "credit",
    "time": 1.0231707096099854,
    "tries": 21499
  },
  {
    "card": "30035528174360",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233871936798096,
    "tries": 21505
  },
  {
    "card": "4858709078604197969",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232911109924316,
    "tries": 21511
  },
  {
    "card": "6548350269025024",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0228466987609863,
    "tries": 21528
  },
  {
    "card": "4494424434091",
    "bank": "ASSOCIATES NATIONAL BANK (DELAWARE)",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235185623168945,
    "tries": 21534
  },
  {
    "card": "3559274828662726",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0229439735412598,
    "tries": 21540
  },
  {
    "card": "6011231672852071",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0249643325805664,
    "tries": 21546
  },
  {
    "card": "4784325673812892",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235021114349365,
    "tries": 21552
  },
  {
    "card": "213161306528509",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.019578456878662,
    "tries": 21558
  },
  {
    "card": "4438335340983828",
    "bank": "PROVIDENT BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.8816115856170654,
    "tries": 21565
  },
  {
    "card": "6534074027593216",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230727195739746,
    "tries": 21577
  },
  {
    "card": "3530813864944763",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0225746631622314,
    "tries": 21583
  },
  {
    "card": "4130216678954642",
    "bank": "SERVICES C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234332084655762,
    "tries": 21589
  },
  {
    "card": "4555430216002253",
    "bank": "BBVA BANCOMER, S.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0219917297363281,
    "tries": 21595
  },
  {
    "card": "4298743824028375",
    "bank": "UNIVERSAL CITY STUDIOS C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023212194442749,
    "tries": 21613
  },
  {
    "card": "4641208491431832177",
    "bank": "Desconhecido",
    "country": "Lebanon",
    "brand": "visa",
    "type": "debit",
    "time": 0.9201500415802002,
    "tries": 21625
  },
  {
    "card": "3550479738263494",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233850479125977,
    "tries": 21637
  },
  {
    "card": "4455501331365865",
    "bank": "EURO BANK, S.A.",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232305526733398,
    "tries": 21649
  },
  {
    "card": "213123241202947",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0158679485321045,
    "tries": 21661
  },
  {
    "card": "30124803507484",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9207494258880615,
    "tries": 21673
  },
  {
    "card": "374843197997571",
    "bank": "AMERICAN EXPRESS",
    "country": "Finland",
    "brand": "amex",
    "type": "credit",
    "time": 1.1258070468902588,
    "tries": 21680
  },
  {
    "card": "4075280422674929",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211914539337158,
    "tries": 21685
  },
  {
    "card": "3575238929918493",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231919288635254,
    "tries": 21691
  },
  {
    "card": "4372550798791139",
    "bank": "Desconhecido",
    "country": "Austria",
    "brand": "visa",
    "type": "debit",
    "time": 0.9757444858551025,
    "tries": 21697
  },
  {
    "card": "676227461339",
    "bank": "Desconhecido",
    "country": "Slovakia",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0240535736083984,
    "tries": 21704
  },
  {
    "card": "4614009980252036",
    "bank": "GE CAPITAL FINANCIAL, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.920598030090332,
    "tries": 21710
  },
  {
    "card": "6597556739294640",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9213058948516846,
    "tries": 21722
  },
  {
    "card": "4520110446969373310",
    "bank": "TORONTO-DOMINION BANK",
    "country": "India",
    "brand": "visa",
    "type": "debit",
    "time": 1.023606538772583,
    "tries": 21728
  },
  {
    "card": "4245527208590249",
    "bank": "AGRICULTURAL BANK AGROBANKA A.D.",
    "country": "Serbia",
    "brand": "visa",
    "type": "debit",
    "time": 1.0241308212280273,
    "tries": 21734
  },
  {
    "card": "4084714495755222",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.02301025390625,
    "tries": 21746
  },
  {
    "card": "6011448854140535",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023559331893921,
    "tries": 21752
  },
  {
    "card": "3569598439048844",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023360252380371,
    "tries": 21758
  },
  {
    "card": "503809770368",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0235316753387451,
    "tries": 21764
  },
  {
    "card": "4787852072199159811",
    "bank": "BANCO BISA, S.A.",
    "country": "Bolivia (Plurinational State of)",
    "brand": "visa",
    "type": "credit",
    "time": 1.0241248607635498,
    "tries": 21770
  },
  {
    "card": "4853470734866531",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0229887962341309,
    "tries": 21776
  },
  {
    "card": "4461712069352429",
    "bank": "FIRST FINANCIAL BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233280658721924,
    "tries": 21782
  },
  {
    "card": "4362721584599729",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9206922054290771,
    "tries": 21788
  },
  {
    "card": "372385073043379",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0234692096710205,
    "tries": 21794
  },
  {
    "card": "4428688800440651",
    "bank": "BECU",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233988761901855,
    "tries": 21800
  },
  {
    "card": "3556621404584075",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9210324287414551,
    "tries": 21818
  },
  {
    "card": "3531619381375087",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023643970489502,
    "tries": 21824
  },
  {
    "card": "4062228529398293",
    "bank": "BANCA INTESA AD BEOGRAD",
    "country": "Serbia",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232560634613037,
    "tries": 21830
  },
  {
    "card": "4647889577684",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235424041748047,
    "tries": 21848
  },
  {
    "card": "4142084335658173195",
    "bank": "MERRICK BANK CORPORATION",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236196517944336,
    "tries": 21854
  },
  {
    "card": "5301264942033876",
    "bank": "BARCLAYS BANK PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0236504077911377,
    "tries": 21860
  },
  {
    "card": "4713718047713347555",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9222705364227295,
    "tries": 21866
  },
  {
    "card": "30301036719561",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9212572574615479,
    "tries": 21873
  },
  {
    "card": "3565987140943191",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0235977172851562,
    "tries": 21885
  },
  {
    "card": "5491167503353411",
    "bank": "FIA CARD SERVICES, N.A.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.9213151931762695,
    "tries": 21891
  },
  {
    "card": "4443252339131207",
    "bank": "COLONIAL BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233104228973389,
    "tries": 21897
  },
  {
    "card": "4067471639535611",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9214346408843994,
    "tries": 21902
  },
  {
    "card": "4593230969111713",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0228955745697021,
    "tries": 21908
  },
  {
    "card": "4419985776465741256",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "None",
    "time": 1.024167776107788,
    "tries": 21914
  },
  {
    "card": "30509689793564",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230839252471924,
    "tries": 21926
  },
  {
    "card": "213144963860373",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235810279846191,
    "tries": 21933
  },
  {
    "card": "4789825481199",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9216079711914062,
    "tries": 21939
  },
  {
    "card": "30034485072253",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023782730102539,
    "tries": 21957
  },
  {
    "card": "4980826138336918759",
    "bank": "SUMITOMO MITSUI CARD COMPANY, LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.0227153301239014,
    "tries": 21963
  },
  {
    "card": "6510836629782530",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236179828643799,
    "tries": 21975
  },
  {
    "card": "6553024487310607",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0229403972625732,
    "tries": 21981
  },
  {
    "card": "4145342820999",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023723840713501,
    "tries": 21999
  },
  {
    "card": "4922279369614216",
    "bank": "YACHIYO BANK CREDIT SERVICE CO.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234062671661377,
    "tries": 22005
  },
  {
    "card": "502027487599",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0234191417694092,
    "tries": 22011
  },
  {
    "card": "4975515884373978",
    "bank": "NATIXIS",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 0.9581925868988037,
    "tries": 22023
  },
  {
    "card": "4612919817944357420",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236048698425293,
    "tries": 22035
  },
  {
    "card": "4826861290637",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023665428161621,
    "tries": 22041
  },
  {
    "card": "4069810253486304",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234827995300293,
    "tries": 22046
  },
  {
    "card": "213181816910468",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209609031677246,
    "tries": 22052
  },
  {
    "card": "3575324761649337",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0229060649871826,
    "tries": 22064
  },
  {
    "card": "4393069966975882",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0230028629302979,
    "tries": 22071
  },
  {
    "card": "4556227580443",
    "bank": "THE DEVELOPMENT BANK OF SINGAPORE LIMITED",
    "country": "Singapore",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234005451202393,
    "tries": 22076
  },
  {
    "card": "4485298320734532",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0243959426879883,
    "tries": 22088
  },
  {
    "card": "3588229093121902",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235588550567627,
    "tries": 22095
  },
  {
    "card": "3552703596089719",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232996940612793,
    "tries": 22100
  },
  {
    "card": "4226022227059756452",
    "bank": "BANCO DEL AUSTRO, S.A.",
    "country": "Ecuador",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234415531158447,
    "tries": 22112
  },
  {
    "card": "4853049425661",
    "bank": "U.S. BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0242741107940674,
    "tries": 22123
  },
  {
    "card": "372926063099259",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0233898162841797,
    "tries": 22129
  },
  {
    "card": "3557530039209231",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233635902404785,
    "tries": 22135
  },
  {
    "card": "3589986541746957",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0229830741882324,
    "tries": 22141
  },
  {
    "card": "180074878621686",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.92079758644104,
    "tries": 22147
  },
  {
    "card": "4459208932008771",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234179496765137,
    "tries": 22159
  },
  {
    "card": "30097741001762",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0249102115631104,
    "tries": 22165
  },
  {
    "card": "379470908768177",
    "bank": "AMERICAN EXPRESS",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 5.9378416538238525,
    "tries": 22168
  },
  {
    "card": "4094288534703",
    "bank": "DESCO F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.135054588317871,
    "tries": 22172
  },
  {
    "card": "3564900785153860",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0238914489746094,
    "tries": 22178
  },
  {
    "card": "30430320341095",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023209810256958,
    "tries": 22184
  },
  {
    "card": "4881154418375278915",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0230214595794678,
    "tries": 22196
  },
  {
    "card": "4303472717466647684",
    "bank": "RBS (RD EUROPE) GMBH",
    "country": "Austria",
    "brand": "visa",
    "type": "credit",
    "time": 0.9214284420013428,
    "tries": 22202
  },
  {
    "card": "4202392743994767969",
    "bank": "RADIO, TELEVISION AND COMMUNICATIONS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233688354492188,
    "tries": 22208
  },
  {
    "card": "6568235944252751",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0457637310028076,
    "tries": 22214
  },
  {
    "card": "4646199171189725",
    "bank": "Desconhecido",
    "country": "Egypt",
    "brand": "visa",
    "type": "credit",
    "time": 1.0239441394805908,
    "tries": 22226
  },
  {
    "card": "4824366924567804",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 1.032895803451538,
    "tries": 22232
  },
  {
    "card": "4537712856164938",
    "bank": "Desconhecido",
    "country": "Dominican Republic",
    "brand": "visa",
    "type": "credit",
    "time": 1.1261622905731201,
    "tries": 22238
  },
  {
    "card": "6011304031674781",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230908393859863,
    "tries": 22243
  },
  {
    "card": "3577381759954465",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9208807945251465,
    "tries": 22249
  },
  {
    "card": "6011480345266611",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023505687713623,
    "tries": 22255
  },
  {
    "card": "213185071891990",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211952686309814,
    "tries": 22261
  },
  {
    "card": "4788036736786819",
    "bank": "FIRST NATIONAL BANK OF OMAHA",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233359336853027,
    "tries": 22267
  },
  {
    "card": "5562855150312243",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 1.0246922969818115,
    "tries": 22273
  },
  {
    "card": "213163673511373",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.02199387550354,
    "tries": 22279
  },
  {
    "card": "213133758925293",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234360694885254,
    "tries": 22297
  },
  {
    "card": "6011301772799702",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1262412071228027,
    "tries": 22303
  },
  {
    "card": "6011984506076594",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.0242154598236084,
    "tries": 22315
  },
  {
    "card": "6591656606705938",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.024329423904419,
    "tries": 22321
  },
  {
    "card": "566900079047",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9205987453460693,
    "tries": 22327
  },
  {
    "card": "4558385266948",
    "bank": "CREDIT AGRICOLE, S.A.",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211304187774658,
    "tries": 22333
  },
  {
    "card": "6011013214716141",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9208331108093262,
    "tries": 22339
  },
  {
    "card": "4180890568218152564",
    "bank": "CREDIT LIBANAIS S.A.L.",
    "country": "Lebanon",
    "brand": "visa",
    "type": "credit",
    "time": 1.023486852645874,
    "tries": 22345
  },
  {
    "card": "501866603555",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9214260578155518,
    "tries": 22352
  },
  {
    "card": "180087703089192",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231740474700928,
    "tries": 22364
  },
  {
    "card": "30142946647314",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9210221767425537,
    "tries": 22370
  },
  {
    "card": "3539635195892853",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.022615909576416,
    "tries": 22376
  },
  {
    "card": "4452496342280513",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.2276334762573242,
    "tries": 22399
  },
  {
    "card": "503814748300",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0483322143554688,
    "tries": 22405
  },
  {
    "card": "376568561266018",
    "bank": "AMERICAN EXPRESS",
    "country": "Mexico",
    "brand": "amex",
    "type": "credit",
    "time": 1.0233285427093506,
    "tries": 22423
  },
  {
    "card": "4657569843314412",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.733875036239624,
    "tries": 22428
  },
  {
    "card": "4719518162111",
    "bank": "SERVICES C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231430530548096,
    "tries": 22434
  },
  {
    "card": "4732959892252",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0237319469451904,
    "tries": 22440
  },
  {
    "card": "4919707516159957362",
    "bank": "WEST COAST BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236430168151855,
    "tries": 22446
  },
  {
    "card": "4903623791699947349",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0233485698699951,
    "tries": 22452
  },
  {
    "card": "4404626719884",
    "bank": "MULTI-PURPOSE BANK BERHAD",
    "country": "Malaysia",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023101568222046,
    "tries": 22458
  },
  {
    "card": "6011863955045963",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.9206364154815674,
    "tries": 22464
  },
  {
    "card": "5543990251742883",
    "bank": "SWEDBANK AB",
    "country": "Lithuania",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.1259632110595703,
    "tries": 22470
  },
  {
    "card": "4922438358823",
    "bank": "HOKURIKU CREDIT SERVICE CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.9213111400604248,
    "tries": 22476
  },
  {
    "card": "5548628677386357",
    "bank": "Desconhecido",
    "country": "Spain",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.023921012878418,
    "tries": 22488
  },
  {
    "card": "4351046409012651982",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.1257832050323486,
    "tries": 22494
  },
  {
    "card": "213199973492104",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235559940338135,
    "tries": 22512
  },
  {
    "card": "180004040053989",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9210917949676514,
    "tries": 22536
  },
  {
    "card": "4317334724547214",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234880447387695,
    "tries": 22542
  },
  {
    "card": "4774984549433549",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023146629333496,
    "tries": 22548
  },
  {
    "card": "180036882611581",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.022963285446167,
    "tries": 22554
  },
  {
    "card": "4577368267224224",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0240240097045898,
    "tries": 22566
  },
  {
    "card": "4911189878648493",
    "bank": "BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.02683424949646,
    "tries": 22572
  },
  {
    "card": "4072358913058084",
    "bank": "TCM BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0216104984283447,
    "tries": 22578
  },
  {
    "card": "30391907284845",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.024498462677002,
    "tries": 22584
  },
  {
    "card": "36436374017170",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232453346252441,
    "tries": 22597
  },
  {
    "card": "4815332134264799",
    "bank": "Desconhecido",
    "country": "El Salvador",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235168933868408,
    "tries": 22603
  },
  {
    "card": "4680419480262600",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234270095825195,
    "tries": 22609
  },
  {
    "card": "3554662239421549",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0237023830413818,
    "tries": 22615
  },
  {
    "card": "6564343608428701",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233967304229736,
    "tries": 22621
  },
  {
    "card": "6011013054110256",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0227272510528564,
    "tries": 22633
  },
  {
    "card": "4994808025876729337",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.920649528503418,
    "tries": 22639
  },
  {
    "card": "3563693039864702",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0238215923309326,
    "tries": 22645
  },
  {
    "card": "4412631019900973637",
    "bank": "DEUTSCHE BANK AG",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 1.0230247974395752,
    "tries": 22651
  },
  {
    "card": "5511962306967029",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9214928150177002,
    "tries": 22657
  },
  {
    "card": "180015531290518",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236461162567139,
    "tries": 22663
  },
  {
    "card": "4876576946577",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9207491874694824,
    "tries": 22669
  },
  {
    "card": "4538718673705521",
    "bank": "MITSUBISHI UFJ FINANCIAL GROUP, INC.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.013551950454712,
    "tries": 22675
  },
  {
    "card": "5206931408606884",
    "bank": "MASTERCAJAS, S.A.",
    "country": "Spain",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0227437019348145,
    "tries": 22681
  },
  {
    "card": "213154342727185",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023256540298462,
    "tries": 22687
  },
  {
    "card": "30406287599230",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9210629463195801,
    "tries": 22693
  },
  {
    "card": "213152992068363",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209136962890625,
    "tries": 22699
  },
  {
    "card": "4762130087482007672",
    "bank": "RBTT BANK CARIBBEAN, LTD.",
    "country": "Saint Vincent and the Grenadines",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0240423679351807,
    "tries": 22705
  },
  {
    "card": "6531676663915207",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9205687046051025,
    "tries": 22712
  },
  {
    "card": "6011773670939699",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0195608139038086,
    "tries": 22718
  },
  {
    "card": "4324041781164665",
    "bank": "BANCO PANAMENO DE LA VIVIENDA, S.A.",
    "country": "Panama",
    "brand": "visa",
    "type": "credit",
    "time": 0.9206056594848633,
    "tries": 22724
  },
  {
    "card": "30269331834932",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9210488796234131,
    "tries": 22730
  },
  {
    "card": "6586286541989236",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.02366304397583,
    "tries": 22736
  },
  {
    "card": "180069235343701",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0230708122253418,
    "tries": 22742
  },
  {
    "card": "372470096735639",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.023162841796875,
    "tries": 22748
  },
  {
    "card": "3572756724025878",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9214022159576416,
    "tries": 22754
  },
  {
    "card": "4568927984866",
    "bank": "ITS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9213666915893555,
    "tries": 22760
  },
  {
    "card": "3531097421583129",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9188022613525391,
    "tries": 22766
  },
  {
    "card": "3537407443597953",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234534740447998,
    "tries": 22772
  },
  {
    "card": "3535487219217319",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9204051494598389,
    "tries": 22784
  },
  {
    "card": "4875627929656795",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9213216304779053,
    "tries": 22790
  },
  {
    "card": "378477819382650",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0230884552001953,
    "tries": 22796
  },
  {
    "card": "3556508165851274",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9206697940826416,
    "tries": 22809
  },
  {
    "card": "4616575114979973",
    "bank": "CITI",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0230515003204346,
    "tries": 22815
  },
  {
    "card": "4989035262186029",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235183238983154,
    "tries": 22821
  },
  {
    "card": "4396398163195151",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234770774841309,
    "tries": 22827
  },
  {
    "card": "4984245512859458",
    "bank": "BANCO DO BRASIL S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.0333976745605469,
    "tries": 22845
  },
  {
    "card": "4844511147362154",
    "bank": "BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232105255126953,
    "tries": 22851
  },
  {
    "card": "4610158951196",
    "bank": "CHASE BANK USA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9697542190551758,
    "tries": 22857
  },
  {
    "card": "4612738882321",
    "bank": "COMMERCIAL BANK PLATINA",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 0.9212074279785156,
    "tries": 22863
  },
  {
    "card": "4360503060224",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233242511749268,
    "tries": 22869
  },
  {
    "card": "30289657929686",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9212071895599365,
    "tries": 22875
  },
  {
    "card": "4057467216228",
    "bank": "BANCO SANTANDER, S.A.",
    "country": "Spain",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235271453857422,
    "tries": 22887
  },
  {
    "card": "6573293501133164",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.02382230758667,
    "tries": 22899
  },
  {
    "card": "3547416268529825",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1253745555877686,
    "tries": 22911
  },
  {
    "card": "3553844867032605",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023202896118164,
    "tries": 22917
  },
  {
    "card": "4459933656457439",
    "bank": "BANCO ABN AMRO REAL, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "debit",
    "time": 1.0229759216308594,
    "tries": 22923
  },
  {
    "card": "3586440057578944",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234181880950928,
    "tries": 22929
  },
  {
    "card": "6011263021835333",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9203240871429443,
    "tries": 22935
  },
  {
    "card": "4773108038033484",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023240089416504,
    "tries": 22941
  },
  {
    "card": "4849277485245931",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9213004112243652,
    "tries": 22947
  },
  {
    "card": "4879328234199946",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232758522033691,
    "tries": 22953
  },
  {
    "card": "6537408739188112",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232398509979248,
    "tries": 22959
  },
  {
    "card": "4081301312849314639",
    "bank": "PEOPLES BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0438313484191895,
    "tries": 22965
  },
  {
    "card": "6580446800379273",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231568813323975,
    "tries": 22972
  },
  {
    "card": "4872119226017335438",
    "bank": "HASKELL NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9203226566314697,
    "tries": 22983
  },
  {
    "card": "6579296769198658",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.022453784942627,
    "tries": 22989
  },
  {
    "card": "4389521218661732",
    "bank": "TCF NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.02388334274292,
    "tries": 23002
  },
  {
    "card": "676215946754",
    "bank": "NATWEST",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 1.0229685306549072,
    "tries": 23008
  },
  {
    "card": "180000664705607",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233302116394043,
    "tries": 23014
  },
  {
    "card": "675969598209",
    "bank": "ROYAL BANK OF SCOTLAND PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0235836505889893,
    "tries": 23020
  },
  {
    "card": "4227645220020625166",
    "bank": "BANCO SANTANDER CHILE",
    "country": "Chile",
    "brand": "visa",
    "type": "credit",
    "time": 1.1252822875976562,
    "tries": 23026
  },
  {
    "card": "3551611596709361",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023500919342041,
    "tries": 23032
  },
  {
    "card": "3547605540995925",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234754085540771,
    "tries": 23038
  },
  {
    "card": "4516982155665236365",
    "bank": "SAMPATH BANK, LTD.",
    "country": "Sri Lanka",
    "brand": "visa",
    "type": "debit",
    "time": 0.9211127758026123,
    "tries": 23062
  },
  {
    "card": "4007298086524126",
    "bank": "Desconhecido",
    "country": "El Salvador",
    "brand": "visa",
    "type": "debit",
    "time": 1.0237014293670654,
    "tries": 23068
  },
  {
    "card": "5319271416566034",
    "bank": "NORWEST BANK IOWA N.A.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.9209117889404297,
    "tries": 23074
  },
  {
    "card": "4915269915234949",
    "bank": "SCHUYLER SAVINGS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9207196235656738,
    "tries": 23080
  },
  {
    "card": "3548140959458594",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232658386230469,
    "tries": 23104
  },
  {
    "card": "4538981454692",
    "bank": "MITSUBISHI UFJ FINANCIAL GROUP, INC.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.023367166519165,
    "tries": 23110
  },
  {
    "card": "4226820238357",
    "bank": "JSCB BTA KAZAN OJSC",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236389636993408,
    "tries": 23116
  },
  {
    "card": "180074890384669",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.920844316482544,
    "tries": 23128
  },
  {
    "card": "30461339768556",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232820510864258,
    "tries": 23146
  },
  {
    "card": "4928579681831181157",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235552787780762,
    "tries": 23152
  },
  {
    "card": "30354936279905",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9904069900512695,
    "tries": 23158
  },
  {
    "card": "4535463270441682",
    "bank": "LABE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234124660491943,
    "tries": 23164
  },
  {
    "card": "213153824203269",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233111381530762,
    "tries": 23176
  },
  {
    "card": "3530347753472909",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9090666770935059,
    "tries": 23182
  },
  {
    "card": "5297509568213624",
    "bank": "Desconhecido",
    "country": "Kenya",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023486614227295,
    "tries": 23194
  },
  {
    "card": "4780678144346911597",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0237030982971191,
    "tries": 23200
  },
  {
    "card": "3531018680050287",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233232975006104,
    "tries": 23206
  },
  {
    "card": "180028649020313",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234484672546387,
    "tries": 23212
  },
  {
    "card": "4284102079189211912",
    "bank": "EQUICOM SAVINGS BANK, INC.",
    "country": "Philippines",
    "brand": "visa",
    "type": "debit",
    "time": 1.023850917816162,
    "tries": 23218
  },
  {
    "card": "3584774067238186",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9203841686248779,
    "tries": 23236
  },
  {
    "card": "38755910041834",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232610702514648,
    "tries": 23242
  },
  {
    "card": "4552363969832993",
    "bank": "SOCIETE INTERBANK, S.A.",
    "country": "Morocco",
    "brand": "visa",
    "type": "debit",
    "time": 1.035264492034912,
    "tries": 23248
  },
  {
    "card": "4115240704431002491",
    "bank": "ARIZONA CENTRAL C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023505449295044,
    "tries": 23255
  },
  {
    "card": "3579747124744716",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0229787826538086,
    "tries": 23266
  },
  {
    "card": "562659620859",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0230841636657715,
    "tries": 23272
  },
  {
    "card": "30059582903522",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0237030982971191,
    "tries": 23284
  },
  {
    "card": "30411108620157",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235795974731445,
    "tries": 23290
  },
  {
    "card": "213147580792150",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023402452468872,
    "tries": 23296
  },
  {
    "card": "30141400861999",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235109329223633,
    "tries": 23302
  },
  {
    "card": "4591105978757",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9207258224487305,
    "tries": 23308
  },
  {
    "card": "30072600090347",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235469341278076,
    "tries": 23315
  },
  {
    "card": "4918692538619344",
    "bank": "CAJA DE AHORROS DE MADRID (CAJA MADRID)",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 0.920875072479248,
    "tries": 23327
  },
  {
    "card": "180061175408529",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.4331514835357666,
    "tries": 23333
  },
  {
    "card": "4714900471386",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233678817749023,
    "tries": 23339
  },
  {
    "card": "4034329945945785",
    "bank": "POCA VALLEY BANK, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9211781024932861,
    "tries": 23345
  },
  {
    "card": "4161052125248417",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9206790924072266,
    "tries": 23351
  },
  {
    "card": "4511305149868",
    "bank": "SEYLAN BANK, LTD.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9203891754150391,
    "tries": 23357
  },
  {
    "card": "6548935790045291",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231828689575195,
    "tries": 23369
  },
  {
    "card": "3582121590578930",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236010551452637,
    "tries": 23375
  },
  {
    "card": "4477370439129290",
    "bank": "AMERICAN GREETINGS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231032371520996,
    "tries": 23393
  },
  {
    "card": "30027383557706",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0227839946746826,
    "tries": 23405
  },
  {
    "card": "180061788940132",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023613691329956,
    "tries": 23411
  },
  {
    "card": "180062831789005",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211480617523193,
    "tries": 23417
  },
  {
    "card": "6011969144453412",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.0234105587005615,
    "tries": 23429
  },
  {
    "card": "180062394471686",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209589958190918,
    "tries": 23435
  },
  {
    "card": "585424291052",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0230400562286377,
    "tries": 23442
  },
  {
    "card": "4081426470079506702",
    "bank": "HUDSON VALLEY F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023298978805542,
    "tries": 23448
  },
  {
    "card": "4563857393964",
    "bank": "BANCO MUNICIPAL DE LA PLATA",
    "country": "Argentina",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233182907104492,
    "tries": 23466
  },
  {
    "card": "4727907096663919",
    "bank": "FIRST CITY BANK OF FLORIDA",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0250647068023682,
    "tries": 23477
  },
  {
    "card": "4737589044617635172",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236284732818604,
    "tries": 23490
  },
  {
    "card": "30589363408192",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023627758026123,
    "tries": 23496
  },
  {
    "card": "575822286200",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0235121250152588,
    "tries": 23502
  },
  {
    "card": "4944506387740",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0229599475860596,
    "tries": 23508
  },
  {
    "card": "4483545668474667649",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236363410949707,
    "tries": 23515
  },
  {
    "card": "3563910361299319",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234594345092773,
    "tries": 23521
  },
  {
    "card": "375276875254495",
    "bank": "AMERICAN EXPRESS",
    "country": "Italy",
    "brand": "amex",
    "type": "credit",
    "time": 1.0235910415649414,
    "tries": 23527
  },
  {
    "card": "3548958606449413",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233166217803955,
    "tries": 23533
  },
  {
    "card": "213103144694606",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9217216968536377,
    "tries": 23545
  },
  {
    "card": "4666831419910",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233914852142334,
    "tries": 23557
  },
  {
    "card": "213121469690819",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0215709209442139,
    "tries": 23563
  },
  {
    "card": "4568089818696",
    "bank": "CARTASI S.P.A.",
    "country": "Italy",
    "brand": "visa",
    "type": "credit",
    "time": 1.1257200241088867,
    "tries": 23569
  },
  {
    "card": "374669785788217",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "credit",
    "time": 1.0235252380371094,
    "tries": 23587
  },
  {
    "card": "4998603061924038",
    "bank": "BANCO BRADESCO CARTOES, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211611747741699,
    "tries": 23599
  },
  {
    "card": "30556896276602",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023453950881958,
    "tries": 23623
  },
  {
    "card": "6548975044699758",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233392715454102,
    "tries": 23629
  },
  {
    "card": "4157823978758",
    "bank": "METROPOLITAN NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234646797180176,
    "tries": 23641
  },
  {
    "card": "4175200188449444477",
    "bank": "HUNSTRUP-OESTERLID SPAREKASSE",
    "country": "Denmark",
    "brand": "visa",
    "type": "debit",
    "time": 1.0233314037322998,
    "tries": 23647
  },
  {
    "card": "4525573345586",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235192775726318,
    "tries": 23653
  },
  {
    "card": "3566234628967635",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235035419464111,
    "tries": 23659
  },
  {
    "card": "213143949274808",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236480236053467,
    "tries": 23665
  },
  {
    "card": "213127568883411",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232770442962646,
    "tries": 23671
  },
  {
    "card": "4861697054124195518",
    "bank": "WINGS FINANCIAL",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023101568222046,
    "tries": 23677
  },
  {
    "card": "4533582993534812",
    "bank": "CREDIT AGRICOLE, S.A.",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 1.0238261222839355,
    "tries": 23684
  },
  {
    "card": "4637665502806371015",
    "bank": "BANK ASIA, LTD.",
    "country": "Bangladesh",
    "brand": "visa",
    "type": "credit",
    "time": 1.0228512287139893,
    "tries": 23696
  },
  {
    "card": "4505006375140547",
    "bank": "CANADIAN IMPERIAL BANK OF COMMERCE",
    "country": "Bulgaria",
    "brand": "visa",
    "type": "debit",
    "time": 1.0233075618743896,
    "tries": 23708
  },
  {
    "card": "4840661718871384956",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232625007629395,
    "tries": 23714
  },
  {
    "card": "6551266526727836",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023928165435791,
    "tries": 23720
  },
  {
    "card": "3577455004547298",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236248970031738,
    "tries": 23726
  },
  {
    "card": "3534165520473281",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233774185180664,
    "tries": 23738
  },
  {
    "card": "4586127232640626959",
    "bank": "DZ BANK AG",
    "country": "Germany",
    "brand": "visa",
    "type": "debit",
    "time": 0.9208972454071045,
    "tries": 23744
  },
  {
    "card": "5354008722420217",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0234620571136475,
    "tries": 23750
  },
  {
    "card": "3566523537172232",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9213213920593262,
    "tries": 23762
  },
  {
    "card": "3534977170150492",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233325958251953,
    "tries": 23768
  },
  {
    "card": "676192029350",
    "bank": "Desconhecido",
    "country": "Latvia",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0235583782196045,
    "tries": 23792
  },
  {
    "card": "30061438257871",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9213142395019531,
    "tries": 23798
  },
  {
    "card": "30247363886418",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0373306274414062,
    "tries": 23810
  },
  {
    "card": "501817083295",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232584476470947,
    "tries": 23828
  },
  {
    "card": "3549033548182560",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9212229251861572,
    "tries": 23834
  },
  {
    "card": "4950689268131697",
    "bank": "CORNER BANCA, S.A.",
    "country": "Switzerland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234506130218506,
    "tries": 23846
  },
  {
    "card": "180082804199859",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211394786834717,
    "tries": 23852
  },
  {
    "card": "3585406206136489",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234739780426025,
    "tries": 23858
  },
  {
    "card": "180076589166885",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0274524688720703,
    "tries": 23865
  },
  {
    "card": "4131966670964762",
    "bank": "SUNSTATE F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236802101135254,
    "tries": 23871
  },
  {
    "card": "4705084497029268",
    "bank": "STANFORD F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232155323028564,
    "tries": 23877
  },
  {
    "card": "4998626629783521850",
    "bank": "BANCO BRADESCO CARTOES, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211082458496094,
    "tries": 23883
  },
  {
    "card": "180073923891906",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209439754486084,
    "tries": 23889
  },
  {
    "card": "180067521881731",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023900032043457,
    "tries": 23895
  },
  {
    "card": "3528890240723453",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023369312286377,
    "tries": 23901
  },
  {
    "card": "5375847366461903",
    "bank": "Desconhecido",
    "country": "Italy",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232737064361572,
    "tries": 23907
  },
  {
    "card": "4498996316392513",
    "bank": "PEOPLES BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0239267349243164,
    "tries": 23919
  },
  {
    "card": "30319337452252",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0222392082214355,
    "tries": 23937
  },
  {
    "card": "676327343510",
    "bank": "Desconhecido",
    "country": "Slovenia",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023296594619751,
    "tries": 23943
  },
  {
    "card": "639079000647",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023430347442627,
    "tries": 23955
  },
  {
    "card": "4738064027934865",
    "bank": "TEXAS STATE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9210648536682129,
    "tries": 23961
  },
  {
    "card": "4437461754525839",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235247611999512,
    "tries": 23967
  },
  {
    "card": "4969334284262346",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0238404273986816,
    "tries": 23973
  },
  {
    "card": "568432847032",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0235157012939453,
    "tries": 23979
  },
  {
    "card": "4567328885649",
    "bank": "GUINNESS MAHON AND CO., LTD.",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.023033857345581,
    "tries": 23985
  },
  {
    "card": "5237829398389102",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.023820400238037,
    "tries": 23991
  },
  {
    "card": "639037598732",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0237936973571777,
    "tries": 24021
  },
  {
    "card": "4376118085448",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234973430633545,
    "tries": 24033
  },
  {
    "card": "4789408595548",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.842968463897705,
    "tries": 24038
  },
  {
    "card": "6539429449817798",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232064723968506,
    "tries": 24044
  },
  {
    "card": "4469031639328492",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234010219573975,
    "tries": 24056
  },
  {
    "card": "4460259643521369",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0238466262817383,
    "tries": 24062
  },
  {
    "card": "180084767359967",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235297679901123,
    "tries": 24069
  },
  {
    "card": "639097021286",
    "bank": "Desconhecido",
    "country": "Belgium",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9212324619293213,
    "tries": 24074
  },
  {
    "card": "4872665179956",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0953643321990967,
    "tries": 24086
  },
  {
    "card": "3538891841496588",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1255288124084473,
    "tries": 24091
  },
  {
    "card": "4227833920382355250",
    "bank": "FARMERS BANK AND TRUST, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235934257507324,
    "tries": 24097
  },
  {
    "card": "4680980082853690",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023747205734253,
    "tries": 24103
  },
  {
    "card": "4687910369628",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0567378997802734,
    "tries": 24109
  },
  {
    "card": "3575375470647970",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0238158702850342,
    "tries": 24115
  },
  {
    "card": "4173517911103329",
    "bank": "HYPO ALPE-ADRIA-BANK A.D. BEOGRAD",
    "country": "Serbia",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232934951782227,
    "tries": 24121
  },
  {
    "card": "675945764198",
    "bank": "ALLOCATED TO SWITCH",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0236008167266846,
    "tries": 24127
  },
  {
    "card": "4122732715261",
    "bank": "FIRST NATIONAL BANK IN SIOUX FALLS",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0237033367156982,
    "tries": 24133
  },
  {
    "card": "38003718829237",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.024153470993042,
    "tries": 24152
  },
  {
    "card": "4188716941098179533",
    "bank": "BANK FOR FOREIGN TRADE (VNESHTORGBANK)",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232601165771484,
    "tries": 24158
  },
  {
    "card": "4368701153573551211",
    "bank": "WEST SUBURBAN BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0237462520599365,
    "tries": 24163
  },
  {
    "card": "6011039020202729",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9868416786193848,
    "tries": 24170
  },
  {
    "card": "4773032952473122",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233509540557861,
    "tries": 24182
  },
  {
    "card": "213185658007119",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0229854583740234,
    "tries": 24188
  },
  {
    "card": "3532007414864492",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231215953826904,
    "tries": 24194
  },
  {
    "card": "4368713170346841",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.941248893737793,
    "tries": 24200
  },
  {
    "card": "6011045660421693",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9206283092498779,
    "tries": 24206
  },
  {
    "card": "4136104594186156",
    "bank": "LOUISIANA PUBLIC HEALTH WORKERS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234310626983643,
    "tries": 24218
  },
  {
    "card": "3546551572102355",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231997966766357,
    "tries": 24224
  },
  {
    "card": "373553190705126",
    "bank": "AMERICAN EXPRESS",
    "country": "Canada",
    "brand": "amex",
    "type": "credit",
    "time": 1.023380994796753,
    "tries": 24230
  },
  {
    "card": "4271413497395994900",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9212019443511963,
    "tries": 24236
  },
  {
    "card": "4108456423485397",
    "bank": "LEHIGH COUNTY EMPLOYEES F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9214162826538086,
    "tries": 24242
  },
  {
    "card": "4915784390101",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9210999011993408,
    "tries": 24254
  },
  {
    "card": "4836628844204",
    "bank": "Desconhecido",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 0.9249734878540039,
    "tries": 24272
  },
  {
    "card": "30130216174242",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9207954406738281,
    "tries": 24278
  },
  {
    "card": "4179346219866",
    "bank": "NATIONAL CITY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234942436218262,
    "tries": 24284
  },
  {
    "card": "502038382763",
    "bank": "Desconhecido",
    "country": "Spain",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9910440444946289,
    "tries": 24290
  },
  {
    "card": "4580896486653042",
    "bank": "CIBC BANK AND TRUST COMPANY CAYMAN, LTD.",
    "country": "Cayman Islands",
    "brand": "visa",
    "type": "credit",
    "time": 0.9939334392547607,
    "tries": 24296
  },
  {
    "card": "4235905008712423",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9210772514343262,
    "tries": 24314
  },
  {
    "card": "30262440848265",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232090950012207,
    "tries": 24320
  },
  {
    "card": "30145459118086",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9204268455505371,
    "tries": 24326
  },
  {
    "card": "3566850551578550",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234951972961426,
    "tries": 24332
  },
  {
    "card": "4461747768511156721",
    "bank": "U.S. BANK N.A. ND",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234689712524414,
    "tries": 24339
  },
  {
    "card": "4021896108122530",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235352516174316,
    "tries": 24350
  },
  {
    "card": "3552770178522680",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0237970352172852,
    "tries": 24363
  },
  {
    "card": "676282320669",
    "bank": "Desconhecido",
    "country": "Macedonia (the former Yugoslav Republic of)",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0237557888031006,
    "tries": 24369
  },
  {
    "card": "6011499873334716",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235755443572998,
    "tries": 24381
  },
  {
    "card": "4706127489134",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232033729553223,
    "tries": 24387
  },
  {
    "card": "4387581349617854000",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "None",
    "time": 1.0232887268066406,
    "tries": 24393
  },
  {
    "card": "5160309434255634",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232558250427246,
    "tries": 24399
  },
  {
    "card": "4752258488941",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9213619232177734,
    "tries": 24405
  },
  {
    "card": "4746875806739768568",
    "bank": "FIA CARD SERVICES, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0052900314331055,
    "tries": 24411
  },
  {
    "card": "4686492703360",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9787611961364746,
    "tries": 24423
  },
  {
    "card": "4267919535002709182",
    "bank": "TIPPECANOE F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9547646045684814,
    "tries": 24429
  },
  {
    "card": "3551881316660182",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0220534801483154,
    "tries": 24435
  },
  {
    "card": "4457526924081015",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9747111797332764,
    "tries": 24441
  },
  {
    "card": "3543304343232298",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232422351837158,
    "tries": 24459
  },
  {
    "card": "3536750177538730",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234489440917969,
    "tries": 24465
  },
  {
    "card": "4200476442976777",
    "bank": "FIRST INTERSTATE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231637954711914,
    "tries": 24489
  },
  {
    "card": "4603501167262344",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230119228363037,
    "tries": 24495
  },
  {
    "card": "4664710980924047056",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0221707820892334,
    "tries": 24507
  },
  {
    "card": "4839972361409353882",
    "bank": "PEOPLES TRUST COMPANY",
    "country": "Canada",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236270427703857,
    "tries": 24513
  },
  {
    "card": "4058508864679",
    "bank": "VIKING JS CREDIT BANK CLOSE CORPORATION",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235157012939453,
    "tries": 24519
  },
  {
    "card": "180080367974411",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0221240520477295,
    "tries": 24525
  },
  {
    "card": "4248009686908984",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234770774841309,
    "tries": 24531
  },
  {
    "card": "6552051180274674",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0243439674377441,
    "tries": 24544
  },
  {
    "card": "38261084422884",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0211985111236572,
    "tries": 24550
  },
  {
    "card": "213193716877390",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0216131210327148,
    "tries": 24556
  },
  {
    "card": "4981480033569",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.024871826171875,
    "tries": 24561
  },
  {
    "card": "6553627937919163",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0223286151885986,
    "tries": 24568
  },
  {
    "card": "4167254650327777411",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235891342163086,
    "tries": 24574
  },
  {
    "card": "4439684440887923016",
    "bank": "COMMERCIAL BANK OF KUWAIT, S.A.K.",
    "country": "Kuwait",
    "brand": "visa",
    "type": "credit",
    "time": 1.048177719116211,
    "tries": 24585
  },
  {
    "card": "4087629127573008",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9207472801208496,
    "tries": 24591
  },
  {
    "card": "4154587516429703",
    "bank": "SAEHAN BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0237467288970947,
    "tries": 24598
  },
  {
    "card": "5497951162615549",
    "bank": "PUBLIC BANK BERHAD",
    "country": "Malaysia",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232396125793457,
    "tries": 24604
  },
  {
    "card": "213162905232899",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235352516174316,
    "tries": 24610
  },
  {
    "card": "4888236933721994",
    "bank": "FIRST COMMUNITY CREDIT UNION OF HOUSTON",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023139476776123,
    "tries": 24616
  },
  {
    "card": "4214518559087486",
    "bank": "STANDARD CHARTERED BANK",
    "country": "Bangladesh",
    "brand": "visa",
    "type": "debit",
    "time": 1.0233919620513916,
    "tries": 24628
  },
  {
    "card": "4714345411444712",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0238027572631836,
    "tries": 24634
  },
  {
    "card": "4909151657705",
    "bank": "CAPITAL ONE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232372283935547,
    "tries": 24640
  },
  {
    "card": "4894140692050025664",
    "bank": "BANCO ITAUCARD, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236523151397705,
    "tries": 24646
  },
  {
    "card": "3577847706386464",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023336410522461,
    "tries": 24658
  },
  {
    "card": "30225005934630",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236091613769531,
    "tries": 24664
  },
  {
    "card": "213136009506150",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231435298919678,
    "tries": 24670
  },
  {
    "card": "375355354661998",
    "bank": "AMERICAN EXPRESS",
    "country": "Netherlands",
    "brand": "amex",
    "type": "credit",
    "time": 0.9152312278747559,
    "tries": 24682
  },
  {
    "card": "4652807796778166",
    "bank": "Desconhecido",
    "country": "France",
    "brand": "visa",
    "type": "debit",
    "time": 0.9207768440246582,
    "tries": 24688
  },
  {
    "card": "4671326357328600049",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235228538513184,
    "tries": 24694
  },
  {
    "card": "6011943429027415",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.021116018295288,
    "tries": 24706
  },
  {
    "card": "3577613971620494",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0230462551116943,
    "tries": 24712
  },
  {
    "card": "6011386499610670",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235774517059326,
    "tries": 24718
  },
  {
    "card": "378407003253847",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.921757698059082,
    "tries": 24730
  },
  {
    "card": "4394396035351558",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0230317115783691,
    "tries": 24754
  },
  {
    "card": "38798765430777",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.024470567703247,
    "tries": 24766
  },
  {
    "card": "5436091821314285",
    "bank": "SOCIETE GENERALE DE BANQUES AU SENEGAL",
    "country": "Senegal",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 1.021620512008667,
    "tries": 24772
  },
  {
    "card": "6549145988174775",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023571252822876,
    "tries": 24778
  },
  {
    "card": "4225712517445509",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236132144927979,
    "tries": 24785
  },
  {
    "card": "3540312934736455",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0230956077575684,
    "tries": 24791
  },
  {
    "card": "180023465612475",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233104228973389,
    "tries": 24797
  },
  {
    "card": "4206526281018",
    "bank": "CARIBBEAN COMMERCIAL INVESTMENT BANK, LTD.",
    "country": "Anguilla",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231761932373047,
    "tries": 24803
  },
  {
    "card": "6011470754550571",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0172617435455322,
    "tries": 24809
  },
  {
    "card": "4947522683984",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9212381839752197,
    "tries": 24821
  },
  {
    "card": "3584689416369286",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232117176055908,
    "tries": 24827
  },
  {
    "card": "676210008196",
    "bank": "Desconhecido",
    "country": "Italy",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023402214050293,
    "tries": 24833
  },
  {
    "card": "180012628605005",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9207344055175781,
    "tries": 24857
  },
  {
    "card": "675991963223",
    "bank": "ALLOCATED TO SWITCH",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9211852550506592,
    "tries": 24876
  },
  {
    "card": "180076455187973",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023437738418579,
    "tries": 24882
  },
  {
    "card": "180039205055486",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0238194465637207,
    "tries": 24888
  },
  {
    "card": "3539346590736733",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0181941986083984,
    "tries": 24894
  },
  {
    "card": "577121767187",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0253446102142334,
    "tries": 24899
  },
  {
    "card": "371026158710331",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0131466388702393,
    "tries": 24905
  },
  {
    "card": "4130872944198305",
    "bank": "BANK FOR FOREIGN TRADE (VNESHTORGBANK)",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 0.9213414192199707,
    "tries": 24912
  },
  {
    "card": "4071396940253",
    "bank": "NATIONAL CITY BANK OF COLUMBUS",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0290193557739258,
    "tries": 24918
  },
  {
    "card": "6011041465378899",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0237078666687012,
    "tries": 24923
  },
  {
    "card": "3574440085892485",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0230700969696045,
    "tries": 24929
  },
  {
    "card": "4473857454103428",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.038512945175171,
    "tries": 24941
  },
  {
    "card": "6500823759995746",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0227234363555908,
    "tries": 24947
  },
  {
    "card": "4038901023187694748",
    "bank": "OJSC NORDEA BANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.023343563079834,
    "tries": 24960
  },
  {
    "card": "3585133800314417",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0223166942596436,
    "tries": 24966
  },
  {
    "card": "4146582241060578914",
    "bank": "BANK ZENIT",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0243666172027588,
    "tries": 24972
  },
  {
    "card": "3541615813141541",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232620239257812,
    "tries": 24978
  },
  {
    "card": "3550567910824669",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.024613618850708,
    "tries": 24984
  },
  {
    "card": "4903004566928588",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 0.9203751087188721,
    "tries": 24990
  },
  {
    "card": "4009846302680714",
    "bank": "FIVE STAR BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0037882328033447,
    "tries": 25002
  },
  {
    "card": "4378921432721827548",
    "bank": "ADVANCED BANK OF ASIA, LTD.",
    "country": "Cambodia",
    "brand": "visa",
    "type": "credit",
    "time": 0.9193198680877686,
    "tries": 25008
  },
  {
    "card": "4205950354322357",
    "bank": "OMAN INTERNATIONAL BANK S.A.O.",
    "country": "Oman",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230293273925781,
    "tries": 25014
  },
  {
    "card": "38924309752241",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9159443378448486,
    "tries": 25020
  },
  {
    "card": "4884831991438",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9799013137817383,
    "tries": 25032
  },
  {
    "card": "3556382070547728",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9244434833526611,
    "tries": 25039
  },
  {
    "card": "180089860420640",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023463487625122,
    "tries": 25045
  },
  {
    "card": "2228811013629367",
    "bank": "Desconhecido",
    "country": "Morocco",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9199638366699219,
    "tries": 25063
  },
  {
    "card": "3569841059043749",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231380462646484,
    "tries": 25081
  },
  {
    "card": "180094270314664",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0271844863891602,
    "tries": 25099
  },
  {
    "card": "4773670727580943",
    "bank": "BANCO CITIBANK (PANAMA), S.A.",
    "country": "Panama",
    "brand": "visa",
    "type": "credit",
    "time": 1.1090567111968994,
    "tries": 25105
  },
  {
    "card": "180063214837577",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.027998685836792,
    "tries": 25117
  },
  {
    "card": "4177006368503811116",
    "bank": "FRANKLIN MINT F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.956594705581665,
    "tries": 25129
  },
  {
    "card": "4542528684370700321",
    "bank": "UC CARD CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 0.9203050136566162,
    "tries": 25135
  },
  {
    "card": "503888904169",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0271809101104736,
    "tries": 25147
  },
  {
    "card": "213155968659255",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.130446195602417,
    "tries": 25159
  },
  {
    "card": "4200174622698",
    "bank": "AMERICREST BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9209473133087158,
    "tries": 25165
  },
  {
    "card": "5293278307868577",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0235586166381836,
    "tries": 25177
  },
  {
    "card": "374539010398407",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "Desconhecido",
    "time": 1.0235435962677002,
    "tries": 25195
  },
  {
    "card": "3584330009068460",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0274510383605957,
    "tries": 25206
  },
  {
    "card": "4031034864516079",
    "bank": "EDUCATIONAL SYSTEMS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.027449607849121,
    "tries": 25212
  },
  {
    "card": "4126783724893807",
    "bank": "MATANUSKA VALLEY F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023745059967041,
    "tries": 25224
  },
  {
    "card": "4639654623372955",
    "bank": "CENTRAL STATE C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9251058101654053,
    "tries": 25230
  },
  {
    "card": "3580121922516139",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0237040519714355,
    "tries": 25248
  },
  {
    "card": "4044274453394869",
    "bank": "Desconhecido",
    "country": "Guatemala",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229227542877197,
    "tries": 25255
  },
  {
    "card": "639009473054",
    "bank": "Desconhecido",
    "country": "Slovakia",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0190374851226807,
    "tries": 25266
  },
  {
    "card": "180064416841177",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9251389503479004,
    "tries": 25272
  },
  {
    "card": "4959807731768",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0242846012115479,
    "tries": 25279
  },
  {
    "card": "379687582810088",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.9176235198974609,
    "tries": 25285
  },
  {
    "card": "5553158913848418",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.019665002822876,
    "tries": 25297
  },
  {
    "card": "6011426372633082",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0222434997558594,
    "tries": 25309
  },
  {
    "card": "4253366440305983881",
    "bank": "BANK OF NEW YORK (DELAWARE)",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0266461372375488,
    "tries": 25315
  },
  {
    "card": "213161450158285",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9172186851501465,
    "tries": 25321
  },
  {
    "card": "4130025857815",
    "bank": "GMAC BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.021223545074463,
    "tries": 25327
  },
  {
    "card": "180092623357141",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9207668304443359,
    "tries": 25333
  },
  {
    "card": "3545331296982395",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023545265197754,
    "tries": 25339
  },
  {
    "card": "571959254707",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0228793621063232,
    "tries": 25351
  },
  {
    "card": "30086885831035",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9082953929901123,
    "tries": 25357
  },
  {
    "card": "6011916444991849",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.9203877449035645,
    "tries": 25363
  },
  {
    "card": "4446748039481765697",
    "bank": "Desconhecido",
    "country": "Kyrgyzstan",
    "brand": "visa",
    "type": "debit",
    "time": 1.023395299911499,
    "tries": 25369
  },
  {
    "card": "372066928023515",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 0.9205327033996582,
    "tries": 25381
  },
  {
    "card": "6559610753168945",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236897468566895,
    "tries": 25393
  },
  {
    "card": "38272995652311",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.921097993850708,
    "tries": 25405
  },
  {
    "card": "4629737543227268",
    "bank": "SMARTPURSE",
    "country": "Thailand",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231733322143555,
    "tries": 25411
  },
  {
    "card": "676186620529",
    "bank": "Desconhecido",
    "country": "Italy",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0234675407409668,
    "tries": 25429
  },
  {
    "card": "4127928742687370711",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9208061695098877,
    "tries": 25435
  },
  {
    "card": "4415424179591136581",
    "bank": "BANCO NACIONAL DE MEXICO, S.A.",
    "country": "Mexico",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232830047607422,
    "tries": 25441
  },
  {
    "card": "6541575147335966",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023738145828247,
    "tries": 25447
  },
  {
    "card": "4283843488279400",
    "bank": "MBNA EUROPE BANK, LTD.",
    "country": "Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234744548797607,
    "tries": 25454
  },
  {
    "card": "4560718228402104",
    "bank": "BANCO BILBAO VIZCAYA ARGENTARIA S.A. (BBVA)",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 0.9204871654510498,
    "tries": 25459
  },
  {
    "card": "4812695916535468",
    "bank": "Desconhecido",
    "country": "Tonga",
    "brand": "visa",
    "type": "credit",
    "time": 1.0223102569580078,
    "tries": 25465
  },
  {
    "card": "213137771722512",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9208083152770996,
    "tries": 25471
  },
  {
    "card": "4435153962968",
    "bank": "BA MERCHANT SERVICES, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.02323317527771,
    "tries": 25478
  },
  {
    "card": "503876788897",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9209067821502686,
    "tries": 25484
  },
  {
    "card": "4363309425136270",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "debit",
    "time": 0.9210658073425293,
    "tries": 25490
  },
  {
    "card": "3571893029720605",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0484340190887451,
    "tries": 25495
  },
  {
    "card": "4033633015971345",
    "bank": "COMMERCIAL BANK ALLIANZ BULGARIA A.D.",
    "country": "Bulgaria",
    "brand": "visa",
    "type": "debit",
    "time": 1.023615837097168,
    "tries": 25501
  },
  {
    "card": "4865784089732312",
    "bank": "BC CARD CO., LTD.",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "credit",
    "time": 1.0237467288970947,
    "tries": 25507
  },
  {
    "card": "180044112036728",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233285427093506,
    "tries": 25513
  },
  {
    "card": "583001399554",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9210882186889648,
    "tries": 25519
  },
  {
    "card": "378392483509993",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0231270790100098,
    "tries": 25531
  },
  {
    "card": "4047257712292815",
    "bank": "ALLIANCE BANK OF BELIZE, LTD.",
    "country": "Belize",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0231306552886963,
    "tries": 25543
  },
  {
    "card": "3559062420232216",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0243163108825684,
    "tries": 25549
  },
  {
    "card": "213197340275772",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233776569366455,
    "tries": 25561
  },
  {
    "card": "4834359398235",
    "bank": "Desconhecido",
    "country": "Algeria",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236589908599854,
    "tries": 25567
  },
  {
    "card": "4007772432962354",
    "bank": "MICHIGAN COMMERCE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023127555847168,
    "tries": 25573
  },
  {
    "card": "3578598063274384",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209244251251221,
    "tries": 25579
  },
  {
    "card": "180077482476728",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234370231628418,
    "tries": 25585
  },
  {
    "card": "3535243995551367",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234932899475098,
    "tries": 25597
  },
  {
    "card": "38051010968120",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232434272766113,
    "tries": 25603
  },
  {
    "card": "213110737256099",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234673023223877,
    "tries": 25609
  },
  {
    "card": "373749060514099",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0230846405029297,
    "tries": 25621
  },
  {
    "card": "30390531171220",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233030319213867,
    "tries": 25633
  },
  {
    "card": "4031491673953143",
    "bank": "Desconhecido",
    "country": "Malaysia",
    "brand": "visa",
    "type": "credit",
    "time": 0.9209802150726318,
    "tries": 25639
  },
  {
    "card": "6590578431024130",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9211921691894531,
    "tries": 25652
  },
  {
    "card": "213116528069732",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231482982635498,
    "tries": 25658
  },
  {
    "card": "4104285171746",
    "bank": "BROWARD HEALTHCARE F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232386589050293,
    "tries": 25682
  },
  {
    "card": "6554289491194912",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.024280071258545,
    "tries": 25694
  },
  {
    "card": "180016310217193",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236682891845703,
    "tries": 25700
  },
  {
    "card": "4774510975424",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0227525234222412,
    "tries": 25706
  },
  {
    "card": "3586521079687993",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211606979370117,
    "tries": 25712
  },
  {
    "card": "502040256617",
    "bank": "CAJASTUR",
    "country": "Spain",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9216151237487793,
    "tries": 25718
  },
  {
    "card": "676270747444",
    "bank": "Desconhecido",
    "country": "Slovenia",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0227429866790771,
    "tries": 25730
  },
  {
    "card": "4714891742322291",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0190212726593018,
    "tries": 25742
  },
  {
    "card": "30034953389940",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.4278113842010498,
    "tries": 25754
  },
  {
    "card": "4085252754514088",
    "bank": "TD BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9210374355316162,
    "tries": 25760
  },
  {
    "card": "374821823913626",
    "bank": "AMERICAN EXPRESS",
    "country": "Finland",
    "brand": "amex",
    "type": "credit",
    "time": 0.920771598815918,
    "tries": 25766
  },
  {
    "card": "4192908047211",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233330726623535,
    "tries": 25772
  },
  {
    "card": "4438112987388748",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234684944152832,
    "tries": 25778
  },
  {
    "card": "3553218404499579",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0274105072021484,
    "tries": 25790
  },
  {
    "card": "213111226657045",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.02370023727417,
    "tries": 25796
  },
  {
    "card": "4080534334151647",
    "bank": "PRIME CARE C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0239942073822021,
    "tries": 25802
  },
  {
    "card": "30349748349847",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231585502624512,
    "tries": 25808
  },
  {
    "card": "4404499683174294",
    "bank": "HIMALAYAN BANK, LTD.",
    "country": "Nepal",
    "brand": "visa",
    "type": "credit",
    "time": 1.0272305011749268,
    "tries": 25814
  },
  {
    "card": "4801693658453563",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0195980072021484,
    "tries": 25820
  },
  {
    "card": "6559104899716254",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0226285457611084,
    "tries": 25826
  },
  {
    "card": "38406502667061",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9241509437561035,
    "tries": 25832
  },
  {
    "card": "4008969121484083",
    "bank": "ROCKINGHAM HERITAGE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0190436840057373,
    "tries": 25838
  },
  {
    "card": "4507874967128",
    "bank": "CAJA DE AHORROS DE LA RIOJA (CAJA RIOJA)",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236704349517822,
    "tries": 25844
  },
  {
    "card": "4601100682898",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0199077129364014,
    "tries": 25850
  },
  {
    "card": "676378761073",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0219452381134033,
    "tries": 25856
  },
  {
    "card": "4044654462045681298",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "debit",
    "time": 1.0245542526245117,
    "tries": 25862
  },
  {
    "card": "4546657440205870",
    "bank": "REPUBLIC BANK, LTD.",
    "country": "Trinidad and Tobago",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234336853027344,
    "tries": 25868
  },
  {
    "card": "4682256682267666",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0210990905761719,
    "tries": 25880
  },
  {
    "card": "213163914944110",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9218945503234863,
    "tries": 25886
  },
  {
    "card": "38679076689378",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9690406322479248,
    "tries": 25898
  },
  {
    "card": "4603468469300927",
    "bank": "DENIZBANK, A.S.",
    "country": "Turkey",
    "brand": "visa",
    "type": "debit",
    "time": 1.031196117401123,
    "tries": 25904
  },
  {
    "card": "30115467702049",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0181734561920166,
    "tries": 25910
  },
  {
    "card": "4454036503920396",
    "bank": "U.S. BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.1321520805358887,
    "tries": 25917
  },
  {
    "card": "573379529577",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.1083340644836426,
    "tries": 25922
  },
  {
    "card": "4256463641676799",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0204102993011475,
    "tries": 25940
  },
  {
    "card": "3549169535996610",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0170350074768066,
    "tries": 25946
  },
  {
    "card": "639057882602",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0298068523406982,
    "tries": 25952
  },
  {
    "card": "213104166572191",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0266306400299072,
    "tries": 25958
  },
  {
    "card": "4307114910672972",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0202140808105469,
    "tries": 25981
  },
  {
    "card": "30335039616226",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.019383192062378,
    "tries": 25987
  },
  {
    "card": "4885954082878661",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0269432067871094,
    "tries": 25993
  },
  {
    "card": "581974557125",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0220868587493896,
    "tries": 25999
  },
  {
    "card": "180055600056606",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209389686584473,
    "tries": 26005
  },
  {
    "card": "4309539105170976094",
    "bank": "FIRSTCARIBBEAN INTERNATIONAL BANK (BARBADOS), LTD.",
    "country": "Belize",
    "brand": "visa",
    "type": "credit",
    "time": 1.0197837352752686,
    "tries": 26011
  },
  {
    "card": "213147394658282",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0247995853424072,
    "tries": 26017
  },
  {
    "card": "4213672200693122234",
    "bank": "ABN AMRO BANK, N.V.",
    "country": "Pakistan",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234339237213135,
    "tries": 26023
  },
  {
    "card": "6011471241647715",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0206267833709717,
    "tries": 26029
  },
  {
    "card": "4645175597747",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0201587677001953,
    "tries": 26035
  },
  {
    "card": "180087574570874",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0196807384490967,
    "tries": 26041
  },
  {
    "card": "6011276233846583",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0208039283752441,
    "tries": 26047
  },
  {
    "card": "4053620188223534",
    "bank": "EASTERN BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230019092559814,
    "tries": 26053
  },
  {
    "card": "4051318593946441",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9915952682495117,
    "tries": 26059
  },
  {
    "card": "3552865016343461",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235466957092285,
    "tries": 26065
  },
  {
    "card": "5258573574895342",
    "bank": "Desconhecido",
    "country": "Argentina",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.9214625358581543,
    "tries": 26071
  },
  {
    "card": "4527582282231797",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0228221416473389,
    "tries": 26077
  },
  {
    "card": "375340407122230",
    "bank": "ABN AMRO BANK, N.V.",
    "country": "Netherlands",
    "brand": "amex",
    "type": "credit",
    "time": 1.0232975482940674,
    "tries": 26083
  },
  {
    "card": "213117152876202",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0258572101593018,
    "tries": 26095
  },
  {
    "card": "38426967157721",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023698091506958,
    "tries": 26107
  },
  {
    "card": "4762974291691689499",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "credit",
    "time": 1.023345708847046,
    "tries": 26112
  },
  {
    "card": "180081856014529",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0238256454467773,
    "tries": 26118
  },
  {
    "card": "180062281537896",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0228962898254395,
    "tries": 26124
  },
  {
    "card": "4234803582920309",
    "bank": "Desconhecido",
    "country": "Turkey",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232527256011963,
    "tries": 26142
  },
  {
    "card": "4246249901318706541",
    "bank": "BA MERCHANT SERVICES, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0249767303466797,
    "tries": 26154
  },
  {
    "card": "213157774501960",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023763656616211,
    "tries": 26166
  },
  {
    "card": "4446207011382435146",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9204378128051758,
    "tries": 26184
  },
  {
    "card": "4363734685074",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023407220840454,
    "tries": 26190
  },
  {
    "card": "4935890642712745",
    "bank": "DEUTSCHE BANK S.P.A.",
    "country": "Italy",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233182907104492,
    "tries": 26196
  },
  {
    "card": "6507328304146228",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9205994606018066,
    "tries": 26202
  },
  {
    "card": "372497204937211",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0235610008239746,
    "tries": 26208
  },
  {
    "card": "4350170943686583",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023299217224121,
    "tries": 26214
  },
  {
    "card": "4500130247229",
    "bank": "MONGOL SHYYDAN BANK",
    "country": "Mongolia",
    "brand": "visa",
    "type": "debit",
    "time": 1.023223638534546,
    "tries": 26220
  },
  {
    "card": "5406255852597797",
    "bank": "BANCO DE OCCIDENTE, S.A.",
    "country": "Colombia",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0233478546142578,
    "tries": 26226
  },
  {
    "card": "4651653573985898677",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023677110671997,
    "tries": 26244
  },
  {
    "card": "373429672342649",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.1252055168151855,
    "tries": 26256
  },
  {
    "card": "213191267275113",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211390018463135,
    "tries": 26262
  },
  {
    "card": "4644991330612874",
    "bank": "BANKMED S.A.L.",
    "country": "Lebanon",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234649181365967,
    "tries": 26280
  },
  {
    "card": "4985823071088700160",
    "bank": "Desconhecido",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 0.9210987091064453,
    "tries": 26286
  },
  {
    "card": "4921695787328",
    "bank": "BANCO DE CORRIENTES, S.A.",
    "country": "Argentina",
    "brand": "visa",
    "type": "credit",
    "time": 1.023674488067627,
    "tries": 26292
  },
  {
    "card": "4541093834773155",
    "bank": "SKANDINAVISKA ENSKILDA BANKEN AB",
    "country": "Sweden",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9208288192749023,
    "tries": 26298
  },
  {
    "card": "30093424909124",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.125636339187622,
    "tries": 26310
  },
  {
    "card": "4039759610198077",
    "bank": "TAPER LOCK C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0243306159973145,
    "tries": 26316
  },
  {
    "card": "30557289178645",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9216184616088867,
    "tries": 26322
  },
  {
    "card": "30276338347206",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235974788665771,
    "tries": 26328
  },
  {
    "card": "4750769223968540",
    "bank": "FIRST SAVINGS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0230774879455566,
    "tries": 26334
  },
  {
    "card": "4578365769794",
    "bank": "Desconhecido",
    "country": "Kazakhstan",
    "brand": "visa",
    "type": "credit",
    "time": 0.8766522407531738,
    "tries": 26340
  },
  {
    "card": "4880420296882",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.02286696434021,
    "tries": 26346
  },
  {
    "card": "213189646999130",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232264995574951,
    "tries": 26358
  },
  {
    "card": "4133591567081528901",
    "bank": "BAR-CONS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0415780544281006,
    "tries": 26364
  },
  {
    "card": "213132249882881",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023097276687622,
    "tries": 26376
  },
  {
    "card": "4820488069201",
    "bank": "INNOVATIONS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.022986650466919,
    "tries": 26395
  },
  {
    "card": "6556466365984705",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0217905044555664,
    "tries": 26419
  },
  {
    "card": "4500571237444986",
    "bank": "CANADIAN IMPERIAL BANK OF COMMERCE",
    "country": "Canada",
    "brand": "visa",
    "type": "credit",
    "time": 0.9213106632232666,
    "tries": 26430
  },
  {
    "card": "4158546532745514",
    "bank": "PNC BANK, GLOBAL INVESTMENT SERVICING",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9206984043121338,
    "tries": 26437
  },
  {
    "card": "503818109202",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0230803489685059,
    "tries": 26443
  },
  {
    "card": "4739525498837",
    "bank": "WATERMARK C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0239291191101074,
    "tries": 26449
  },
  {
    "card": "4912285082084191",
    "bank": "NORTH JERSEY F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9471755027770996,
    "tries": 26455
  },
  {
    "card": "4762417216746863",
    "bank": "ROYAL BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232517719268799,
    "tries": 26461
  },
  {
    "card": "373706978553502",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0230703353881836,
    "tries": 26479
  },
  {
    "card": "583706617342",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0236008167266846,
    "tries": 26485
  },
  {
    "card": "30211456001558",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231292247772217,
    "tries": 26491
  },
  {
    "card": "213116258943684",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9213924407958984,
    "tries": 26503
  },
  {
    "card": "3534673019776221",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0238122940063477,
    "tries": 26509
  },
  {
    "card": "4725539787943",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232264995574951,
    "tries": 26515
  },
  {
    "card": "4106684889897829",
    "bank": "UNION INTERNATIONALE DE BANQUES (UIB)",
    "country": "Tunisia",
    "brand": "visa",
    "type": "debit",
    "time": 0.9197921752929688,
    "tries": 26521
  },
  {
    "card": "4556880750820",
    "bank": "CREDIT DU NORD",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 1.0245466232299805,
    "tries": 26527
  },
  {
    "card": "370205264236008",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0248668193817139,
    "tries": 26540
  },
  {
    "card": "4438081877698039",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0238385200500488,
    "tries": 26552
  },
  {
    "card": "3533985503592745",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209394454956055,
    "tries": 26563
  },
  {
    "card": "4430749735137048",
    "bank": "PNC BANK, N.A.",
    "country": "Guatemala",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231142044067383,
    "tries": 26569
  },
  {
    "card": "213139643881955",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0238263607025146,
    "tries": 26575
  },
  {
    "card": "30471342975387",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0221586227416992,
    "tries": 26581
  },
  {
    "card": "4353278971903557201",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0240588188171387,
    "tries": 26587
  },
  {
    "card": "3542604316579141",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0238945484161377,
    "tries": 26600
  },
  {
    "card": "3584936953077826",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9941930770874023,
    "tries": 26611
  },
  {
    "card": "6011028149831245",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9192860126495361,
    "tries": 26617
  },
  {
    "card": "3543723888523698",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9217319488525391,
    "tries": 26624
  },
  {
    "card": "4880933182884",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9212741851806641,
    "tries": 26630
  },
  {
    "card": "180077945233617",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0211453437805176,
    "tries": 26636
  },
  {
    "card": "370210081164995",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0227735042572021,
    "tries": 26648
  },
  {
    "card": "213109101888628",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9207258224487305,
    "tries": 26666
  },
  {
    "card": "565140948342",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0237071514129639,
    "tries": 26672
  },
  {
    "card": "30067034745805",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9205639362335205,
    "tries": 26678
  },
  {
    "card": "639068511141",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0242226123809814,
    "tries": 26684
  },
  {
    "card": "3571549553513010",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0230958461761475,
    "tries": 26690
  },
  {
    "card": "4121711117203636",
    "bank": "ALLEGIANCE COMMUNITY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.1004936695098877,
    "tries": 26708
  },
  {
    "card": "6563032227588992",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232248306274414,
    "tries": 26726
  },
  {
    "card": "375572724529487",
    "bank": "AMERICAN EXPRESS",
    "country": "Portugal",
    "brand": "amex",
    "type": "credit",
    "time": 1.0239536762237549,
    "tries": 26732
  },
  {
    "card": "4652461149091941",
    "bank": "BANQUE NATIONALE AGRICOLE",
    "country": "Tunisia",
    "brand": "visa",
    "type": "debit",
    "time": 1.027052402496338,
    "tries": 26738
  },
  {
    "card": "30395813781026",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0234181880950928,
    "tries": 26744
  },
  {
    "card": "4020902838286255",
    "bank": "MARFIN EGNATIA BANK, S.A.",
    "country": "Greece",
    "brand": "visa",
    "type": "debit",
    "time": 0.920891284942627,
    "tries": 26750
  },
  {
    "card": "213108412495073",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0226330757141113,
    "tries": 26762
  },
  {
    "card": "3553283896904544",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209578037261963,
    "tries": 26768
  },
  {
    "card": "3530775462992058",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234503746032715,
    "tries": 26780
  },
  {
    "card": "6536203224563866",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1246166229248047,
    "tries": 26786
  },
  {
    "card": "180029922409264",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233407020568848,
    "tries": 26792
  },
  {
    "card": "180050067112604",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233738422393799,
    "tries": 26798
  },
  {
    "card": "5114026676397836",
    "bank": "CHASE MANHATTAN BANK USA, N.A.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023303747177124,
    "tries": 26811
  },
  {
    "card": "4673056466782",
    "bank": "Desconhecido",
    "country": "Slovenia",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235493183135986,
    "tries": 26817
  },
  {
    "card": "676248869262",
    "bank": "OAO AKB BALTIKA",
    "country": "Russian Federation",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0200443267822266,
    "tries": 26829
  },
  {
    "card": "4361676698127018",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.920609712600708,
    "tries": 26835
  },
  {
    "card": "377300256078956",
    "bank": "AMERICAN EXPRESS",
    "country": "Australia",
    "brand": "amex",
    "type": "credit",
    "time": 1.0234265327453613,
    "tries": 26841
  },
  {
    "card": "213144427370597",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9209928512573242,
    "tries": 26847
  },
  {
    "card": "4919232096798542",
    "bank": "CRESCENT BANK AND TRUST COMPANY",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9209411144256592,
    "tries": 26853
  },
  {
    "card": "4291009009359",
    "bank": "PUBLIC BANK BERHAD",
    "country": "Malaysia",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0230755805969238,
    "tries": 26859
  },
  {
    "card": "4275316602266165",
    "bank": "NEIGHBORS F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229027271270752,
    "tries": 26865
  },
  {
    "card": "180013104770057",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.3309352397918701,
    "tries": 26871
  },
  {
    "card": "3530695631946480",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9235320091247559,
    "tries": 26877
  },
  {
    "card": "4955813076033425",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.017357587814331,
    "tries": 26883
  },
  {
    "card": "4385138412086",
    "bank": "NORTH COMMUNITY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0229237079620361,
    "tries": 26889
  },
  {
    "card": "213145368067118",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.027297019958496,
    "tries": 26907
  },
  {
    "card": "6011456290074333",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235047340393066,
    "tries": 26913
  },
  {
    "card": "4571319162884186420",
    "bank": "DANSKE",
    "country": "Denmark",
    "brand": "visa",
    "type": "debit",
    "time": 1.0161936283111572,
    "tries": 26919
  },
  {
    "card": "4769183287997529",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0270740985870361,
    "tries": 26925
  },
  {
    "card": "4618761077960",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1564466953277588,
    "tries": 26930
  },
  {
    "card": "6011909314551850",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.0232057571411133,
    "tries": 26942
  },
  {
    "card": "180081574557585",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233252048492432,
    "tries": 26954
  },
  {
    "card": "4561601611798",
    "bank": "SOCIETE GENERALE, S.A.",
    "country": "France",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235719680786133,
    "tries": 26960
  },
  {
    "card": "4682784798382",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.8407526016235352,
    "tries": 26966
  },
  {
    "card": "4128056637416018",
    "bank": "CITIBANK (SOUTH DAKOTA), N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023494005203247,
    "tries": 26978
  },
  {
    "card": "378590612174601",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0235421657562256,
    "tries": 26984
  },
  {
    "card": "6564974651004799",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235309600830078,
    "tries": 26990
  },
  {
    "card": "4172502992129",
    "bank": "JSC RUSSIAN STANDARD BANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "credit",
    "time": 0.9210262298583984,
    "tries": 26996
  },
  {
    "card": "5185692937938678",
    "bank": "HONGKONG AND SHANGHAI BANKING CORP., LTD.",
    "country": "Hong Kong",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 1.0235912799835205,
    "tries": 27008
  },
  {
    "card": "6011239934866151",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.022998332977295,
    "tries": 27020
  },
  {
    "card": "4962679270389751",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234932899475098,
    "tries": 27026
  },
  {
    "card": "3587761209969932",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231661796569824,
    "tries": 27032
  },
  {
    "card": "676131449966",
    "bank": "INTER-EUROPA BANK RT.",
    "country": "Hungary",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.878770112991333,
    "tries": 27038
  },
  {
    "card": "4846012937747355",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9209945201873779,
    "tries": 27044
  },
  {
    "card": "180017749303729",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233142375946045,
    "tries": 27050
  },
  {
    "card": "4213713522402744714",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211287498474121,
    "tries": 27056
  },
  {
    "card": "30522685276427",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233182907104492,
    "tries": 27068
  },
  {
    "card": "38514447008240",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023280382156372,
    "tries": 27074
  },
  {
    "card": "4880618184114",
    "bank": "Desconhecido",
    "country": "Netherlands",
    "brand": "visa",
    "type": "debit",
    "time": 0.9212672710418701,
    "tries": 27080
  },
  {
    "card": "4164894294214374",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230324268341064,
    "tries": 27086
  },
  {
    "card": "4450376182265067",
    "bank": "TELLER, A.S.",
    "country": "Norway",
    "brand": "visa",
    "type": "debit",
    "time": 0.981360912322998,
    "tries": 27093
  },
  {
    "card": "4574754026011",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9199390411376953,
    "tries": 27099
  },
  {
    "card": "4280023176637478277",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.024202585220337,
    "tries": 27105
  },
  {
    "card": "4969124219917647",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0238580703735352,
    "tries": 27117
  },
  {
    "card": "4931295256464258",
    "bank": "BANCO AMAZONAS, S.A.",
    "country": "Ecuador",
    "brand": "visa",
    "type": "credit",
    "time": 1.0239479541778564,
    "tries": 27123
  },
  {
    "card": "4981460259283",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9210991859436035,
    "tries": 27129
  },
  {
    "card": "4476382540274",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "None",
    "time": 0.9213523864746094,
    "tries": 27135
  },
  {
    "card": "4958486607672532132",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0238230228424072,
    "tries": 27141
  },
  {
    "card": "3567488794333340",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0241029262542725,
    "tries": 27147
  },
  {
    "card": "5581551306692326",
    "bank": "MIDWEST PAYMENT SYSTEMS, INC.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.02339768409729,
    "tries": 27153
  },
  {
    "card": "4899083574650976",
    "bank": "BANCO SANTANDER COLOMBIA, S.A.",
    "country": "Colombia",
    "brand": "visa",
    "type": "debit",
    "time": 0.9209511280059814,
    "tries": 27165
  },
  {
    "card": "3587372410314718",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.2283239364624023,
    "tries": 27171
  },
  {
    "card": "4388801670045021264",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0504965782165527,
    "tries": 27183
  },
  {
    "card": "213136028011620",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9212222099304199,
    "tries": 27189
  },
  {
    "card": "180019749317915",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9190828800201416,
    "tries": 27207
  },
  {
    "card": "3560591486416930",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0239953994750977,
    "tries": 27219
  },
  {
    "card": "30089281686821",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.8886663913726807,
    "tries": 27225
  },
  {
    "card": "4935073760343",
    "bank": "DEUTSCHE BANK S.P.A.",
    "country": "Italy",
    "brand": "visa",
    "type": "credit",
    "time": 1.0240707397460938,
    "tries": 27231
  },
  {
    "card": "4180989812587",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9209275245666504,
    "tries": 27237
  },
  {
    "card": "3551156143918784",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236551761627197,
    "tries": 27243
  },
  {
    "card": "3562955567366785",
    "bank": "Desconhecido",
    "country": "Korea (Republic of)",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1521594524383545,
    "tries": 27249
  },
  {
    "card": "5488220811710833",
    "bank": "BANCO DO BRASIL, S.A.",
    "country": "Brazil",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.1253728866577148,
    "tries": 27255
  },
  {
    "card": "4637219241134351",
    "bank": "AUSTRALIA AND NEW ZEALAND BANKING GROUP, LTD.",
    "country": "Tonga",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0254638195037842,
    "tries": 27261
  },
  {
    "card": "4205874559559896",
    "bank": "Desconhecido",
    "country": "Japan",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.921159029006958,
    "tries": 27273
  },
  {
    "card": "4006042801756",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9210028648376465,
    "tries": 27279
  },
  {
    "card": "180009678146526",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9213395118713379,
    "tries": 27285
  },
  {
    "card": "180084938289424",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0194311141967773,
    "tries": 27291
  },
  {
    "card": "6011899929640349",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236241817474365,
    "tries": 27297
  },
  {
    "card": "4985732802173962",
    "bank": "CITIBANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0249946117401123,
    "tries": 27303
  },
  {
    "card": "4721638341815",
    "bank": "ITS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0237016677856445,
    "tries": 27315
  },
  {
    "card": "3560828526663273",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235044956207275,
    "tries": 27333
  },
  {
    "card": "6585924863326162",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0239779949188232,
    "tries": 27339
  },
  {
    "card": "3561844100771712",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0214264392852783,
    "tries": 27345
  },
  {
    "card": "4261114695762877",
    "bank": "WACHOVIA BANK, N.A.",
    "country": "Honduras",
    "brand": "visa",
    "type": "credit",
    "time": 0.9825103282928467,
    "tries": 27351
  },
  {
    "card": "3565700266991823",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211232662200928,
    "tries": 27357
  },
  {
    "card": "4749413876978",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0222351551055908,
    "tries": 27363
  },
  {
    "card": "30002865510747",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9192402362823486,
    "tries": 27369
  },
  {
    "card": "4381611057729852",
    "bank": "KOMERCIJALNA BANKA AD BEOGRAD CJSC",
    "country": "Serbia",
    "brand": "visa",
    "type": "debit",
    "time": 1.2275073528289795,
    "tries": 27411
  },
  {
    "card": "180076021404159",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236189365386963,
    "tries": 27423
  },
  {
    "card": "3581482884359457",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.8850224018096924,
    "tries": 27429
  },
  {
    "card": "4202310806698",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8487296104431152,
    "tries": 27441
  },
  {
    "card": "30252561516841",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0237836837768555,
    "tries": 27447
  },
  {
    "card": "4633945154874724",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0225090980529785,
    "tries": 27459
  },
  {
    "card": "4051973527632085",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234544277191162,
    "tries": 27465
  },
  {
    "card": "4873773923783722",
    "bank": "CAPITAL ONE, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0243077278137207,
    "tries": 27478
  },
  {
    "card": "3574177858043439",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234615802764893,
    "tries": 27484
  },
  {
    "card": "5450180314606215",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 0.9213540554046631,
    "tries": 27490
  },
  {
    "card": "4834872357042262",
    "bank": "Desconhecido",
    "country": "Sierra Leone",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232188701629639,
    "tries": 27496
  },
  {
    "card": "3569445901850655",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023319959640503,
    "tries": 27502
  },
  {
    "card": "5386132624190371",
    "bank": "Desconhecido",
    "country": "Japan",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.023643970489502,
    "tries": 27508
  },
  {
    "card": "180072756953486",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9983789920806885,
    "tries": 27538
  },
  {
    "card": "6011864816602745",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.0239336490631104,
    "tries": 27556
  },
  {
    "card": "3566676075950656",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023491382598877,
    "tries": 27562
  },
  {
    "card": "4357590311504190031",
    "bank": "SPIRA DE MEXICO S.A. DE C.V.",
    "country": "Mexico",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236310958862305,
    "tries": 27568
  },
  {
    "card": "6599603667240597",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9211671352386475,
    "tries": 27574
  },
  {
    "card": "5210222903158074",
    "bank": "FINANSBANK, A.S.",
    "country": "Turkey",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0239472389221191,
    "tries": 27586
  },
  {
    "card": "377214330543622",
    "bank": "AMERICAN EXPRESS",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0231282711029053,
    "tries": 27592
  },
  {
    "card": "213144523083342",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023045539855957,
    "tries": 27604
  },
  {
    "card": "583820992290",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0134174823760986,
    "tries": 27610
  },
  {
    "card": "5172754711137326",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232994556427002,
    "tries": 27616
  },
  {
    "card": "374444704325180",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "Italy",
    "brand": "amex",
    "type": "credit",
    "time": 1.0314159393310547,
    "tries": 27628
  },
  {
    "card": "373788360390057",
    "bank": "DELTA SKYMILES",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0012156963348389,
    "tries": 27634
  },
  {
    "card": "4730173454655899",
    "bank": "BAYOU F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0288963317871094,
    "tries": 27640
  },
  {
    "card": "4738096916130392304",
    "bank": "INTERSTATE NET BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.7738780975341797,
    "tries": 27646
  },
  {
    "card": "180086211813812",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1955163478851318,
    "tries": 27651
  },
  {
    "card": "6011323478554868",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9674472808837891,
    "tries": 27657
  },
  {
    "card": "4036272988875345",
    "bank": "CITICORP PAYMENT SERVICES, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0264527797698975,
    "tries": 27663
  },
  {
    "card": "3587838922108186",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1343204975128174,
    "tries": 27681
  },
  {
    "card": "4913138354873",
    "bank": "BANCO INTERCONTINENTAL, S.A.",
    "country": "Dominican Republic",
    "brand": "visa",
    "type": "credit",
    "time": 1.1254475116729736,
    "tries": 27687
  },
  {
    "card": "676351915027",
    "bank": "Desconhecido",
    "country": "Russian Federation",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0230035781860352,
    "tries": 27692
  },
  {
    "card": "180069935008596",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1263861656188965,
    "tries": 27698
  },
  {
    "card": "4192100505849867",
    "bank": "SPARKASSE BANK D.D.",
    "country": "Bosnia and Herzegovina",
    "brand": "visa",
    "type": "credit",
    "time": 1.1258647441864014,
    "tries": 27704
  },
  {
    "card": "4629029493153417",
    "bank": "INDYMAC BANK, F.S.B.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0245211124420166,
    "tries": 27709
  },
  {
    "card": "4513181142388248",
    "bank": "BANCOLOMBIA, S.A.",
    "country": "Colombia",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.022676706314087,
    "tries": 27721
  },
  {
    "card": "375461213976955",
    "bank": "AMERICAN EXPRESS",
    "country": "Norway",
    "brand": "amex",
    "type": "credit",
    "time": 0.92134690284729,
    "tries": 27727
  },
  {
    "card": "30111071174485",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0221500396728516,
    "tries": 27733
  },
  {
    "card": "4529810899135365210",
    "bank": "METABANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0220372676849365,
    "tries": 27739
  },
  {
    "card": "376970208568212",
    "bank": "AMERICAN EXPRESS",
    "country": "India",
    "brand": "amex",
    "type": "credit",
    "time": 1.0224618911743164,
    "tries": 27745
  },
  {
    "card": "4315272759661",
    "bank": "SILVERTON BANK, N.A.",
    "country": "Dominican Republic",
    "brand": "visa",
    "type": "credit",
    "time": 0.9205062389373779,
    "tries": 27751
  },
  {
    "card": "4375308783093",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233879089355469,
    "tries": 27757
  },
  {
    "card": "3538663670086362",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236754417419434,
    "tries": 27763
  },
  {
    "card": "4422469039897",
    "bank": "BANKERS' BANK OF THE WEST",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236821174621582,
    "tries": 27769
  },
  {
    "card": "4016859301803832",
    "bank": "FIRSTCARIBBEAN INTERNATIONAL BANK (BARBADOS), LTD.",
    "country": "Saint Kitts and Nevis",
    "brand": "visa",
    "type": "credit",
    "time": 0.9234335422515869,
    "tries": 27775
  },
  {
    "card": "180005459664752",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.920905351638794,
    "tries": 27781
  },
  {
    "card": "4100833448628",
    "bank": "Desconhecido",
    "country": "Argentina",
    "brand": "visa",
    "type": "debit",
    "time": 1.0220956802368164,
    "tries": 27787
  },
  {
    "card": "4256140276597",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.02298903465271,
    "tries": 27793
  },
  {
    "card": "676204573874",
    "bank": "Desconhecido",
    "country": "Kazakhstan",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9221053123474121,
    "tries": 27799
  },
  {
    "card": "4292029314050566",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9184153079986572,
    "tries": 27811
  },
  {
    "card": "4701328475412945",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.920783519744873,
    "tries": 27817
  },
  {
    "card": "4171572177048884",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9206225872039795,
    "tries": 27823
  },
  {
    "card": "30447362837160",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9208853244781494,
    "tries": 27829
  },
  {
    "card": "213117094790594",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.029433012008667,
    "tries": 27835
  },
  {
    "card": "180073672373643",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9217004776000977,
    "tries": 27841
  },
  {
    "card": "6558925502812978",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231738090515137,
    "tries": 27847
  },
  {
    "card": "4704818483033318",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0146210193634033,
    "tries": 27853
  },
  {
    "card": "4945366311167",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.022073745727539,
    "tries": 27859
  },
  {
    "card": "30565696278171",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0238125324249268,
    "tries": 27865
  },
  {
    "card": "4573150135855",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0258738994598389,
    "tries": 27871
  },
  {
    "card": "3533687257269617",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0242364406585693,
    "tries": 27877
  },
  {
    "card": "4426265327816754",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.921210527420044,
    "tries": 27883
  },
  {
    "card": "6547029401274754",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023306131362915,
    "tries": 27889
  },
  {
    "card": "4304132995796113",
    "bank": "BARCLAYS BANK PLC",
    "country": "Italy",
    "brand": "visa",
    "type": "credit",
    "time": 1.0245413780212402,
    "tries": 27901
  },
  {
    "card": "4683741768691904",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233774185180664,
    "tries": 27906
  },
  {
    "card": "4267100790287070",
    "bank": "BENSENVILLE COMMUNITY C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023946762084961,
    "tries": 27913
  },
  {
    "card": "4898069056151844365",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1253714561462402,
    "tries": 27919
  },
  {
    "card": "4972054870205",
    "bank": "CREDIT LYONNAIS",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 1.0229167938232422,
    "tries": 27937
  },
  {
    "card": "4044798295287",
    "bank": "Desconhecido",
    "country": "Argentina",
    "brand": "visa",
    "type": "debit",
    "time": 1.0224964618682861,
    "tries": 27943
  },
  {
    "card": "30387855148362",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.02663254737854,
    "tries": 27955
  },
  {
    "card": "30547151301391",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0243275165557861,
    "tries": 27961
  },
  {
    "card": "3569475085838259",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234191417694092,
    "tries": 27967
  },
  {
    "card": "4709547018251",
    "bank": "Desconhecido",
    "country": "Turkey",
    "brand": "visa",
    "type": "credit",
    "time": 1.023310661315918,
    "tries": 27979
  },
  {
    "card": "4959473266025685",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236103534698486,
    "tries": 27991
  },
  {
    "card": "4449939312372",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9226953983306885,
    "tries": 27997
  },
  {
    "card": "3543084761527615",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232117176055908,
    "tries": 28003
  },
  {
    "card": "180049376753546",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9207193851470947,
    "tries": 28009
  },
  {
    "card": "4512046469802512",
    "bank": "PNC BANK, GLOBAL INVESTMENT SERVICING",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9204819202423096,
    "tries": 28015
  },
  {
    "card": "4376784794670189",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232036113739014,
    "tries": 28021
  },
  {
    "card": "180006556947579",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9200704097747803,
    "tries": 28027
  },
  {
    "card": "30538406048374",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9849193096160889,
    "tries": 28033
  },
  {
    "card": "4470562835728306",
    "bank": "BANCORP BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0241646766662598,
    "tries": 28039
  },
  {
    "card": "180061463727846",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9213740825653076,
    "tries": 28051
  },
  {
    "card": "3567937999228036",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9464616775512695,
    "tries": 28057
  },
  {
    "card": "30110509685559",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235013961791992,
    "tries": 28063
  },
  {
    "card": "5511610135604343",
    "bank": "FIFTH THIRD BANK",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.024214267730713,
    "tries": 28075
  },
  {
    "card": "3534520412666675",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023411750793457,
    "tries": 28087
  },
  {
    "card": "4437409651601",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0223982334136963,
    "tries": 28093
  },
  {
    "card": "30258991866417",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230588912963867,
    "tries": 28105
  },
  {
    "card": "3553920873115434",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.921222448348999,
    "tries": 28117
  },
  {
    "card": "4330068254603",
    "bank": "ASSOCIATED & FEDERAL EMPLOYEES CREDIT UNION",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0238194465637207,
    "tries": 28123
  },
  {
    "card": "30347342545729",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0225980281829834,
    "tries": 28141
  },
  {
    "card": "374234908734844",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "Desconhecido",
    "time": 1.023282527923584,
    "tries": 28147
  },
  {
    "card": "4436883087813395",
    "bank": "FIRST FEDERAL SAVINGS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0528686046600342,
    "tries": 28159
  },
  {
    "card": "4119378635307242",
    "bank": "COMMERCIAL INTERREGIONAL TRUST BANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0230107307434082,
    "tries": 28165
  },
  {
    "card": "213110834158727",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023008108139038,
    "tries": 28171
  },
  {
    "card": "3586039261770998",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236551761627197,
    "tries": 28177
  },
  {
    "card": "374132839201307",
    "bank": "AMERICAN EXPRESS",
    "country": "Belgium",
    "brand": "amex",
    "type": "credit",
    "time": 1.0234897136688232,
    "tries": 28183
  },
  {
    "card": "4266046480904",
    "bank": "VECTRA BANK COLORADO",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023219347000122,
    "tries": 28195
  },
  {
    "card": "3566692319407791",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023099422454834,
    "tries": 28219
  },
  {
    "card": "30179563458120",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9209659099578857,
    "tries": 28231
  },
  {
    "card": "5322337503865186",
    "bank": "ICBA BANCARD, INC.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.9207589626312256,
    "tries": 28243
  },
  {
    "card": "639053090812",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023512840270996,
    "tries": 28249
  },
  {
    "card": "4174926056192",
    "bank": "Desconhecido",
    "country": "Kenya",
    "brand": "visa",
    "type": "debit",
    "time": 0.9223148822784424,
    "tries": 28256
  },
  {
    "card": "30169847261192",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0227584838867188,
    "tries": 28273
  },
  {
    "card": "4806459809366665",
    "bank": "CITIZENS FIRST NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023454189300537,
    "tries": 28285
  },
  {
    "card": "180023007088291",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9204597473144531,
    "tries": 28291
  },
  {
    "card": "180047239919791",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0240859985351562,
    "tries": 28297
  },
  {
    "card": "213101190191774",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0462682247161865,
    "tries": 28303
  },
  {
    "card": "4224411372982",
    "bank": "CITIBANK - COLOMBIA",
    "country": "Colombia",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232956409454346,
    "tries": 28310
  },
  {
    "card": "676377207037",
    "bank": "Desconhecido",
    "country": "Latvia",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0231893062591553,
    "tries": 28316
  },
  {
    "card": "4518854402007675",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0240659713745117,
    "tries": 28328
  },
  {
    "card": "6011483411749569",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0234951972961426,
    "tries": 28333
  },
  {
    "card": "3573554058007185",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023972988128662,
    "tries": 28339
  },
  {
    "card": "4505621710957",
    "bank": "CANADIAN IMPERIAL BANK OF COMMERCE",
    "country": "Canada",
    "brand": "visa",
    "type": "credit",
    "time": 1.02329421043396,
    "tries": 28345
  },
  {
    "card": "4271066291728",
    "bank": "FARMERS AND MECHANICS NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0237758159637451,
    "tries": 28351
  },
  {
    "card": "4750905459234245",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236988067626953,
    "tries": 28358
  },
  {
    "card": "30286445161002",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0198678970336914,
    "tries": 28369
  },
  {
    "card": "3554919071054360",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.122185230255127,
    "tries": 28382
  },
  {
    "card": "180019754832451",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233020782470703,
    "tries": 28387
  },
  {
    "card": "3550930637163227",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9848506450653076,
    "tries": 28393
  },
  {
    "card": "4636991896611997",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0225868225097656,
    "tries": 28405
  },
  {
    "card": "3566515001891925",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.94515061378479,
    "tries": 28411
  },
  {
    "card": "3582902705424973",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9207108020782471,
    "tries": 28418
  },
  {
    "card": "4097784745138086",
    "bank": "BANCO SANTOS, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "debit",
    "time": 0.9210512638092041,
    "tries": 28424
  },
  {
    "card": "6011359757100007",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.125481128692627,
    "tries": 28436
  },
  {
    "card": "4058884146268529",
    "bank": "TRANSCREDITBANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 0.8854446411132812,
    "tries": 28442
  },
  {
    "card": "30340262306784",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0460736751556396,
    "tries": 28448
  },
  {
    "card": "4494335810173",
    "bank": "FIRST NATIONAL BANK OF OMAHA",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.024261236190796,
    "tries": 28454
  },
  {
    "card": "180082083866863",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236830711364746,
    "tries": 28465
  },
  {
    "card": "213199858591699",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9289522171020508,
    "tries": 28471
  },
  {
    "card": "4950688696840526806",
    "bank": "CORNER BANCA, S.A.",
    "country": "Switzerland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0237205028533936,
    "tries": 28477
  },
  {
    "card": "4390664132130751",
    "bank": "JSCB INTERPROMBANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236527919769287,
    "tries": 28489
  },
  {
    "card": "4487895542012",
    "bank": "Desconhecido",
    "country": "Belarus",
    "brand": "visa",
    "type": "debit",
    "time": 1.125598430633545,
    "tries": 28501
  },
  {
    "card": "30270594632377",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0239379405975342,
    "tries": 28507
  },
  {
    "card": "4762045420336243728",
    "bank": "BANCO AZTECA S.A. INSTITUCION DE BANCA MULTIPLE",
    "country": "Mexico",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233969688415527,
    "tries": 28514
  },
  {
    "card": "3540196003142780",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232408046722412,
    "tries": 28525
  },
  {
    "card": "676200417902",
    "bank": "Desconhecido",
    "country": "Kazakhstan",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9208989143371582,
    "tries": 28531
  },
  {
    "card": "36486697242898",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232863426208496,
    "tries": 28537
  },
  {
    "card": "30063908728506",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0972883701324463,
    "tries": 28543
  },
  {
    "card": "5498930666845967",
    "bank": "BANQUE TUNISO KOWEITIENNE",
    "country": "Tunisia",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.023167610168457,
    "tries": 28549
  },
  {
    "card": "4262787965351",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0241429805755615,
    "tries": 28556
  },
  {
    "card": "3582851503173433",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9205136299133301,
    "tries": 28562
  },
  {
    "card": "3552755442862178",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9210503101348877,
    "tries": 28568
  },
  {
    "card": "4726595138346072809",
    "bank": "Desconhecido",
    "country": "Australia",
    "brand": "visa",
    "type": "debit",
    "time": 1.023414134979248,
    "tries": 28580
  },
  {
    "card": "36700550378031",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "discover",
    "type": "credit",
    "time": 0.8608055114746094,
    "tries": 28586
  },
  {
    "card": "4732222362025568",
    "bank": "Desconhecido",
    "country": "Argentina",
    "brand": "visa",
    "type": "debit",
    "time": 1.0233166217803955,
    "tries": 28599
  },
  {
    "card": "213191386906234",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0230343341827393,
    "tries": 28604
  },
  {
    "card": "4186850341838",
    "bank": "DHANALAKSHMI BANK, LTD.",
    "country": "India",
    "brand": "visa",
    "type": "credit",
    "time": 0.9209938049316406,
    "tries": 28629
  },
  {
    "card": "3572735423520405",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235321521759033,
    "tries": 28635
  },
  {
    "card": "4913230275637113614",
    "bank": "SUNTRUST BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.02473783493042,
    "tries": 28641
  },
  {
    "card": "4123533941422424",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.125999927520752,
    "tries": 28647
  },
  {
    "card": "30187769509901",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0231335163116455,
    "tries": 28653
  },
  {
    "card": "5420114862313855",
    "bank": "HSBC BANK PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0227851867675781,
    "tries": 28659
  },
  {
    "card": "213104697273566",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0238707065582275,
    "tries": 28665
  },
  {
    "card": "4511769437527330",
    "bank": "CIMB BANK BERHAD",
    "country": "Malaysia",
    "brand": "visa",
    "type": "credit",
    "time": 1.0225980281829834,
    "tries": 28677
  },
  {
    "card": "4468065091501544",
    "bank": "ROCKET CITY F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9211950302124023,
    "tries": 28683
  },
  {
    "card": "4524953199524306",
    "bank": "NATIONAL BANK OF DOMINICA",
    "country": "Dominica",
    "brand": "visa",
    "type": "debit",
    "time": 1.023564338684082,
    "tries": 28689
  },
  {
    "card": "3532418421507133",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023162603378296,
    "tries": 28695
  },
  {
    "card": "4891427333818",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.005955696105957,
    "tries": 28707
  },
  {
    "card": "4690151282787355",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234975814819336,
    "tries": 28719
  },
  {
    "card": "30455545782591",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233325958251953,
    "tries": 28725
  },
  {
    "card": "4655453854892",
    "bank": "Desconhecido",
    "country": "Romania",
    "brand": "visa",
    "type": "debit",
    "time": 0.9209530353546143,
    "tries": 28737
  },
  {
    "card": "4279541286502",
    "bank": "SAVINGS BANK OF THE RUSSIAN FEDERATION (SBERBANK)",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236847400665283,
    "tries": 28743
  },
  {
    "card": "5485842147878068",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "Desconhecido",
    "time": 1.0234556198120117,
    "tries": 28755
  },
  {
    "card": "4320077095593375",
    "bank": "MBNA AMERICA BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234811305999756,
    "tries": 28773
  },
  {
    "card": "4800664688044475",
    "bank": "MBNA AMERICA BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0236315727233887,
    "tries": 28779
  },
  {
    "card": "4994746230269886",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023524284362793,
    "tries": 28803
  },
  {
    "card": "3537522504739557",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211022853851318,
    "tries": 28816
  },
  {
    "card": "4108967624146",
    "bank": "ROCK HILL BANK AND TRUST",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9206371307373047,
    "tries": 28822
  },
  {
    "card": "3541005112976229",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9206321239471436,
    "tries": 28834
  },
  {
    "card": "4057109699670082",
    "bank": "FIRST FEDERAL BANK, F.S.B.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0242140293121338,
    "tries": 28840
  },
  {
    "card": "6011007651427287",
    "bank": "DISCOVER",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233452320098877,
    "tries": 28846
  },
  {
    "card": "180027384506312",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023416519165039,
    "tries": 28852
  },
  {
    "card": "3578490589351153",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231151580810547,
    "tries": 28864
  },
  {
    "card": "3537313031138269",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0231492519378662,
    "tries": 28876
  },
  {
    "card": "180048008478902",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234510898590088,
    "tries": 28882
  },
  {
    "card": "4127894373820675",
    "bank": "CENTRAL NATIONAL BANK AND TRUST COMPANY OF ENID",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023850679397583,
    "tries": 28888
  },
  {
    "card": "180073721317997",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9211833477020264,
    "tries": 28894
  },
  {
    "card": "3581118678154932",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023247480392456,
    "tries": 28900
  },
  {
    "card": "6513009053763023",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232703685760498,
    "tries": 28906
  },
  {
    "card": "4927607424627812",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9218466281890869,
    "tries": 28912
  },
  {
    "card": "3560903665403474",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023634433746338,
    "tries": 28924
  },
  {
    "card": "4356034575731360",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023216962814331,
    "tries": 28930
  },
  {
    "card": "3550513928777077",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023427963256836,
    "tries": 28936
  },
  {
    "card": "6011017818865675",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023503303527832,
    "tries": 28942
  },
  {
    "card": "6011907133706879",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.9211235046386719,
    "tries": 28954
  },
  {
    "card": "36183819281819",
    "bank": "Desconhecido",
    "country": "Finland",
    "brand": "discover",
    "type": "credit",
    "time": 0.9210827350616455,
    "tries": 28966
  },
  {
    "card": "30500961335398",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023393154144287,
    "tries": 28978
  },
  {
    "card": "3531305800000940",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236296653747559,
    "tries": 28984
  },
  {
    "card": "6552169788186361",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233955383300781,
    "tries": 28996
  },
  {
    "card": "4162332551115671",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "debit",
    "time": 0.920698881149292,
    "tries": 29002
  },
  {
    "card": "6533796312940691",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9953572750091553,
    "tries": 29020
  },
  {
    "card": "30095770369068",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232882499694824,
    "tries": 29026
  },
  {
    "card": "4041136376390865",
    "bank": "BANCO BRADESCO, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234055519104004,
    "tries": 29033
  },
  {
    "card": "4213023617441876165",
    "bank": "BANCO MULTIPLE LEON, S.A.",
    "country": "Dominican Republic",
    "brand": "visa",
    "type": "debit",
    "time": 1.0229699611663818,
    "tries": 29038
  },
  {
    "card": "377896794767802",
    "bank": "AMERICAN EXPRESS",
    "country": "New Zealand",
    "brand": "amex",
    "type": "credit",
    "time": 0.9210903644561768,
    "tries": 29045
  },
  {
    "card": "4498012468778135",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "None",
    "time": 1.0235772132873535,
    "tries": 29075
  },
  {
    "card": "4292677954041",
    "bank": "ICBA BANCARD",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0237860679626465,
    "tries": 29081
  },
  {
    "card": "4568611018013",
    "bank": "BANCO POPULAR DE PUERTO RICO",
    "country": "Puerto Rico",
    "brand": "visa",
    "type": "credit",
    "time": 0.9213805198669434,
    "tries": 29087
  },
  {
    "card": "4761512115995459872",
    "bank": "CALIFORNIA BANK AND TRUST",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9208652973175049,
    "tries": 29093
  },
  {
    "card": "4154356222117415480",
    "bank": "ARAB JORDAN INVESTMENT BANK",
    "country": "Jordan",
    "brand": "visa",
    "type": "debit",
    "time": 0.9206485748291016,
    "tries": 29105
  },
  {
    "card": "4694491817199643",
    "bank": "FIRST NATIONAL BANK OF OMAHA",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235681533813477,
    "tries": 29129
  },
  {
    "card": "4834682368936360779",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9210197925567627,
    "tries": 29135
  },
  {
    "card": "4121388513620603096",
    "bank": "CHASE BANK USA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234456062316895,
    "tries": 29147
  },
  {
    "card": "5444963112940970",
    "bank": "ZAGREBACKA BANKA BH D.D.",
    "country": "Croatia",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0235893726348877,
    "tries": 29153
  },
  {
    "card": "4526379036874",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234544277191162,
    "tries": 29159
  },
  {
    "card": "4282987775147118",
    "bank": "LANDESBANK BERLIN AG",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 1.023329257965088,
    "tries": 29165
  },
  {
    "card": "3530035323504034",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0239453315734863,
    "tries": 29171
  },
  {
    "card": "6011798936869026",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 0.9208478927612305,
    "tries": 29201
  },
  {
    "card": "639018921465",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.021744728088379,
    "tries": 29213
  },
  {
    "card": "30520985671891",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0043485164642334,
    "tries": 29219
  },
  {
    "card": "213143659141718",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232806205749512,
    "tries": 29225
  },
  {
    "card": "6561538616241086",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.920562744140625,
    "tries": 29231
  },
  {
    "card": "4308186988385",
    "bank": "BELMONT NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0231070518493652,
    "tries": 29237
  },
  {
    "card": "4164901317865668",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0227961540222168,
    "tries": 29244
  },
  {
    "card": "4643807069210551795",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233283042907715,
    "tries": 29255
  },
  {
    "card": "213198303235399",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234663486480713,
    "tries": 29267
  },
  {
    "card": "4877615571810719",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234346389770508,
    "tries": 29274
  },
  {
    "card": "4308965868790309",
    "bank": "MACY'S",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233747959136963,
    "tries": 29286
  },
  {
    "card": "4592243607472",
    "bank": "Desconhecido",
    "country": "China",
    "brand": "visa",
    "type": "credit",
    "time": 1.0237407684326172,
    "tries": 29298
  },
  {
    "card": "4072592209789958",
    "bank": "FIA CARD SERVICES, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233345031738281,
    "tries": 29304
  },
  {
    "card": "4880541928965136",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.024174690246582,
    "tries": 29310
  },
  {
    "card": "30325398260682",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1259305477142334,
    "tries": 29322
  },
  {
    "card": "4572923029119388",
    "bank": "Desconhecido",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.5354807376861572,
    "tries": 29332
  },
  {
    "card": "4022360107515102",
    "bank": "ITS BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0305776596069336,
    "tries": 29342
  },
  {
    "card": "4526305883075681",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.3331851959228516,
    "tries": 29348
  },
  {
    "card": "180009656727644",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1260788440704346,
    "tries": 29359
  },
  {
    "card": "30180508979725",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.060628890991211,
    "tries": 29365
  },
  {
    "card": "675917479866",
    "bank": "ALLOCATED TO SWITCH",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0231964588165283,
    "tries": 29370
  },
  {
    "card": "377596410615183",
    "bank": "CENTURION",
    "country": "Bosnia and Herzegovina",
    "brand": "amex",
    "type": "credit",
    "time": 1.1258299350738525,
    "tries": 29380
  },
  {
    "card": "4714983765863903",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.363030195236206,
    "tries": 29385
  },
  {
    "card": "213142790304110",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232124328613281,
    "tries": 29390
  },
  {
    "card": "4380228973865990",
    "bank": "BRADESCO",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.4005749225616455,
    "tries": 29399
  },
  {
    "card": "30543520183313",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1258857250213623,
    "tries": 29409
  },
  {
    "card": "3535941697710138",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.047330379486084,
    "tries": 29415
  },
  {
    "card": "4828645161913300",
    "bank": "WELLS FARGO",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232768058776855,
    "tries": 29421
  },
  {
    "card": "4543498739560920",
    "bank": "Desconhecido",
    "country": "Canada",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.3676283359527588,
    "tries": 29426
  },
  {
    "card": "30170350277641",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.3623459339141846,
    "tries": 29431
  },
  {
    "card": "30454016807243",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.3624670505523682,
    "tries": 29436
  },
  {
    "card": "180050202667645",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.4274556636810303,
    "tries": 29442
  },
  {
    "card": "4752411616931037",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0231294631958008,
    "tries": 29452
  },
  {
    "card": "3554316158968820",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.4667606353759766,
    "tries": 29462
  },
  {
    "card": "4513481445524089",
    "bank": "BANCOLOMBIA, S.A.",
    "country": "Colombia",
    "brand": "visa",
    "type": "None",
    "time": 1.1957159042358398,
    "tries": 29467
  },
  {
    "card": "213145345390526",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.5357329845428467,
    "tries": 29471
  },
  {
    "card": "4503246976723",
    "bank": "CANADIAN IMPERIAL BANK OF COMMERCE",
    "country": "Canada",
    "brand": "visa",
    "type": "credit",
    "time": 1.4277501106262207,
    "tries": 29476
  },
  {
    "card": "4534480990886857452",
    "bank": "DC CARD CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0188827514648438,
    "tries": 29481
  },
  {
    "card": "3565154833507276",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.3309805393218994,
    "tries": 29485
  },
  {
    "card": "4656360572770363148",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.4370405673980713,
    "tries": 29491
  },
  {
    "card": "4380626113520534",
    "bank": "BANK OF CHINA, LTD.",
    "country": "China",
    "brand": "visa",
    "type": "credit",
    "time": 1.1308670043945312,
    "tries": 29496
  },
  {
    "card": "3572571731205920",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0932750701904297,
    "tries": 29501
  },
  {
    "card": "4171162188739",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.8187146186828613,
    "tries": 29512
  },
  {
    "card": "30595938033340",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1238231658935547,
    "tries": 29518
  },
  {
    "card": "30064798630489",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.022829294204712,
    "tries": 29524
  },
  {
    "card": "4264706879444052",
    "bank": "XCEL F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234532356262207,
    "tries": 29530
  },
  {
    "card": "213153471221143",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023435115814209,
    "tries": 29542
  },
  {
    "card": "3556439608077600",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0227811336517334,
    "tries": 29554
  },
  {
    "card": "4747076067994277",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023386001586914,
    "tries": 29560
  },
  {
    "card": "3572107853010846",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0235114097595215,
    "tries": 29566
  },
  {
    "card": "38042185113873",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0234441757202148,
    "tries": 29572
  },
  {
    "card": "180007953993166",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233426094055176,
    "tries": 29578
  },
  {
    "card": "4962765180450690",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235679149627686,
    "tries": 29585
  },
  {
    "card": "4224781058300531",
    "bank": "FIRST NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235209465026855,
    "tries": 29591
  },
  {
    "card": "4458725473841651432",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0233349800109863,
    "tries": 29608
  },
  {
    "card": "4619142332686901",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023118257522583,
    "tries": 29614
  },
  {
    "card": "3567556312352727",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.020758867263794,
    "tries": 29620
  },
  {
    "card": "3528331866819986",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234529972076416,
    "tries": 29626
  },
  {
    "card": "3536455463854292",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232930183410645,
    "tries": 29632
  },
  {
    "card": "4715520945761583158",
    "bank": "BB AND T FINANCIAL, F.S.B.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235788822174072,
    "tries": 29638
  },
  {
    "card": "6011319536478272",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0264158248901367,
    "tries": 29644
  },
  {
    "card": "4152449347967",
    "bank": "SOLBANCO, S.A.",
    "country": "Guatemala",
    "brand": "visa",
    "type": "credit",
    "time": 1.0143582820892334,
    "tries": 29649
  },
  {
    "card": "4737171101069",
    "bank": "Desconhecido",
    "country": "Argentina",
    "brand": "visa",
    "type": "debit",
    "time": 1.023392677307129,
    "tries": 29656
  },
  {
    "card": "6594582211317934",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.022829532623291,
    "tries": 29661
  },
  {
    "card": "501855214745",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.023510217666626,
    "tries": 29668
  },
  {
    "card": "30232665823632",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.921464204788208,
    "tries": 29680
  },
  {
    "card": "4474392198073801",
    "bank": "BANK OF OKLAHOMA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0239312648773193,
    "tries": 29686
  },
  {
    "card": "639054150227",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0274009704589844,
    "tries": 29698
  },
  {
    "card": "4814780246757",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.125565767288208,
    "tries": 29704
  },
  {
    "card": "3528675203429994",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023686170578003,
    "tries": 29710
  },
  {
    "card": "4486004450180745507",
    "bank": "CITIBANK (SOUTH DAKOTA), N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023451566696167,
    "tries": 29716
  },
  {
    "card": "3554511073585234",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0229206085205078,
    "tries": 29728
  },
  {
    "card": "4647998382694223280",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236074924468994,
    "tries": 29734
  },
  {
    "card": "30447745247244",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9211733341217041,
    "tries": 29740
  },
  {
    "card": "4446794804359828",
    "bank": "Desconhecido",
    "country": "Kyrgyzstan",
    "brand": "visa",
    "type": "debit",
    "time": 1.0255324840545654,
    "tries": 29746
  },
  {
    "card": "38652022165850",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0232291221618652,
    "tries": 29752
  },
  {
    "card": "3562140673715619",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023402452468872,
    "tries": 29758
  },
  {
    "card": "4212708322161104955",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0230870246887207,
    "tries": 29770
  },
  {
    "card": "4397221454677",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 1.023676872253418,
    "tries": 29782
  },
  {
    "card": "4508632614646619",
    "bank": "BANCO POPULAR ESPANOL, S.A.",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 1.0237629413604736,
    "tries": 29794
  },
  {
    "card": "5213552118955766",
    "bank": "STANDARD CHARTERED BANK",
    "country": "Qatar",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0230810642242432,
    "tries": 29800
  },
  {
    "card": "5413718738347183",
    "bank": "INTRUST BANK, N.A.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0234448909759521,
    "tries": 29806
  },
  {
    "card": "3549320502261179",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0237081050872803,
    "tries": 29818
  },
  {
    "card": "376764757666802",
    "bank": "AMERICAN EXPRESS",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0239367485046387,
    "tries": 29824
  },
  {
    "card": "30529399916966",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0229387283325195,
    "tries": 29830
  },
  {
    "card": "4006199418901885507",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.1253151893615723,
    "tries": 29836
  },
  {
    "card": "4726772323199231",
    "bank": "WELLS FARGO BANK NEVADA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211006164550781,
    "tries": 29842
  },
  {
    "card": "30599460904423",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.921337366104126,
    "tries": 29854
  },
  {
    "card": "4781778411828",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9790842533111572,
    "tries": 29860
  },
  {
    "card": "30472833589893",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230908393859863,
    "tries": 29873
  },
  {
    "card": "3584621109778051",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233471393585205,
    "tries": 29878
  },
  {
    "card": "3541033544019442",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0229241847991943,
    "tries": 29884
  },
  {
    "card": "4023017039739205",
    "bank": "FIA CARD SERVICES, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0237534046173096,
    "tries": 29896
  },
  {
    "card": "4678666432755787248",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "Dominican Republic",
    "brand": "visa",
    "type": "credit",
    "time": 1.0231542587280273,
    "tries": 29902
  },
  {
    "card": "4651583534489294214",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9209067821502686,
    "tries": 29908
  },
  {
    "card": "4719335415564958",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234732627868652,
    "tries": 29920
  },
  {
    "card": "6011921236626595",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.0194063186645508,
    "tries": 29926
  },
  {
    "card": "180082389237942",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.921048641204834,
    "tries": 29932
  },
  {
    "card": "180074788807375",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9208118915557861,
    "tries": 29938
  },
  {
    "card": "5477363532148504",
    "bank": "Desconhecido",
    "country": "Mexico",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.023047685623169,
    "tries": 29944
  },
  {
    "card": "30410838651193",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9210188388824463,
    "tries": 29956
  },
  {
    "card": "4582565493106",
    "bank": "Desconhecido",
    "country": "Pakistan",
    "brand": "visa",
    "type": "debit",
    "time": 1.0229215621948242,
    "tries": 29962
  },
  {
    "card": "3574139069117246",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232343673706055,
    "tries": 29974
  },
  {
    "card": "4775179257830",
    "bank": "JPMORGAN CHASE BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0238292217254639,
    "tries": 29980
  },
  {
    "card": "30127720489231",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0243792533874512,
    "tries": 29987
  },
  {
    "card": "4949063546652052",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9217970371246338,
    "tries": 29993
  },
  {
    "card": "377361745096595",
    "bank": "AMERICAN EXPRESS",
    "country": "Australia",
    "brand": "amex",
    "type": "credit",
    "time": 0.9209244251251221,
    "tries": 29999
  },
  {
    "card": "3530743988536387",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234529972076416,
    "tries": 30010
  },
  {
    "card": "30073226037548",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.025014877319336,
    "tries": 30016
  },
  {
    "card": "3588580840757996",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0237021446228027,
    "tries": 30028
  },
  {
    "card": "4201101339166",
    "bank": "CAISSE NATIONALE DES CAISSES D'EPARGNE (CNCE)",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235602855682373,
    "tries": 30034
  },
  {
    "card": "4930197410325139",
    "bank": "WELLS FARGO BANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0224275588989258,
    "tries": 30040
  },
  {
    "card": "4539292902444699",
    "bank": "NATIONAL WESTMINSTER BANK PLC",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "credit",
    "time": 1.0219364166259766,
    "tries": 30046
  },
  {
    "card": "3548820912057951",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0203242301940918,
    "tries": 30057
  },
  {
    "card": "4604282341237382",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 0.9173140525817871,
    "tries": 30064
  },
  {
    "card": "4184554392092413",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0230927467346191,
    "tries": 30070
  },
  {
    "card": "4922707331051399828",
    "bank": "RESONA CARD CO., LTD.",
    "country": "Japan",
    "brand": "visa",
    "type": "credit",
    "time": 1.0278849601745605,
    "tries": 30075
  },
  {
    "card": "4699770417432040",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0160064697265625,
    "tries": 30081
  },
  {
    "card": "4365251236815452",
    "bank": "Desconhecido",
    "country": "Korea (Republic of)",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231094360351562,
    "tries": 30087
  },
  {
    "card": "503893895808",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0403234958648682,
    "tries": 30111
  },
  {
    "card": "3537685996499335",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1290802955627441,
    "tries": 30117
  },
  {
    "card": "4382345747501613317",
    "bank": "AUSTRALIA AND NEW ZEALAND BANKING GROUP, LTD.",
    "country": "Australia",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9243729114532471,
    "tries": 30123
  },
  {
    "card": "4690236147354846",
    "bank": "UNION BANK OF NIGERIA",
    "country": "Nigeria",
    "brand": "visa",
    "type": "credit",
    "time": 0.9215555191040039,
    "tries": 30129
  },
  {
    "card": "4875387218372725",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235872268676758,
    "tries": 30141
  },
  {
    "card": "4967155614718",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232243537902832,
    "tries": 30146
  },
  {
    "card": "3538520009339898",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9228255748748779,
    "tries": 30164
  },
  {
    "card": "213158249247098",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.921532154083252,
    "tries": 30170
  },
  {
    "card": "4705740992031055",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9209692478179932,
    "tries": 30176
  },
  {
    "card": "3547282516191481",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.923468828201294,
    "tries": 30189
  },
  {
    "card": "30023061079956",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.1245801448822021,
    "tries": 30195
  },
  {
    "card": "3559728081847043",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232698917388916,
    "tries": 30200
  },
  {
    "card": "180082845769587",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9183034896850586,
    "tries": 30212
  },
  {
    "card": "4571998416032",
    "bank": "Diba Bank",
    "country": "Denmark",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231847763061523,
    "tries": 30218
  },
  {
    "card": "6571132017878395",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233044624328613,
    "tries": 30231
  },
  {
    "card": "4509052578156287714",
    "bank": "EMIRATES NBD BANK (P.J.S.C.)",
    "country": "United Arab Emirates",
    "brand": "visa",
    "type": "debit",
    "time": 1.0238194465637207,
    "tries": 30237
  },
  {
    "card": "6011915122370136",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "debit",
    "time": 1.023122787475586,
    "tries": 30249
  },
  {
    "card": "30379879830646",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.030369758605957,
    "tries": 30255
  },
  {
    "card": "5187708301682318",
    "bank": "BANCO SANTANDER COLOMBIA, S.A.",
    "country": "Colombia",
    "brand": "mastercard",
    "type": "credit",
    "time": 1.0235695838928223,
    "tries": 30267
  },
  {
    "card": "3566158469604934",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0243873596191406,
    "tries": 30273
  },
  {
    "card": "4438198422402",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233068466186523,
    "tries": 30279
  },
  {
    "card": "4072803729090409",
    "bank": "HUNTINGTON NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0237138271331787,
    "tries": 30285
  },
  {
    "card": "3566912071840348",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1257076263427734,
    "tries": 30290
  },
  {
    "card": "30334334262984",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0235419273376465,
    "tries": 30296
  },
  {
    "card": "4706800738047093",
    "bank": "OJSC UNICORBANK",
    "country": "Russian Federation",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235795974731445,
    "tries": 30302
  },
  {
    "card": "4605587894561",
    "bank": "LAKE TRUST C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0276694297790527,
    "tries": 30309
  },
  {
    "card": "4179729779004259",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0237722396850586,
    "tries": 30314
  },
  {
    "card": "3530269265384770",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0238332748413086,
    "tries": 30321
  },
  {
    "card": "6598335510822757",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9122765064239502,
    "tries": 30326
  },
  {
    "card": "4655946040818383051",
    "bank": "LLOYDS TSB BANK, S.A.",
    "country": "Colombia",
    "brand": "visa",
    "type": "credit",
    "time": 1.0907533168792725,
    "tries": 30332
  },
  {
    "card": "6011258632754493",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9240071773529053,
    "tries": 30338
  },
  {
    "card": "4461260410621817796",
    "bank": "MERRICK BANK CORPORATION",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0257568359375,
    "tries": 30344
  },
  {
    "card": "213183823216269",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.122074842453003,
    "tries": 30350
  },
  {
    "card": "213154053464820",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1309165954589844,
    "tries": 30355
  },
  {
    "card": "4992772588288965",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.022963285446167,
    "tries": 30362
  },
  {
    "card": "6596091509338410",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.024744987487793,
    "tries": 30367
  },
  {
    "card": "180002095176234",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0222063064575195,
    "tries": 30379
  },
  {
    "card": "378744283816962",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0332322120666504,
    "tries": 30385
  },
  {
    "card": "4754413625436862620",
    "bank": "FIRST INTERSTATE BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9208991527557373,
    "tries": 30391
  },
  {
    "card": "4197383480824044375",
    "bank": "Desconhecido",
    "country": "Australia",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234918594360352,
    "tries": 30403
  },
  {
    "card": "4377863391924",
    "bank": "PT. ANZ PANIN BANK",
    "country": "Indonesia",
    "brand": "visa",
    "type": "credit",
    "time": 1.0218651294708252,
    "tries": 30409
  },
  {
    "card": "38074387810659",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9209768772125244,
    "tries": 30415
  },
  {
    "card": "378345505411242",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "amex",
    "type": "credit",
    "time": 1.0211522579193115,
    "tries": 30422
  },
  {
    "card": "4165160561020",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0227253437042236,
    "tries": 30427
  },
  {
    "card": "3583692693683503",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234224796295166,
    "tries": 30433
  },
  {
    "card": "3554471061992274",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0229837894439697,
    "tries": 30445
  },
  {
    "card": "370759175413205",
    "bank": "AMERICAN EXPRESS",
    "country": "Mexico",
    "brand": "amex",
    "type": "credit",
    "time": 1.0232853889465332,
    "tries": 30451
  },
  {
    "card": "4556023763870",
    "bank": "Desconhecido",
    "country": "Hungary",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235421657562256,
    "tries": 30457
  },
  {
    "card": "180025329985849",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023763656616211,
    "tries": 30463
  },
  {
    "card": "676224889763",
    "bank": "CESKOSLOVENSKA OBCHODNI BANKA, A.S.",
    "country": "Czechia",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9833402633666992,
    "tries": 30469
  },
  {
    "card": "4182830510029073315",
    "bank": "FIRST NATIONAL BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9214706420898438,
    "tries": 30475
  },
  {
    "card": "4963100255611175",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0235693454742432,
    "tries": 30493
  },
  {
    "card": "3570979991463703",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1261911392211914,
    "tries": 30499
  },
  {
    "card": "4497287881282",
    "bank": "HELM BANK, S.A.",
    "country": "Colombia",
    "brand": "visa",
    "type": "debit",
    "time": 1.0240066051483154,
    "tries": 30505
  },
  {
    "card": "30264637436532",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023697853088379,
    "tries": 30511
  },
  {
    "card": "30069899899024",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.122319221496582,
    "tries": 30517
  },
  {
    "card": "3547316682453596",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0284624099731445,
    "tries": 30523
  },
  {
    "card": "639088423699",
    "bank": "EUROPAY FRANCE SAS",
    "country": "France",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0248596668243408,
    "tries": 30529
  },
  {
    "card": "3572312844148412",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0213544368743896,
    "tries": 30535
  },
  {
    "card": "379031972706483",
    "bank": "Desconhecido",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "amex",
    "type": "debit",
    "time": 1.124283790588379,
    "tries": 30541
  },
  {
    "card": "4915421816430072",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0250282287597656,
    "tries": 30546
  },
  {
    "card": "4009645081195054",
    "bank": "BAIDURI BANK BHD",
    "country": "Brunei Darussalam",
    "brand": "visa",
    "type": "credit",
    "time": 1.0243330001831055,
    "tries": 30553
  },
  {
    "card": "4302957216058831141",
    "bank": "Desconhecido",
    "country": "India",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234673023223877,
    "tries": 30559
  },
  {
    "card": "4933762797629056596",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.9205284118652344,
    "tries": 30565
  },
  {
    "card": "4580168542630692008",
    "bank": "DISCOUNT",
    "country": "Israel",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233054161071777,
    "tries": 30577
  },
  {
    "card": "4212093359697936",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.921504020690918,
    "tries": 30583
  },
  {
    "card": "3538220064189839",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.1363403797149658,
    "tries": 30595
  },
  {
    "card": "3563621789111347",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.988682746887207,
    "tries": 30601
  },
  {
    "card": "4156047025162962",
    "bank": "CARD SERVICES FOR CREDIT UNIONS, INC.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.022263765335083,
    "tries": 30606
  },
  {
    "card": "213130907111262",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.2277705669403076,
    "tries": 30612
  },
  {
    "card": "6577102999432879",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.921245813369751,
    "tries": 30624
  },
  {
    "card": "378658944014298",
    "bank": "AMERICAN EXPRESS COMPANY",
    "country": "United States of America",
    "brand": "amex",
    "type": "credit",
    "time": 1.0230803489685059,
    "tries": 30636
  },
  {
    "card": "675974724873",
    "bank": "ROYAL BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 0.9228324890136719,
    "tries": 30642
  },
  {
    "card": "3549957722760397",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0236940383911133,
    "tries": 30654
  },
  {
    "card": "4349846688668",
    "bank": "ST. GEORGES BANK AND COMPANY, INC.",
    "country": "Panama",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233652591705322,
    "tries": 30659
  },
  {
    "card": "4313294343442131514",
    "bank": "J.P. MORGAN EUROPE, LTD.",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0236210823059082,
    "tries": 30665
  },
  {
    "card": "4307444949346",
    "bank": "NORTH COMMUNITY BANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0196070671081543,
    "tries": 30671
  },
  {
    "card": "6011068637962466",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9916338920593262,
    "tries": 30677
  },
  {
    "card": "30252362454838",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236945152282715,
    "tries": 30683
  },
  {
    "card": "4090149957968603",
    "bank": "CAJA DE AHORROS Y PENSIONES DE BARCELONA(LA CAIXA)",
    "country": "Spain",
    "brand": "visa",
    "type": "credit",
    "time": 0.9211406707763672,
    "tries": 30689
  },
  {
    "card": "6514433727205352",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0004160404205322,
    "tries": 30707
  },
  {
    "card": "4790825720881088478",
    "bank": "Desconhecido",
    "country": "Ukraine",
    "brand": "visa",
    "type": "debit",
    "time": 0.9210844039916992,
    "tries": 30713
  },
  {
    "card": "3580051351191817",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9212291240692139,
    "tries": 30719
  },
  {
    "card": "675984674118",
    "bank": "ALLOCATED TO SWITCH",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0282835960388184,
    "tries": 30725
  },
  {
    "card": "4687555019355477117",
    "bank": "Desconhecido",
    "country": "Poland",
    "brand": "visa",
    "type": "debit",
    "time": 1.2903196811676025,
    "tries": 30731
  },
  {
    "card": "213131947026528",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0237505435943604,
    "tries": 30737
  },
  {
    "card": "4628769137525055",
    "bank": "Desconhecido",
    "country": "Timor-Leste",
    "brand": "visa",
    "type": "debit",
    "time": 1.0232906341552734,
    "tries": 30761
  },
  {
    "card": "30198874783885",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0230376720428467,
    "tries": 30773
  },
  {
    "card": "5389648853359681",
    "bank": "Desconhecido",
    "country": "Thailand",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0223102569580078,
    "tries": 30785
  },
  {
    "card": "180020579482811",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9212472438812256,
    "tries": 30791
  },
  {
    "card": "4426955495728530",
    "bank": "GLENDALE AREA SCHOOLS FEDERAL CREDIT UNION",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236692428588867,
    "tries": 30798
  },
  {
    "card": "4976620951290",
    "bank": "CREDIT INDUSTRIEL ET COMMERCIAL",
    "country": "France",
    "brand": "visa",
    "type": "credit",
    "time": 1.0235750675201416,
    "tries": 30804
  },
  {
    "card": "213121168734405",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232272148132324,
    "tries": 30810
  },
  {
    "card": "3586016116044050",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232839584350586,
    "tries": 30816
  },
  {
    "card": "180057362436737",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0243489742279053,
    "tries": 30828
  },
  {
    "card": "4135788711940270",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 0.9208886623382568,
    "tries": 30834
  },
  {
    "card": "3552145201776654",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232675075531006,
    "tries": 30840
  },
  {
    "card": "3539715329043449",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0439066886901855,
    "tries": 30852
  },
  {
    "card": "30301939734790",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0236623287200928,
    "tries": 30864
  },
  {
    "card": "4741338482410362",
    "bank": "HWATAI COMMERCIAL BANK",
    "country": "Taiwan, Province of China[a]",
    "brand": "visa",
    "type": "credit",
    "time": 0.9208264350891113,
    "tries": 30870
  },
  {
    "card": "180005822866282",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0228142738342285,
    "tries": 30876
  },
  {
    "card": "3554957671841000",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0232436656951904,
    "tries": 30882
  },
  {
    "card": "30583646556190",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.022916555404663,
    "tries": 30894
  },
  {
    "card": "676214595578",
    "bank": "Desconhecido",
    "country": "Slovenia",
    "brand": "mastercard",
    "type": "debit",
    "time": 1.0232484340667725,
    "tries": 30900
  },
  {
    "card": "375319105575220",
    "bank": "AMERICAN EXPRESS",
    "country": "Netherlands",
    "brand": "amex",
    "type": "credit",
    "time": 1.0236291885375977,
    "tries": 30906
  },
  {
    "card": "3549609046794699",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0234885215759277,
    "tries": 30912
  },
  {
    "card": "6533163660646299",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9207370281219482,
    "tries": 30918
  },
  {
    "card": "4010998473535115",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023481845855713,
    "tries": 30924
  },
  {
    "card": "30132817843555",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023801565170288,
    "tries": 30930
  },
  {
    "card": "38364676352327",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0241851806640625,
    "tries": 30936
  },
  {
    "card": "377802899848026",
    "bank": "Desconhecido",
    "country": "New Zealand",
    "brand": "amex",
    "type": "credit",
    "time": 1.021709680557251,
    "tries": 30942
  },
  {
    "card": "375880879497305",
    "bank": "SWISSCARD AECS AG",
    "country": "Switzerland",
    "brand": "amex",
    "type": "credit",
    "time": 1.0236775875091553,
    "tries": 30960
  },
  {
    "card": "213151265911051",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0175399780273438,
    "tries": 30972
  },
  {
    "card": "377187447802844",
    "bank": "AMERICAN EXPRESS",
    "country": "Thailand",
    "brand": "amex",
    "type": "credit",
    "time": 1.1255853176116943,
    "tries": 30978
  },
  {
    "card": "4098323777441630079",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.126011848449707,
    "tries": 30984
  },
  {
    "card": "3540975465447468",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9215681552886963,
    "tries": 30990
  },
  {
    "card": "30516891708082",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023557424545288,
    "tries": 30995
  },
  {
    "card": "5271338240235734",
    "bank": "Desconhecido",
    "country": "Puerto Rico",
    "brand": "mastercard",
    "type": "credit",
    "time": 0.9169771671295166,
    "tries": 31001
  },
  {
    "card": "36709125935787",
    "bank": "Desconhecido",
    "country": "Desconhecido",
    "brand": "discover",
    "type": "credit",
    "time": 1.1251630783081055,
    "tries": 31007
  },
  {
    "card": "3548032243646284",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0241680145263672,
    "tries": 31013
  },
  {
    "card": "6557379788297150",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.983588695526123,
    "tries": 31019
  },
  {
    "card": "4152809264708654",
    "bank": "BANCO SANTANDER CHILE",
    "country": "Chile",
    "brand": "visa",
    "type": "credit",
    "time": 1.0232110023498535,
    "tries": 31025
  },
  {
    "card": "30307873120276",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0240275859832764,
    "tries": 31031
  },
  {
    "card": "4762298086575669",
    "bank": "ROYAL BANK OF SCOTLAND",
    "country": "United Kingdom of Great Britain and Northern Ireland",
    "brand": "visa",
    "type": "debit",
    "time": 1.0231471061706543,
    "tries": 31037
  },
  {
    "card": "180032460442556",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9214684963226318,
    "tries": 31049
  },
  {
    "card": "4656586026713",
    "bank": "Desconhecido",
    "country": "Germany",
    "brand": "visa",
    "type": "credit",
    "time": 1.0238721370697021,
    "tries": 31055
  },
  {
    "card": "6011361770557346",
    "bank": "SAMS CLUB",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.0233981609344482,
    "tries": 31073
  },
  {
    "card": "376452945664414",
    "bank": "AMERICAN EXPRESS",
    "country": "Argentina",
    "brand": "amex",
    "type": "credit",
    "time": 1.0232536792755127,
    "tries": 31079
  },
  {
    "card": "4958842117157",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.023512601852417,
    "tries": 31091
  },
  {
    "card": "4860996410000",
    "bank": "JAMMAL TRUST BANK S.A.L.",
    "country": "Lebanon",
    "brand": "visa",
    "type": "credit",
    "time": 0.9220151901245117,
    "tries": 31097
  },
  {
    "card": "4215348930103797",
    "bank": "STANDARD CHARTERED BANK",
    "country": "Sri Lanka",
    "brand": "visa",
    "type": "debit",
    "time": 1.7196435928344727,
    "tries": 31119
  },
  {
    "card": "4917249831235469236",
    "bank": "BANK OF AMERICA (ASIA), LTD.",
    "country": "China",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.207432746887207,
    "tries": 31123
  },
  {
    "card": "4853818107336005",
    "bank": "BANK OF AMERICA, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.1314284801483154,
    "tries": 31128
  },
  {
    "card": "4002351391070015",
    "bank": "BANCO ITAUCARD, S.A.",
    "country": "Brazil",
    "brand": "visa",
    "type": "credit",
    "time": 1.442328929901123,
    "tries": 31132
  },
  {
    "card": "4948654753623934",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 3.4831960201263428,
    "tries": 31151
  },
  {
    "card": "4879530730723",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.1031665802001953,
    "tries": 31156
  },
  {
    "card": "4324532195914281",
    "bank": "BANCA POPOLARE DI MILANO S.C.A.R.L.",
    "country": "Italy",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233545303344727,
    "tries": 31161
  },
  {
    "card": "6011748628681866",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 1.023620367050171,
    "tries": 31167
  },
  {
    "card": "213113379850534",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.023353099822998,
    "tries": 31173
  },
  {
    "card": "4594026962312558",
    "bank": "Desconhecido",
    "country": "Guyana",
    "brand": "visa",
    "type": "debit",
    "time": 1.0236701965332031,
    "tries": 31179
  },
  {
    "card": "30537516746448",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.920893669128418,
    "tries": 31185
  },
  {
    "card": "4258863205906522082",
    "bank": "INTERNATIONAL BANK OF QATAR (Q.S.C.)",
    "country": "Qatar",
    "brand": "visa",
    "type": "credit",
    "time": 1.026322364807129,
    "tries": 31191
  },
  {
    "card": "4679917045405104",
    "bank": "TIB - THE INDEPENDENT BANKERSBANK",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.023271083831787,
    "tries": 31203
  },
  {
    "card": "180004472242472",
    "bank": "JCB CO., LTD.",
    "country": "Japan",
    "brand": "jcb",
    "type": "credit",
    "time": 1.0233776569366455,
    "tries": 31216
  },
  {
    "card": "4198640834256536",
    "bank": "Desconhecido",
    "country": "United Arab Emirates",
    "brand": "visa",
    "type": "credit",
    "time": 1.0234193801879883,
    "tries": 31221
  },
  {
    "card": "4962326649853634",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 0.920950174331665,
    "tries": 31228
  },
  {
    "card": "4494413635278",
    "bank": "CITIBANK, N.A.",
    "country": "United States of America",
    "brand": "visa",
    "type": "credit",
    "time": 1.0233697891235352,
    "tries": 31234
  },
  {
    "card": "4346502327655080",
    "bank": "GULF COAST F.C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0234456062316895,
    "tries": 31240
  },
  {
    "card": "4565893766517",
    "bank": "BANCO COMERCIAL DE TRES ARROYOS",
    "country": "Argentina",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0234057903289795,
    "tries": 31246
  },
  {
    "card": "3547994874275173",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.9214394092559814,
    "tries": 31252
  },
  {
    "card": "6590007157502772",
    "bank": "BANK OF AMERICA",
    "country": "United States of America",
    "brand": "discover",
    "type": "credit",
    "time": 0.9212028980255127,
    "tries": 31258
  },
  {
    "card": "4700198952685835113",
    "bank": "SERVICES C.U.",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.0235230922698975,
    "tries": 31270
  },
  {
    "card": "3529388390423015",
    "bank": "JCB INTERNATIONAL CREDIT CARD CO., LTD.",
    "country": "United States of America",
    "brand": "jcb",
    "type": "credit",
    "time": 0.920896053314209,
    "tries": 31282
  },
  {
    "card": "4518335328993735",
    "bank": "BANGKOK BANK OF COMMERCE, LTD.",
    "country": "Thailand",
    "brand": "visa",
    "type": "Desconhecido",
    "time": 1.0232326984405518,
    "tries": 31288
  },
  {
    "card": "4674584640355525",
    "bank": "Desconhecido",
    "country": "United States of America",
    "brand": "visa",
    "type": "debit",
    "time": 1.023085594177246,
    "tries": 31294
  },
];
