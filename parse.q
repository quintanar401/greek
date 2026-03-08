rus:" ",/:first each "йцукенгшщзхъэждлорпавыфячсмитьбюё","ЙЦУКЕНГШЩЗХЪЭЖДЛОРПАВЫФЯЧСМИТЬБЮЁ";
grk:("Α";"Γ");
grkl:("οι";"οί";"ει";"εί";"αι";"αί";"ω";"ώ";"ο";"ό";"η";"ή";"υ";"ύ";"ι";"ί";"ε";"έ");
grkl2:("αυ";"αύ";"ευ";"εύ";"ου";"ού");
getv:{
    if[any (l:raze 2#x 1)~/:grkl;: (x[0],enlist (l;1b);2_x 1)];
    if[any l~/:grkl2;: (x[0],enlist (l;0b);2_x 1)];
    if[any (l:first x 1)~/:grkl;: (x[0],enlist (l;1b);1_x 1)];
    (x[0],enlist (l;0b);1_x 1)
 };
d:{
    lvl:"I"$(i:x?" ")#x; x:i _ x;
    a:"|" vs x; b:{$[count x;(0N 2)#x;()]} trim each 1_a;
    i:min v:(count a 0)^first each ss[a 0;] each rus;
    gr:trim i#a 0; rs: trim i _ a 0;
    pos:""; art:""; end:();
    if[fl:"," in gr;
        gr2:trim (i:gr?",")#gr; art:{x where 0<count each x} trim (i+1)_ gr;
        pos:"noun"; gr:gr2;
    ];
    if[not[fl]&"(" in gr;
        gr2:trim (i:gr?"(")#gr; end:{x where 0<count each x} trim each " " vs -1_(i+1)_ gr;
        if["-"=first end 0;
            isCap: any grk~\:2#gr2;
            if[any ("-ώ";"-άζω")~\:end 0; pos:"verb"; gr2:gr2," ",end 0; end:()];
            if[not[isCap]&3=count end 0; pos:"adj"];
            if[isCap|3<count end 0; pos:"noun"; art:"ο"];
        ];
        gr: gr2;
    ];
    if[0=count pos;
        if[(not gr~"γύρω")&"ω"~-2#gr; pos:"verb"];
        if["ώ"~-2#gr; pos:"verb"];
        if[any ("έμαι";"ομαι";"εται";"ύμαι";"έχει";"ίζει";"ίνει";"άμαι";"έπει";"ίται")~\:-8#gr; pos:"verb"];
    ];
    `greek`lvl`pos`art`end`rus`exa`vowels!(gr;lvl;pos;art;end;rs;b;{{(raze x[;0];x[0;1])} each (where x[;1]|differ x[;1])_ x} first getv/[{0<count x 1};(();{(where 191<x)_ x} {trim (x?"-")#x}gr)])
  } each read0 `:words.txt;

  `:words.js 0: enlist {"words = [\n",x,"\n];"} -1_ "\n" sv {v:"        ",/:({"\"",x,"\""} each string key x),'": ",/:.j.j each value x;"    {\n",(",\n" sv v),"\n    },"} each d;

vmap:("ά";"ώ";"ό";"ή";"ύ";"ί";"έ";"Α";"Η";"Ή";"Γ";"Κ";"Π";"Δ";"Τ";"Ε";"Έ";"Μ";"Ο";"Ξ";"Σ";"ς";"Ψ";"Ν";"Ω";"Ύ";"Ό";"Λ";"Ά";"Ί";"Β";"Ζ";"Θ";"Ι";"Ρ";"Φ";"Χ")!
     ("α";"ω";"ο";"η";"υ";"ι";"ε";"α";"η";"η";"γ";"κ";"π";"δ";"τ";"ε";"ε";"μ";"ο";"ξ";"σ";"σ";"ψ";"ν";"ω";"υ";"ο";"λ";"α";"ι";"β";"ζ";"θ";"ι";"ρ";"φ";"χ");
noacc:{w:vmap x:(where (x>191)|x<128)_x; w[i]:x i:where 0=count each w; 256 sv/: "i"$w};
dd:(noacc each (d`greek) ig:iasc nd:noacc each d`greek)[;til 20];
res:(count dd)#enlist ();
match:{first where (max s)=s:s2[;1]*s2[;0]*sum each s2:(1^x til 20)=/:dd};
wmatch:{({i:match each w:{x where 0<count each x} " " vs (first x) except ",():.-"; res[i],:" ",/:w} each) each d`exa; `:match.txt 0: (d[`greek] ig),'{$[0=count x;"";" " sv distinct " " vs x]} each res};
w:"εδάφη"

wmatch2:{i:match each noacc each w:{x where 0<count each x} " " vs (" " sv read0 `:book1.txt) except ",():.-!;";
 res[i],:" ",/:w; `:match.txt 0: (d[`greek] ig),'{$[0=count x;"";" " sv {key[x],'"(",'string[count each value x],'")"} group trim " " vs x]} each R::res};