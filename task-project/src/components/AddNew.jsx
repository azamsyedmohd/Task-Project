/* eslint-disable react/prop-types */
const AddNew = ({ setOpen }) => {
  return (
    <>
      <button
        className="shadow-lg bg-black text-white hover:bg-white hover:text-black text-md px-5 py-2 rounded-md italic hover:border hover:border-solid hover:border-black"
        onClick={() => setOpen(true)}
      >
        Add New
      </button>
    </>
  );
};
export default AddNew;
