import starsCreator from "./starsCreator";
const templaterunner = (prod, i) => {
    const target = document.querySelector<HTMLUListElement>('#list');
    const item = `<div class="relative">
                    <figure class="bg-orange-100 rounded-lg mb-4">
                        <img src="${prod.thumbnail}" alt="">
                    </figure>
                    <span class="absolute uppercase top-1 left-1 lg:top-2 lg:left-2 rounded-2xl p-1 bg-white border-2 border-black font-sans text-center text-xs lg:text-sm">Best seller</span>
                    <span class="absolute uppercase top-2 right-5 rounded-2xl p-1 bg-lime-900 text-white border-2 border-black font-sans text-center text-xs lg:text-sm ${prod.discountPercentage <= 10 ? 'hidden' : ''}">Save ${Math.round(prod.discountPercentage)}%</span>
                    <h2 class="font-sans font-semibold uppercase text-lg lg:text-xl mb-3 lg:mb-5">${prod.title}</h2>
                    <p class="mb-3">
                        ${starsCreator(prod.rating)}
                        <span class="font-sans text-gray-600 font-sm font-medium align-top">${prod.reviews.length} Reviews</span>
                    </p>             
                    <p class="font-sans font-semibold text-lg">$ ${prod.price}</p>
                </div>`;
                
            const tempLi = document.createElement('li');
            tempLi.innerHTML = item;    
            if(i >= 4)  {
                tempLi.classList.add('hidden', 'md:block')
            }
            tempLi.classList.add('lg:flex-shrink-0', 'lg:basis-46')
            if (tempLi) {
                target?.appendChild(tempLi);
            }
}
export default templaterunner;