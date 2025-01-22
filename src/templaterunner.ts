import starsCreator from "./starsCreator";
const templaterunner = (prod, i) => {
    const target = document.querySelector<HTMLUListElement>('#list');
    const item = `<div class="relative">
                    <figure class="bg-orange-100 rounded-lg mb-4">
                        <img src="${prod.thumbnail}" alt="">
                    </figure>
                    <span class="absolute top-1 left-1 rounded-2xl p-1 bg-white border-2 border-black font-sans text-center text-xs">Best seller</span>
                    <span class="absolute top-1 right-1 rounded-2xl p-1 bg-lime-900 text-white border-2 border-black font-sans text-center text-xs ${prod.discountPercentage <= 10 ? 'hidden' : ''}">Save ${Math.round(prod.discountPercentage)}%</span>
                    <h2 class="font-sans font-semibold uppercase text-lg mb-3">${prod.title}</h2>
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
            
            if (tempLi) {
                target?.appendChild(tempLi);
            }
}
export default templaterunner;