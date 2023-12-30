import { useEffect, useState } from "react";

const Card = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page=1&limit=6')
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
                        <figure><img className="shadow-2xl rounded-xl" src={item.download_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.author}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Explore More</button>
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