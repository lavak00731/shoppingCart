import './style.css';
import getProducts from './data/getProducts';
import templaterunner from './templaterunner'

const elems =  async () => {
  const request = await getProducts();
  const prods = []
  if(request.length > 0) {
    document.querySelector<HTMLElement>('#app')!.innerHTML = `<ul id="list" class="grid grid-cols-2 md:grid-cols-4 lg:flex lg:overflow-x-auto lg:space-x-4 lg:w-5/6 lg:mx-auto lg:"></ul>`;
    request.forEach((prod, i) => {
      prods.push(templaterunner(prod, i));
    });    

  } else {
    document.querySelector<HTMLElement>('#app')!.innerHTML = `<h2>Sorry something went wrong, please try again in a couple of minutes</h2>`
  }
  
};
elems();



