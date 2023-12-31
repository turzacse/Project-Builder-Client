import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    console.log(id);

    const [product, setProduct] = useState([]);
    const [selected, setSelected] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5001/project')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setIsLoading(false);
            })
    }, [])

    useEffect(() => {
        const select = product.filter(p => p._id === id);
        setSelected(select);
        setIsLoading(false);
    }, [id, product])

    console.log(selected[0]);

    return (
        <div className='my-5 md:mx-20 ml-[80px]'>
            {/* details ccard */}
            <div className=" bg-base-100 shadow-xl">
                <figure><img className="rounded-xl md:h-[400px] md:w-[600px]" src={selected[0]?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className='lg:text-5xl text-2xl font-bold md:text-3xl' >{selected[0]?.projectName}</h2>
                    <h2 className="card-title">{selected[0]?.name}</h2>
                    <div className="md:flex justify-between">
                        {/* <h3><span className="font-semibold">Brand:</span> {brand}</h3> <h3 className="btn bg-success">{price}TK</h3> */}
                    </div>
                    <p className="text-gray-400">{selected[0]?.description}</p>
                    <div className="card-actions justify-end">
                        {/* <button onClick={handleAdd} className="btn btn-warning text-white hover:bg-red-400">Add to Cart</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;