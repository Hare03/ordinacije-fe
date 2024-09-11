import "./Middle.css"
import logo5 from "../logo5.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Middle=()=>{

    const data1=[
        {
            imgg:"../logo11.jpg"
        },
        {
            imgg:"../logo12.jpg"
        },
        {
            imgg:"../logo13.jpg"
        },
        {
            imgg:"../logo14.jpg"
        },
        {
            imgg:"../logo15.png"
        },
        {
            imgg:"../logo16.jpg"
        }

    ]

    const data=[
        {
            img:"../logo5.jpg",
            
        },
        {
            img:"../logo6.jpg",

        },
        {
            img:"../logo7.jpg",

        },
        {
            img:"../logo8.jpg",

        },
        {
            img:"../logo9.jpg",
        },
        {
            img:"../logo10.jpg",
        }
    ]
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

return <div className="middle">
    <div className="middle-content">
    <h1 className="o-nama">PROČITAJTE O NAMA</h1>
    <h3>Hajdarpašić stomatologija je početkom 2018. g. registrovana kao specijalistička ordinacija za parodontologiju i oralne bolesti. </h3>

<h3>Znate li da možemo napraviti krunice, vinire, keramičke plombe samo za JEDAN dan ili u jednoj posjeti stomatologu. </h3>

<h3>Od 2020. godine postali smo oficijelni stomatolog Košarkaške reprezentacije Bosne i Hercegovine i Košarkaškog saveza BiH.</h3>

<h3>Cijene smo odredili da dobijete najviše stomatološke usluge u odnosu na uloženi novac u vaše zdravlje.</h3>

<h3>Cijene smo odredili da dobijete najviše stomatološke usluge u odnosu na uloženi novac u vaše zdravlje.</h3>
<h1 className="amb">Novi ambijent u 2022 godini</h1>

<div className="w-2/3 p-5">
    
    <Slider {...settings}>
    {data.map(d =>(
    <div  className="flex rounded-xl h-[250px] " >

    <div className="flex" >
        <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
    </div>
  
    </div>
))}
         </Slider>


   
</div>

<h2 className="radovi"> NAŠI RADOVI I ZADOVOLJNI PACIJENTI</h2>
<h2>Sve što koristimo u radu iza sebe ima dugogodišnju kliničku primjenu i dokazani kvalitet. Ovo su samo neki od naših radova koje smo radili u posljenje vrijeme.</h2>
<div className="w-2/3 p-5">
    
    <Slider {...settings}>
    {data1.map(d =>(
    <div className="flex rounded-xl h-[250px] " >

    <div className="flex" >
        <img src={d.imgg} alt="" className="h-44 w-44 rounded-full"/>
    </div>
  
    </div>
))}
         </Slider>


   
</div>
</div>



</div>
}

export default Middle