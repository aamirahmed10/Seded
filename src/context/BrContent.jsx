import { desc } from "framer-motion/client";
import { UPLOADS_BASE_URL, IMAGES_BASE_URL } from '../helpers/BrConstants';

export const menuItems = [
  { id: 1, name: 'A propos',  subMenu: [
      { id: 21, name: 'Le SeDEC', link: '/le-sedec' },
      { id: 22, name: 'L église catholique dans l éducation', link: '/eglise-catholique-dans-l-education' },
      { id: 23, name: 'Brève chronologie', link: '/breve-chronologie' },
      { id: 24, name: 'Quelques Chiffres', link: '/quelques-chiffres' },
      { id: 25, name: 'Nos Partenaires', link: '/nos-partenaires' }
    ]
  },
  { id: 2, name: 'Nos Ecoles',  subMenu :[
     { id: 26, name: 'Notre équipe', link: '/about/team' },
     { id: 27, name: 'Notre histoire', link: '/about/history' }
    ]
  },
  { id: 3, name: 'Projets', link: '/projets', subMenu :[
    { id: 28, name: 'Notre équipe', link: '/about/team' },
    { id: 29, name: 'Notre histoire', link: '/about/history' }
   ]
  },
  { id: 4, name: 'Actualite et Evenement', link: '/articles-et-documentations', subMenu :[
    { id: 30, name: 'Notre équipe', link: '/about/team' },
    { id: 31, name: 'Notre histoire', link: '/about/history' }
   ]
  },
  { id: 5, name: 'Nous Contacter', link: '/nos-contact'},
];

export const footerlinks = [
  {
    id: 1,
    email: 'communication@sedec.mu' , link: 'mailto:communication@sedec.mu',
    numbers :[
      { id: 1, name: '464-3832', link: 'tel:4643832' },
      { id: 2, name: '465-6694', link: 'tel:4656694' },
      { id: 3, name: '465-0926', link: 'tel:4650926' }
    ],
    address: '1 Celicourt Antelme Street, Rose-Hill, Republic of Mauritius', link: 'https://maps.app.goo.gl/gSRgPihQcxJvXag89',
    name: 'Liens utiles',
    usefulLinks:[
      { id: 1, name: 'https://dioceseportlouis.org/', link: 'https://dioceseportlouis.org/' },
      { id: 2, name: 'https://oiecinternational.com/', link: 'https://oiecinternational.com/' },
      { id: 3, name: 'https://icjm.mu/', link: 'https://icjm.mu/' },
      { id: 4, name: 'https://konekte.mu/', link: 'https://konekte.mu/' }
    ],
    conditions: 'Terms & Conditions',
    policy: 'Privacy',
    copyright: '© Copyright SeDec 2025',
    txt:' Powered by 365CREA',
  },

];

export const bannerSliderContent = [
  { id: 1,
    img: `${UPLOADS_BASE_URL}/sedec-banner01.jpg`,
    title: "L’église au service de l’éducation",
    desc: "Découvrez comment le SeDec contribut à l’avenir de nos enfants...",
    btn:'En savoir plus' ,
    link:'/le-sedec'
  },
  { id: 2,
    img: `${UPLOADS_BASE_URL}/banner02.jpg`,

  },
  { id: 3,
    img: `${UPLOADS_BASE_URL}/banner03.jpg`,

  }
];

export const aboutBanner =[
  { id: 1,
    img: `${UPLOADS_BASE_URL}/about-banner.png`,
    title: "Le Sedec",
  },
]

export const newsAndEventsBanner =[
  { id: 1,
    img: `${UPLOADS_BASE_URL}/about-banner.png`,
    title: "This is an example of a title for the latest/featured article",
    date: "07 Mai 2025",
  },
]

export const articleDetailBanner =[
  { id: 1,
    img: `${UPLOADS_BASE_URL}/blog01.png`,
    category: "Vie des établissements",
    title: "Recollection spirituelle : les recteurs des collèges catholiques préparent la rentrée 2025",
    date: "07 Mai 2025",
  },
]

export const whatWeDo = [
  {
    title: "Écoles primaires, secondaires catholiques, SEN, Technique.",
    description: "Le Service Diocésain de l’Éducation Catholique est chargé de la gestion des établissements tombant sous la tutelle diocésaine."
  },
  {
    title: "L’enseignement Religieux et L’éducation Interculturalité",
    description: "Dans le cadre de l’implémentation du troisième chantier du volet éducatif de Kleopas."
  },
  {
    title: "Kléopas dans l’école Catholique",
    description: "Le but du projet Kléopas dans le diocèse mauricien est de revoir les conditions d’annonce."
  },
  {
    title: "L’éducation à l’affectivité et la sexualité",
    description: "Le but du projet Kléopas dans le diocèse mauricien est de revoir les conditions d’annonce."
  }
];




export const vacancies = [

{
  subtitle:'Primaire',
  subtext:'Jean Eon',
  title:'Cleaner',
  extra:'Closing date : 15 June 2025',
  buttonText:'Je postule',
  link:'#'
},
{
  subtitle:'Secondaire',
  subtext:'Lorette QB',
  title:'Mathematics Teacher',
  extra:'Closing date : 25 June 2025',
  buttonText:'Je postule',
  link:'#'
},
{
  subtitle:'SEN',
  subtext:'Collège St Gabriel ',
  title:'Care Taker',
  extra:'Closing date : 18 July 2025',
  buttonText:'Je postule',
  link:'#'
},
{
  subtitle:'Technique',
  subtext:'Collège St Gabriel ',
  title:'English Teacher',
  extra:'Closing date : 24 August 2025',
  buttonText:'Je postule',
  link:'#'
},

];

export const partnersSection = [
  {
    title: "Une collaboration...",
    description: "Le SeDec compte sur la collaboration de ses partenaires afin d’assurer le succès de notre mission. Nous sommes fier de nous associer avec .....",
    btn: "En savoir plus",
    img:[
      {img: `${UPLOADS_BASE_URL}/parnters01.png`,},
      {img: `${UPLOADS_BASE_URL}/parnters02.png`,},
      {img: `${UPLOADS_BASE_URL}/parnters03.png`,},
      {img: `${UPLOADS_BASE_URL}/parnters04.png`,},
      {img: `${UPLOADS_BASE_URL}/parnters05.png`,},
      {img: `${UPLOADS_BASE_URL}/parnters06.png`,},
      {img: `${UPLOADS_BASE_URL}/parnters07.png`,},
      {img: `${UPLOADS_BASE_URL}/yellow-dot.svg`,},
      {img: `${UPLOADS_BASE_URL}/yellow-dot.svg`,},
      {img: `${UPLOADS_BASE_URL}/blue-dot.svg`,},
      {img: `${UPLOADS_BASE_URL}/blue-dot.svg`,},
    ],
    link: "/nos-partenaires"
  }
];


export const events = [
  {
    image: `${UPLOADS_BASE_URL}/events01.png`,
    date: '07 Mai 2025',
    title: `UNE MÉMOIRE VIVANTE : LE COLLÈGE DU SAINT-ESPRIT CÉLÈBRE LES 190 ANS DE L'ABOLITION DE L'ESCLAVAGE`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    link: '#',
    btnTxt: 'Lire l’article',

  },
  {
    image: `${UPLOADS_BASE_URL}/events01.png`,
    date: '07 Mai 2025',
    title: 'This is an example of a title.',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    link: '#',
    btnTxt: 'Lire l’article',
  
  },
  {
    image: `${UPLOADS_BASE_URL}/events01.png`,
    date: '07 Mai 2025',
    title: 'This is an example of a longer title one 2 lines',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to...`,
    link: '#',
    btnTxt: 'Lire l’article',

  },
  {
    image: `${UPLOADS_BASE_URL}/events01.png`,
    date: '07 Mai 2025',
    title: 'This is an example of a title.',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    link: '#',
    btnTxt: 'Lire l’article',

  },
  {
    image: `${UPLOADS_BASE_URL}/events01.png`,
    date: '07 Mai 2025',
    title: 'This is an example of a longer title one 2 lines',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to...`,
    link: '#',
    btnTxt: 'Lire l’article',

  }
];

export const aboutContent = [

  {
    id:1,
    title:'Mission et Vision',
    description:'Le Service Diocésain de l’Éducation Catholique (SeDEC) est une structure qui a pour mission de promouvoir l’éducation catholique dans le diocèse de Port-Louis. Il est chargé de la gestion des établissements tombant sous la tutelle diocésaine. Il veille à ce que le projet de LÉcole catholique défini dans les documents du Projet Catéchétique Diocésain Kléopas soit porté et réalisé par tous les acteurs de lécole catholique. Il travaille en étroite collaboration avec les congrégations religieuses de tutelle (Institut de Lorette, Filles de Marie, Salésiens) pour que le projet de lécole catholique soit inscrit dans la mission éducative de LÉglise. Le Service Diocésain de LÉducation Catholique agit en partenariat avec le Ministère de LÉducation nationale selon la vision de léducation définie dans la Charte de lécole catholique.',
    image_title:'Composition de l’equipe dirigeante du SeDEC',
    images:[
      {img: `${UPLOADS_BASE_URL}/teacher01.png`, title:'Père Alain Romaine', desc:'Délégué Épiscopal'},
      {img: `${UPLOADS_BASE_URL}/teacher02.png`, title:'Dr. (Mme) Gilberte Chung Kim Chung', desc:'Directrice Exécutive'},
      {img: `${UPLOADS_BASE_URL}/teacher03.png`, title:'Mme. Patricia Blanc', desc:'Responsable des écoles primaires RCA.'},
      {img: `${UPLOADS_BASE_URL}/teacher04.png`, title:'Dr. Jimmy Harmon', desc:'Directeur Adjoint, Responsable du Secondaire'},
      {img: `${UPLOADS_BASE_URL}/teacher05.png`, title:'Dr. Pascal Nadal', desc:'Directeur Adjoint, Responsable de la Pastorale Scolaire et de la Formation'},
    ],
    section_title:'Nos Partenaires',
    section_description:'Le SeDEC est un partenaire dans léducation nationale. À ce titre, nous travaillons en étroite collaboration avec le Ministère de LÉducation, le Mauritius Institute of Education (MIE), le Mauritius Examination Syndicate (MES) et la Private Secondary Education Authority (PSEA).Les actions éducatives du SeDEC impliquent régulièrement la collaboration dautres services du Diocèse de Port-Louis tels que lInstitut Cardinal Jean Margéot (ICJM), Le Service Diocésain de la Catéchèse et du Catéchuménat (SDCC) entre autres.   Ces services sont sollicités afin de développer des activités et formations complémentaires à l’intention de notre communauté éducative.',
    partners_logo:[
      {img: `${UPLOADS_BASE_URL}/aboutlogo01.png`},
      {img: `${UPLOADS_BASE_URL}/aboutlogo02.png`},
      {img: `${UPLOADS_BASE_URL}/aboutlogo03.png`},
      {img: `${UPLOADS_BASE_URL}/aboutlogo04.png`},
      {img: `${UPLOADS_BASE_URL}/aboutlogo05.png`},
      {img: `${UPLOADS_BASE_URL}/aboutlogo06.png`},
      {img: `${UPLOADS_BASE_URL}/aboutlogo07.png`},
      {img: `${UPLOADS_BASE_URL}/aboutlogo08.png`},
    ],
  }

]

export const schoolsContent = [
  {
    id:1,
    img: `${UPLOADS_BASE_URL}/school-banner.png`,
    title: "Nos Écoles",
    desc: "Découvrez les écoles primaires, secondaires et techniques sous la tutelle du SeDEC",
    
  }
  
]
export const schoolsNumbers = [
  {
    id:1,
    number: "46",
    desc: "Écoles Primaires"
  },
  {
    id:2,
    number: "11",
    desc: "Écoles Secondaires"
  },
  {
    id:3,
    number: "8",
    desc: "SEN Units"
  },
  {
    id:4,
    number: "+300k",
    desc: "Élèves encadrés"
  },
  {
    id:5,
    number: "1",
    desc: "Lycée professionel"
  }
]

export const schools = [
  {
    id:1,
    img: `${UPLOADS_BASE_URL}/schools01.png`,
    title: "Écoles Primaires",
    desc: "Éducation de base pour les jeunes enfants, axée sur le développement fondamental.",
    btnTxt: "Voir les écoles primaires",
    link: "/schools/primary"
  },
  {
    id:2,
    img: `${UPLOADS_BASE_URL}/schools02.png`,
    title: "Écoles Secondaires",
    desc: "Éducation de base pour les jeunes enfants, axée sur le développement fondamental.",
    btnTxt: "Voir les écoles secondaires",
    link: "/schools/secondary"
  },
  {
    id:3,
    img: `${UPLOADS_BASE_URL}/schools03.png`,
    title: "SEN Unit",
    desc: "Éducation de base pour les jeunes enfants, axée sur le développement fondamental.",
    btnTxt: "Voir les écoles secondaires",
    link: "/schools/secondary"
  },
  {
    id:4,
    img: `${UPLOADS_BASE_URL}/schools01.png`,
    title: "Écoles Technique",
    desc: "Éducation de base pour les jeunes enfants, axée sur le développement fondamental.",
    btnTxt: "Voir les écoles secondaires",
    link: "/schools/secondary"
  },

]

export const ctaSection = [
  {
    id:1,
    title: "Souhaitez-vous en savoir plus sur une école?",
    btnText: "Nous contacter",
    link: "/contact",
    image: `${UPLOADS_BASE_URL}/school-cta.png`
  }
]


export const faqData = [
  {
      id: 1,
      number: "01",
      question: "Comment puis-je inscrire mon enfant dans une école ?",
      answer: "Les inscriptions se font directement auprès de l'école concernée. Vous pouvez consulter la liste des écoles par catégorie pour obtenir les coordonnées. Assurez-vous d'avoir les documents suivants : acte de naissance, carnet de vaccination, justificatif d'adresse et bulletins scolaires précédents."
  },
  {
      id: 2,
      number: "02",
      question: "Les écoles sont-elles uniquement ouvertes aux catholiques?",
      answer: "Non, les écoles catholiques sont ouvertes à tous les enfants, quelle que soit leur religion. Nous accueillons des élèves de toutes confessions dans un esprit de respect et de tolérance."
  },
  {
      id: 3,
      number: "03",
      question: "Quelle est la différence entre les écoles secondaires et les écoles techniques?",
      answer: "Les écoles secondaires offrent une éducation générale menant au HSC, tandis que les écoles techniques se concentrent sur l'enseignement professionnel et technique avec des qualifications spécifiques à l'industrie."
  },
  {
      id: 4,
      number: "04",
      question: "Où puis-je trouver la liste complète des écoles ?",
      answer: "Vous pouvez consulter la liste complète des écoles sur notre site web dans la section 'Nos Écoles'. La liste est organisée par catégorie : primaires, secondaires, SEN et techniques."
  }
]

export const schoolCategory = [
  {
    id:1,
    img: `${UPLOADS_BASE_URL}/school-banner.png`,
    title: "Écoles Primaires",
    desc: "Retrouvez ci-dessous la liste complète des écoles primaires sous la tutelle du SeDEC: Cliquez sur une école pour consulter les details, contacter l'établissement ou voir la localisation.",
    
  }
]

export const ZONES = [
  { label: 'Zone A', value: 'A' },
  { label: 'Zone B', value: 'B' },
  { label: 'Zone C', value: 'C' },
  { label: 'Zone D&E', value: 'D&E' },
];

export const NEWS_EVENTS = [
  { label: 'Vie des établissements', value: 'Vie des établissements' },
  { label: 'Actualités scolaires', value: 'Actualités scolaires' },
  { label: 'Actions éducatives et pastorales', value: 'Actions éducatives et pastorales' },
  { label: 'Projets et Vie scolaire', value: 'Projets et Vie scolaire' },
  { label: 'Engagement & Vie scolaire', value: 'F' },
]

export const SCHOOLS_LIST = [
    {
    id:1,
    name: "Bon Accueil RCA School",
    zone: "A",
    school_logo:`${UPLOADS_BASE_URL}/rcaschool-logo.png` ,
    email:'bonaccueil.rca@sedec.mu',
    phone:'+418-3006',
    master_name:'Mrs Rosabi Boodoo',
    location:'Bon Acceuil, Flacq',
    btn_text:'Voir le profil',
    btn_link:'/schools/primary/profile'
  },
  {
    id:2,
    name: "Jean Éon",
    zone: "A",
    school_logo:`${UPLOADS_BASE_URL}/jeanschool-logo.png` ,
    email:'jeaneon.rca@sedec.mu',
    phone:'+288-8015',
    master_name:'Mr Sylvain Coureur',
    location:'Saint-Michel Road, Grand Gaube',
    btn_text:'Voir le profil',
    btn_link:'/schools/primary/profile  '
  },
  {
      id:3,
    name: "Marie Reine RCA School",
    zone: "A",
    school_logo:`${UPLOADS_BASE_URL}/marieschool-logo.png` ,
    email:'mariereine.rca@sedec.mu',
    phone:'+288-8015',
    master_name:'Mrs Rosabi Boodoo',
    location:'Bon Acceuil, Flacq',
    btn_text:'Voir le profil',
    btn_link:'/schools/primary/profile'
  },
  {
    id:4,
    name: "Saint-Esprit College",
    zone: "B",
    school_logo:`${UPLOADS_BASE_URL}/paixschool-logo.png` ,
    email:'saintestpirit.rca@sedec.mu',
    phone:'+288-8015',
    master_name:'Mrs Rosabi Boodoo',
    location:'Bon Acceuil, Flacq',
    btn_text:'Voir le profil',
    btn_link:'/schools/primary/profile'
  },
  {
    id:5,
    name: "Saint-Esprit College",
    zone: "B",
    school_logo:`${UPLOADS_BASE_URL}/paixschool-logo.png` ,
    email:'saintestpirit.rca@sedec.mu',
    phone:'+418-3006',
    master_name:'Mrs Rosabi Boodoo',
    location:'Bon Acceuil, Flacq',
    btn_text:'Voir le profil',
    btn_link:'/schools/primary/profile'
  },
  {
    id:6,
    name: "Saint-Esprit College",
    zone: "C",
    school_logo:`${UPLOADS_BASE_URL}/paixschool-logo.png` ,
    email:'saintestpirit.rca@sedec.mu',
    phone:'+288-8015',
    master_name:'Mrs Rosabi Boodoo',
    location:'Bon Acceuil, Flacq',
    btn_text:'Voir le profil',
    btn_link:'/schools/primary/profile'
  },
  {
    id:7,
    name: "Saint-Esprit College",
    zone: "D&E",
    school_logo:`${UPLOADS_BASE_URL}/paixschool-logo.png` ,
    email:'saintestpirit.rca@sedec.mu',
    phone:'+288-8015',
    master_name:'Mrs Rosabi Boodoo',
    location:'Bon Acceuil, Flacq',
    btn_text:'Voir le profil',
    btn_link:'/schools/primary/profile'
  },
  {
    id:8,
    name: "Saint-Esprit College",
    zone: "c",
    school_logo:`${UPLOADS_BASE_URL}/paixschool-logo.png` ,
    email:'saintestpirit.rca@sedec.mu',
    phone:'+288-8015',
    master_name:'Mrs Rosabi Boodoo',
    location:'Bon Acceuil, Flacq',
    btn_text:'Voir le profil',
    btn_link:'/schools/primary/profile'
  },

]


export const schoolProfileContent = [
  {
    id:1,
    title:'Welcome to Bon Accueil RCA!',
    description:'At Bon Accueil RCA, every child is welcomed into a vibrant, caring, and inclusive learning community where academic success goes hand in hand with emotional, physical, creative, spiritual, and cultural development. Our dynamic teaching approaches integrate modern technologies like tablets and projectors with human-centered practices such as pastoral care and enrichment programs.We celebrate diversity through intercultural events, religious festivities, and artistic expression, ensuring that every learner feels seen and valued. Guided by our mission to raise children in wisdom and harmony, we nurture future citizens who are empathetic, respectful, and deeply rooted in their cultural heritage. Welcome to a school where every memory matters, and every child shines.',
   
  },
  {
    id:2,
    number: "89",
    desc: "Years of History"
  },
  {
    id:3,
    number: "100",
    desc: "Pupils"
  },
  {
    id:4,
    number: "23",
    desc: "Staff members"
  },
{
  id:5,
  title:'Our History',
  description:'The story of Bon Accueil RCA School began in 1936. At the time, the school had a clearly defined mission: to provide primary education to the villagers along with a Catholic formation inspired by the Diocese of Port Louis—while always respecting the diverse cultures present in the community In the 19th century, the establishment was originally a convent that welcomed underprivileged children and offered them an education based on Catholic values. It was only in 1936 that the Diocese made the decision to convert the convent into a primary school. From that point on, the institution became a beacon of hope for many families in need, transmitting strong civic values—especially from 1968, the year Mauritius gained its independence, marking a new era of state-supported education. Over the years, the school has undergone many changes. The yard was fenced, tin classrooms were replaced with concrete buildings, and yet the charm of the past still lingers. However, in the mid-1960s, the opening of a nearby government school led many parents to transfer their children, causing a gradual drop in enrolment. Despite these changes, the school remained resilient, holding on to its spirit and purpose. One cannot forget the grotto of the Virgin Mary facing the main building, or the village chapel, located about five kilometres away under the Parish of Pont Praslin. Every Sunday, the church bell rings out faithfully—calling parishioners, as it has for more than a hundred years.',
},
{
id:6,
title:'Contact Details',
name:'Mrs Rosabi Boodoo',
location:'Bon Acceuil, Flacq',
phone:'418-3006',
email:'bonaccueil.rca@sedec.mu',
phone_link:'tel:418-3006',
email_link:'mailto:bonaccueil.rca@sedec.mu'
}

]

export const schoolGallery = [
 {src:'./public/uploads/gallery01.webp',id:1},
 {src:'./public/uploads/gallery02.webp',id:2},
 {src:'./public/uploads/gallery03.webp',id:3},
 {src:'./public/uploads/gallery04.webp',id:4},
 {src:'./public/uploads/gallery05.webp',id:5},
 {src:'./public/uploads/gallery08.png',id:8},
 {src:'./public/uploads/gallery09.png',id:9},
 {src:'./public/uploads/gallery15.webp',id:10},
 {src:'./public/uploads/gallery16.webp',id:11},

]

export const schoolProfileBanner = [
  { id: 1,
    img: `${UPLOADS_BASE_URL}/profilebanner.png`,
    title: "Bon Accueil RCA School",
    logo:`${UPLOADS_BASE_URL}/rcaschool-logo.png`
  },

];


export const newsCards = [
  {
    id:'vie-des-établissements',
    img: `${UPLOADS_BASE_URL}/blog01.png`,
    date: "31 Mar 2025",
    title: "Leading Catholic schools in 2025",
    desc: "The SeDEC is pleased to announce that a series of four weekly webinars on the above theme will be organised under the aegis of St Mary’s University Twickenham London",
    btnTxt: "En savoir plus",
    link: "/news-and-events/vie-des-établissements",
    category: "Projets et Vie scolaire"
  },
  {
    id:'vie-des-établissements',
    img: `${UPLOADS_BASE_URL}/blog02.png`,
    date: "11 Mar 2025",
    title: "Fête de l'Indépendance",
    desc: "le message spécial de la Directrice Exécutive, Dr Gilberte Chung.",
    btnTxt: "En savoir plus",
    link: "/news-and-events/projets-et-vie-scolaire",
    category: "Projets et Vie scolaire"
  },
  {
    id:'projets-et-vie-scolaire',
    img: `${UPLOADS_BASE_URL}/blog03.png`,
    date: "11 Fév 2025",
    title: "Une Mémoire Vivante : Le Collège du Saint-Esprit Célèbre les 190 ans de l'Abolition de l'Esclavage",
    desc: "L'événement a débuté par une série de performances artistiques où les jeunes ont donné vie à l'histoire",
    btnTxt: "En savoir plus",
    link: "/news-and-events/actions-éducatives-et-pastorales",
    category: "Actions éducatives et pastorales"
  },
  {
    id:'actions-éducatives-et-pastorales',
    img: `${UPLOADS_BASE_URL}/blog04.png`,
    date: "16 Jan 2025",
    title: " Visite de Monseigneur Durhone au Collège du Saint-Esprit",
    desc: "Monseigneur Durhone a présenté ses vœux pour la nouvelle année scolaire..",
    btnTxt: "En savoir plus",
    link: "/news-and-events/actions-éducatives-et-pastorales",
    category: "Actions éducatives et pastorales"
  },
  {
    id:'actualités-scolaires',
    img: `${UPLOADS_BASE_URL}/blog05.png`,
    date: "13 Jan 2025",
    title: "Rentrée scolaire",
    desc: "Visite du ministre de l'Éducation à Notre Dame des Victoires",
    btnTxt: "En savoir plus",
    link: "/news-and-events/actualités-scolaires",
    category: ["Actualités scolaires", "Actions éducatives et pastorales"]
  },
  {
    id:'actualités-scolaires',
    img: `${UPLOADS_BASE_URL}/blog06.png`,
    date: "09 Jan 2025",
    title: "Recollection spirituelle : les recteurs des collèges catholiques préparent la rentrée 2025",
    desc: "Une rentrée scolaire dans un esprit de prière et de partage fraternel.",
    btnTxt: "En savoir plus",
    link: "/news-and-events/actualités-scolaires",
    category: ["Actualités scolaires", "Actions éducatives et pastorales"]
  },
  {
    id:'engagement-et-vie-scolaire',
    img: `${UPLOADS_BASE_URL}/blog07.png`,
    date: "04 Oct 2024",
    title: "Journée Mondiale des Enseignants 2024",
    desc: "“Valoriser la voix des Enseignants : vers un nouveau contrat social”",
    btnTxt: "En savoir plus",
    link: "/news-and-events/vie-des-établissements",
    category: ["Vie des établissements", "Engagement & Vie scolaire"]
  },
  {
    id:'vie-des-établissements',
    img: `${UPLOADS_BASE_URL}/blog08.png`,
    date: "02 Oct 2024",
    title: "Une messe de fin d'année riche en émotions à l'école St Léon",
    desc:  "L'école St Léon a célébré la fin de l'année scolaire avec une messe empreinte de gratitude et de joie.",
    btnTxt: "En savoir plus",
    link: "/news-and-events/vie-des-établissements",
    category: ["Vie des établissements", "Engagement & Vie scolaire"]
  },

]

export const articleDetail = [
  {
    id:'vie-des-établissements',
    desc:'À laube de cette nouvelle année scolaire 2025, les Managers, Recteurs et leurs adjoints des collèges catholiques se sont réunis pour une journée de recollection spirituelle et fraternelle. Cette rencontre sest tenue le mercredi 8 janvier à lancien Séminaire de Beau-Bassin, de 9h à 15h, sous la guidance éclairée du Diacre Cadress Runghen.VLa matinée a débuté par un partage enrichissant du Diacre Runghen, qui a témoigné de son expérience précieuse en tant que travailleur social auprès des personnes vulnérables de la société mauricienne. Son intervention a suscité des échanges profonds et constructifs entre les participants, permettant à chacun de réfléchir sur leur rôle déducateur face aux défis sociaux actuels.La deuxième partie de la journée a été consacrée à un temps de célébration de la Parole, centrée sur lÉvangile selon saint Matthieu; "Vous êtes le sel de la terre et la lumière du monde". Cette réflexion spirituelle a permis daborder le thème crucial de lespérance dans le leadership éducatif. Les participants ont pu méditer sur leur mission daccompagnement des jeunes et leur rôle de phare dans la communauté éducative.Cette journée de ressourcement, placée sous le signe du partage et de la spiritualité, sest conclue par un déjeuner convivial, permettant aux responsables des établissements de renforcer leurs liens fraternels avant dentamer cette nouvelle année scolaire avec enthousiasme et détermination.Cette initiative témoigne de limportance accordée à la dimension spirituelle et humaine dans léducation catholique, rappelant que la mission éducative va bien au-delà de la simple transmission des savoirs.'
  }
]