import React from 'react';

const CardComponents = (item) => {
    return (
        <div>
            <div className="grid md:grid-cols-2">

                <div className="card-compact bg-base-100 shadow-xl">
                    <figure><img src={item.download_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponents;