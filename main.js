import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

AOS.init({
  once: true,
});

document.querySelector('#app').innerHTML = `
      <main class="text-center">
      <section class="border-gray hero text-left text-white">
        <div data-aos="fade-in">
        <h1 class="text-[80px] leading-snug mb-8 font-black italic">
          <span class="block text-2xl text-left w-full font-bold">Here’s </span>
          JOANNE
          </h1>
          <p class="mb-10 text-2xl leading-normal font-bold italic">
            Founder of “XXXD Official’’<br />
            & Graphic Designer
          </p>
          <nav class="flex justify-between gap-4">
            <a href="#" class="transition duration-300 hover:scale-105 hover:drop-shadow-[0_5px_8px_rgba(140,23,23,0.5)]">
              <img src="/public/images/behance.svg" alt="behance" srcset="" />
            </a>
            <a href="#" class="transition duration-300 hover:scale-105 hover:drop-shadow-[0_5px_8px_rgba(140,23,23,0.5)]">
              <img src="/public/images/facebook.svg" alt="facebook" srcset="" />
            </a>
            <a href="#" class="transition duration-300 hover:scale-105 hover:drop-shadow-[0_5px_8px_rgba(140,23,23,0.5)]">
              <img src="/public/images/instagram.svg" alt="instagram" srcset="" />
            </a>
            <a href="#" class="transition duration-300 hover:scale-105 hover:drop-shadow-[0_5px_8px_rgba(140,23,23,0.5)]">
              <img src="/public/images/youtube.svg" alt="youtube" srcset="" />
            </a>
          </nav>
        </div>
      </section>
      <section class="container flex flex-col items-center pt-14 pb-14">
        <div class="text-2xl font-bold" data-aos="fade-up">
          <h2 class="text-[64px] leading-[84px] mb-10 font-medium italic">About</h2>
          <img class="mx-auto mb-5" src="/public/images/photo.png" alt="photo" />
          <p class="mb-1">Joanne Chen</p>
          <p class="mb-2">1997/10/10</p>
          <p class="pb-6 -mx-3">
            National Hex School Normal University<br />
            Department of Visual Design
          </p>
          <ul class="w-full border-t pt-7">
            <li class="list__dot mb-7" data-aos="fade-right">Founder of ‘’XXXD Official’’</li>
            <li class="list__dot mb-7" data-aos="fade-right" data-aos-delay="50">Graphic Designer</li>
            <li class="list__dot" data-aos="fade-right" data-aos-delay="100">Graphic Intern of Hex School</li>
          </ul>
        </div>
      </section>
      <section class="border-gray bg-black text-white pt-14 pb-40">
        <div class="container font-medium italic">
          <h2 class="text-[64px] leading-[84px] mb-3">My Brand ‘’XXXD’’</h2>
          <h3 class="h3 mb-8 italic">Just Keep XXXD Everyday</h3>
          <p class="text-sm italic mb-[68px]">
            2020 年創立的個人服飾品牌<br />
            引領叛逆少年開啟與社會對話的窗口<br />
            主打概念潮流T-Shirt
          </p>
          <ul class="flex flex-wrap justify-center gap-x-6 gap-y-10">
          <li class="w-full" data-aos="flip-down" data-aos-duration="1000">
            <img src="/public/images/brand_img1.png" class="mx-auto" alt="brand_img1" />
          </li>
          <li class="w-full flex-1" data-aos="flip-left" data-aos-duration="1000">
            <img src="/public/images/brand_img2.png" class="mx-auto" alt="brand_img2" />
          </li>
          <li class="w-full flex-1" data-aos="flip-right" data-aos-duration="1000">
            <img src="/public/images/brand_img3.png" class="mx-auto" alt="brand_img3" />
          </li>
          </ul>
        </div>
      </section>
      <section class="container pt-14 pb-36 font-medium italic">
        <h2 class="text-[64px] leading-[84px] mb-4 font-medium italic">Other Works</h2>
        <p class="mb-14">
          2016-2020 年累積的作品<br />海報/廣告/攝影/LOGO/3D
        </p>
        <ul class="flex flex-wrap gap-x-6 gap-y-12">
          <li data-aos="fade-up" data-aos-duration="800">
            <img src="/public/images/work_img1.png" alt="work_img1" class="mb-4" />
            <h3 class="text-normal font-medium italic">海報設計/2017</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            <img src="/public/images/work_img2.png" alt="work_img2" class="mb-4" />
            <h3 class="text-normal font-medium italic">海報設計/2018</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
            <img src="/public/images/work_img3.png" alt="work_img3" class="mb-4" />
            <h3 class="text-normal font-medium italic">海報設計/2018</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <img src="/public/images/work_img4.png" alt="work_img4" class="mb-4" />
            <h3 class="text-normal font-medium italic">概念攝影/2018</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            <img src="/public/images/work_img5.png" alt="work_img5" class="mb-4" />
            <h3 class="text-normal font-medium italic">概念攝影/2018</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <img src="/public/images/work_img6.png" alt="work_img6" class="mb-4" />
            <h3 class="text-normal font-medium italic">sasa 酒標設計/2019</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            <img src="/public/images/work_img7.png" alt="work_img7" class="mb-4" />
            <h3 class="text-normal font-medium italic">攝影創作/2018</h3>
          </li>
          <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
            <img src="/public/images/work_img8.png" alt="work_img8" class="mb-4" />
            <h3 class="text-normal font-medium italic">官網設計/2020</h3>
          </li>
        </ul>
      </section>
    </main>
    <footer class="bg-black text-white pt-16 pb-16">
      <div class="container text-center font-medium italic">
        <h2 class="text-[64px] leading-[84px] mb-2">Contact</h2>
        <address class="flex flex-col items-center text-2xl leading-normal" data-aos="fade-in">
          <a
            class="text-inherit p-2 relative after:absolute after:left-0 after:translate-y-full after:top-full after:h-[1px] after:w-full after:bg-white after:opacity-0 after:overflow-hidden after:transition after:duration-300 hover:after:opacity-100 hover:after:-translate-y-full"
            href="mailto:xxx@hexschool.com"
            >Mail：xxxd@hexschool.com</a
          >
          <a
            class="text-inherit p-2 relative after:absolute after:left-0 after:translate-y-full after:top-full after:h-[1px] after:w-full after:bg-white after:opacity-0 after:overflow-hidden after:transition after:duration-300 hover:after:opacity-100 hover:after:-translate-y-full"
            href="tel:+886910123456"
            >Phone Number：0910123456</a
          >
        </address>
      </div>
    </footer>
`;
