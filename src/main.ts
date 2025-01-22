import './style.css';
import getProducts from './data/getProducts';
import templaterunner from './templaterunner'


const elems =  async () => {
  const request = await getProducts();
  const prods = [];
  const app = document.querySelector<HTMLElement>('#app');
  if(request.length > 0) {
    app!.innerHTML = `<ul id="list" class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:flex lg:overflow-x-auto lg:w-7/8 lg:mx-auto lg:pb-8"></ul>`;
    request.forEach((prod, i) => {
      prods.push(templaterunner(prod, i));
    });    

  } else {
    document.querySelector<HTMLElement>('#app')!.innerHTML = `<h2>Sorry something went wrong, please try again in a couple of minutes</h2>`
  }  
};
elems();





