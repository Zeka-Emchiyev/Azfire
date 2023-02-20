import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      // {
      //   id: 1,
      //   slug: 'fhn-tehlukesizlik-qurasdirilmasi',
      //   title: 'FHN sistem',
      //   description: 'Description text here',
      //   client: 'FHN flan korpusu',
      //   mainImage: '',
      //   images: [
      //     '@/assets/images/backr'
      //   ]
      // },
      {
        id: 1,
        title: 'Ağdaş rayonundan',
        description: 'Description text here',
        images: [
          require('@/assets/projects/agdash/agdash-5.jpg'),
          require('@/assets/projects/agdash/agdash-2.jpg'),
          require('@/assets/projects/agdash/agdash-3.jpg'),
          require('@/assets/projects/agdash/agdash-4.jpg'),
          require('@/assets/projects/agdash/agdash-1.jpg'),
        ]
      },
      {
        id: 2,
        title: 'Milli Arxiv Idarəsindən',
        description: 'Description text here',
        images: [
          require('@/assets/projects/milli-arxiv/arxiv-1.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-2.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-3.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-4.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-5.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-6.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-7.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-8.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-9.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-10.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-11.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-12.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-13.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-14.jpg'),
        ]
      },
      {
        id: 3,
        title: 'Altes',
        description: 'Description text here',
        images: [
          require('@/assets/projects/altes/altes-1.jpg'),
          require('@/assets/projects/altes/altes-2.jpg'),
          require('@/assets/projects/altes/altes-3.jpg'),
          require('@/assets/projects/altes/altes-4.jpg'),
          require('@/assets/projects/altes/altes-5.jpg'),
          require('@/assets/projects/altes/altes-6.jpg'),
          require('@/assets/projects/altes/altes-7.jpg'),
          require('@/assets/projects/altes/altes-8.jpg'),
          require('@/assets/projects/altes/altes-9.jpg'),
          require('@/assets/projects/altes/altes-10.jpg'),
          require('@/assets/projects/altes/altes-11.jpg'),
          require('@/assets/projects/altes/altes-12.jpg'),
          require('@/assets/projects/altes/altes-13.jpg'),
        ]
      },
      {
        id: 4,
        title: 'Elmed',
        description: 'Description text here',
        images: [
          require('@/assets/projects/elmed/elmed-1.jpg'),
          require('@/assets/projects/elmed/elmed-2.jpg'),
          require('@/assets/projects/elmed/elmed-3.jpg'),
          require('@/assets/projects/elmed/elmed-4.jpg'),
          require('@/assets/projects/elmed/elmed-5.jpg'),
          require('@/assets/projects/elmed/elmed-6.jpg'),
          require('@/assets/projects/elmed/elmed-7.jpg'),
          require('@/assets/projects/elmed/elmed-8.jpg'),
          require('@/assets/projects/elmed/elmed-9.jpg'),
          require('@/assets/projects/elmed/elmed-10.jpg'),
          require('@/assets/projects/elmed/elmed-11.jpg'),
          require('@/assets/projects/elmed/elmed-12.jpg'),
          require('@/assets/projects/elmed/elmed-13.jpg'),
        ]
      },
      {
        id: 5,
        title: 'Prokuratura',
        description: 'Description text here',
        images: [
          require('@/assets/projects/prokuratura/prokuratura-1.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-2.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-3.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-4.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-5.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-6.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-7.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-8.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-9.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-10.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-11.jpg'),
          require('@/assets/projects/prokuratura/prokuratura-12.jpg'),
        ]
      },
      {
        id: 6,
        title: 'Ticarət mərkəzi',
        description: 'Description text here',
        images: [
          require('@/assets/projects/ticaret/ticaret-1.jpg'),
          require('@/assets/projects/ticaret/ticaret-2.jpg'),
          require('@/assets/projects/ticaret/ticaret-3.jpg'),
          require('@/assets/projects/ticaret/ticaret-4.jpg'),
          require('@/assets/projects/ticaret/ticaret-5.jpg'),
          require('@/assets/projects/ticaret/ticaret-6.jpg'),
          require('@/assets/projects/ticaret/ticaret-7.jpg'),
          require('@/assets/projects/ticaret/ticaret-8.jpg'),
          require('@/assets/projects/ticaret/ticaret-9.jpg'),
          require('@/assets/projects/ticaret/ticaret-10.jpg'),
          require('@/assets/projects/ticaret/ticaret-11.jpg'),
          require('@/assets/projects/ticaret/ticaret-12.jpg'),
          require('@/assets/projects/ticaret/ticaret-13.jpg'),
          require('@/assets/projects/ticaret/ticaret-14.jpg'),
          require('@/assets/projects/ticaret/ticaret-15.jpg'),
          require('@/assets/projects/ticaret/ticaret-16.jpg'),
        ]
      },
      {
        id: 7,
        title: 'Gəncə rayonundan',
        description: 'Description text here',
        images: [
          require('@/assets/projects/gence/gence-1.jpg'),
          require('@/assets/projects/gence/gence-2.jpg'),
          require('@/assets/projects/gence/gence-3.jpg'),
          require('@/assets/projects/gence/gence-4.jpg'),
          require('@/assets/projects/gence/gence-5.jpg'),
          require('@/assets/projects/gence/gence-6.jpg'),
          require('@/assets/projects/gence/gence-7.jpg'),
          require('@/assets/projects/gence/gence-8.jpg'),
          require('@/assets/projects/gence/gence-9.jpg'),
          require('@/assets/projects/gence/gence-10.jpg'),
          require('@/assets/projects/gence/gence-11.jpg'),
          require('@/assets/projects/gence/gence-12.jpg'),
          require('@/assets/projects/gence/gence-13.jpg'),
          require('@/assets/projects/gence/gence-14.jpg'),
          require('@/assets/projects/gence/gence-15.jpg'),
          require('@/assets/projects/gence/gence-16.jpg'),
          require('@/assets/projects/gence/gence-17.jpg'),

        ]
      },
      // {
      //   id: 1,
      //   title: '',
      //   description: 'Description text here',
      //   images: [
      //     '@/assets/images/backr'
      //   ]
      // },



    ],

    services: [
      {
        id: 1,
        title: 'Havalandırma Sistemləri',
        img: require('@/assets/services/havalandirma.jpg')
      },
      {
        id: 2,
        title: 'İsitmə Sistemləri',
        img: require('@/assets/services/istilik.jpg')
      },
      {
        id: 3,
        title: 'Soyutma Sistemləri',
        img: require('@/assets/services/soyutma.jpg')
      },
      {
        id: 4,
        title: 'Xüsusi avtomatik yanğın söndürmə sistemləri',
        img: require('@/assets/services/sondurme.jpg')
      },
      {
        id: 5,
        title: 'Dozimetrik ölçü cihazları',
        img: require('@/assets/services/dozimetr.jpg')
      },
      {
        id: 6,
        title: 'Servis Xidmətlərimiz',
        img: require('@/assets/services/servis-logo.webp')
      },
    ],
    products: [
      {
        id: 1,
        name: 'Çiller',
        description: 'Binaların havalandırılması texnologiyasında geniş yayılanlardan biri də su soyuduculu sistemdir və yaxud proffesional dildə Çillerdir. Çiller mayeni-su və ya etilenqlikolu soyutmaq üçün avadanlıqdan təşkil olunmuşdur. Belə bir aqreqat böyük bir məkanı , elecə də bütün bir binanı soyutmağa qadirdir. Çiller suyu soyudur və onu məkanın daxilində quraşdırılmış fankoylun istilikdəyişdiricisinə , ya da havalandırmanın tərkibinə ötürür. Çillerlər bir və ya iki istilikdəyişdirici ilə istehsal olunur. Bununla əlaqədar olaraq sistem: ikiborulu-qaynar və soyuq istilikdaşıyıcı daxil olan (istilik nasosu ilə çillerdən)bir istilikdəyişdiricidən istifadə olunur;dördborulu-iki istilik dəyişdiricili. Birində istilikdaşıyıcı çillerdən, ikincidə isə isti su mərkəzi qızdırıcı sistemdən verilir.',
        img: require('@/assets/images/product/chiller.jpg')
      },
      {
        id: 2,
        name: 'VRF SİSTEMİ',
        description: 'VRF SİSTEMİ – çox miqdarda binaların(məkanların)kondisiyalaşdırılması üçün təxsis edilmiş multisahəli kondisiyalaşdırma sistemidir. VRVF kondisionerlərinin quruluşu splind sisteminin quruluşundan bir xarici və bir çox daxili(2-dən 150-ə qədər)blokun olması ilə fərqlənir. Bir məkanda quraşdırılmış VRF sistemi havanı qızdırdığı kimi ,həm də soyuda bilir,bu isə onu ofis mərkəzləri,ticarət salonları,sənaye müəssisələri,çoxmərtəbəli binalar və s üçün müxtəlif iqlim şəraitinə uyğun ən optimal avadanlıq edir. VRF sistemi hər blokun idarəetmə pultunun köməkliyi ilə hava göstəricilərinin fərdi tənzimlənməsini təmin etməyə yol verir. ',
        img: require('@/assets/images/product/vrf.png')
      },
      {
        id: 3,
        name: 'Fankoyl',
        description: 'Fankoyl-binalarda müxəlif təyinatlar üçün quraşdırılan qurğudur.Onun əsas funksiyası havanın temperaturunu tənzimləməkdir. Fankoyllar,qaydalara uyğun olaraq, havalandırıcılı istilikdəyiştiricidən,filtrdən ,idarəedici pultdan ibarətdir.İstəkdən asılı olaraq,zəruri aksessuarlar əlavə oluna bilər. Fankoylun iş prinsipi aşağıdakılardan ibarətdir.Məkanda olan hava fankoylun istilikdəyiştiricisinə daxil olur.Orada hava lazımı temperaturu əldə edir-soyuyur və ya qızır.Fankoylun üstünlüyü odur ki,təmiz hava ona ya mərkəzi kondisionerdən ,ya da təchizatlı qurğudan daxil olur.Chiller və fankoyl sisteminin qurulması məkanlarda havalandırma probleminin həll olunmasına kömək edir. Fankoyl splid siseminin daxili blokunun analoqudur(əvəzedicisidir),lakin suda işləyir.Beləliklə, soyuq maye Chillerden Fankoyla ötürülür,hansiki o da öz növbəsində ona daxil olan havaya,mövcud məkana lazım olan temperatura qədər istilik ötürür.',
        img: require('@/assets/images/product/fankoyl.jpg')
      },
      {
        id: 5,
        name: 'AHU Havalandırma Sistemi',
        description: 'Təchizatlı-sorucu havalandırma sistemi ele qurulub ki, onlar havanın daxilə və xaricə axınını təmin edir. Binalarda təchizatlı-sorucu sistemdən istifadə havanın rütubətlilik dərəcəsini tənzimləməyə qadirdir. Böyük, iritutumlu binalarda (mehmanxanalarda,mərkəzi ofislərdə və s.) təchizatli-sorucu havalandırma sistemlərinin və güclü mərkəzli kondisionerlərin quraşdırılması daha aktualdır. Təchizatlı-sorucu havaladırma sistemi daxilində quraşdırılmış qızdırıcı avadanlığın (sulu və ya elektrik) və ya istiliyin rekuperasiyası adlanan vasitənin köməyi ilə havanın qızdırılmasını həyata keçirir. Rekuperasiya prinsipi ilə işləyən təchizatlı-sorucu havalandırma sistemindən istifadə zamanı temperatur qarşıdan gələn sorulan hava axınının istiliyi hesabına yüksəlir. Təchizatlı havalandırma sistemi binaya təmiz hava verilməsi üçün lazımdır. Bununla hava rekuperasiyanın və ya kaloriferin köməkliyi ilə qızır və tozdan təmizlənir. ',
        img: require('@/assets/images/product/ahu.jpg')
      },
      {
        id: 4,
        name: 'Hava Kanalları',
        description: 'Sifarişçinin təqdim etdiyi layihəyə əsasən havalandırma kanalları havanın miqdarından asılı olaraq hesablanır və layihə cizgisi sifarişçiyə təqdim edilir.',
        img: require('@/assets/images/product/hava.png')
      },

      {
        id: 6,
        name: 'Chemist 600 Emissiya Analizatoru',
        description: 'Chemist 600 analizatoru sənaye emissiyalarının təhlilinə həsr olunmuş alətlərimiz seriyasını açır. Chemist 600 daxili termal printerlə təchiz edilir və bu, tətbiq növündən asılı olaraq fərdiləşdirilə bilən 6-ya qədər müxtəlif qazı ölçə bilən yığcam, əl alətidir.',
        img: require('@/assets/images/product/chemist.jpg'),
        // require('@/assets/images/product/chemist1.jpg')

      },
      // {
      //   id: 7,
      //   name: 'Çiller',
      //   description: '',
      //   img: ''
      // },
      // {
      //   id: 8,
      //   name: 'Çiller',
      //   description: '',
      //   img: ''
      // },
      // {
      //   id: 9,
      //   name: 'Çiller',
      //   description: '',
      //   img: ''
      // },
      // {
      //   id: 10,
      //   name: 'Çiller',
      //   description: '',
      //   img: ''
      // },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
