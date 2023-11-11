// Project Images Web
import porto1 from "./assets/Web/porto1.png";
import porto2 from "./assets/Web/porto2.png";
import login1 from "./assets/Web/login1.png";
import login2 from "./assets/Web/login2.png";
import suit from "./assets/Web/suit.png";
import link from "./assets/Web/link.png";
import commerce from "./assets/Web/commerce.png";
import database from "./assets/Web/database.png";
import movie from "./assets/Web/movie.png";
import currency from "./assets/Web/currency.png";
import news from "./assets/Web/news.png";

// Logo
import lhtml from "./assets/lhtml.png";
import lcss from "./assets/lCSS3.png";
import ljs from "./assets/lJavaScript.png";
import lphp from "./assets/lPHP.png";
import lreact from "./assets/lReact.png";
import ltail from "./assets/lTailwindCSS.png";
import lredux from "./assets/IRedux.png";

//Project Image Ui/Ux
import androidapp1 from "./assets/Ui/AndroidApp.png";
import androidapp2 from "./assets/Ui/AndroidApp1.png";
import foodrecipe from "./assets/Ui/FoodRecipe.png";
import linktree from "./assets/Ui/Link.png";
import loginpage from "./assets/Ui/LoginPage.png";
import portofolio from "./assets/Ui/Portofolio.png";
import portofolio1 from "./assets/Ui/Portofolio1.png";
import portofolio2 from "./assets/Ui/Portofolio2.png";
import profile from "./assets/Ui/Profile.png";
import medcare from "./assets/Ui/MedCare.png";
import travel from "./assets/Ui/Travel.png";

//Project Image 3D
import city1 from "./assets/3D/City.png";
import city2 from "./assets/3D/untitled.png";
import building from "./assets/3D/untitled12.png";
import room from "./assets/3D/untitleduhu.png";
import colorBlind from "./assets/3D/butawarna.png";
import mirror from "./assets/3D/mirror.png";

//Project Motion Graphic 2D
import motion1 from "./assets/Motion/CV.mp4";
import pizzaPrice from "./assets/Motion/PizzaPrice.mp4";
import ProfileVideo from "./assets/Motion/ProfileVideo.mp4";
import Gempa from "./assets/Motion/Gempa.mp4";

// Export Project Web
export const projectWeb = [
  {
    title: "Movie List",
    image: movie,
    description: `Web ini merupakan Final Project 4 yang di berikan oleh HACTIV8 saat mengikuti Program Studi Indepent. Project ini merupakan hasil kerja tim yang dimana saat itu saya mejadi leader di tim ini sekaligus mengerjakan kodingan dan teman yang lain mengerjakan tampilan dan laporan. Web ini menampilkan data yang di ambil dari omdb API dan memiliki fitur search untuk mencari movie yang di inginkan pada Web ini. `,
    imageReact: lreact,
    imageTail: ltail,
    imageRedux: lredux,
    techStack: "React JS, Tailwind",
    previewLink: "https://movie-project-indol.vercel.app/",
    githubLink:
      "https://github.com/MuhammadFahrial/sib_react_005_final_project/tree/main/omdb_api_final_4",
  },

  {
    title: "E-Commerce Front End",
    image: commerce,
    description: `Web ini merupakan Final Project 2 yang di berikan oleh HACTIV8 saat mengikuti Program Studi Indepent. Project ini merupakan hasil kerja tim yang dimana saat itu saya mejadi leader di tim ini sekaligus mengerjakan kodingan dan teman lain mengerjakan tampilan dan laporan. Web ini menampilkan data yang di ambil dari fakestore API. Project ini memiliki beberapa halaman yang terdiri dari Login, Home, Detail, Stok, Rekap, dan Cart serta beberapa fitur yaitu login, melihat detail produk, menyimpan produk di cart(LocalStorage), menghapus produk yang ada di dalam cart. `,
    imageReact: lreact,
    imageTail: ltail,
    imageRedux: lredux,
    techStack: "React JS, Taildwind",
    previewLink: "https://ecommerce-project-gules.vercel.app/",
    githubLink:
      "https://github.com/MuhammadFahrial/sib_react_005_final_project/tree/main/fakestore_api_final_2",
  },

  {
    title: "News API",
    image: news,
    description: `Web ini merupakan Final Project 1 yang di berikan oleh HACTIV8 saat mengikuti Program Studi Indepent. Project ini merupakan hasil kerja tim yang dimana saat itu saya mejadi leader di tim ini sekaligus mengerjakan kodingan dan teman lain mengerjakan tampilan dan laporan. Web ini menampilkan data yang di ambil dari news API. Project ini memiliki beberapa halaman yang di tampilkan berupa berita terkini indonesia, menampilkan berita seputar programming, COVID-19 dan halaman Save. Project ini mempunyai fitur News page untuk melihat lebih detail berita, Save dan Unsave berita. `,
    imageReact: lreact,
    imageTail: ltail,
    imageRedux: lredux,
    techStack: "React JS, Taildwind",
    previewLink: "https://ecommerce-project-gules.vercel.app/",
    githubLink:
      "https://github.com/MuhammadFahrial/sib_react_005_final_project/tree/main/news_api_final_1",
  },

  {
    title: "Currency Rate",
    image: currency,
    description: `Web ini merupakan assigment yang di berikan oleh HACTIV8 saat mengikuti Program Studi Indepent. Web ini menampilkan data yang di ambil dari currencyfreaks API. `,
    imageReact: lreact,
    imageCSS: lcss,
    techStack: "React JS, Tailwind",
    previewLink: "https://movie-project-indol.vercel.app/",
    githubLink: "https://github.com/MuhammadFahrial/currency-rates",
  },

  {
    title: "Database",
    image: login2,
    description: `Web ini merupakan project berbasis PHP pertama yang saya buat. Web ini memiliki beberapa fitur yaitu login, menampilkan data tabel,  tambah data, hapus data dan mencari data tabel. `,
    imagePHP: lphp,
    imageCSS: lcss,
    techStack: "PHP, CSS",
    previewLink: "-",
    githubLink: "https://github.com/MuhammadFahrial/login-regis-crud-php",
  },

  {
    title: "Suit Game",
    image: suit,
    description: `Web ini merupakan sebuah game suit yang menggunakan HTML, CSS dan Javascript. `,
    imageHTML: lhtml,
    imageCSS: lcss,
    imageJS: ljs,
    techStack: "HTML, CSS, JS",
    previewLink: "-",
    githubLink: "https://github.com/MuhammadFahrial/suit-game",
  },

  {
    title: "Link Tree",
    image: link,
    description: `Web ini merupakan sebuah cloning dari LinkTree untuk menampilkan social media yang ingin di lihat oleh user. `,
    imageHTML: lhtml,
    imageCSS: lcss,
    imageJS: ljs,
    techStack: "HTML, CSS, JS",
    previewLink: "https://link-tree-eight.vercel.app/",
    githubLink: "https://github.com/MuhammadFahrial/link-tree",
  },

  {
    title: "Web Profile",
    image: porto1,
    description: `Web ini merupakan Web profile pertama yang di buat menggunakan HTML, CSS dan Javascript. `,
    imageHTML: lhtml,
    imageCSS: lcss,
    imageJS: ljs,
    techStack: "HTML, CSS, JS",
    previewLink: "https://me-portofolio.vercel.app/",
    githubLink: "https://github.com/MuhammadFahrial/me-portofolio",
  },

  // {
  //   title: "Web Profile",
  //   image: porto2,
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sin.`,
  //   imageReact: lreact,
  //   imageCSS: lcss,
  //   techStack: "React JS",
  //   previewLink: "https://react-porto.vercel.app/",
  //   githubLink: "https://github.com/MuhammadFahrial/react-porto",
  // },

  // {
  //   title: "Login Page",
  //   image: login1,
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sin.`,
  //   imageReact: lreact,
  //   imageTail: ltail,
  //   techStack: "React JS, Tailwind",
  //   previewLink: "https://login-page-react-blush.vercel.app/",
  //   githubLink: "https://github.com/MuhammadFahrial/login-page-react",
  // },

  // {
  //   title: "Landing Page",
  //   image: database,
  //   description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sin.`,
  //   imagePHP: lphp,
  //   imageCSS: lcss,
  //   techStack: "PHP, CSS",
  //   previewLink: "-",
  //   githubLink: "https://github.com/MuhammadFahrial/login-regis-crud-php",
  // },
];

// Project UI/UX
export const userInterface = [
  {
    image: androidapp1,
    link: "https://www.figma.com/proto/UKNgHghIEwyeNFgM31Nr72/Mobile-App?page-id=0%3A1&type=design&node-id=203-3&viewport=-262%2C-31%2C0.4&t=1GQJdDgeLuYz4imK-1&scaling=scale-down&mode=design",
  },
  {
    image: androidapp2,
    link: "https://www.figma.com/proto/vfWIEravi0pVzascMk4t0x/Portofolio-Mobile-App?page-id=0%3A1&type=design&node-id=401-2&viewport=-331%2C294%2C0.64&t=xndGFE3Bddkm8Fbh-1&scaling=scale-down&mode=design",
  },
  {
    image: foodrecipe,
    link: "https://www.figma.com/proto/bCB2qScudraN4PJKm9Jz4J/Untitled?page-id=0%3A1&type=design&node-id=2-2&viewport=500%2C149%2C0.17&t=tbDu6hDDyKE22rtS-1&scaling=scale-down-width&mode=design",
  },
  {
    image: linktree,
    link: "https://www.figma.com/proto/fb7JTtDugjGjr1zJdZkKCs/Untitled?page-id=0%3A1&type=design&node-id=201-3&viewport=-71%2C227%2C0.24&t=aLpmrCOUys6jgLzK-1&scaling=scale-down-width&mode=design",
  },
  {
    image: loginpage,
    link: "https://www.figma.com/proto/tncdx21gRY5EjDgRmbb3SC/Web?page-id=0%3A1&type=design&node-id=0-3&viewport=343%2C152%2C0.21&t=hYFAchMNjyXU4jkC-1&scaling=contain&mode=design",
  },
  {
    image: portofolio,
    link: "https://www.figma.com/proto/LXQj8Kke2Th4Y2R1ndH693/Portofolio?page-id=0%3A1&type=design&node-id=1-2&viewport=185%2C223%2C0.13&t=5YtOEMESEAiiqFEP-1&scaling=scale-down-width&starting-point-node-id=1%3A2&mode=design",
  },
  {
    image: portofolio1,
    link: "https://www.figma.com/proto/GECHXOuEcUXByrm4XRNWp5/Portofolio?page-id=0%3A1&type=design&node-id=107-3809&viewport=149%2C33%2C0.28&t=FwEX2CX76h2T03Rc-1&scaling=min-zoom&mode=design",
  },
  {
    image: portofolio2,
    link: "https://www.figma.com/proto/xinllLdHqpq3WBrb2pM0zp/Untitled?page-id=0%3A1&type=design&node-id=3-2&viewport=311%2C109%2C0.21&t=IduXamdSSJm3mtBa-1&scaling=scale-down-width&mode=design",
  },
  {
    image: profile,
    link: "https://www.figma.com/proto/yzFfKPyl9y0EKl6r48DkNg/Untitled?page-id=0%3A1&type=design&node-id=8-2&viewport=248%2C93%2C0.21&t=TnIsnsTYVWf7qC5Z-1&scaling=scale-down-width&mode=design",
  },
  {
    image: medcare,
    link: "https://www.figma.com/proto/RYNIjnElG6Yvvg2CjktFeL/Untitled?page-id=0%3A1&type=design&node-id=28-4&viewport=290%2C36%2C0.23&t=XYcq9j0UPB0Qyxhi-1&scaling=contain&mode=design",
  },
  {
    image: travel,
    link: "https://www.figma.com/proto/TL5ebnp3JPKkxRUJPt2KV7/Travel?page-id=0%3A1&type=design&node-id=1-2&viewport=405%2C261%2C0.34&t=U7wcmqPvfIk5PlyV-1&scaling=scale-down-width&mode=design",
  },
];

// Project 3D
export const design3D = [
  { image: city1 },
  { image: city2 },
  { image: building },
  { image: room },
  { image: colorBlind },
  { image: mirror },
];

//Project Video
export const motionGraphic = [
  { video: motion1 },
  { video: pizzaPrice },
  { video: ProfileVideo },
  { video: Gempa },
];
