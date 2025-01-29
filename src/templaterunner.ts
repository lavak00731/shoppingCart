import starsCreator from "./starsCreator";
const templaterunner = (prod:any, i:number) => {
    const target = document.querySelector<HTMLUListElement>('#list');
    const item = `<div class="relative">
                        <figure class="bg-orange-100 rounded-[10px] mb-3 relative group lg:w-full lg:mb-4">
                            <img class="relative lg:w-full z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0" src="${prod.thumbnail}" alt="">
                            <img class="absolute lg:w-full inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" src="https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png" alt="">
                        </figure>
                        <span class="font-bebas absolute uppercase z-20 top-1 left-1 rounded-2xl px-2 py-1 bg-white border-2 border-black text-center text-[8px] leading-[9.6px] tracking-[4%] lg:top-2 lg:left-2">Best seller</span>
                        <span class="absolute uppercase z-20 top-1 right-1 rounded-2xl px-2 py-1 bg-discount-color text-white border-2 border-black font-bebas text-center text-[8px] leading-[9.6px] tracking-[4%] lg:top-2 lg:right-2" ${prod.discountPercentage <= 10 ? 'hidden' : ''}">Save ${Math.round(prod.discountPercentage)}%</span>
                        <div class="px-2 lg:px-3">
                            <h2 class="font-bebas font-normal uppercase text-cta-color text-base leading-[19.2px] mb-2 lg:text-[18px] lg:leading-[21.6px]">${prod.title}</h2>
                            <p class="mb-3">
                                ${starsCreator(prod.rating)}
                                <span class="font-poppins text-review-color text-[11px] leading-[16.5px] font-normal lg:text-[12px] lg:leading-[18px]">${prod.reviews.length} Reviews</span>
                            </p>             
                            <p class="font-poppins font-[500] text-cta-color text-md mb-2 lg:mb-0">$ ${prod.price}</p>
                        </div>                        
                    </div>`;
                
            const tempLi = document.createElement('li');
            tempLi.innerHTML = item;    
            if(i >= 4)  {
                tempLi.classList.add('hidden', 'lg:block')
            }
            tempLi.classList.add('lg:flex-shrink-0', 'lg:basis-[355px]');
            tempLi.setAttribute('tabIndex', '-1');
            if (tempLi) {
                target?.appendChild(tempLi);
            }
}
export default templaterunner;