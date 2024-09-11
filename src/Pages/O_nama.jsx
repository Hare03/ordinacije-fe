import logo17 from "../logo17.jpg"
import logo18 from "../logo18.jpg"
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'



const Onama=()=>{
return <div className="h-full flex flex-grow ml-20 mr-20 ">
    <div className="w-1/2 h-full gap-">
   <div className="">
<h1 className="p-2 text-3xl text-blue-400 uppercase font-bold">O nama- <br></br> Stomatologija Hajdarpašić</h1>
<h1 className="pt-2 pl-2 font-bold text-black uppercase">Naš uspjeh je lako objasniti. mi se trudimo više.</h1>
<h3 className="uppercase p-2"><br></br>Ako te interejuje šta i kako radimo,<br></br> šta NE radimo, kao i interesantna priča o doktorici onda čitaj dalje.</h3>
<img className="p-5 object-cover h-[300px] w-[620px]" src={logo17}/>
<h1 className=" uppercase font-bold text-3xl text-black p-2">Šta radimo u  ordinaciji Hajdarpašić</h1>
<h2 className=" pt-5 pl-3">
Znamo da ljudi ne vole ići stomatologu <br></br> i da im to stvara stres. Prva asocijacija je bol i neprijatan osjećaj.<br></br> Znajući to, nastojimo da sve naše intervencije budu bezbolne <br></br> i da sa pacijentima što više razgovaramo.
Razgovor nam pomaže <br></br> da shvatimo trenutke naprijatnosti i da ih otklonimo odmah.</h2>
<h1 className=" pt-5 uppercase font-bold text-3xl text-black p-2">Šta ne radimo </h1>
<h2 className="p-2">Zahtjeve pacijenata, čiji bi rezultat mogao ugroziti zdravlje  pacijenta <br></br> ili pogoršati postojeće stanje u ustima, odbijamo ODMAH. Na bazi našeg <br></br> iskustva mi ćemo vam dati najbolju procjenu rezultata. Ako se pacijenti <br></br> ne slažu sa nama, potičemo ih da potraže i drugo mišljenje.<br></br>

U stomatološkoj ordinaciji Širbegović ne prihvatamo one slučajeve <br></br> za koje unaprijed znamo da predstavlja nerealan zahtjev pacijenta.<br></br> Nerealne zahtjeve i očekivanja odbijamo, ma koliko da platite. 

<br></br>Ne radimo složene  slučajeve, za koje procjenimo da je potrebna<br></br> specijalistička intervencija. Takve slučajeve uputimo provjernim <br></br> kolegama specijalistima. 

Na temu kako odabrati stomatologa možete <br></br> pročitati možete pročitati ovdje.</h2>
<h1 className=" pt-5 uppercase font-bold text-3xl text-black p-2">DIGITALNA STOMATOLOGIJA</h1>
<h2 className=" pl-2 pt-2">Implementirali smo digitalni CAD CAM sistem za izradu protetskih radova od STAKLO <br></br> keramike (100% keramička navlaka). Sada možemo napraviti krunice, ljuspice/vinire,<br></br> keramičke plombe samo za JEDAN dan ili u jednoj posjeti.</h2>
</div>
    </div>

    <div className="w-1/2 f-full">
<img className="h-[500px] w-[900px]" src={logo18}/>
<h1 className="pt-4 text-3xl text-black uppercase font-bold">garancija na protetske  RADOVE</h1>
<h2 className="pt-4">Na fiksne protetske radove koje napravite u nas, dajemo PISANU GARANCIJU od 5 godina.<br></br> Garancija se odnosi na korišteni materijal i na rad doktora. Naše radove možete pogledati ovdje. </h2>
<h1 className="pt-4 text-3xl text-black uppercase font-bold">Cijene u stomatološkoj ordinaciji</h1>
<h2 className="pt-2"> U stomatološkoj ordinaciji Hajdarpašić cijene smo odredili da dobijete najviše usluge u odnosu na <br></br> uloženi novac u vaše zdravlje. Novac jeste bitan za poslovanje, ali nije najvažniji. Zato smo vam <br></br> omogućili plaćanje na rate do 36 mjeseci.  Za detaljan pregled cijena pogledajte CJENOVNIK USLUGA.

Preporučujem da pratite naš profil na Facebook-u i INSTAGRAMU. Tu smo jako aktivni.

Kliknite na ikone i lajkajte naše stranice.  </h2>
<h1 className="font-bold text-4xl pt-3">O doktoru </h1>
<h2 className="pt-2">Paralelno sa  studiranjem na stomatološkom fakultetu, u periodu 2005-2011. godina radio je kao šminker na Hayat TV  i OBN TV. 

2014. godine sa kolegom partnerom pokreće privatnu stomatološku ordinaciju a&s.

Krajem 2018. godine napušta zajednički projekat i samostalno osniva stomatološku ordinaciju Hajdarpašić na Skenderiji u ulici Hamdije Kreševljaković. 

Od 2020. godine postaje oficijelni stomatolog Košarkaške reprezentacije Bosne i Hercegovine. 

2023. godine specijalizira na katerdri za parodontologiju  oralnu medicinu na stomatološkom fakultetu u Sarajevu.

Fokusirala se na estetske i složene restorativne zahvate u stomatologiji.</h2>
<div className="gap-5 flex justify-center pt-10">
<SocialIcon className="pt-5 flex items-center justify-center" url="https://instagram.com" />
<SocialIcon url="https://facebook.com" />

</div>
    </div>
</div>
}

export default Onama