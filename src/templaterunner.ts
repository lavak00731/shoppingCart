const templaterunner = (prod) => {
    const target = document.querySelector<HTMLUListElement>('#list');
    const item = `<div class="max-w-44 -m-2 relative">
                    <figure class="bg-orange-100">
                        <img src="${prod.thumbnail}" alt="">
                    </figure>
                    <span class="absolute inset-2">Best seller</span>
                    <span class="${prod.discountPercentage <= 10 ? 'hidden' : ''}">Save ${Math.round(prod.discountPercentage)}%</span>
                    <h2>${prod.title}</h2>
                    <p>
                        <span class="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span>${prod.reviews.length} Reviews</span>
                    </p>             
                    <p>$ ${prod.price}</p>
                </div>`;
                
            const tempLi = document.createElement('li');
            
            tempLi.innerHTML = item;          
            if (tempLi) {
                target?.appendChild(tempLi);
            }
}
export default templaterunner;