const addBtn = () => {
    const btn = document.createElement('button');
    const prodList = document.querySelector('#list');
    btn.classList.add('bg-cta-color', 'text-white', 'font-xl', 'leading-[22.4px]', 'font-poppins', 'rounded-3xl', 'p-4', 'w-full', 'font-[500]', 'triggerBtn', 'sm:hidden');
    btn.textContent = "Show More";
    prodList?.after(btn);
  }
export default addBtn;