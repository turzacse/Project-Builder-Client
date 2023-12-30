import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSquareMore } from "react-icons/ci";
import { MdMore } from "react-icons/md";
import { MdBrowserUpdated } from "react-icons/md";
import { MdAutoDelete } from "react-icons/md";




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
                            <div className="card-actions justify-evenly">
                                <Link  to={`/details/${item._id}`} className="btn bg-yellow-200 text-2xl text-green-500"><MdMore/></Link>
                                <Link  to={`/details/${item._id}`} className="btn bg-yellow-200 text-2xl"><MdBrowserUpdated/></Link>
                                <Link className="btn bg-yellow-200 text-2xl text-red-500"><MdAutoDelete/></Link>
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