import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; 
import { IconContext } from "react-icons"; 
import CarCard from "./CarCard";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Product = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);


  const [itemsPerPage] = useState(6); 

  useEffect(() => {
    fetch("/cars.json")
      .then(res => res.json())
      .then(data => {
        setCars(data);
      });
  }, []);



  // pagination
  const totalCars = cars.length;
  const pageCount = Math.ceil(totalCars / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = cars.slice(offset, offset + itemsPerPage);

  const handlePageClick = selected => {
    setCurrentPage(selected.selected);
  };

  // handle search function
  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  const filteredCars = currentItems.filter(car =>
    car.carName.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <div className="mt-5 mb-11   ">
      {/* Product search bar */}

      <section>
        <div className="navbar bg-base-100">
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                value={searchQuery}
                onChange={handleSearchInputChange}
                type="text"
                placeholder="Search  by Car Name"
                className="input input-bordered w-30 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <select
                defaultValue="Relevance"
                className="select w-full max-w-xs"
              >
                <option>Relevance</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>
            <div className="dropdown dropdown-end">
              <select
                defaultValue="All Brands"
                className="select w-full max-w-xs border-0"
              >
                <option>All Brands</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* car display section */}
      <section className=" w-full ">
        <CarCard filteredCars={filteredCars} currentItems={currentItems} />
      </section>

      {/* pagination */}
      <section className="flex justify-between items-center mx-5 bg-[#dee6f3] p-2 rounded-3xl shadow-bottom  ">
        <div>
          <p className="bg-[#dee6f3]">
            {currentPage + 1} of {pageCount}
          </p>
        </div>

        <div className=" ">
          <ReactPaginate
            className="flex gap-3 items-center "
            breakLabel={"..."}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            activeClassName={"active"}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel={
              <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                <AiFillLeftCircle />
              </IconContext.Provider>
            }
            nextLabel={
              <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                <AiFillRightCircle />
              </IconContext.Provider>
            }
          ></ReactPaginate>
        </div>
      </section>
    </div>
  );
};

export default Product;
