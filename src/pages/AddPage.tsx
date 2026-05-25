// import './AddPage.css'

import BurgerForm from "@/features/burgerForm/BurgerForm";

function AddPage() {
  return (
    <>
      <div className="w-screen min-h-screen flex flex-col justify-start items-center bg-brand-dark">
        <div className="w-full container max-w-6xl pt-14">
          <h2 className="text-2xl mb-8">Add your burger spot</h2>

          <BurgerForm />
        </div>
      </div>
    </>
  );
}

export default AddPage;
