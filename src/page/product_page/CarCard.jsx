
import SingleCar from "./SingleCar";


const CarCard = ({ filteredCars }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mx-5 my-5  ">
      {filteredCars?.map(car => (
        <SingleCar key={car.id} car={car} />
      ))}
  
    </div>
  );
};

export default CarCard;
