import React, { useEffect, useState } from 'react';
import c from './Car.module.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Car = () => {
    const [cars, setCars] = useState([]);
    const [visibleCars, setVisibleCars] = useState(4);

    useEffect(() => {
        axios.get('https://api.tasksforwork.uz/api/car')
            .then((res) => {
                setCars(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleSeeMore = () => {
        setVisibleCars(prevVisibleCars => prevVisibleCars + 4); 
    };

    return (
        <div id='cars' className={c.car_container}>
            <h2>OMMABOP  <span style={{ color: "rgb(119, 230, 243)" }}>ELEKTROMOBILLAR</span></h2>
            <div className={c.car_wrapper}>
                {cars.slice(0, visibleCars).map((car, index) => (
                    <Link
                        className={c.car_link}
                        to={`/single-car/${car.id}`}
                        key={car.id} 
                    >
                        <div className={c.car}>
                            <div className={c.image}>
                                <img src={car.image_url} alt='Car' />
                                <p className={c.car_price}> {car.price} USD</p>
                            </div>
                            <div>
                                <h2>{car.model}</h2>
                                <p><b>Yili:</b> {car.year}</p>
                                <p><b>Rangi:</b>
                                    {car.color.map((color, index) => (
                                        <span key={index}>
                                            {color}
                                            {index < car.color.length - 1 ? ', ' : ''}
                                        </span>
                                    ))}
                                </p>

                                <p><b>Turi:</b> {car.type}</p>
                                <p>
                                    {car.description.split(' ').slice(0, 30).join(' ')}...
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {visibleCars < cars.length && (
                <button onClick={handleSeeMore}>Ko'proq Ko'rish</button>
            )}
        </div>
    );
};

export default Car;
