import './style.css';
import getProducts from './data/getProducts';
import templaterunner from './templaterunner'
import addBtn from './addBtn';
import addEvents from './addEvents';
import 'overlayscrollbars/overlayscrollbars.css';
//@ts-ignore
import { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin 
} from 'overlayscrollbars';



const init =  async () => {
  const request = await getProducts();
  const prods = [];
  const app = document.querySelector<HTMLElement>('#app');
  if(request.length > 0) {
    app!.innerHTML = `<div id="gralWrapper" class="wrapper lg:overflow-x-auto lg:w-7/8 lg:mx-auto"><ul id="list" class="mb-6 grid grid-cols-2 md:grid-cols-4 gap-x-[11px] gap-y-[12px] lg:flex lg:mb-12 lg:w-full  lg:z-10 lg:gap-x-[24px]"></ul></div>`;
    request.forEach((prod:any, i:number) => {
      prods.push(templaterunner(prod, i));
    });
    addBtn();    
    addEvents();
    //@ts-ignore
    const osInstance = OverlayScrollbars(document.querySelector('#gralWrapper'), {})
  } else {
    document.querySelector<HTMLElement>('#app')!.innerHTML = `<h2>Sorry something went wrong, please try again in a couple of minutes</h2>`
  }  
};
init();






