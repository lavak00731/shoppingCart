const scrollIntoView = () => {
    const firstElem = document.querySelector('.first-list-elem') as HTMLElement;
    firstElem?.focus();
    firstElem?.scrollIntoView({ behavior: "smooth", block: "start" })
    firstElem.classList.remove('first-list-elem')
}
const showProd = () => {
    const listElems = document.querySelectorAll('#list li.hidden');
    let loopContrl = 0;
    for (let index = 0; index < listElems.length; index++) {
        const element = listElems[index];
        if(loopContrl <= 3) {
            element.classList.remove('hidden')
        }    
        if(index === 0) {
            element.classList.add('first-list-elem');
        } 
        loopContrl++;        
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
}
export default addEvents