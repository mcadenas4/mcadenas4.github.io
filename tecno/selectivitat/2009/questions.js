const questions = [
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `La tensió de ruptura d’un llautó és 550 MPa. Quina força axial cal per a provocar eltrencament d’un eix massís de 6 mm de diàmetre?`,
        options: [
            { text: "10,37 kN", value: "a" },
            { text: "15,55 kN", value: "b" },
            { text: "19,80 kN", value: "c" },
            { text: "62,20 kN", value: "d" }
        ],
        correctAnswer: "b", //Contestada
        steps: `
            <div class="step-block">
                <span class="step-header">1) Calculem l'àrea de la secció transversal de l'eix (A):</span>
                \\[ A = \\pi \\cdot \\left(\\frac{d}{2}\\right)^2 = \\pi \\cdot \\left(\\frac{6  \\text{mm}}{2}\\right)^2 \\] 
                \\[ A = \\pi \\cdot 3^2  \\text{mm}^2 \\approx 28{,}27  \\text{mm}^2 \\]
            </div>
            <div class="step-block">
                <span class="step-header">2) Apliquem la fórmula de la tensió (σ = F/A) per trobar la força:</span>
                \\[ F = σ \\cdot A \\] 
                \\[ F = 550  \\frac{\\text{N}}{\\text{mm}^2} \\cdot 28{,}27  \\text{mm}^2 \\] 
                \\[ F \\approx 15548{,}5 \\text{N} \\] 
            </div>
            <div class="step-block">
                <span class="step-header">3) Convertim a kilonewtons (kN):</span>
                \\[ F = 15548{,}5  \\text{N} \\cdot \\frac{1  \\text{kN}}{1000  \\text{N}} \\approx 15{,}55  \\text{kN} \\]
            </div>
            <br><br>
            `
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `En una línia de producció hi ha tres estacions i les operacions que es duen a termesobre cada unitat produïda requereixen, respectivament, 15 s, 30 s i 20 s. En règim esta-cionari i amb la línia funcionant a màxim rendiment, cada quants segons surt una uni-tat de la línia?`,
        options: [
            { text: "20 s", value: "a" },
            { text: "30 s", value: "b" },
            { text: "15 s", value: "c" },
            { text: "65 s", value: "d" }
        ],
        correctAnswer: "b", //Contestada
        steps: `
            <div class="step-block">
                <span class="step-header">1) El ritme de sortida no pot ser més ràpid que l'operació més lenta</span>
                \\[ \\text{Temps de cicle} = \\max(15  \\text{s},  30  \\text{s},  20  \\text{s}) \\] 
                \\[ \\text{Temps de cicle} = 30  \\text{s} \\]
            </div>
            <br><br>
            `,
    },
    {
        type: "questions", 
        category: "energia",
        text: `En un estudi de mobilitat sobre l’assistència a un esdeveniment públic en autocar,un  dels  resultats  obtinguts  és  que  cada  passatger  ha  consumit  0,24  MJ  d’energia  perkilòmetre recorregut. Si de mitjana un autocar consumeix 27 L/(100 km) i el gasoil queempra té un poder calorífic de 35,56 MJ/L, quina ha estat l’ocupació mitjana que s’haconsiderat per a obtenir els resultats?`,
        options: [
            { text: "43", value: "a" },
            { text: "42", value: "b" },
            { text: "41", value: "c" },
            { text: "40", value: "d" }
        ],
        correctAnswer: "d", //Contestada
        steps: `
            <div class="step-block">
                <span class="step-header">1) Calculem l'energia que gasta l'autocar per cada quilòmetre:</span>
                \\[ E_{\\text{bus/km}} = 0{,}27  \\text{L/km} \\cdot 35{,}56  \\text{MJ/L} \\] \\[ E_{\\text{bus/km}} \\approx 9{,}6012  \\text{MJ/km} \\] 
            </div>
            <div class="step-block">
                <span class="step-header">2) Sabem que aquesta energia és la suma del consum dels passatgers (N és el nombre de passatgers):</span>
                \\[E_{\\text{bus/km}} = N \\cdot 0{,}24  \\text{MJ/(pax} \\cdot \\text{km)}\\]
            </div>
            <div class="step-block">
                <span class="step-header">3) Aïllem N:</span>
                \\[ N = \\frac{9{,}6012}{0{,}24} \\] 
                \\[ N = 40{,}005 \\approx 40 , \\text{passatgers} \\]
            </div>
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `Un panell solar està format per 36 cèl·lules fotovoltaiques rectangulars les mides deles quals són 198 mm ×90 mm. Quina és la superfície mínima del panell solar?`,
        options: [
            { text: "6,415 · 10<sup>–3</sup> m<sup>2<sup>", value: "a" },
            { text: "64,15 · 10<sup>–3</sup> m<sup>2<sup>", value: "b" },
            { text: "641,5 · 10<sup>–3</sup> m<sup>2<sup>", value: "c" },
            { text: "64,15 · 10<sup>–6</sup> m<sup>2<sup>", value: "d" }
        ],
        correctAnswer: "c", //Contestada
        steps: `
            <div class="step-block">
                <span class="step-header">1) Passem les mides a metres per obtenir el resultat en m<sup>2</sup>:</span>
                \\[ 198  \\text{mm} = 0{,}198  \\text{m}   \\quad 90  \\text{mm} = 0{,}090  \\text{m} \\] 
            </div>
            <div class="step-block">
                <span class="step-header">2) Àrea d'una cèl·lula:</span>
                \\[ A_{\\text{cèl}} = 0{,}198  \\text{m} \\cdot 0{,}090  \\text{m} = 0{,}01782  \\text{m}^2 \\] 
            </div>
            <div class="step-block">
                <span class="step-header">3) Àrea total:</span>
                \\[ A_{\\text{total}} = 36 \\cdot 0{,}01782  \\text{m}^2 = 0{,}64152  \\text{m}^2 \\] 
            </div>
            <div class="step-block">
                <span class="step-header">4) Expressem en notació científica coincidint amb les opcions (10<sup>-3</sup>):</span>
                \\[ 0{,}64152  \\text{m}^2 = 641{,}52 \\cdot 10^{-3}  \\text{m}^2 \\]
            </div>
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `El  permalloy  és  un  aliatge  de  composició  78,5 %  Ni  (níquel)  i  21,5 %  Fe  (ferro)emprat en la fabricació de nuclis de transformadors elèctrics. Quant níquel es necessitaper a aliar-lo amb 275 kg de ferro?`,
        options: [
            { text: "753,2 kg", value: "a" },
            { text: "1 004 kg", value: "b" },
            { text: "1 040 kg", value: "c" },
            { text: "1 400 kg", value: "d" }
        ],
        correctAnswer: "b", //Contestada 
        steps: `
            <div class="step-block">
                <span class="step-header">1) Establim una proporció:</span>
                \\[ \\frac{m_{\\text{Ni}}}{ \\text{% Ni}} = \\frac{m_{\\text{Fe}}}{ \\text{% Fe}} \\] 
                \\[ m_{\\text{Ni}} = m_{\\text{Fe}} \\cdot \\frac{ \\text{% Ni}}{ \\text{% Fe}} \\] 
                \\[ m_{\\text{Ni}} = 275  \\text{kg} \\cdot \\frac{78{,}5}{21{,}5} \\] 
                \\[ m_{\\text{Ni}} = 275 \\cdot 3{,}6511... \\approx 1004{,}06  \\text{kg} \\]
            </div>
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `Una  estratègia  de  lluita  contra  el  canvi  climàtic  planteja  reduir  l’emissió  de  gasosd’efecte d’hivernacle. A qui ha d’anar adreçada aquest tipus d’estratègia per a obtenir lamàxima eficàcia?`,
        options: [
            { text: "Només als sectors del transport i de la mobilitat perquè són els principals emis-sors d’aquests gasos.", value: "a" },
            { text: "Només a la indústria perquè utilitza energies fòssils que emeten una gran quan-titat d’aquests gasos.", value: "b" },
            { text: "Només al sector ramader perquè és el causant dels excessos de purins que pro-voquen emissions d’aquests gasos.", value: "c" },
            { text: "A tots els sectors de la població mundial perquè el canvi climàtic afecta tothomi tots en som, en més o menys grau, responsables.", value: "d" }
        ],
        correctAnswer: "d", //Contestada
        steps: `
            \\[
            \\text{El canvi climàtic és un problema global causat per l'acumulació de gasos de múltiples fonts (transport, indústria, agricultura, consum domèstic). Per tant, l'estratègia més eficaç ha d'implicar tothom.}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `El procés de fabricació d’un producte consta de dues operacions. La taxa de quali-tat de cadascuna d’elles, mesurada com a percentatge de peces obtingudes sense defec-tes, és 95 % i 98 %. Si només passen a l’operació següent les peces sense defectes, d’unlot de 2 000 unitats, quantes se’n rebutjaran per defectuoses?`,
        options: [
            { text: "186", value: "a" },
            { text: "138", value: "b" },
            { text: "100", value: "c" },
            { text: "40", value: "d" }
        ],
        correctAnswer: "b", //Contestada
        steps: `
            <div class="step-block">
                <span class="step-header">1) Operació 1:</span>
                \\[ \\text{Rebutjats}_1 = 2000 \\cdot 0{,}05 = 100  \\text{unitats} \\] 
                \\[ \\text{Acceptats}_1 = 2000 - 100 = 1900  \\text{unitats} \\]
            </div>
            <div class="step-block">
                <span class="step-header">2) Operació 2 (només hi entren els acceptats de l'1):</span> 
                \\[ \\text{Rebutjats}_2 = 1900 \\cdot 0{,}02 = 38  \\text{unitats} \\]
            </div>
            <div class="step-block">
                <span class="step-header">3) Total rebutjats:</span> 
                \\[ \\text{Total} = \\text{Rebutjats}_1 + \\text{Rebutjats}_2 = 100 + 38 = 138 \\]
            </div>
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Un  vehicle  circula  entre  dues  poblacions  properes  per  una  carretera  de  15  km  delongitud a una velocitat de 45 km/h. El cost directe del vehicle s’estima que és 0,20 € /kmi se sap que el cost econòmic de tot el trajecte és 6 € . Quin s’ha estimat que és el costeconòmic, en € /h, del temps emprat per a fer el trajecte?`,
        options: [
            { text: "3 € /h", value: "a" },
            { text: "6 € /h", value: "b" },
            { text: "9 € /h", value: "c" },
            { text: "18 € /h", value: "d" }
        ],
        correctAnswer: "c", //Contestada
        steps: `
            <div class="step-block">
                <span class="step-header">1) Calculem el cost directe del vehicle:</span>
                \\[ C_{\\text{vehicle}} = 15  \\text{km} \\cdot 0{,}20  \\text{€/km} = 3  \\text{€} \\] 
            </div>
            <div class="step-block">
                <span class="step-header">2) Deduïm el cost imputable al temps:</span>
                \\[ C_{\\text{temps}} = C_{\\text{total}} - C_{\\text{vehicle}} = 6  \\text{€} - 3  \\text{€} = 3  \\text{€} \\] 
            </div>
            <div class="step-block">
                <span class="step-header">3) Calculem el temps que ha trigat el viatge (t = d/v):</span>
                \\[ t = \\frac{15  \\text{km}}{45  \\text{km/h}} = \\frac{1}{3}  \\text{h} \\approx 0{,}333  \\text{h} \\]
            </div>
            <div class="step-block">
                <span class="step-header">4) Finalment, calculem el cost per hora:</span>
                \\[ \\text{Cost horari} = \\frac{C_{\\text{temps}}}{t} = \\frac{3  \\text{€}}{1/3  \\text{h}} = 9  \\text{€/h} \\]
            </div>
            <br><br>
            `,
    },
    {
        type: "questions", 
        category: "electrics",
        text: `Una resistència de 5 Ωestà feta amb fil de nicrom de 0,8 mm de diàmetre i de 2 mde llargada. Quina és la resistivitat d’aquest nicrom?`,
        options: [
            { text: "3,142 μΩ · m", value: "a" },
            { text: "1,257 μΩ · m", value: "b" },
            { text: "2,513 μΩ · m", value: "c" },
            { text: "5,027 μΩ · m", value: "d" }
        ],
        correctAnswer: "b", //Contestado
        steps: `
            <div class="step-block">
                <span class="step-header">1) Calculem l'àrea de la secció (A):</span>
                \\[ r = \\frac{d}{2} = 0{,}4 \\cdot 10^{-3}  \\text{m} \\] 
                \\[ A = \\pi \\cdot r^2 = \\pi \\cdot (0{,}4 \\cdot 10^{-3})^2 \\approx 5{,}027 \\cdot 10^{-7}  \\text{m}^2 \\]
            </div>
            <div class="step-block">
                <span class="step-header">2) Aïllem la resistivitat de la fórmula R = L/A:</span>
                \\[ \\rho = \\frac{R \\cdot A}{L} \\]
                \\[ \\rho = \\frac{5  \\Omega \\cdot 5{,}027 \\cdot 10^{-7}  \\text{m}^2}{2  \\text{m}} \\]
                \\[ \\rho \\approx 12{,}566 \\cdot 10^{-7}  \\Omega \\cdot \\text{m} \\]
            </div>
            <div class="step-block">
                <span class="step-header">3) Convertim a µΩ · m:</span>
                \\[ \\rho = 1{,}257 \\cdot 10^{-6}  \\Omega \\cdot \\text{m} = 1{,}257  \\mu \\Omega \\cdot \\text{m} \\]
            </div>
            <br><br>

            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Un tramvia té una capacitat nominal de transport de 218 passatgers. La freqüènciade pas entre dues estacions concretes és de 5 minuts durant 15 hores al dia. Quin és elmàxim nombre de passatgers diaris que pot transportar el tramvia entre aquestes duesestacions i durant aquestes 15 hores?`,
        options: [
            { text: "2616", value: "a" },
            { text: "13 080", value: "b" },
            { text: "16 350", value: "c" },
            { text: "39 240", value: "d" }
        ],
        correctAnswer: "d", //Contestado
        steps: `
            <div class="step-block">
                <span class="step-header">1) Viatges per hora:</span>
                \\[ \\text{Viatges/h} = \\frac{60  \\text{min}}{5  \\text{min}} = 12  \\text{viatges/h} \\] 
            </div>
            <div class="step-block">
                <span class="step-header">2) Total de viatges al dia:</span>
                \\[ \\text{Viatges totals} = 12  \\text{viatges/h} \\cdot 15  \\text{h} = 180  \\text{viatges} \\] 
            </div>
            <div class="step-block">
                <span class="step-header">3) Màxim nombre de passatgers:</span>
                \\[ \\text{Pax totals} = 180 \\cdot 218 = 39240  \\text{passatgers} \\] 
            </div>
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Un  vehicle  circula  entre  dues  poblacions  properes  per  una  carretera  de  7,5 km  delongitud a una velocitat de 30 km/h. El cost econòmic del temps emprat per a fer aquestviatge s’estima que és 8€/h i el cost directe del vehicle, 0,20 € /km. Quin és el cost eco-nòmic del trajecte?`,
        options: [
            { text: "1,5€", value: "a" },
            { text: "2€", value: "b" },
            { text: "3€", value: "c" },
            { text: "3,5€", value: "d" }
        ],
        correctAnswer: "d", //Contestada
        steps: `
            <div class="step-block">
                \\[ \\text{Temps} = \\frac{\\text{distància}}{\\text{velocitat}} = \\frac{7{,}5  \\text{km}}{30  \\text{km/h}} = 0{,}25  \\text{h} \\] 
                \\[ \\text{Cost del temps} = 0{,}25  \\text{h} \\cdot 8  \\text{€/h} = 2{,}00  \\text{€} \\]
                \\[ \\text{Cost del vehicle} = 7{,}5  \\text{km} \\cdot 0{,}20  \\text{€/km} = 1{,}50  \\text{€} \\]
                \\[ \\text{Cost total} = 2{,}00  \\text{€} + 1{,}50  \\text{€} = 3{,}50 \\]
            </div>
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `Es  disposa  d’un  voltímetre  de  quatre  dígits  per  a  fer-hi  la  lectura  en  V.  El  full  decaracterístiques  del  voltímetre  indica  que,  per  a  un  fons  d’escala  de  2  V,  la  precisió  és± 1 mV ± 1 % de la lectura. L’error absolut màxim en una lectura d’1,2 V és`,
        options: [
            { text: "± 12 mV", value: "a" },
            { text: "± 13 mV", value: "b" },
            { text: "± 24 mV", value: "c" },
            { text: "± 26 mV", value: "d" }
        ],
        correctAnswer: "b", //Contestado
        steps: `
            <div class="step-block">
            \\[ \\text{Error fix} = 1  \\text{mV} \\]
            \\[ \\text{Error percentual} = 1{,}2  \\text{V} \\cdot 1  % = 1{,}2  \\text{V} \\cdot 0{,}01 = 0{,}012  \\text{V} \\]
            \\[ 0{,}012  \\text{V} = 12  \\text{mV} \\]
            \\[ \\text{Error total} = \\pm (1  \\text{mV} + 12  \\text{mV}) = \\pm 13  \\text{mV} \\]
            </div>
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Un telefèric té una capacitat nominal de transport de 25 persones. L’interval entresortides consecutives és de 10 minuts i el temps del trajecte és de 5 minuts. Quin és elmàxim nombre de passatgers per hora que pot transportar el telefèric?`,
        options: [
            { text: "100", value: "a" },
            { text: "150", value: "b" },
            { text: "200", value: "c" },
            { text: "250", value: "d" }
        ],
        correctAnswer: "b", //Contestado
        steps: `
            <div class="step-block">
            \\[ \\text{Sortides per hora} = \\frac{60  \\text{min}}{10  \\text{min/sortida}} = 6  \\text{sortides/h} \\]
            \\[ \\text{Passatgers per hora} = 6  \\text{sortides/h} \\cdot 25  \\text{passatgers/sortida} = 150  \\text{passatgers/h} \\]
            </div>
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `Segons càlculs de la Unió Europea, un avió emet una quantitat de 132 g de CO2percada kilòmetre de trajecte i cada passatger que transporta. En un recorregut en avió de9 000  km  hi  viatgen  350  passatgers.  Quina  és  la  quantitat  de  CO2emesa  a  l’atmosferadurant aquest vol?`,
        options: [
            { text: "297,0 · 10<sup>3</sup>kg", value: "a" },
            { text: "339,4 · 10<sup>3</sup>kg", value: "b" },
            { text: "387,5 · 10<sup>3</sup>kg", value: "c" },
            { text: "415,8 · 10<sup>3</sup>kg", value: "d" }
        ],
        correctAnswer: "d", //Contestada
        steps: `
            <div class="step-block">
            \\[ \\text{Emissions totals} = 132  \\frac{\\text{g}}{\\text{km} \\cdot \\text{pax}} \\cdot 9000  \\text{km} \\cdot 350  \\text{pax} \\]
            \\[ \\text{Emissions totals} = 415.800.000  \\text{g} \\]
            \\[ 415.800.000  \\text{g} \\cdot \\frac{1  \\text{kg}}{1000  \\text{g}} = 415.800  \\text{kg} = 415{,}8 \\cdot 10^3  \\text{kg} \\]
            </div>
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Una empresa de fabricació de bigues de fusta en comercialitza un model de densi-tat 510 kg/m3en conjunts de 25 bigues, que mesuren 240 mm ×5 000 mm ×70 mm cadauna. Quant pesen les 25 bigues? (g= 10 m/s2)`,
        options: [
            { text: "1,071 kN", value: "a" },
            { text: "10,71 kN", value: "b" },
            { text: "107,1 kN", value: "c" },
            { text: "1071 kN", value: "d" }
        ],
        correctAnswer: "b", //Contestada
        steps: `
            <div class="step-block">
            \\[ \\text{Volum d'una biga} = 0{,}24  \\text{m} \\cdot 5{,}00  \\text{m} \\cdot 0{,}07  \\text{m} = 0{,}084  \\text{m}^3 \\]
            \\[ \\text{Massa total} = 25  \\text{bigues} \\cdot 0{,}084  \\frac{\\text{m}^3}{\\text{biga}} \\cdot 510  \\frac{\\text{kg}}{\\text{m}^3} = 1071  \\text{kg} \\]
            \\[ \\text{Pes (Força)} = m \\cdot g = 1071  \\text{kg} \\cdot 10  \\text{m/s}^2 = 10.710  \\text{N} \\]
            \\[ 10.710  \\text{N} = 10{,}71  \\text{kN} \\]
            </div>
            <br><br>
            `,
    },  
{
        type: "exercicis",
        category: "control",
        text: `Per a mantenir la pressió d’un dipòsit d’aire comprimit entre 6 bar i 8 bar, es dis-posa d’un compressor que es posa en marxa per sota de 6 bar, si estava aturat, i s’aturaper sobre de 8 bar, si estava en marxa. Entre 6 bar i 8 bar no modifica el seu estat de fun-cionament. Utilitzant les variables d’estat:
               <img src="https://mcadenas4.github.io/tecno/selectivitat/2009/images/2009s1p2.png" alt="Imatge relacionada amb la pregunta" width="900">
              
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema i indiqueu quins casos no són possibles. [1 punt]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <div class="step-block">
                <span class="step-header">a) Taula de veritat i casos no possibles:</span>
                <img src="https://mcadenas4.github.io/tecno/selectivitat/2009/images/2009s1p2a.png" alt="Imatge relacionada amb la resposta" width="900">
                <img src="https://mcadenas4.github.io/tecno/selectivitat/2009/images/2009s1p2a2.png" alt="Imatge relacionada amb la resposta" width="900">
            </div>
            <div class="step-block">
                <span class="step-header">b) Funció lògica i simplificació:</span>
                <img src="https://mcadenas4.github.io/tecno/selectivitat/2009/images/2009s1p2b.png" alt="Imatge relacionada amb la resposta" width="900">
            </div>
            <div class="step-block">
                <span class="step-header">c) Esquema de contactes equivalent</span>
                <img src="https://mcadenas4.github.io/tecno/selectivitat/2009/images/2009s1p2c.png" alt="Imatge relacionada amb la resposta" width="900">
            </div>
            `,
    },
    {
        type: "exercicis",
        category: "energia",
        text: `
        <div class="step-block">
                <span class="step-header">a) Potència i par a la sortida del motor:</span>
                \\[ P_{mot} = P_{el} \\cdot \\eta_{mot} = 12{,}6  \\text{kW} \\cdot 0{,}87 = 10{,}962  \\text{kW} \\]
                \\[ n_{mot} = \\frac{n_s}{\tau} = \\frac{62{,}5}{1/24} = 62{,}5 \\cdot 24 = 1500  \\text{min}^{-1} \\]
                \\[ \omega_{mot} = 1500  \\frac{\\text{rev}}{\\text{min}} \\cdot \\frac{2\\pi}{60} = 157{,}08  \\text{rad/s} \\]
                \\[ \\Gamma_{mot} = \\frac{P_{mot}}{\\omega_{mot}} = \\frac{10962  \\text{W}}{157{,}08  \\text{rad/s}} = 69{,}79  \\text{N}\\cdot\\text{m} \\]
            </div>
            <div class="step-block">
                <span class="step-header">b) Potència i par a la sortida del reductor:</span>
                \\[ P_{red} = P_{mot} \cdot \eta_{red} = 10{,}962 , \text{kW} \cdot 0{,}95 = 10{,}414 , \text{kW} \]\[ P_{red} = P_{mot} \cdot \eta_{red} = 10{,}962 , \text{kW} \cdot 0{,}95 = 10{,}414 , \text{kW} \]
                \\[ \\omega_{s} = 62{,}5 \\cdot \\frac{2\\pi}{60} = 6{,}545  \\text{rad/s} \\]
                \\[ \\Gamma_{red} = \\frac{P_{red}}{\\omega_{s}} = \\frac{10414  \\text{W}}{6{,}545  \\text{rad/s}} = 1591{,}1  \\text{N}\\cdot\\text{m} \\]
            </div>
            <div class="step-block">
                <span class="step-header">c) Potència total dissipada:</span>
                \\[ P_{diss} = P_{el} - P_{red} = 12{,}6  \\text{kW} - 10{,}414  \\text{kW} = 2{,}186  \\text{kW} \\]
            </div>

        Es vol construir una estrella de sis puntes com la de la figura a partir d'un tauler de fusta.
L'estrella es pot construir a partir de triangles equilàters o de rombes com els que es mostren
en la figura. El cost de producció de l'estrella es calcula segons l'expressió 
\\[
c = c_{1} s + c_{2} p
\\]
en què s és la superfície de fusta utilitzada i p és el perímetre de les peces tallades per a construir
l'estrella. El primer coeficient de cost és \\(c_{1} = 15 \\; \\text{€/m}^2\\)
, i el segon és \\(c_{2} = 0,6 \\; \\text{€/m}\\)  si el perfil és
senzill (com, per exemple, un triangle o un rombe) o \\(c_{2} = 1,4 \\; \\text{€/m} \\) si el perfil és complex (com,
per exemple, una estrella). Determineu:
              
               <br><strong>a)</strong> El nombre de triangles equilàters \\(n_{T}\\) que calen per a construir l'estrella i el perímetre
                                        de les peces tallades \\(p_{T}\\) en aquest cas. [0,5 punts]
               <br><strong>b)</strong> El nombre de rombes \\(n_{R}\\) que calen per a construir l'estrella i el perímetre de les peces
                                        tallades \\(p_{R}\\) en aquest cas. [0,5 punts]
               <br><strong>c)</strong> El perímetre tallat \\(p_{E}\\) si l'estrella es construeix tallant-ne directament el perfil exterior. [0,5 punts]
               <br><strong>d)</strong> La superfície \\(s\\) de fusta necessària per a construir l’estrella, i el cost \\(c_{T}\\), \\(c_{R}\\) i \\(c_{E}\\)
 de cadascuna de les tres opcions anteriors. Quina és l'opció més econòmica?
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Nombre de triangles equilàters \\(n_{\text{T}}\\) i el perímetre \\(p_{\text{T}}\\):</strong>
            <br>
            \\[
            n_{\\text{T}} = 6 + 6 = 12 \\, \\text{triangles}
            \\]
            \\[
            p_{\\text{T}} = n_{\\text{T}} \\cdot 3b = 12 \\cdot 3 \\cdot 0{,}3 = 10{,}8 \\, \\text{m}
            \\]
            <br>
            <strong>b) Nombre de rombes \\(n_{\\text{R}}\\) i perímetre de les peces \\(p_{\\text{R}}\\):</strong>
            <br>
            \\[
            n_{\\text{R}} = \\frac{n_{\\text{T}}}{2} = \\frac{12}{2} = 6 \\, \\text{rombes}
            \\]
            \\[
            p_{\\text{R}} = n_{\\text{R}} \\cdot 4b = 6 \\cdot 4 \\cdot 0{,}3 = 7{,}2 \\, \\text{m}
            \\]
            <br>
            <strong>c) Perímetre tallat \\(p_{\\text{E}}\\) de l'estrella (perfil exterior):</strong>
            <br>
            \\[
            p_{\\text{E}} = 12 \\cdot b = 12 \\cdot 0{,}3 = 3{,}6 \\, \\text{m}
            \\]
            <br>
            <strong>d) Superfície \\(s\\), costos \\(c_{\text{T}}, c_{\text{R}}, c_{\text{E}}\\) i opció més econòmica:</strong>
            <br>
            - Superfície d'un triangle equilàter: \\( A_{\\text{T}} = \\frac{\\sqrt{3}}{4} b^2 = \\frac{\\sqrt{3}}{4} (0{,}3)^2 = 0{,}03897 \\, \\text{m}^2 \\).
            \\[
            s = 12 \\cdot A_{\\text{T}} = 12 \\cdot 0{,}03897 = 0{,}4677 \\, \\text{m}^2
            \\]
            \\[
            c_{\\text{T}} = (15 \\cdot 0{,}4677) + (0{,}6 \\cdot 10{,}8) = 7{,}016 + 6{,}48 = 13{,}50 \\, \\text{€}
            \\]
            - Cost amb rombes (\\( c_2 = 0{,}6 \\)): 
            \\[
            c_{\\text{R}} = (15 \\cdot 0{,}4677) + (0{,}6 \\cdot 7{,}2) = 7{,}016 + 4{,}32 = 11{,}34 \\, \\text{€}
            \\]
            - Cost estrella sencera (\\( c_2 = 1{,}4 \\)): 
            \\[
            c_{\\text{E}} = (15 \\cdot 0{,}4677) + (1{,}4 \\cdot 3{,}6) = 7{,}016 + 5{,}04 = 12{,}06 \\, \\text{€}
            \\]
            - <strong>Conclusió:</strong> L'opció més econòmica és la construcció a partir de <strong>6 rombes</strong> amb un cost d'<strong>11,34 €</strong>.
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "motors",
        text: `
        Un elevador puja amb una velocitat constant una càrrega \\(m = 2 500 \\; \\text{kg}\\) fins a una altura
\\(Δh = 5 \\; \\text{m} \\) en un temps \\(t = 60 \\; \\text{s} \\). L'elevador s'acciona amb un motor elèctric de corrent continu en sèrie amb un reductor d'engranatges. Segons el catàleg del fabricant, el rendiment del
reductor d'engranatges és \\(η_{red} = 0,70\\). El motor s'alimenta amb una tensió \\( U = 220 \\; \\text{V} \\), gira a
una velocitat \\(n = 1 500 \\; \\text{min}^{–1}\\) i té un rendiment electromecànic \\(η_{mot} = 0,78\\). Si les resistències
passives a l'elevador es consideren negligibles, determineu:
              
               <br><strong>a)</strong> La potència mecànica \\(P_{càrrega}\\) requerida per a elevar la càrrega. [0,5 punts]
               <br><strong>b)</strong> La potència \\(P_{m}\\) i el parell \\(Γ_{m}\\) a l'eix de sortida del motor. [1 punt]
               <br><strong>c)</strong> La intensitat \\(I\\) que consumeix el motor elèctric. [0,5 punts]
               <br><strong>d)</strong> La potència total dissipada \\(P_{diss}\\) pel conjunt motor-reductor. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Potència mecànica requerida per elevar la càrrega \\(P_{càrrega}\\):</strong>
            <br>
            \\[
            v = \\frac{\\Delta h}{t} = \\frac{5}{60} = 0,0833 \\; \\text{m/s}
            \\]
            \\[
            F = m \\cdot g = 2500 \\cdot 9{,}81 = 24525 \\; \\text{N}
            \\]
            \\[
            P_{càrrega} = F \\cdot v = 24525 \\cdot 0,0833 = 2044 \\; \\text{W}
            \\]
            <br>
            <strong>b) Potència \\(P_{m}\\) i el parell \\(Γ_{m}\\) a l'eix del motor:</strong>
            <br>
            \\[
            P_{m} = \\frac{P_{càrrega}}{η_{red}} = \\frac{2044}{0,70} = 2919 \\; \\text{W}
            \\]
            \\[
            \\omega = \\frac{2\\pi n}{t} = \\frac{2\\pi 1500}{60} = 157,1 \\; \\text{rad/s}
            \\]
            \\[
            Γ_{m} = \\frac{P_m}{\\omega} = \\frac{2919}{157,1} = 18,6 \\; \\text{N\\(\\cdot\\)m}
            \\]
            <br>
            <strong>c) Intensitat consumida pel motor:</strong>
            <br>
            \\[
            P_{el} = \\frac{P_m}{η_{mot}} = \\frac{2919}{0,78} = 3742,3 \\; \\text{W}
            \\]
            \\[
            I = \\frac{P_{el}}{U} = \\frac{3742,3}{220} = 17,01 \\; \\text{A}
            \\]
            <br>
            <strong>d) Potència total dissipada pel conjunt motor–reductor:</strong>
            <br>
            \\[
            P_{diss} = P_{el} - P_{càrrega} = 3742,3 - 2044 = 1698,3 \\; \\text{W}
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `
        <img src="https://mcadenas4.github.io/tecno/selectivitat/2017/images/201706s1p3b.png" alt="Imatge relacionada amb la pregunta" width="900">
        La placa d’alumini de la figura, de gruix
\\(e = 5 \\; \\text{mm}\\), està articulada a terra en el punt
O. Per a mantenir-la en repòs s’utilitza un
cable d’acer que es fixa en el punt A i que té la
direcció que es mostra en la figura. El cable té
una secció circular de diàmetre \\(d = 2 \\; \\text{mm}\\). La
densitat de l’alumini és \\(ρ_{alumini} = 2 710 kg/m^{3}\\) i el mòdul elàstic de l'acer és \\(E_{acer} = 207 \\; \\text{GPa}\\).
              
               <br><strong>a)</strong> Dibuixeu el diagrama de cos lliure de la placa. [0,5 punts]
               <br><strong>Determineu:)</strong>
               <br><strong>b)</strong> La massa \\(m\\) de la placa. [0,5 punts]
               <br><strong>c)</strong> La força \\(T\\) que fa el cable, i les forces horitzontal \\(F_{h}\\) i vertical \\(F_{v}\\) en el punt O. [1 punt]
               <br><strong>d)</strong>  La tensió normal \\(σ\\) del cable i el seu allargament unitari \\(ε\\). Si el límit elàstic de l’acer
és \\(σ_{e,acer} = 350 \\; \\text{MPa}\\), el cable s’arriba a deformar de manera permanent? [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Diagrama del cos lliure:</strong>
            <img src="https://mcadenas4.github.io/tecno/selectivitat/2017/images/201706s1r3b.png" alt="Imatge relacionada amb la resposta" width="900">

            <strong>b) Massa de la placa:</strong>
            <br>
            \\[
            V = (2L) \\cdot L \\cdot e = 2 \\cdot 1 \\cdot 0,005 = 0,01 \\; \\text{m}^3
            \\]
            \\[
            m = ρV = 2710 \\cdot 0,01 = 27,1 \\; \\text{kg}
            \\]
            \\[
            W = mg = 27,1 \\cdot 9,98 = 265,8 \\; \\text{N}
            \\]
            <br>
            <strong>c) Tensió del cable i forces a O:</strong>
            <br>
            \\[
            T \\text{sin}30º \\cdot 2L - W \\cdot L = 0
            \\]
            \\[
            T \\cdot 0,5 \\cdot 2 - 265,8 = 0
            \\]
            \\[
            T = 265,8 \\; \\text{N}
            \\]
            \\[
            - Eix y
            \\]
            \\[
            F_{v} + T \\text{sin}30º - W = 0
            \\]
            \\[
            F_{v} + 132,9 - 265,8 = 0
            \\]
            \\[
            F_{v} = 132,9 \\; \\text{N}
            \\]
            \\[
            - Eix x
            \\]
            \\[
            F_{h} - T \\text{sin}30º = 0
            \\]
            \\[
            F_{h} = 265,8 \\cdot 0,866 = 230,2 \\; \\text{N}
            \\]
            <br>
            <strong>d) Tensió normal i allargament unitari del cable:</strong>
            <br>
            \\[
            A = \\frac{\\pi d^{2}}{4} = \\frac{\\pi (0,002)^{2}}{4} = 3,14 \\cdot 10^{-6} \\; \\text{m}^2
            \\]
            \\[
            σ = \\frac{T}{A} = \\frac{265,8}{3,14 \\cdot 10^{-6}} = 84,6 \\; \\text{MPa}
            \\]
            \\[
            ε = \\frac{σ}{E} = \\frac{84,6 \\cdot 10^{6}}{207 \\cdot 10^{7}} = 4,1 \\cdot 10^{-4}
            \\]
            \\[
            σ = 84,6 \\; \\text{MPa} < 350 \\; \\text{MPa}
            \\]
            <strong>El cable NO es deforma permanentment</strong>
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "electrics",
        text: `
        <img src="https://mcadenas4.github.io/tecno/selectivitat/2017/images/201706s1p4b.png" alt="Imatge relacionada amb la pregunta" width="900">
        Un fanal per a exteriors consta de quinze LED connectats tal com mostra el circuit de
la figura. La caiguda de tensió de cada LED és \\(U_{LED} = 3,4 \\; \\text{V}\\). Per a regular la il·luminació, el
fanal es pot alimentar amb \\(n\\) = 3 o 4 bateries connectades en sèrie. Cada bateria proporciona una tensió \\(U_{bat} = 12 \\; \\text{V}\\) i té una capacitat \\(c_{bat} = 10 000 \\; \\text{mAh}\\). Entre les bateries i els LED hi ha
una resistència \\(R\\). Quan hi ha \\(n\\) = 4 bateries connectades, per cada LED hi passa un corrent
\\(I_{LED,4} = 25 \\; \\text{mA}\\). Per a aquesta configuració, determineu:
              
                <br><strong>a)</strong> El valor de la resistència \\(R\\). [0,5 punts]
                <br><strong>b)</strong> L’energia consumida \\(E_{total}\\) en el temps \\(t\\) = 8 h. [0,5 punts]
                <br><strong>c)</strong> El temps \\(t_{bat,4}\\) que duren les bateries. [0,5 punts]
                <br>Per a la configuració amb només \\(n\\) = 3 bateries connectades en sèrie, determineu: 
                <br><strong>d)</strong> La nova intensitat \\(I_{LED,3}\\) que circula per cada LED. [0,5 punts]
                <br><strong>e)</strong> El temps \\(t_{bat,3}\\) que duren les bateries. [0,5 punts]
                <br><br>
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Resistència:</strong>
            <br> 
            \\[
            U = 4 \\cdot 12 = 48 \\, \\text{V}
            \\]
            \\[
            U_{LED} = 5 \\cdot 3,4 = 17 \\; \\text{V}
            \\]
            \\[
            U_{R} = 48 - 17 = 31 \\; \\text{V}
            \\]
            \\[
            R = \\frac{V_{R}}{I_{R}} = \\frac{31}{3 \\cdot 0,025 \\; \\text{A}} = 413,33 \\; \\omega
            \\]
            <br>
            <strong>b) Energia consumida en 8 h:</strong>
            <br>
            \\[
            E_{total} = P \\cdot t = U \\cdot I \\cdot t = 48 \\cdot 0,075 \\cdot 8 = 28,8 \\; \\text{Wh}
            \\]
            <br>
            <strong>c) Autonomia 4 bateries:</strong>
            <br>
            \\[
            t_{bat,4} = \\frac{C_{bat}}{I_{R}} = \\frac{10}{0,075} = 133,33 \\; \\text{hores}
            \\]
            <br>
            <strong>d) Nova tensió amb 3 bateries:</strong>
            <br>
            \\[
            U = 3 \\cdot 12 = 13 \\; \\text{V}
            \\]
            \\[
            U_{R} = 35 - 17 = 19 \\; \\text{V}
            \\]
            \\[
            I_{R} = \\frac{17}{413,33} = 0,04598 \\; \\text{A}
            \\]
            \\[
            I_{LED,3} = \\frac{0,04598}{3} = 0,01533 \\; \\text{A} = 15,33 \\; \\text{A}
            \\]
            <br>
            <strong>e) Temps que duren 3 bateries:</strong>
            <br>
            \\[
            t_{bat,3} = \\frac{C_{bat}}{I_{R}} = \\frac{10}{0,0598} = 217,49 \\; \\text{hores}
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "control",
        text: `
        Un cotxe amb un motor de quatre cilindres en línia té un sistema automàtic per a desconnectar dos d’aquests cilindres a partir de la lectura d’un sensor en l’accelerador. El sistema
manté els quatre cilindres connectats, i permet desconnectar-ne dos si la demanda d’acceleració és baixa i s’ha mantingut baixa en el darrer kilòmetre. Els dos cilindres només es desconnecten si la velocitat del motor és 1 400 \\(min^{–1}\\) < n < 4 000 \\(min^{–1}\\). Responeu a les qüestions
que hi ha a continuació utilitzant les variables d’estat següents:
        <img src="https://mcadenas4.github.io/tecno/selectivitat/2017/images/201706s5p2.png" alt="Imatge relacionada amb la pregunta" width="900">

              
                <br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
                <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
                <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
                <img src="https://mcadenas4.github.io/tecno/selectivitat/2017/images/201706s5r2.png" alt="Imatge relacionada amb la pregunta" width="900">

            `
    },
    
];
