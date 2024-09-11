import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Pages/StomatoloskeUsluge.css"

const StomatoloskeUsluge=()=>{

    const data=[
        {
            title1:"Opšta stomatologija",
            img:"../logo20.jpg",
            title:"U ordinaciji Hajdarpašić vršimo saniranje karijesa uz korištenje visoko estetskih kompozitnih plombi vrhunskog kvaliteta."
            
        },

        {
            title1:"ZUBNI IMPLANTATI",
            img:"../logo21.jpg",
              title:" Implantatima nadomjestite jedan ili više nedostajućih zuba ili riješite bezubost vilice pomoću All on 4 ili All on 6 rješenja."
        },
        {
            title1:"STOMATOLOŠKA PROTETIKA",
            img:"../logo22.jpg",
            title:" Ukoliko vam nedostaje jedan i više zuba i želite to riješiti.  U ordinaciji Hajdarpašić ćemo naći najbolje rješenje za Vas. "

        },
        {
            title1:"ORALNA HIRURGIJA",
            img:"../logo23.jpg",
            title:"Radimo čitav niz hirurških intervencija. Sve zahvate izvodi doktor specijalista za oralnu hirurgiju. Zahvati  su bez boli i uz kratak rok oporavka.    "

        },
        {
            title1:"KERAMIČKE LJUSPICE",
            img:"../logo24.jpg",
            title:"Ljuspice, ljuskice ili vineri (eng. veener) za zube su jedan od najpolularnijih nadomjestaka zuba kod nas. Objedinjuju estetiku, funkcionalnost i ljepotu zuba."

        },
        {
            title1:"Izbjeljivanje zuba",
            img:"../logo25.jpg",
            title:"Izbjeljivanje zuba U ordinaciji Hajdarpašić ćemo pomoću ZOOM lampe izbijeliti vaše zube bez rizika oštećenja zubi ili desni. Bijeli zubi će podići vaše samopouzdanje.  "

        }
    ]

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

return <div className="image">
<div>
<h1 className=" text-6xl text-blue-700 uppercase flex justify-center items-center">stomatoloske usluge</h1>

</div>
<div className="pt-10 flex justify-center items-center">
<div className="w-4/5 p-5">
    
    <Slider {...settings}>
    {data.map(d =>(
    <div className="flex rounded-xl h-[250px] " >
<div>
    <h3 className="flex ">{d.title1}</h3>
</div>
    <div className="flex" >
        <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
    </div>
    <div>
        <h3>
            {d.title}
        </h3>
    </div>
  
    </div>
))}
         </Slider>


   
</div>
</div>
</div>

}

export default StomatoloskeUsluge