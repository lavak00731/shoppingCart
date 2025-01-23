const scrollIntoView = () => {
    const firstElem = document.querySelector('.first-list-elem') as HTMLElement;
    firstElem?.focus();
    firstElem?.scrollIntoView({ behavior: "smooth", block: "start" })
    firstElem.classList.remove('first-list-elem')
}
const showProd = () => {
    const listElems = document.querySelectorAll('#list li.hidden');

    for (let index = 0; index < listElems.length; index++) {
        const element = listElems[index]; 
        if(index === 0) {
            element.classList.add('first-list-elem');
        } 
        element.classList.remove('hidden');
    }
    scrollIntoView();
}

const addEvents = () => {
    const bodyElem = document.body;
    bodyElem.addEventListener('click', (e)=>{
        const trigger = e.target as HTMLElement;
        if(trigger?.classList.contains('triggerBtn')) {
            showProd();
        }
    })
    document.addEventListener("mousemove", function(e){
        let ele = document.querySelector('#list') as HTMLElement;
        let distance = ele?.offsetLeft + ele?.offsetWidth - e.pageX;
        distance < 15 && distance > -15 ? ele.classList.add('more-width') : ele.classList.remove('more-width');
    });
}
export default addEvents