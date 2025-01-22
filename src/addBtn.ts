const addBtn = () => {
    const btn = document.createElement('button');
    const prodList = document.querySelector('#list');
    btn.classList.add('bg-black', 'text-white', 'font-xl', 'font-sans', 'rounded-3xl', 'p-3', 'w-full', 'font-semibold', 'triggerBtn', 'sm:hidden');
    btn.textContent = "Show More";
    prodList?.after(btn);
  }
export default addBtn;