import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdMore } from "react-icons/md";
import { MdBrowserUpdated } from "react-icons/md";
import { MdAutoDelete } from "react-icons/md";
import Swal from "sweetalert2";




const Card = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/project')
            .then(res => res.json())
            .then(data => {
                setProject(data);
            })
    }, [])

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
             fetch(`http://localhost:5001/project/${_id}`,{
                method: 'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                      )
                      const remain = project.filter(cart => cart._id !== _id);
                      console.log(remain);
                      setProject(remain);
                }
             })
            }
          })
    }

    console.log(project);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                project.map(item => <div className="" key={item.id}>
                    <div className="">

                    <div className="card-compact bg-base-100 shadow-xl">
                        
                        <figure><img className="shadow-2xl h-[200px] w-full rounded-xl" src={item.download_url || item.img} alt="Shoes" /></figure>
                        <div className="card-body">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">{item.projectName}</h2>
                            <h2 className="card-title">{item.author || item.name}</h2>
                            <div className="card-actions justify-evenly">
                                <Link  to={`/details/${item._id}`} className="btn bg-yellow-200 text-2xl text-green-500"><MdMore/></Link>
                                <Link  to={`/details/${item._id}`} className="btn bg-yellow-200 text-2xl"><MdBrowserUpdated/></Link>
                                <button
                                onClick={() => handleDelete(item._id)}
                                className="btn bg-yellow-200 text-2xl text-red-500"><MdAutoDelete/></button>
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