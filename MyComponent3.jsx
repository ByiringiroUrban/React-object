import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyComponent3(){
    const[car, setCar] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear(2024))
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("")

    function handleAddCar(e){

            const newCar = {year: carYear,
                             make: carMake,
                            model: carModel};
            setCar(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("")
        setCarModel("")
    }   

    function handleRemoveCar(index){
        setCar(C => C.filter((_, i) => i !== index))

    }
    function handleYearChange(e){
        setCarYear(e.target.value);
    }
   
    function handleMakeChange(e){
        setCarMake(e.target.value);
    }
    function handleModelChange(e){
        setCarModel(e.target.value);

    }
    return(

        <div>
            <h2>List of Cars Objects</h2>
            <ol>
                {car.map((cars, index) => 
                    <li className="list" key={index} onClick={() => handleRemoveCar(index)}>{cars.year}<br></br>
                                    {cars.make}<br></br>
                                    {cars.model}
                                    </li>)}
            </ol>
            <input type="number" value={carYear} onChange={handleYearChange}/><br /><br />
            <input type="text" value={carMake} onChange={handleMakeChange}
             placeholder="Enter car make" /><br></br><br></br>
             <input type="text" value={carModel} onChange={handleModelChange}
             placeholder="Enter car model" /> <br /><br />
             <button className="btn btn-warning btn-lg" onClick={handleAddCar}>Add Car</button>

        </div>
    )
}