// import utils from './utils';

// /*-----------------------------------------------
// |  Swiper
// -----------------------------------------------*/
// const swiperInit = () => {
//   const swipers = document.querySelectorAll('[data-swiper]');
//   const navbarVerticalToggle = document.querySelector(
//     '.navbar-vertical-toggle'
//   );
//   swipers.forEach((swiper) => {
//     const options = utils.getData(swiper, 'swiper');
//     const thumbsOptions = options.thumb;
//     let thumbsInit;
//     if (thumbsOptions) {

//       const thumbImages = swiper.querySelectorAll('img');
//       let slides = '';
//       thumbImages.forEach((img) => {
//         slides += `
//           <div class='swiper-slide '>
//             <img class='img-fluid rounded mt-1 gallery-thumbs' src=${img.src}  alt='thumb'/>
//           </div>
//         `;
//       });

//       const thumbs = document.createElement('div');
//       thumbs.setAttribute('class', 'swiper-container thumb');
//       thumbs.innerHTML = `<div class='swiper-wrapper'>${slides}</div>`;

//       if (thumbsOptions.parent) {
//         const parent = document.querySelector(thumbsOptions.parent);
//         parent.parentNode.appendChild(thumbs);
//       } else {
//         swiper.parentNode.appendChild(thumbs);
//       }

//       thumbsInit = new window.Swiper(thumbs, thumbsOptions);
//     }

//     const swiperNav = swiper.querySelector('.swiper-nav');
//     const newSwiper = new window.Swiper(swiper, {
//       ...options,
//       navigation: {
//         nextEl: swiperNav?.querySelector('.swiper-button-next'),
//         prevEl: swiperNav?.querySelector('.swiper-button-prev'),
//       },
//       thumbs: {
//         swiper: thumbsInit,
//       },
//     });
//     if( navbarVerticalToggle){
//       navbarVerticalToggle.addEventListener('navbar.vertical.toggle', () => {
//         newSwiper.update();
//       });
//     }
   
//   });
// };

// export default swiperInit;










const swipers = document.querySelectorAll('[data-swiper]');
/* eslint-disable */
function deepMerge(...sources) {
  let acc = {}
  for (const source of sources) {
    if (source instanceof Array) {
      if (!(acc instanceof Array)) {
        acc = []
      }
      acc = [...acc, ...source]
    } else if (source instanceof Object) {
      for (let [key, value] of Object.entries(source)) {
        if (value instanceof Object && key in acc) {
          value = deepMerge(acc[key], value)
        }
        acc = { ...acc, [key]: value }
      }
    }
  }
  return acc
}

function swiperInit(){
  swipers.forEach(swiper => {
    return new window.Swiper(swiper, deepMerge(
      
      
      {
        freeMode: true,
        cssMode: false,
        slideToClickedSlide : true,
       
        navigation: {
          nextEl: '.swiper-button-next ',
          prevEl: '.swiper-button-prev ',
        },

       
        breakpoints: {
          670: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          670: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }
        
      },
      swiper.dataset.option ? JSON.parse(swiper.dataset.option) : {}
    ));
    
  })
  
}

export default swiperInit;




// import utils from './utils';

// /*-----------------------------------------------
// |  Swiper
// -----------------------------------------------*/
// const swiperInit = () => {
//   const swipers = document.querySelectorAll('[data-swiper]');
//   const navbarVerticalToggle = document.querySelector(
//     '.navbar-vertical-toggle'
//   );
//   swipers.forEach((swiper) => {
//     const options = utils.getData(swiper, 'swiper');
//     const thumbsOptions = options.thumb;
//     let thumbsInit;
//     if (thumbsOptions) {
//       const thumbImages = swiper.querySelectorAll('img');
//       let slides = '';
//       thumbImages.forEach((img) => {
//         slides += `
//           <div class='swiper-slide '>
//             <img class='img-fluid rounded mt-1' src=${img.src} alt=''/>
//           </div>
//         `;
//       });

//       const thumbs = document.createElement('div');
//       thumbs.setAttribute('class', 'swiper-container thumb');
//       thumbs.innerHTML = `<div class='swiper-wrapper'>${slides}</div>`;

//       if (thumbsOptions.parent) {
//         const parent = document.querySelector(thumbsOptions.parent);
//         parent.parentNode.appendChild(thumbs);
//       } else {
//         swiper.parentNode.appendChild(thumbs);
//       }

//       thumbsInit = new window.Swiper(thumbs, thumbsOptions);
//     }

//     const swiperNav = swiper.querySelector('.swiper-nav');
//     const newSwiper = new window.Swiper(swiper, {
//       ...options,
//       navigation: {
//         nextEl: swiperNav?.querySelector('.swiper-button-next'),
//         prevEl: swiperNav?.querySelector('.swiper-button-prev'),
//       },
//       thumbs: {
//         swiper: thumbsInit,
//       },
//     });
//     if( navbarVerticalToggle){
//       navbarVerticalToggle.addEventListener('navbar.vertical.toggle', () => {
//         newSwiper.update();
//       });
//     }
   
//   });
// };

// export default swiperInit;
