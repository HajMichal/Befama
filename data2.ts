export const MACHINES: any = {
    "pl": {
        "Otwieracze bel": {
            models: [
                    {
                        name: "OB1, OB2",
                        src: "/eachmachine/1.1-Otwieracze-bel-OB1_-OB2.webp",
                        description: "Otwieracze bel OB1, OB2, służą do wstępnego rozluźniania włókien w liniach rozluźniająco-mieszających i zasilania maszyn typu: wilk rozluźniający lub wilk zgrzeblący. Surowiec do zasilarki może być podawany wózkiem, transporterem (OB1) lub pneumatycznie za pomocą cyklonu (OB2).",
                        parameters: [
                            {width: ["1200 mm", "1400 mm ", "1600 mm"]},
                            {power: ["4,0 kW", "4,2 kW", "4,6 kW"]}
                        ]
                    },
                    {
                        name: "OB1-E, OB2-E",
                        src: "/eachmachine/1.2-Zasilarki-wagowe-z-wagą-elektroniczną-OB1-E_-OB2-E.webp",
                        description: "Zasilarki wagowe z wagą elektroniczną przeznaczone do wstępnego rozluźnienia włókien w liniach otwierająco-mieszających i dozowania zadanych porcji surowca na transporter zbiorczy. Surowiec do zasilarki może być podawany: wózkiem lub transporterem (OB1-E) lub pneumatycznie za pomocą cyklonu (OB2-E).",
                        parameters: [
                            {width: ["1400 mm", "1600 mm"]},
                            {power: ["4,2 kW", "4,6 kW"]}
                        ]
                    }
            ]
        },
        "Transportery zbiorcze" : {
            models: [
                {
                    name: "TP, TPR",
                    src: "/eachmachine/2-1-transportery-zbiorcze-tp-tpr.webp",
                    description: "Transporter zbiorczy TP przeznaczony jest do odbierania surowca z kilku zasilarek wagowych (zazwyczaj od 2 do 5 szt.), a następnie przeniesienia go do kolejnych maszyn w linii przygotowawczej. Transporter w wersji TPR jest wyposażony dodatkowo w wałek rozluźniający przed wentylatorem.",
                    parameters: [
                        {width: ["800 mm", "1000 mm"]},
                        {power: ["max 1,1 kW"]},
                    ]
                }
            ]
        },
        "Maszyny rozluźniające": {
            models: [
                {
                    name: "AB6N, AB6A",
                    src: "/eachmachine/3-1-wilk-zgrzeblacy-ab6n.webp",
                    description: "Wilk zgrzeblący AB6N przeznaczony jest głównie do przygotowania surowca włókienniczego przed procesem zgrzeblenia. Może on stanowić element w linii rozluźniająco-mieszającej jak również pracować jako samodzielna maszyna wstępnego rozluźniania i mieszania. Rodzaje:  AB6N - wilk stacjonarny, AB6A - wilk obrotowy",
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["21 kW", "30 kW"]},
                    ]
                },
                {
                    name: "AB19",
                    src: "/eachmachine/2-wilk-rozluzniajacy-pickerab19a.webp",
                    description: "Wilk rozluźniający AB19, popularnie zwany Pikerem, przeznaczony jest do rozluźniania włókien przed procesem zgrzeblenia. W liniach rozluźniająco-mieszających pracuje najczęściej w połączeniu z zasilarką OB1 oraz wentylatorem WB od strony wydawania. AB19G- wersja specjalna dla włókien szklanych , zasilanie wałkowe, bęben główny z igłami",
                    parameters: [
                        {width: ["1000 mm ", "1500 mm"]},
                        {power: ["14 kW", "20 kW"]},
                    ]
                }
            ]
        },
        "Komory mieszalnicze": {
            models: [
                {
                    name: "KMC",
                    src: "/eachmachine/4-1-komory-mieszalnicze-kmc.webp",
                    description: "Komora o pracy ciągłej KMC jest przeznaczona do akumulowania oraz mieszania włókien dostarczanych drogą transportu pneumatycznego.",
                    parameters: [
                        {width: ["1500 mm", "3000 mm"]},
                        {power: ["4,7 kW"]}
                    ]
                },
                {
                    name: "MW6",
                    src: "/eachmachine/4-2-komora-sekcyjna-mw6.webp",
                    description: "Mieszarka wielokomorowa MW6 służy do dokładnego przygotowania mieszanki tworzonej z kilku komponentów włókien o długości nie przekraczającej 80 mm. Przy tworzeniu mieszanki z kilku surowców konieczne jest wcześniejsze ich odważenie i wstępne wymieszanie.",
                    parameters: [
                        {width: ["1200 mm"]},
                        {power: ["8 kW"]},
                    ]
                }
            ]
        },
        "Zgrzeblarki do produkcji włóknin": {
            models: [
                {
                    name: "CU611, CU612, CU641",
                    src: "/eachmachine/5.1- zgrzeblarki-cu611-cu612.webp",
                    description:  "Zgrzeblarki jednozbieraczowe przeznaczone są do produkcji włóknin o niskich gramaturach, zazwyczaj w zakresie od 40 – 200 g/m2. Moc zainstalowana uzależniona od szerokości roboczej i konfiguracji maszyny.",
                    parameters: [
                        {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]},
                    ]
                },
                {
                    name: "CU661, CU669",
                    src: "/eachmachine/5.2-zgrzeblarki-dwuzbiera-cu661.webp",
                    description: "Zgrzeblarki dwuzbieraczowe przeznaczone są do produkcji włóknin o wysokich gramaturach, zazwyczaj w zakresie od 100 – 2000 g/m2. Moc zainstalowana uzależniona od szerokości roboczej i konfiguracji maszyny.",
                    parameters: [
                        {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]},
                    ]
                }
            ]
        },
        "Zgrzeblarki do produkcji przędzy": {
            models: [
                {
                name: "CR",
                src: "/eachmachine/6.1-sys.zgrzebny.webp",
                description: "Zespoły zgrzeblarkowe przeznaczone do produkcji przędzy z włókien wełny, jej mieszanek i włókien regenerowanych. Moc zainstalowana uzależniona od szerokości roboczej i konfiguracji maszyny.",
                parameters: [
                    {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]}
                    ]
                },
                {
                name: "CSW, CSP",
                src: "/eachmachine/6.2-sys.czesankowy.webp",
                description: "Zespoły przeznaczone są do zgrzeblenia wełny i przygotowania jej do dalszej obróbki w systemie czesankowym lub pół-czesankowym. CSW611 i CSW641 - przeznaczone są do przerobu wełny oraz mieszanki wełny z włóknami syntetycznymi. CSP611 i CSP641 - przeznaczone są do przerobu włókien syntetycznych.",
                parameters: [
                    {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]}
                    ]
                }
            ]
        },
        "Zgrzeblarki laboratoryjne i specjalne": {
            models: [
                {
                    name: "CU121",
                    src: "/eachmachine/7-1-linia-laboratoryjna-cu121.webp",
                    description: "Linia laboratoryjna CU121 ma zastosowanie do celów manipulacyjnych surowcami włókienniczymi - melanżowania kolorów oraz dobierania najlepszych parametrów produkcyjnych dla różnych surowców i ich mieszanek. Linia w połączeniu z układaczem, igłowarką, kalandrem lub innymi maszynami, może pomagać w opracowaniu nowych technologii w ośrodkach badawczych, instytutach lub innych tego typu placówkach. Linia może być wyposażona w nowoczesną zasilarkę 1E, zgrzeblarkę 3KA i urządzenie zagęszczające runo 5AZ.",
                    parameters: [
                        {width: ["500 mm", "1000 mm"]},
                        {power: ["4 kW", "9 kW"]},
                        {drumDiameter: ["500 mm"]},
                        {collectDiameter: ["500 mm"]}
                    ]
                },
                {
                    name: "3AGK",
                    src: "/eachmachine/7.2-zgrzeblarkadofilcu.webp",
                    description: "Zgrzeblarka do filcu kapeluszowego 3AGK jest specjalistyczną maszyną opracowaną na potrzeby przemysłu odzieżowego. Jej konstrukcja pozwala na produkcję półfabrykatu na filc z przeznaczeniem na kapelusze. Duży bęben główny oraz siedem par wałków roboczo-zwrotnych pozwala na dobre rozluźnienie i wymieszanie surowca.",
                    parameters: [
                        {width: ["500 mm"]},
                        {power: ["9 kW"]},
                        {drumDiameter: ["1500 mm"]},
                        {collectDiameter: ["680 mm"]}
                    ]
                }
            ]
        },
        "Układacze poziome": {
            models: [
                {
                    name: "5W50",
                    src: "/eachmachine/8-1-uk197130adacz-serii-5w50.webp",
                    description: "Układacze serii 5W50 - mogą współpracować z zespołami do włóknin, o szerokościach roboczych 1000, 1800, 2000, 2200 i 2500 mm. Szerokości układania w zależności od typu: od 600 do 4200 mm. Układacz wyposażony w system profilowania runa. Sterowanie z pulpitu sterowniczego z panelem dotykowym.",
                    parameters: [
                        {power: ["19 kW"]},
                        {speed: ["50 m/min"]}
                    ]
                },
                {
                    name: "5WN700",
                    src: "/eachmachine/8-2-uk197130adacz-serii-5wn700.webp",
                    description: "Układacze serii 5WN700 - mogą współpracować z zespołami do włóknin o szerokościach roboczych 2200 i 2500 mm. Szerokości układania w zależności od typu: od 2800 do 6300 mm. Masa powierzchniowa pokładu runa: od 60 do 600 g/m2 lub od 500 do 1500 g/m2 .Układacz wyposażony w system profilowania runa. Prowadzenie surowca między lekkimi, antystatycznymi taśmami. Naciąg i prowadzenie taśm za pomocą siłowników pneumatycznych. Sterowanie z pulpitu sterowniczego z panelem dotykowym.",
                    parameters: [
                        {power: ["36 kW"]},
                        {speed: ["70 m/min"]}
                    ]
                }
            ]
        },
        "Rozciągarki runa": {
            models: [
                {
                    name: "WD3 - WD6",
                    src: "/eachmachine/9-1-rozci196133garki-runa-wd3-wd5.webp",
                    description: "Rozciągarka runa WD instalowana po układaczu i najczęściej przed igłowarką lub piecem, poprawia parametry wytrzymałościowe włókniny. Dzięki zastosowaniu minimum trzech a maksymalnie sześciu sekcji rozciągających w linii produkcyjnej, znacznie zwiększymy jej wydajność.",
                    parameters: [ 
                        {width: ["2600 mm", "3600 mm"]},
                        {power: ["4 kW", "8 kW"]}
                    ]
                }
            ]
        },
        "Maszyny do recyklingu": {
            models: [
                {
                    name: 'Szarparki AC50',
                    src: "/eachmachine/10-1-szarparki-ac40-ac50.webp",
                    description: "Szarparki AC50 są przeznaczone do przerobu odpadów włókienniczych, wykonanych z surowców naturalnych i sztucznych. Budowa modułowa pozwala na tworzenie zestawów od jednosekcyjnych (AC51) do sześciosekcyjnych (AC56), zależnie od potrzeb technologicznych. Zasilanie surowcem może być wykonywane ręcznie lub z wykorzystaniem zasilarki lub szybu. Odbiór surowca za pomocą transportera lub ssawy z wentylatorem.",
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["min 36 kW", "max 180 kW"]}
                    ]
                },
                {
                    name: "Otwieracz zgrzeblący OZ, POZ",
                    src: "/eachmachine/10.2-otwieracz-oz-poz.webp",
                    description: "Nowoczesna maszyna rozwłókniająca, o bardzo dużej skuteczności rozwłókniania o kompaktowej zwartej budowie. Została wyposażona, w zależności od wersji, w jeden lub dwa bębny rozwłókniające współpracujące z wałkami roboczymi umieszczonymi na ich obwodach. Główną cechą tych maszyn jest bardzo wysoki stopień otwarcia, zwłaszcza w wersji tandem. Dzięki temu odzyskane włókna można ponownie wykorzystywać w procesie produkcji.",
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["24 kW", "38 kW"]}
                    ]
                },
                {
                    name: "Szarparki AC5, AB19",
                    src: "/eachmachine/10-3-szarparki-ac5-ab19.webp",
                    description: "Szarparki AC5 i AB19 przeznaczone są do odzyskiwania surowca z odpadów powstałych podczas procesu produkcji. AC5 dzięki małym gabarytom znajdzie swoje miejsce w każdym zakładzie włókienniczym. Jeśli jednak potrzebujemy większej maszyny do odzyskiwania surowca powinniśmy pomyśleć o AB19 która posiada większe gabaryty i zapewni większe wydajności.",
                    parameters: [
                        {width: ["AC5 - 500 mm", "AB19- 1000 mm", "AB19- 1500 mm"]},
                        {power: ["14 kW", "28 kW", "36 kW"]}
                    ]
                },
                {
                    name: "Szarparka krajek AC4B",
                    src: "/eachmachine/10-4-szarparka-krajek-ac4b.webp",
                    description: "Szarparka krajek AC4B przeznaczona jest do odzyskiwania surowca z odciętych brzegów włóknin powstałych podczas procesu produkcji. Dzięki zastosowaniu płynnej regulacji prędkości zasilania, maszyna może pracować w systemie ciągłym z liniami do włóknin w różnych technologiach.",
                    parameters: [
                        {width: ["250 mm", "500 mm"]},
                        {power: ["7 kW", "12 kW"]}
                    ]
                }
            ]
        },
        "Kondensery obrotowe, cyklony, filtry": {
            models: [
                {
                    name: "Kondensery obrotowe, odpylajace",
                    src: "/eachmachine/11-1-kondensery-odpylajace.webp",
                    description: "Kondenser odpylający przeznaczony do dozowania surowca w instalacjach transportu pneumatycznego. Działanie urządzenia polega na oddzielaniu powietrza oraz kurzu od surowca na końcowym odcinku instalacji transportującej surowiec włókienniczy. Kondenser instalowany jest w komplecie ze stacją filtrów workowych. W wersji specjalnej posiada dodatkową siatkę na bębnie zabezpieczającą przed przedostawaniem się drobnych włókien do filtrów, jednocześnie zabezpieczając bęben przed ścieraniem w przypadku, włókien szklanych, ceramicznych, bazaltowych czy węglowych.",
                    parameters: [
                        {width: ["1000 mm", "1200 mm", "1500 mm"]},
                        {power: ["1,5 kW", "2,2 kW", "2,8 kW"]},
                        {drumDiameter: ["548 mm"]},
                    ]
                },
                {
                    name: 'Cyklony',
                    src: "/eachmachine/11-2-cyklony.webp",
                    description: "Cyklony podające stosowane w systemie transportu pneumatycznego. Są przeznaczone do podawania włókna do komór mieszalniczych lub do wszelkiego rodzaju skrzyń zasilarek, szybów lub boksów. Oferujemy cyklony zwykłe, kierunkowe i odpylające. CY1 – Cyklon odpylający, CY2 – Cyklon podający zawężany, kierunkowy, CY3 – Cyklon podający zwykły.",
                },
                {
                    name: 'Filtry',
                    src: "/eachmachine/11-3-filtry500x300.webp",
                    description: "Oferowane stacje filtrujące, wyposażone są w stacjonarne filtry workowe w ilości od dwóch do pięciu worków w jednej stacji. Filtry posiadają najczęściej średnicę 500 mm i są dzielone na dwie części: górną oraz dolną, umożliwiającą opróżnianie zawartości filtra. FW2 – Stacja 2-workowa, FW3 – Stacja 3-workowa, FW5 – Stacja 5-workowa. Moc wentylatora uzależniona jest od rodzaju filtra."
                }
            ]
        },
        "Instalacje transportu pneumatycznego": {
            models: [
                {
                    name: 'Instalacje transportu pneumatycznego',
                    src: "/eachmachine/12.1-instalacje-transp-pneum.webp",
                    description: "Oferowane instalacje transportu pneumatycznego wykonywane są standardowo z blachy cynkowanej o specjalnym, gładkim wykończeniu powierzchni wewnętrznej. Elementy instalacji: PS – przewody stalowe o średnicach 150 mm, 200 mm, 250mm, 300mm | PE – przewody elastyczne o średnicach 150 mm, 200 mm, 250mm, 300mm | RO – rozdzielacze obrotowe | WPT – wentylatory promieniowe."
                }
            ]
        }
        },

    "gb": {
        "Bale openers": {
            models: [
                {
                    name: "OB1, OB2",
                    src: "/eachmachine/1.1-Otwieracze-bel-OB1_-OB2.webp",
                    description: "The OB1, OB2, openers are used in opening and blending lines to pre-open fibres and feed pickers or willows. Fibres are supplied to the feeders mechanically on a conveyor or pneumatically through a cyclone.",
                    parameters : [
                        {width: ["1200 mm", "1400 mm ", "1600 mm"]},
                        {power: ["4,0 kW", "4,2 kW", "4,6 kW"]}
                    ]
                },
                {
                    name: "OB1-E, OB2-E",
                    src: "/eachmachine/1.2-Zasilarki-wagowe-z-wagą-elektroniczną-OB1-E_-OB2-E.webp",
                    description: "Weighing feeders with electronical weighpan OB1 are used to pre-open fibres and drop the fibre material in portions onto a collecting conveyor.",
                    parameters : [
                        {width: ["1400 mm", "1600 mm"]},
                        {power: ["4,2 kW", "4,6 kW"]}
                    ]
                }
            ]
        },
        "Collective transporters" : {
            models: [
                {
                    name: "TP, TPR",
                    src: "/eachmachine/2-1-transportery-zbiorcze-tp-tpr.webp",
                    description: "The TP conveyor collects material from one or more weighing feeders (usually 2 to 5 feeders) and transports it to further machines within the processing line. The TPR conveyor has an additional opening roller installed before the fan moving the fibres to further processing.",
                    parameters: [
                        {width: ["800 mm", "1000 mm"]},
                        {power: ["max 1,1 kW"],}
                    ]
                }
            ]
        },
        "Opening machines": {
            models: [
                {
                    name: "AB6N, AB6A",
                    src: "/eachmachine/3-1-wilk-zgrzeblacy-ab6n.webp",
                    description: "The carding willow AB6 is mainly used to prepare fibre material for carding. It can work within an opening-blending line or serve as a separate pre-opening machine. Types: AB6N - stationary willow, AB6A - rotatable willow",
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["21 kW", "30 kW"]},
                    ]
                },
                {
                    name: "AB19",
                    src: "/eachmachine/2-wilk-rozluzniajacy-pickerab19a.webp",
                    description: "The picker AB19 opens the fibres before carding. In an opening-blending line it is normally used with an OB1 feeder and a WB fan on the exit side. AB19G- special version for glass fibers, roller feed, main drum with needles",
                    parameters: [
                        {width: ["1000 mm ", "1500 mm"]},
                        {power: ["14 kW", "20 kW"]},
                    ]
                }
            ]
        },
        "Mixing chambers": {
            models: [
                {
                    name: "KMC",
                    src: "/eachmachine/4-1-komory-mieszalnicze-kmc.webp",
                    description: "The KMC continuous work chambers is intended for the accumulation and mixing of fibers delivered by pneumatic transport.",
                    parameters: [
                        {width: ["1500 mm", "3000 mm"]},
                        {power: ["4,7 kW"]}
                    ]
                },
                {
                    name: "MW6",
                    src: "/eachmachine/4-2-komora-sekcyjna-mw6.webp",
                    description: "The MW6 multi-chamber mixer is used for the precise preparation of the mixture of fibers made of several fiber components with a length not exceeding 80 mm. When creating a mixture of several raw materials, it is necessary to weigh them in advance and mix them initially.",
                    parameters: [
                        {width: ["1200 mm"]},
                        {power: ["8 kW"]}
                    ]
                }
            ]
        },
        "Nonwovens carding sets": {
            models: [
                {
                    name: "CU611, CU612, CU641",
                    src: "/eachmachine/5.1- zgrzeblarki-cu611-cu612.webp",
                    description: "Single-doffer carding machines are designed for the production of low-grammage nonwovens, usually in the range of 40 - 200 g / m2. Installed power depends on the working width and machine configuration.",
                    parameters: [
                        {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]},
                    ]
                },
                {
                    name: "CU661, CU669",
                    src: "/eachmachine/5.2-zgrzeblarki-dwuzbiera-cu661.webp",
                    description: "Double doffer carding machines are designed for the production of nonwovens of high grammage, usually in the range of 100 - 2000 g / m2. Installed power depends on the working width and machine configuration.",
                    parameters: [
                        {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]},
                    ]
                }
            ]
        },
        "Carding set for spining": {
            models: [
                {
                name: "CR",
                src: "/eachmachine/6.1-sys.zgrzebny.webp",
                description: "Carding sets for the production of yarn from wool fibers, its blends and regenerated fibers. Installed power depends on the working width and machine configuration.",
                parameters: [
                    {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]}
                    ]
                },
                {
                name: "CSW, CSP",
                src: "/eachmachine/6.2-sys.czesankowy.webp",
                description: "Machines are designed for carding wool and preparing it for further processing in the worsted or semi-worsted system. CSW611 and CSW641 - are intended for processing wool and a mixture of wool with synthetic fibers. CSP611 and CSP641 - are intended for the processing of synthetic fibers.",
                parameters: [
                        {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]}
                    ]
                }
            ]
        },
        "Laboratory and special-purpose carding machines": {
            models: [
                {
                    name: "CU121",
                    src: "/eachmachine/7-1-linia-laboratoryjna-cu121.webp",
                    description: "The CU121 carding set is used for processing test blends of different fibres and colours to select optimum carding parameters for different mixture ratios.The carding set, along with a crosslapper, needlepunching machine, calender or other machine, can be useful for developing new methods in research centres, institutes and other similar organizations.The carding set contains a 1E chute feeder of modern design, a 3KA card and a 5AZ web condensing rollers.",
                    parameters: [
                        {width: ["500 mm", "1000 mm"]},
                        {power: ["4 kW", "9 kW"]},
                        {drumDiameter: ["500 mm"]},
                        {collectDiameter: ["500 mm"]}
                    ]
                },
                {
                    name: "3AGK",
                    src: "/eachmachine/7.2-zgrzeblarkadofilcu.webp",
                    description: "The 3AGK is a carding machine specifically developed for clothing industry. It is suitable for making web used as base material for hat felt. A large main cylinder along with seven pairs of working/stripping rollers provide a precise opening and blending of fibres.",
                    parameters: [
                        {width: ["500 mm"]},
                        {power: ["9 kW"]},
                        {drumDiameter: ["1500 mm"]},
                        {collectDiameter: ["680 mm"]}
                    ]
                }
            ]
        },
        "Crosslappers": {
            models: [
                {
                    name: "5W50",
                    src: "/eachmachine/8-1-uk197130adacz-serii-5w50.webp",
                    description: "The 5W50-series lappers can work with non-woven carding machines of 1000, 1800, 2000, 2200 or 2500 mm working width. Lapping width according to the lapper type: from 600 to 4200 mm. The crosslapper is equipped with a web profiling system. Control from a control panel with a touch screen.",
                    parameters: [
                        {power: ["19 kW"]},
                        {speed: ["50 m/min"]}
                    ]
                },
                {
                    name: "5WN700",
                    src: "/eachmachine/8-2-uk197130adacz-serii-5wn700.webp",
                    description: "The 5WN700 series lappers can work with nonwovens carding sets of 2200 and 2500 mm with working widths. Lapping widths depending on the type: from 2800 to 6300 mm. The surface mass of the pile deck: from 60 to 600 g / m2 or from 500 to 1500 g / m2. The lapper is equipped with a web profiling system. Fibre web guided between light antistatic aprons. Aprons guided and tensioned by pneumatic cylinders. Control from a control panel with a touch screen panel.",
                    parameters: [
                        {power: ["36 kW"]},
                        {speed: ["70 m/min"]}
                    ]
                }
            ]
        },
        "Webdrafters": {
            models: [
                {
                    name: "WD3 - WD6",
                    src: "/eachmachine/9-1-rozci196133garki-runa-wd3-wd5.webp",
                    description: "The webdrafter, installed after the crosslapper and most often in front of the needling machine or the oven, improves the strength parameters of the nonwoven fabric. By using a minimum of three and a maximum of six stretching sections in the production line, we will significantly increase its efficiency.",
                    parameters: [
                        {width: ["2600 mm", "3600 mm"]},
                        {power: ["4 kW", "8 kW"]}
                    ]
                }
            ]
        },
        "Machines for fibre recovery": {
            models: [
                {
                    name: 'Rag tearing machines',
                    src: "/eachmachine/10-1-szarparki-ac40-ac50.webp",
                    description: 'The AC50 rag tearers are used for processing natural and synthetic waste textile products.Their modular design allows building sets of one (AC41, AC51) to six cylinders (AC46 to AC56) according to customer&#39;s needs. The raw material feeding can be done manually or with the use of a feeder . The product is delivered onto a conveyor belt or through an exhaust fan.',
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["min 36 kW", "max 180 kW"]}
                    ]
                },
                {
                    name: 'Carding Openers POZ, OZ',
                    src: "/eachmachine/10.2-otwieracz-oz-poz.webp",
                    description: "Carding openers POZ characterized by heigh quality and effectiveness of opening is equipped by 2 tearing drums with working rollers with metallic card clothing. Feeding can be done manually by hand or automatically by hoper feeder or volumetric feeder. On feeding rollers there is located short circuit device detecting metal pollution. POZ is equipped by sacking system and filtration station consist by filtration bags. Machin is controlled by touchscreen from control cabinet or control panel. Construction of the machine provides large adjustment range of the speed of each section what causes that the POZ is very flexible and can work with different materials.",
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["24 kW", "38 kW"]}
                    ]
                },
                {
                    name: "Tearing machines AC5, AB19",
                    src: "/eachmachine/10-3-szarparki-ac5-ab19.webp",
                    description: "Tearing machines AC5 and AB19 are designed to recover raw material from waste generated during the production process, such as blanks, cut edges or scrap products. The AC5 machine has small dimensions, therefore it will find its place in every textile plant. However, if we need a larger machine for raw material recovery, we should think about the AB19 which has larger dimensions and will provide greater efficiency.",
                    parameters: [
                        {width: ["AC5 - 500 mm", "AB19- 1000 mm", "AB19- 1500 mm"]},
                        {power: ["14 kW", "28 kW", "36 kW"]}
                    ]
                },
                {
                    name: "Krajek tug AC4B",
                    src: "/eachmachine/10-4-szarparka-krajek-ac4b.webp",
                    description: "The AC4B tearing machine is used for recycling cut-off selvages of non-wovens coming from production processes. Infinitely variable feed-speed control allows the machine to be used in various continuous non- woven production lines.The machine is equipped with a pneumatic delivery system for the torn material.",
                    parameters: [
                        {width: ["250 mm", "500 mm"]},
                        {power: ["7 kW", "12 kW"]}
                    ]
                }
            ]
        },
        "Rotary condensers, cyclones, filters": {
            models: [
                {
                    name: "Rotary condensers",
                    src: "/eachmachine/11-1-kondensery-odpylajace.webp",
                    description: "Dedusting condenser designed for raw material dosing in pneumatic transport installations. The operation of the device is based on the separation of air and dust from the raw material at the end of the installation transporting the textile raw material. The condenser is installed complete with a bag filter station. In the special version, it has an additional mesh on the drum to prevent fine fibers from entering the filters, while protecting the drum against abrasion in the case of glass, ceramic, basalt or carbon fibers. KO - standard rotary condenser, KOS- rotating condenser with an additional mesh on the drum.",
                    parameters: [
                        {width: ["1000 mm", "1200 mm", "1500 mm"]},
                        {power: ["1,5 kW", "2,2 kW", "2,8 kW"]},
                        {drumDiameter: ["548 mm"]}
                    ]
                },
                {
                    name: 'Cyclones',
                    src: "/eachmachine/11-2-cyklony.webp",
                    description: "The dust extracting cyclone, applied in pneumatic conveyance system, is designed for supplying fibre to contnuous-operation blending chamber, to fibre-storage boxes, bins, or feeders of various design. It can be also used feeding pickers or carding willow. CY1 - Dedusting cyclone, CY2 - Narrow, directional feeding cyclone, CY3 - Normal feed cyclone.",
                },
                {
                    name: 'Filters',
                    src: "/eachmachine/11-3-filtry500x300.webp",
                    description: 'The offered filtering stations are equipped with stationary bag filters in the amount of two to five bags in one station. Filters usually have a diameter of 500 mm and are divided into two parts: the upper one and a lower one, which allows emptying the contents of the filter. FW2 - 2-bag station, FW3 - 3-bag station, FW5 - 5-bag station. Fan power depends on the type of filter.',
                }
            ]
        },
        "Installations pneumatic transportation": {
            models: [
                {
                    name: 'Installations pneumatic transportation',
                    src: "/eachmachine/12.1-instalacje-transp-pneum.webp",
                    description: 'The offered pneumatic transport installations are normally made of galvanized steel with a special smooth inner surface finish. Installation components: PS - steel pipes with diameters of 150 mm, 200 mm, 250mm, 300mm | PE - flexible pipes (spiro) with diameters of 150 mm, 200 mm, 250mm, 300mm | RO - rotary distributors WPT - centrifugal fans.',
                }
            ]
        }
    },

    "de": {
        "Ballenöffner": {
            models: [
                {
                    name: "OB1, OB2",
                    src: "/eachmachine/1.1-Otwieracze-bel-OB1_-OB2.webp",
                    description: "Ballenöffner OB1, OB2 werden zum Voröffnen und Auflockern von Fasern verwendet. Die Ballenbrecher können verschiede Maschinen speisen wie z .B: Krempelwolf, Öffnungspicker etc. Die Faser können mechanisch oder pneumatisch transportiert werden.",
                    parameters : [
                        {width: ["1400 mm", "1600 mm"]},
                        {power: ["4,2 kW", "4,6 kW"]}
                    ]
                },
                {
                    name: "OB1-E, OB2-E",
                    src: "/eachmachine/1.2-Zasilarki-wagowe-z-wagą-elektroniczną-OB1-E_-OB2-E.webp",
                    description: "Wiegemaschinen mit elektronischer Waage OB1-E - bestimmt für die Vorauflockerung der Fasern in den Öffnungsmischlinien und die Dosierung der voreingestellten Portionen des Rohmaterials auf das Sammelband.",
                    parameters : [
                        {width: ["1400 mm", "1600 mm"]},
                        {power: ["4,2 kW", "4,6 kW"]}
                    ]
                }
            ]
        },
        "Sammelförderers" : {
            models: [
                {
                    name: "TP, TPR",
                    src: "/eachmachine/2-1-transportery-zbiorcze-tp-tpr.webp",
                    description: "Sammelförderer TP kann mit vielen Wiegekastenspeiser gleichzeitig 2-5 Stck. gespeisert werden. Die Faser werden dann weiter zu den anderen Maschinen der Mischanlage abtransportiert. Sammelförderer TPR ist zusätzliche mit einer Öffnungswalze mit dem Ventilator ausgestattet.",
                    parameters: [
                        {width: ["800 mm", "1000 mm"]},
                        {power: ["max 1,1 kW"]}
                    ]
                }
            ]
        },
        "Lockerungsmaschinen": {
            models: [
                {
                    name: "AB6N, AB6A",
                    src: "/eachmachine/3-1-wilk-zgrzeblacy-ab6n.webp",
                    description: "Der Krempelwolf AB6 dient vornehmlich zur Vorbereitung der Fasern auf das Krempeln. Er kann zu einer Öffnungs-Mischanlage gehören oder auch als eine selbständige Voröffnungsmaschine genutzt werden.",
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["21 kW", "30 kW"]}
                    ]
                },
                {
                    name: "AB19",
                    src: "/eachmachine/2-wilk-rozluzniajacy-pickerab19a.webp",
                    description: "Der Picker AB19 wird zur Auflösung der Fasern vor dem Krempeln verwendet. In den Mischanlagen wird er gewöhnlich mit dem OB1-Speiser und ausgabeseitig mit einem WB-Ventilator eingesetzt.",
                    parameters: [
                        {width: ["1000 mm ", "1500 mm"]},
                        {power: ["14 kW", "20 kW"]},
                    ]
                }
            ]
        },
        "Mischkammern": {
            models: [
                {
                    name: "KMC",
                    src: "/eachmachine/4-1-komory-mieszalnicze-kmc.webp",
                    description: "KMC ist eine Dauerbetriebsmischkammer, die zur Bevorratung und Mischung des pneumatisch zugeführten Fasermaterials eingesetzt wird.",
                    parameters: [
                        {width: ["1500 mm", "3000 mm"]},
                        {power: ["4,7 kW"]},
                    ]
                },
                {
                    name: "MW6",
                    src: "/eachmachine/4-2-komora-sekcyjna-mw6.webp",
                    description: "Multikammer Mischkammer MW6 dient zu präzisen Fasere Vorbereitung und Mischung von verschiedenen Faserkomponenten mit der Lange bis 80 mm. Bei der Vorbereitung der Mischung müssen die Portionen entsprechend auf den Wiegekastenspeiser abgewogen werden.",
                    parameters: [
                        {width: ["1200 mm"]},
                        {power: ["8 kW"]}
                    ]
                }
            ]
        },
        "Vlieskrempelsätze": {
            models: [
                {
                    name: "CU611, CU612, CU641",
                    src: "/eachmachine/5.1- zgrzeblarki-cu611-cu612.webp",
                    description: "Die Einzelabnehmer-Krempelsätze CU 611, CU612, CU641 Die Einzelabnehmer-Krempel sind für die Produktion von niedriger Grammaturen im Bereich 40-200 g/m2 vorgesehen.",
                    parameters: [
                        {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]},
                    ]
                },
                {
                    name: "CU661, CU669",
                    src: "/eachmachine/5.2-zgrzeblarki-dwuzbiera-cu661.webp",
                    description: "Doppelabnehmer-Krempelsätze CU 661, CU691 Die Doppelabnehmer-Krempel sind für die Produktion von höheren Grammaturen im Bereich 100-2000 g/m2 vorgesehen.",
                    parameters: [
                        {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]},
                    ]
                }
            ]
        },
        "Streichgarnkrempelsätze": {
            models: [
                {
                name: "CR",
                src: "/eachmachine/6.1-sys.zgrzebny.webp",
                description: "Die Krempelsätze CR 612 – CR 614 sind für die Herstellung von Vorgarn aus Wolle/Regenerationsfaser-Mischungen verwendbar.",
                parameters: [
                    {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]}
                    ]
                },
                {
                name: "CSW, CSP",
                src: "/eachmachine/6.2-sys.czesankowy.webp",
                description: "Die Krempeln werden zur Verarbeitung von Wolle und Wolle/Synthesefaser-Mischungen eingesetzt.",
                parameters: [
                    {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]}
                    ]
                }
            ]
        },
        "Laborkrempel und Sonderzweckmaschinen": {
            models: [
                {
                    name: "CU121",
                    src: "/eachmachine/7-1-linia-laboratoryjna-cu121.webp",
                    description: "Die Laborkrempelanlage CU121 wird zur Optimierung der einzusetzenden Fasertypen, Farbmischungsversuchen und zur  Auswahl des besten Verfahrens für bestimmte Fasertypen und Mischungen eingesetzt. Die Anlage kann, kombiniert mit einem Leger, einer Nadelmaschine, einem Kalander oder auch anderen Maschinen, für die Entwicklung neuer Technologien in Forschungszentren, Instituten und anderen derartigen Institutionen nützlich sein. Die Anlage ist mit einem modernen Schachtspeiser 1E, einer Krempel 3KA und Stauchwalzen 5AZ ausgestattet.",
                    parameters: [
                        {width: ["500 mm", "1000 mm"]},
                        {power: ["4 kW", "9 kW"]},
                        {drumDiameter: ["500 mm"]},
                        {collectDiameter: ["500 mm"]}
                    ]
                },
                {
                    name: "3AGK",
                    src: "/eachmachine/7.2-zgrzeblarkadofilcu.webp",
                    description: "Die Krempel 3AGK ist eine Sondermaschine, die für Bekleidungsindustrie entwickelt wurde. Die Maschine wird zur Fertigung von Vlies eingesetzt, welches die Grundlage für die Herstellung von Hutfilz bildet. Die große Haupttrommel samt sieben Paar Arbeiter/Wenderwalzen gewährleisten eine genaue Faserauflösung und -mischung.",
                    parameters: [
                        {width: ["500 mm"]},
                        {power: ["9 kW"]},
                        {drumDiameter: ["1500 mm"]},
                        {collectDiameter: ["680 mm"]}
                    ]
                }
            ]
        },
        "Vliesleger": {
            models: [
                {
                    name: "5W50",
                    src: "/eachmachine/8-1-uk197130adacz-serii-5w50.webp",
                    description: "Die Kreuzleger der Typenreihe 5W50 können mit Vliesstoffkrempelsätzen in einer Arbeitsbreite von 1000, 1800, 2000, 2200 und 2500 mm zusammenarbeiten. Legebreite je nach Typ: von 600 bis 4200 mm gesteuert vom Steuerpult",
                    parameters: [
                        {power: ["19 kW"]},
                        {speed: ["50 m/min"]}
                    ]
                },
                {
                    name: "5WN700",
                    src: "/eachmachine/8-2-uk197130adacz-serii-5wn700.webp",
                    description: "Die Kreuzleger der Typenreihe 5WN700 können mit Vliesstoffkrempelsätzen in einer Arbeitsbreite von 2200 und 3000 mm zusammenarbeiten. Legebreite je nach Typ: von 2800 bis 6300 mm gesteuert vom Steuerpult. Florgewicht - von 60 bis 600 g/m 2 oder 500 bis 1500 g/m 2 Der Flor wird zwischen leichten antistatischen Bändern geführt.",
                    parameters: [
                        {power: ["36 kW"]},
                        {speed: ["70 m/min"]}
                    ]
                }
            ]
        },
        "Vliesstrecke": {
            models: [
                {
                    name: "WD3 - WD6",
                    src: "/eachmachine/9-1-rozci196133garki-runa-wd3-wd5.webp",
                    description: "Vliesstecke WD wird nach dem Vliesleger und vor der Nadelmaschine oder Ofen eingesetzt. Die Strecke verbessert die Vlieseigenschaften. Die Einsetzung von drei bis sechs Strecksektionen vergrößert die Ausgangskapazität der Anlage.",
                    parameters: [
                        {width: ["2600 mm", "3600 mm"]},
                        {power: ["4 kW", "8 kW"]}
                    ]
                }
            ]
        },
        "Recyclingmaschinen": {
            models: [
                {
                    name: 'Lumpenreißer AC50',
                    src: "/eachmachine/10-1-szarparki-ac40-ac50.webp",
                    description: 'Die Lumpenreißer AC50 werden zur Verarbeitung von natur- und Kunststofftextilabfällen verwendet. Ihre modulare Konstruktion erlaubt uns Ein- bis Sechstrommelsätze (AC51 bis AC56) zu bauen, um verschiedene Kundenbedürfnisse zufriedenzustellen. Die Maschine wird manuell oder Automatisch mit dem Speiser gespeist. Die Ausgabe erfolgt mittels eines Bandförderers oder eines Saugventilators.',
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["min 36 kW", "max 180 kW"]}
                    ]
                },
                {
                    name: 'Krempelöffner OZ, POZ',
                    src: "/eachmachine/10.2-otwieracz-oz-poz.webp",
                    description: "Krempelöffner ist eine moderne und sehr effiziente Maschine. Wurde je nach Version mit einer oder zwei Öffnungssektionen mit Arbeiterwalzen ausgestattet. Der Krempelöffner bring sehr hohe Öffnungsqualität von verarbeiteten Faser sodass die wieder bei Produktionsprozess verwenden werden können.",
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["24 kW", "38 kW"]}
                    ]
                },
                {
                    name: "Reißer AC5, AB19",
                    src: "/eachmachine/10-3-szarparki-ac5-ab19.webp",
                    description: "Öffner AC5 und AB19 werden zur Rückgewinnung von Fasern aus den Vlieskanten verwendet, die bei Vliesstoffherstellungsprozessen anfallen. Die stufenlose Einführgeschwindigkeitsregelung erlaubt den Reißer in Verschiedenen kontinuierlich arbeitenden Vliesstoffanlagen zu verwenden.",
                    parameters: [
                        {width: ["AC5 - 500 mm", "AB19- 1000 mm", "AB19- 1500 mm"]},
                        {power: ["14 kW", "28 kW", "36 kW"]}
                    ]
                },
                {
                    name: "Vlieskantenreißer AC4B",
                    src: "/eachmachine/10-4-szarparka-krajek-ac4b.webp",
                    description: "Der Vlieskantenreißer AC4B wird zur Rückgewinnung von Fasern aus den Vlieskanten verwendet, die bei Vliesstoffherstellungsprozessen anfallen. Die stufenlose Einführgeschwindigkeitsregelung erlaubt den Reißer in Verschiedenen kontinuierlich arbeitenden Vliesstoffanlagen zu verwenden.Die Maschine ist mit einem pneumatischen Ausgabesystem ausgerüstet.",
                    parameters: [
                        {width: ["250 mm", "500 mm"]},
                        {power: ["7 kW", "12 kW"]}
                    ]
                }
            ]
        },
        "Abfallseperator, Zyklons, Filters": {
            models: [
                {
                    name: "Abfallseperator",
                    src: "/eachmachine/11-1-kondensery-odpylajace.webp",
                    description: "Abfallseperator ist für die Dosierung von Faser in den Pneumatischen Anlagen trennt die im Transportluftstrom mitgeführten Feststoffe wie Textilfaserabfälle und Staub. Abfallsperetartor wird mir Sackfilterstation installiert. In einer speziellen Ausführung wird die Absaugungstrommel mit einem austauschbarem Siebnetz ausgestattet. Diese Lösung schützt die Trommelfläche von Abrieb bei der Anwendung von Glass und Keramikfaser usw. Der Abfallabscheider bietet ein kompaktes Design und verschiedene Installationsoptionen, sodass er flexibel in Ihre bestehenden oder neuen Prozesse integriert werden kann.",
                    parameters: [
                        {width: ["1000 mm", "1200 mm", "1500 mm"]},
                        {power: ["1,5 kW", "2,2 kW", "2,8 kW"]},
                        {drumDiameter: ["548 mm"]}
                    ]
                },
                {
                    name: 'Zyklons',
                    src: "/eachmachine/11-2-cyklony.webp",
                    description: "Zyklons werden in dem pneumatischen Transport von Faser angewendet. Werden als Speisezyklons auf den Mischkammern, Schachten, Kastenspeiser installiert.",
                },
                {
                    name: 'Sackfilter',
                    src: "/eachmachine/11-3-filtry500x300.webp",
                    description: 'Sackfilter Die Filtrationsanlagen sind mit 2 bis 5 Sackfilter ausgestattet. Durchmesser von den Filtern ist 500 mm und die sind in zwei Teilen oberen und unteren geteilt.',
                }
            ]
        },
        "Installationen pneumatischer transport": {
            models: [
                {
                    name: 'Installationen pneumatischer transport',
                    src: "/eachmachine/12.1-instalacje-transp-pneum.webp",
                    description: 'Die Rohrleitungen werden in Standardausführung aus Zinkleche produziert.',
                }
            ]
        }
    },

    "ru": {
        "Волюметрические питатели": {
            models: [
                {
                    name: "OB1, OB2",
                    src: "/eachmachine/1.1-Otwieracze-bel-OB1_-OB2.webp",
                    description: "Волюметрические питатели OB1, OB2 предназначены для предварительного разрыхления волокон в разрыхляюще-смесительных линиях, а также для питния машин типа: разрыхляющая машина или щипальная машина. Сырье к питателю может подаваться механически транспортером или пневматически при помощи циклона.",
                    parameters : [
                        {width: ["1400 mm", "1600 mm"]},
                        {power: ["4,2 kW", "4,6 kW"]}
                    ]
                },
                {
                    name: "OB1-E, OB2-E",
                    src: "/eachmachine/1.2-Zasilarki-wagowe-z-wagą-elektroniczną-OB1-E_-OB2-E.webp",
                    description: "Самовесы с электронными весами OB1-E - предназначены для предварительного разрыхления волокон в разрыхляюще-смесительных линиях, а также для дозировки заданных порций сырья на свободный транспортер.",
                    parameters : [
                        {width: ["1400 mm", "1600 mm"]},
                        {power: ["4,2 kW", "4,6 kW"]}
                    ]
                }
            ]
        },
        "Сводный транспортер" : {
            models: [
                {
                    name: "TP, TPR",
                    src: "/eachmachine/2-1-transportery-zbiorcze-tp-tpr.webp",
                    description: "Сводный транспортер TP предназначен для приема сырья с нескольких самовесов (чаще всего от 2 до 5 штук) и его перемещения к очередным машинам подготовительной линии. Транспортер в исполнении TPR дополнительно оснащен разрыхляющим валиком перед вентилятором, который передает сырье к дальнейшей переработке.",
                    parameters: [
                        {width: ["800 mm", "1000 mm"]},
                        {power: ["max 1,1 kW"]}
                    ]
                }
            ]
        },
        "Щипальная машина": {
            models: [
                {
                    name: "AB6N, AB6A",
                    src: "/eachmachine/3-1-wilk-zgrzeblacy-ab6n.webp",
                    description: "Щипальная машина AB6 в основном предназначена для подготовки текстильного сырья к процессу кардочесания. Может быть составляющей частью разрыхляюще-смесительных линий, или применяться как самостоятельная машина предварительного разрыхления.",
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["21 kW", "30 kW"]}
                    ]
                },
                {
                    name: "AB19",
                    src: "/eachmachine/2-wilk-rozluzniajacy-pickerab19a.webp",
                    description: "Разрыхляющая машина AB19, обычно называемая Пикер, предназначена для разрыхления волокон перед процессом кардочесания. В разрыхляюще - смесительных линиях чаще всего работает совместно с питателем OB1 и вентилятором WB со стороны выпуска.",
                    parameters: [
                        {width: ["1000 mm ", "1500 mm"]},
                        {power: ["14 kW", "20 kW"]}
                    ]
                }
            ]
        },
        "Cmecиteльныe kamepы": {
            models: [
                {
                    name: "KMC",
                    src: "/eachmachine/4-1-komory-mieszalnicze-kmc.webp",
                    description: "Камера KMC предназначена для непрерывной работы накопления, а также смешивания волокон, поставляемых пневматическим транспортом. Камера не оснащена собственной системой опорожнения, поэтому работает всегда совместно с питателем типа AW1.",
                    parameters: [
                        {width: ["1500 mm", "3000 mm"]},
                        {power: ["4,7 kW"]}
                    ]
                },
                {
                    name: "MW6",
                    src: "/eachmachine/4-2-komora-sekcyjna-mw6.webp",
                    description: "Многокамерный смеситель MW6 предназначен для используется для тщательного приготовления смеси, состоящей из нескольких сырьевых компонентов длиной не более 80 мм. При создании смеси необходимо заранее взвесить и перемешать сырьевые компоненты.",
                    parameters: [
                        {width: ["1200 mm"]},
                        {power: ["8 kW"]}
                    ]
                }
            ]
        },
        "Чесальныe aппapaты для нетканых материалов": {
            models: [
                {
                    name: "CU611, CU612, CU641",
                    src: "/eachmachine/5.1- zgrzeblarki-cu611-cu612.webp",
                    description: "Чесальные аппараты для нетканых материалов серии CU предназначены для выроботки холста плотности (грамматуре) от 40 до 200 г/м 2.",
                    parameters: [
                        {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]},
                    ]
                },
                {
                    name: "CU661, CU669",
                    src: "/eachmachine/5.2-zgrzeblarki-dwuzbiera-cu661.webp",
                    description: "Чесальные аппараты для нетканых материалов предназначены для выроботки холста плотности (грамматуре) от 100 до 2000 г/м 2 .",
                    parameters: [
                        {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]},
                    ]
                }
            ]
        },
        "Чесальные аппараты для аппаратной системы прядения": {
            models: [
                {
                name: "CR",
                src: "/eachmachine/6.1-sys.zgrzebny.webp",
                description: "Чесальные аппараты предназначены для производства ровницы из натурального, искуственного,нового, вторичного волокон, а также смесок этих волокон.",
                parameters: [
                    {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]}
                    ]
                },
                {
                name: "CSW, CSP",
                src: "/eachmachine/6.2-sys.czesankowy.webp",
                description: "Чесальные машины предназначены для получения волокна для гребенного и полугребенного прядения.",
                parameters: [
                    {width: ["1800 mm","2000 mm","2200 mm","2500 mm","3000 mm"]}
                    ]
                }
            ]
        },
        "Лаболаторные чесальные машины и специального назначения": {
            models: [
                {
                    name: "CU121",
                    src: "/eachmachine/7-1-linia-laboratoryjna-cu121.webp",
                    description: "Лабораторная линия CU121 находит применение в целях манипуляций текстильным сырьем, меланжирования расцветок, а также подбора найлучших производственных параметров для различного сырья и его смесок. Линия в составе с холстообразователем, иглопробивной машиной, каландром или другими машинами может способствовать разработке новых технологий в научно- Линия оборудована современным бункерным питателем 1E, основным прочесом 3KA и уплотняющее устройство начеса 5AZ.",
                    parameters: [
                        {width: ["500 mm", "1000 mm"]},
                        {power: ["4 kW", "9 kW"]},
                        {drumDiameter: ["500 mm"]},
                        {collectDiameter: ["500 mm"]}
                    ]
                },
                {
                    name: "3AGK",
                    src: "/eachmachine/7.2-zgrzeblarkadofilcu.webp",
                    description: "Чесальная машина для шляпочного войлока 3AGK это специалистичная машина, разработана для потребностей швейной промышленности. Ее конструкция дает возможность производить войлочный полуфабрикат с предназначением на шляпы. Большой главный барабан и семь пар рабоче-съемных валиков гарантируют хорошее разрыхление и смешивание волокон.",
                    parameters: [
                        {width: ["500 mm"]},
                        {power: ["9 kW"]},
                        {drumDiameter: ["1500 mm"]},
                        {collectDiameter: ["680 mm"]}
                    ]
                }
            ]
        },
        "Горизонтальные холстообразователи": {
            models: [
                {
                    name: "5W50",
                    src: "/eachmachine/8-1-uk197130adacz-serii-5w50.webp",
                    description: "Рабочая ширина аппарата 1000, 1800, 2000, 2200 и 2500 мм. Ширина укладки холста од 600 до 4200 мм и зависит от типа хостообразователя. Хостообразователь имеет компьютерную систему управления ивизуализации, а также электронное профилирование настила холста.",
                    parameters: [
                        {power: ["19 kW"]},
                        {speed: ["50 m/min"]}
                    ]
                },
                {
                    name: "5WN700",
                    src: "/eachmachine/8-2-uk197130adacz-serii-5wn700.webp",
                    description: "Аппараты серии 5WN700 могут работать с линяими для нетканых материалов с рабочей шириной 2200 и 2500 мм. Ширина укладки холста од 2800 до 6300 мм и зависит от типа хостообразователя. Масса холста: от 60 доdo 600 г/м 2 или от 500 до 1500 г/м 2 .Хостообразователь имеет систему профилирование настила холста. Проведение сырья между легкими, антистатическими лентами. Натяжение и проведение лент с помощью пневматических приводов. Управление с сенсорной панели.",
                    parameters: [
                        {power: ["36 kW"]},
                        {speed: ["70 m/min"]}
                    ]
                }
            ]
        },
        "Растяжитель полотна": {
            models: [
                {
                    name: "WD3 - WD6",
                    src: "/eachmachine/9-1-rozci196133garki-runa-wd3-wd5.webp",
                    description: "Растяжитель WD, устанавливаемый после холстобразователя и чаще всего перед игольчатой машиной или печью, улучшает прочностные параметры нетканого полотна. Используя минимум три, максимум шесть секций растяжения в производственной линии, мы значительно повысим ее эффективность.",
                    parameters: [
                        {width: ["2600 mm", "3600 mm"]},
                        {power: ["4 kW", "8 kW"]}
                    ]
                }
            ]
        },
        "Машины для востановления вторичного волокна": {
            models: [
                {
                    name: 'ЩИПАЛЬНЫЕ МАШИНЫ AC50',
                    src: "/eachmachine/10-1-szarparki-ac40-ac50.webp",
                    description: 'Машины АС50 предназначены для регенерации угаров. Модульная конструкция позволяет создавать наборы от односекционных (AC41, AC51) до шестисекционных (AC46, AC56) в зависимости от технологических потребностей. Подача сырья может осуществляться вручную, с помощью блока питания или шахты. Прием сырья с помощью транспортера или всасывающего устройства с вентилятором.',
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["min 36 kW", "max 180 kW"]}
                    ]
                },
                {
                    name: 'Разрыхляющая машина с открывателем OZ, POZ',
                    src: "/eachmachine/10.2-otwieracz-oz-poz.webp",
                    description: "Современная, компактная, высокоэфективная разрыхляющая машина, оснащена, в зависимости от версии, одним или двумя разрабатывающими барабанами работающими вместе с перегонными валиками. Главной особенностью этих машин является очень высокий уровень открывания, особенно в тандемном варианте. Это позволяет повторно использовать восстановленные волокна в процессе производства.",
                    parameters: [
                        {width: ["1000 mm", "1500 mm"]},
                        {power: ["24 kW", "38 kW"]}
                    ]
                },
                {
                    name: "Щипальная машина AC5, Разрабатывающие устройство AB19",
                    src: "/eachmachine/10-3-szarparki-ac5-ab19.webp",
                    description: "Машины AC5 и AB19 предназначены для вторичной переработки сырья из отходов, образующихся в процессе производства, таких как заготовки, обрезанные края или производственные браки. AC5, благодаря своим небольшим габаритам, найдет применение в любом текстильном предприятии. Однако, если нам нужна более крупная машина Для увиличения производительности вторичной переработки сырья из отходов используется устройство AB19.",
                    parameters: [
                        {width: ["AC5 - 500 mm", "AB19- 1000 mm", "AB19- 1500 mm"]},
                        {power: ["14 kW", "28 kW", "36 kW"]}
                    ]
                },
                {
                    name: "Щипальная машина AC5, Разрабатывающие устройство AC4B",
                    src: "/eachmachine/10-4-szarparka-krajek-ac4b.webp",
                    description: "Щипальная машина кромок AC4B предназначепа для получения сырья из обрезанных краев нетканых материалов (кромок) во время процесса производства. Благодаря применению плавной регулировки скорости введения сырья, машина может работать в системе непрерывного процесса с поточными линиями для нетканых материалов разных технологий. Машина имеет индивидуальную систему пневматического приема разработанного лоскута.",
                    parameters: [
                        {width: ["250 mm", "500 mm"]},
                        {power: ["7 kW", "12 kW"]}
                    ]
                }
            ]
        },
        "Конденсоры вращательные, циклоны, фильтры": {
            models: [
                {
                    name: "Конденсоры вращательные, пылеуловительные.",
                    src: "/eachmachine/11-1-kondensery-odpylajace.webp",
                    description: "Конденсорный барабан предназначен для дозирования сырья в пневмотранспортных установках. Работа устройства основана на отделении воздуха и пыли от сырья в конце установки транспортирующей текстильное сырье. Конденсор устанавливается в комплекте со станцией рукавного фильтра. В специальной версии он имеет дополнительную сетку на барабане для предотвращения попадания тонких волокон в фильтры, одновременно защищая барабан от стирания в случае попадания стеклянных, керамических, базальтовых или углеродных волокон.",
                    parameters: [
                        {width: ["1000 mm", "1200 mm", "1500 mm"]},
                        {power: ["1,5 kW", "2,2 kW", "2,8 kW"]},
                        {drumDiameter: ["548 mm"]}
                    ]
                },
                {
                    name: 'ЦИКЛОНЫ',
                    src: "/eachmachine/11-2-cyklony.webp",
                    description: "Подающие циклоны, используются в пневматической транспортной системе. Они предназначены для подачи волокна в смесительную камеру непрерывной работы а также подачи волокна в разные виды накопительных камер. Имеются обычные, направленные и пылеуловительные циклоны.",
                },
                {
                    name: 'Фильтры',
                    src: "/eachmachine/11-3-filtry500x300.webp",
                    description: 'Фильтрующие станции оснащены стационарными рукавными фильтрами в количестве от двух до пяти штук в одной станции. Фильтры обычно имеют диаметр 500 мм и делятся на две части: верхнюю и нижнию позволяющию опорожнять содержимое фильтра.',
                }
            ]
        },
        "Пневмотранспортное оборудование": {
            models: [
                {
                    name: 'ПНЕВМОТРАНСПОРТНОЕ ОБОРУДОВАНИЕ',
                    src: "/eachmachine/12.1-instalacje-transp-pneum.webp",
                    description: 'В конструкции пневмотранспортного оборудования мы используем металлоуловители, датчики огня, разделители и сепараторы ведущих фирм.',
                }
            ]
        }
    },
}


export const TEXT: any = {
    "pl": {
        text: {
            model: "Model",
            parameters: "Parametry",
            width: "Szerokość robocza",
            power: "Moc",
            collectorDiameter: "Średnica zbieracza",
            drumDiameter: "Średnica bębna",
            speed: "Prędkość",
            about_us: "O nas",
            machines: "Maszyny",
            services: "Usługi",
            contact: "Kontakt",
            career: "Kariera",
            languages: "Wybierz język",
            youtube: "Befama YouTube",
            location: "Lokalizacja Befamy",

            slogan: "Serce technologii",
            adress: "Adres",
            law: "Sąd Rejonowy w Bielsku-Białej VIII Wydział Gospodarczy Krajowego Rejestru Sądowego",
            street: "ul.",
            phone: "tel.",
            selldep: "Dział Sprzedaży",
            constructdep: "Dział Konstrukcyjny",
            autodep: "Automatyka - Serwis",
            deldep:"Dział zaopatrzenia",

            contact_with: "KONTAKT Z NAMI"

        },
    },
    "gb": {
        text: {
            model: "Model",
            parameters: "Parameters",
            width: "Working width",
            power: "Power",
            collectorDiameter: "Doffer diameter",
            drumDiameter: "Cylinder diameter",
            speed: "Speed",
            about_us: "About us",
            machines: "Machnies",
            services: "Services",
            contact: "Contact",
            career: "Career",
            languages: "Choose language",
            youtube: "Befama - YouTube",
            location: "Befama location",

            slogan: "The hearth of technology",
            adress: "Adres",
            law: "District Court in Bielsko-Biała, VIII Commercial Division of the National Court Register",
            street: "st.",
            phone: "phone ",
            selldep: "Sales Department",
            constructdep: "Designing Department",
            autodep: "Automatics- Service",
            deldep:"Supply - Logistics",

            contact_with: "CONTACT US"
        }
    },
    "de": {
        text:{
            model: "Modell",
            parameters: "Charakteristik",
            width: "Arbeitsbreite",
            power: "Strombedarf",
            collectorDiameter: "Abnehmer",
            drumDiameter: "Haupttrommel",
            speed: "Einführgeschwindigkeit",
            about_us: "Über uns",
            machines: "Maschinen",
            services: "Dienstleistungen",
            contact: "Kontakt",
            career: "Werdegang",
            languages: "Sprache wählen",
            youtube: "Befama - YouTube",
            location: "Befama - Standort",

            slogan: "Das Herz der Technik",
            adress: "Die Adresse",
            law: "Amtsgericht in Bielsko-Biała, VIII. Wirtschaftsabteilung des Landesgerichtsregisters",
            street: "Str.",
            phone: "Tel.:",
            selldep: "Handelsabteilung",
            constructdep: "Konstruktionsabteilung",
            autodep: "Servicecenter",
            deldep:"Beschaffung - Logistik",

            contact_with: "KONTAKT US"
        }

    },
    "ru": {
        text:{
            model: "Модель",
            parameters: "Параметры",
            width: "Рабочая ширина",
            power: "Установленная мощность",
            collectorDiameter: "Диаметр съемного бараба",
            drumDiameter: "Диаметр главного барабана",
            speed: "Cкорость",
            about_us: "О нас",
            machines: "машины",
            services: "Услуги",
            contact: "контакт",
            career: "Карьера",
            languages: "Выберите язык",
            youtube: "Befama - ютуб",
            location: "Befama — Расположение",

            slogan: "Сердце технологий",
            adress: "Aдрес",
            law: "Районный суд в Бельско-Бяле, VIII Хозяйственный отдел Национального судебного реестра",
            street: "ул.",
            phone: "телефон ",
            selldep: "Отдел сбыта",
            constructdep: "Конструктор механик",
            autodep: "конструктор электрик",
            deldep:"Закупки - Логистика",

            contact_with: "КОНТАКТ США"
        }
    }
}
// type  = machine group
// tag = model