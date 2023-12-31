import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const { id } = useParams();
    console.log(id);

    const [product, setProduct] = useState([]);
    const [selected, setSelected] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://necleo-project-builder.vercel.app/project')
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

    const handleUpdate = e =>{
        e.preventDefault();

        const form = e.target;

        
        const name = form.name.value;
        const projectName = form.projectName.value;
        const description = form.description.value;
        

        const project = {name, projectName, description}

        console.log(project);

        fetch(`https://necleo-project-builder.vercel.app/project/${selected[0]?._id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Your project has been Updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  window.location.href = '/';
            }
        })
    }

    return (
        <div className='bg-base-200 p-10 md:w-1/2 w-full mx-auto shadow-2xl'>
            
            <h3 className="text-2xl font-semibold text-center mb-10">Update the Project</h3>
            <form onSubmit={handleUpdate}>
            
            <input type="text" readOnly name="name" placeholder="Project Name" className="input input-bordered w-full my-4" defaultValue={selected[0]?.name} required/>

            <input type="text" name="projectName" placeholder="Project Name" className="input input-bordered w-full my-4" defaultValue={selected[0]?.projectName} required/>

            {/* <input type="text" name="description" placeholder="Project Name" className="input input-bordered w-full my-4" defaultValue={selected[0]?.description} required/> */}

            <textarea name="description" placeholder="Project Name" className="input input-bordered w-full my-4" required defaultValue={selected[0]?.description}></textarea>


            <input type="submit" className="btn w-full bg-yellow-200" value="Update" />

        </form>
        </div>
    );
};

export default Update;