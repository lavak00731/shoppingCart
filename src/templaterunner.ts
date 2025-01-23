import starsCreator from "./starsCreator";
const templaterunner = (prod:any, i:number) => {
    const target = document.querySelector<HTMLUListElement>('#list');
    const item = `<div class="relative">
                    <figure class="bg-orange-100 rounded-lg mb-4 relative group">
                        <img class="relative z-10 transition-opacity duration-300 ease-in-out group-hover:opacity-0" src="${prod.thumbnail}" alt="">
                        <img class="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" src="https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png" alt="">
                    </figure>
                    <span class="absolute uppercase z-20 top-1 left-1 lg:top-2 lg:left-2 rounded-2xl p-1 bg-white border-2 border-black font-sans text-center text-xs lg:text-sm">Best seller</span>
                    <span class="absolute uppercase z-20 top-1 right-1 lg:top-2 lg:right-5 rounded-2xl p-1 bg-lime-900 text-white border-2 border-black font-sans text-center text-xs lg:text-sm ${prod.discountPercentage <= 10 ? 'hidden' : ''}">Save ${Math.round(prod.discountPercentage)}%</span>
                    <h2 class="font-sans font-semibold uppercase text-lg lg:text-2xl mb-3 lg:mb-5">${prod.title}</h2>
                    <p class="mb-3">
                        ${starsCreator(prod.rating)}
                        <span class="font-sans text-gray-600 text-sm lg:text-lg">${prod.reviews.length} Reviews</span>
                    </p>             
                    <p class="font-sans font-semibold text-xl">$ ${prod.price}</p>
                </div>`;
                
            const tempLi = document.createElement('li');
            tempLi.innerHTML = item;    
            if(i >= 4)  {
                tempLi.classList.add('hidden', 'lg:block')
            }
            tempLi.classList.add('lg:flex-shrink-0', 'lg:basis-46', 'lg:max-w-60');
            tempLi.setAttribute('tabIndex', '-1');
            if (tempLi) {
                target?.appendChild(tempLi);
            }
}
export default templaterunner;