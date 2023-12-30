import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/project')
            .then(res => res.json())
            .then(data => {
                setProject(data);
            })
    }, [])

    console.log(project);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                project.map(item => <div className="" key={item.id}>
                    <div className="">

                    <div className="card-compact bg-base-100 shadow-xl">
                        <figure><img className="shadow-2xl h-[200px] w-full rounded-xl" src={item.download_url || item.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.author || item.name}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <Link  to={`/details/${item._id}`} className="btn bg-yellow-200">Explore More</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Card;