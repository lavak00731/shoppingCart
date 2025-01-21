import './style.css';
import getProducts from './data/getProducts';
import templaterunner from './templaterunner'

const elems =  async () => {
  const request = await getProducts();
  const prods = []
  if(request.length > 0) {
    document.querySelector<HTMLElement>('#app')!.innerHTML = `<ul id="list" class="flex flex-row flex-wrap gap-y-4 justify-between"></ul>`;
    request.forEach((prod) => {
      prods.push(templaterunner(prod));
    });    
    return prods;
  } else {
    document.querySelector<HTMLElement>('#app')!.innerHTML = `<h2>Sorry something went wrong, please try again in a couple of minutes</h2>`
  }
  
};
elems();



