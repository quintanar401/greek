artsm = ["o", "του", "τον", "", "οι", "των", "τους", ""];
artsf = ["η", "της", "τη(ν)", "", "οι", "των", "τις", ""];
artsn = ["το", "του", "το", "", "τα", "των", "τα", ""];
nouns = [
    {
        "group": "Masculine -ός",
        "art": artsm,
        "endings": ["ός","ού","ό","έ","οί","ών","ούς","οί"],
        "nouns": ["weather καιρός"]
    },
    {
        "group": "Masculine -ος",
        "art": artsm,
        "endings": ["ος","ου2","ο","ε","οι","ων2","ους2","οι"],
        "nouns": ["cosmos κόσμος","human άνθρωπος|ανθρώπου"]
    },
    {
        "group": "Masculine -ής 1",
        "art": artsm,
        "endings": ["ής","ή","ή","ή","ές","ών","ές","ές"],
        "nouns": ["pupil μαθητής"]
    },
    {
        "group": "Masculine -ής 2",
        "art": artsm,
        "endings": ["ής","ή","ή","ή","ήδες","ήδων","ήδες","ήδες"],
        "nouns": ["enthusiast μερακλής"]
    },
    {
        "group": "Masculine -ης 1",
        "art": artsm,
        "endings": ["ης","η","η","η","ες","ών2","ες","ες"],
        "nouns": ["client πελάτης|πελατών"]
    },
    {
        "group": "Masculine -ης 2",
        "art": artsm,
        "endings": ["ης","η","η","η","ηδες","ηδων","ηδες","ηδες"],
        "nouns": ["grocer μπακάλης"]
    },
    {
        "group": "Masculine -ης 3",
        "art": artsm,
        "endings": ["ης","η","η","η","εις","εων","εις","εις"],
        "nouns": ["fan λάτρης"]
    },
    {
        "group": "Masculine -ας 1",
        "art": artsm,
        "endings": ["ας","α","α","α","ες","ών2","ες","ες"],
        "nouns": ["man άντρας|αντρών"]
    },
    {
        "group": "Masculine -ας 2",
        "art": artsm,
        "endings": ["ας","α","α","α","ες","ων2","ες","ες"],
        "nouns": ["rule κανόνας","elephant ελέφαντας|ελεφάντων"]
    },
    {
        "group": "Masculine -ας 3",
        "art": artsm,
        "endings": ["άς","ά","ά","ά","άδες","άδων","άδες","άδες"],
        "nouns": ["dad μπαμπάς"]
    },
    {
        "group": "Masculine -ας 4",
        "art": artsm,
        "endings": ["ας","α","α","α","ηδες","ηδων","ηδες","ηδες"],
        "nouns": ["air αέρας"]
    },
    {
        "group": "Masculine -ές",
        "art": artsm,
        "endings": ["ές","έ","έ","έ","έδες","έδων","έδες","έδες"],
        "nouns": ["coffee καφές"]
    },
    {
        "group": "Masculine -έας",
        "art": artsm,
        "endings": ["έας","έα","έα","έα","είς","έων","είς","είς"],
        "nouns": ["secretary(m) γραμματέας"]
    },
    {
        "group": "Masculine -ους",
        "art": artsm,
        "endings": ["ους","ου","ου","ου","οι","ων","ους","οι"],
        "nouns": ["mind νους","sailing_off απόπλους"]
    },
    {
        "group": "Masculine -ούς",
        "art": artsm,
        "endings": ["ούς","ού","ού","ού","ούδες","ούδων","ούδες","ούδες"],
        "nouns": ["grandpa παππούς"]
    },
    {
        "group": "Masculine -υς",
        "art": artsm,
        "endings": ["υς","υ","υ","υ","εις2","ων2","εις2","εις2"],
        "nouns": ["yard πήχυς","axe πέλεκυς|πελέκεις"]
    },
    {
        "group": "Feminine -ά 1",
        "art": artsf,
        "endings": ["ά","άς","ά","ά","ές","ών","ές","ές"],
        "nouns": ["turn φορά"]
    },
    {
        "group": "Feminine -ά 2",
        "art": artsf,
        "endings": ["ά","άς","ά","ά","άδες","άδων","άδες","άδες"],
        "nouns": ["mom μαμά"]
    },
    {
        "group": "Feminine -α 1",
        "art": artsf,
        "endings": ["α","ας","α","α","ες","ών2","ες","ες"],
        "nouns": ["hour ώρα","see θάλασσα"]
    },
    {
        "group": "Feminine -α 2",
        "art": artsf,
        "endings": ["α","ας","α","α","ες","ων2","ες","ες"],
        "nouns": ["cow αγελάδα","quantity ποσότητα|ποσοτήτων", "Greece Ελλάδα"]
    },
    {
        "group": "Feminine -ή",
        "art": artsf,
        "endings": ["ή","ής","ή","ή","ές","ών","ές","ές"],
        "nouns": ["soul ψυχή"]
    },
    {
        "group": "Feminine -η 1",
        "art": artsf,
        "endings": ["η","ης","η","η","ες","ών2","ες","ες"],
        "nouns": ["love αγάπη|αγαπών","cabin κάμαρη|καμαρών"]
    },
    {
        "group": "Feminine -η 2",
        "art": artsf,
        "endings": ["η","ης","η","η","ες","εων2","ες","ες"],
        "nouns": ["sugar ζάχαρη|ζαχάρεων","reminiscence θύμηση|θυμήσεων"]
    },
    {
        "group": "Feminine -η 3",
        "art": artsf,
        "endings": ["η","ης","η","η","εις2","εων2","εις2","εις2"],
        "nouns": ["city πόλη","television τηλεόραση|τηλεοράσεις"]
    },
    {
        "group": "Feminine -ός",
        "art": artsf,
        "endings": ["ός","ού","ό","έ","οί","ών","ούς","οί"],
        "nouns": ["street οδός"]
    },
    {
        "group": "Feminine -ός",
        "art": artsf,
        "endings": ["ος","ου2","ο","ε","οι","ων2","ους2","οι"],
        "nouns": ["avenue λεωφόρος","method μέθοδος"]
    },
    {
        "group": "Feminine -ού",
        "art": artsf,
        "endings": ["ού","ούς","ού","ού","ούδες","ούδων","ούδες","ούδες"],
        "nouns": ["fox αλεπού"]
    },
    {
        "group": "Feminine -έας",
        "art": artsf,
        "endings": ["έας","έως","έα","έα","είς","έων","είς","είς"],
        "nouns": ["secretary(f) γραμματέας"]
    },
    {
        "group": "Feminine -ίας",
        "art": artsf,
        "endings": ["ίας","ία","ία","ία","ίες","έων","ιών","ίες"],
        "nouns": ["cashier ταμίας"]
    },
    {
        "group": "Neuter -ό",
        "art": artsn,
        "endings": ["ό","ού","ό","ό","ά","ών","ά","ά"],
        "nouns": ["water νερό"]
    },
    {
        "group": "Neuter -ο",
        "art": artsn,
        "endings": ["ο","ου2","ο","ο","α","ων2","α","α"],
        "nouns": ["book βιβλίο","horse άλογο|αλόγου"]
    },
    {
        "group": "Neuter -ί",
        "art": artsn,
        "endings": ["ί","ιού","ί","ί","ιά","ιών","ιά","ιά"],
        "nouns": ["bird πουλί"]
    },
    {
        "group": "Neuter -ι",
        "art": artsn,
        "endings": ["ι","ιού2","ι","ι","ια","ιών2","ια","ια"],
        "nouns": ["house σπίτι|σπιτιών"]
    },
    {
        "group": "Neuter -α 1",
        "art": artsn,
        "endings": ["α","ατος2","α","α","ατα2","άτων3","ατα2","ατα2"],
        "nouns": ["theme θέμα|θέμα|θεμάτων","problem πρόβλημα|προβλήματος|προβλημάτων"]
    },
    {
        "group": "Neuter -α 2",
        "art": artsn,
        "endings": ["α","ακτος","α","α","ατα","άκτων2","ατα","ατα"],
        "nouns": ["milk γάλα|γαλάκτων"]
    },
    {
        "group": "Neuter -ος 1",
        "art": artsn,
        "endings": ["ος","ους","ος","ος","η","ών2","η","η"],
        "nouns": ["end τέλος|τελών"]
    },
    {
        "group": "Neuter -ος 2",
        "art": artsn,
        "endings": ["ος","ους2","ος","ος","η2","ων2","η2","η2"],
        "nouns": ["open_see πέλαγος|πελάγους"]
    },
    {
        "group": "Neuter -ός",
        "art": artsn,
        "endings": ["ός","ότος","ός","ός","ότα","ότων","ότα","ότα"],
        "nouns": ["fact γεγονός"]
    },
    {
        "group": "Neuter -υ 1",
        "art": artsn,
        "endings": ["υ","ιού2","υ","υ","ια","ιών2","ια","ια"],
        "nouns": ["evening βράδυ|βραδιού"]
    },
    {
        "group": "Neuter -υ 2",
        "art": artsn,
        "endings": ["υ","ατος","υ","υ","ατα","άτων2","ατα","ατα"],
        "nouns": ["spear δόρυ|δοράτων"]
    },
    {
        "group": "Neuter -ας",
        "art": artsn,
        "endings": ["ας","ατος","ας","ας","ατα","άτων2","ατα","ατα"],
        "nouns": ["meat κρέας|κρεάτων"]
    },
    {
        "group": "Neuter -ως 1",
        "art": artsn,
        "endings": ["ως","ωτός","ως","ως","ώτα","ώτων","ώτα","ώτα"],
        "nouns": ["light φως"]
    },
    {
        "group": "Neuter -ως 2",
        "art": artsn,
        "endings": ["ως","ωτος","ως","ως","ωτα","ώτων2","ωτα","ωτα"],
        "nouns": ["dusk λυκόφως|λυκοφώτων"]
    },
    {
        "group": "Neuter -ον 1",
        "art": artsn,
        "endings": ["ον","ου","ον","ον","α","ων","α","α"],
        "nouns": ["meson μέσον"]
    },
    {
        "group": "Neuter -ον 2",
        "art": artsn,
        "endings": ["ον","οντος","ον","ον","οντα","όντων2","οντα","οντα"],
        "nouns": ["interest ενδιαφέρον|ενδιαφερόντων"]
    },
    {
        "group": "Neuter -όν",
        "art": artsn,
        "endings": ["όν","όντος","όν","όν","όντα","όντων","όντα","όντα"],
        "nouns": ["qualification προσόν"]
    },
    {
        "group": "Neuter -έν",
        "art": artsn,
        "endings": ["έν","έντος","έν","έν","έντα","έντων","έντα","έντα"],
        "nouns": ["announcement ανακοινωθέν"]
    },
    {
        "group": "Neuter -εν",
        "art": artsn,
        "endings": ["εν","εντος","εν","εν","εντα","έντων2","εντα","εντα"],
        "nouns": ["vowel φωνήεν|φωνηέντων"]
    },
    {
        "group": "Neuter -άν",
        "art": artsn,
        "endings": ["άν","άντος","άν","άν","άντα","άντων","άντα","άντα"],
        "nouns": ["happening συμβάν"]
    },
    {
        "group": "Neuter -αν",
        "art": artsn,
        "endings": ["αν","αντος","αν","αν","αντα","άντων2","αντα","αντα"],
        "nouns": ["universe σύμπαν|συμπάντων"]
    }
];

nbase = [];
nprocN = (g,e,n) => {let end = g["endings"]; let b = n[0].substr(0,n[0].length - end[0].length); let res = []; for (let i = 0; i < end.length; i++) {let a = end[i]; let nn = b;
    if (a.endsWith("2") && n[1].endsWith(a.substr(0,a.length-1))) {n[1] = n[1].substr(0,n[1].length - (a.length - 1)); nn = n[1]};
    if (a.endsWith("3") && n[2].endsWith(a.substr(0,a.length-1))) {n[2] = n[2].substr(0,n[2].length - (a.length - 1)); nn = n[2]};
    if (a.endsWith("2") || a.endsWith("3")) {nn = nn + a.substr(0,a.length-1)} else {nn = nn + a};
    if (g["art"][i].length > 0) {nn = g["art"][i]+" "+nn}; res.push(nn)}; return [e,n[0],res]}
nprocItem = (n) => {for (let x of n["nouns"]) {let ne = x.split(" "); let nn = ne[1].split("|"); if (nn.length == 1) {nn.push(nn[0])}; if (nn.length == 2) {nn.push(nn[1])}; return nprocN(n,ne[0],nn)}}
for (let x of nouns) {nbase.push(nprocItem(x))}

nscore = [];
ncnt = 0;
nstartTrain = () => {nscore = []; for (let x of nbase) {nscore.push(1)}; ncnt = nbase.length};
nnextN = (n) => {let noun = nbase[n]; return { id: n, eng: noun[0], grk: noun[1], total: nbase.length, curr: ncnt, data: noun[2], step: 0}};
nnextRnd = () => {let n = 0; if (ncnt == 0) {return {data:[], curr:0}}; if (ncnt > 1) {n = Math.floor(ncnt*Math.random())};
    for (let x=0; x < nbase.length; x++) {if (nscore[x] > 0) {if (n == 0) {return nnextN(x)} else {n = n - 1}}}};
nnext = (n,isSuc) => {if (n >=0) {if (isSuc) {nscore[n] = nscore[n] - 1; if (nscore[n] == 0) {ncnt = ncnt - 1}} else {if (nscore[n] < 5) {nscore[n] = 2*nscore[n]}}}; return nnextRnd()}