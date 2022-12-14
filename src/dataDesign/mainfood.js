export const mainfood = {
    id:0,
    type:"mainfood",
    name:"Kuru Fasulye",
    level:2,
    time:{"hazırlama":3,"pişirme":90},
    materials:[
        {name:"Fasulye",piece:null,gram:600,tabir:""},
        {name:"salça",piece:null,gram:50,tabir:"bir yemek kaşığı"},
        {name:"sıvı yağ",piece:null,gram:10,tabir:"bir yemek kaşığı"},
        {name:"soğan",piece:1,gram:null,tabir:""},
        {name:"tuz",piece:null,gram:5,tabir:"bir tutam"},
        {name:"pul biber",piece:null,gram:null,tabir:"bir çay kaşığı"}
    ],
    extraMaterials:[
        {name:"patates",piece:1,gram:null,tabir:""}
    ],
    image:"/mainfood/kuru-fasulye.png",
    imageList:["/mainfood/kuru-fasulye0.png","/mainfood/kuru-fasulye1.png","/mainfood/kuru-fasulye2.png"],
    cook:{
        start:"tüm malzemelerimiz ayarladıktan sonra küçük küçük kestiğimiz soğanları ocakta kızartığımız yağın içerisine atıyor ölmeleri bekliyoruz, sonra üzerine salçayı atıp karıştırıyoruz.",
        middle:"iyice karışmış salçamızın üstüne dün geceden beklettiimiz fasulyemizi döküp hafifce ısıtıyoruz. sonra üstüne su döküp düdüklünün kapağını kapatıp pişmeye bırakıyoruz.",
        finish:"dikkatlice açtığımız tenceremizi boşaltıp servis ediyoruz."
    }
}