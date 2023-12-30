import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddProject = () => {

    const image_hosting_key = 'https://api.imgbb.com/1/upload?key=39cd3de230380fc39b116f0d1af689bd';

    const [img, setImg]= useState('')
    const handleUpload = async (e) => {
        e.preventDefault();

        const file = e.target.files[0]; // Get the selected file
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch(image_hosting_key, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Image hosted successfully. URL:', data.data.url);
                setImg(data.data.url);
                return data.data.url;
            } else {
                throw new Error('Image hosting failed');
            }
        } catch (error) {
            console.error('Error hosting image:', error);
            return null;
        }
    };


    console.log(img);
    //console.log(handleUpload);
    const handleAddProject = e =>{
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const description = form.description.value;

        if (!img) {
            console.log("Image upload in progress. Please wait.");
            Swal.fire({
                icon: 'success',
                title: 'Image upload in progress. Please wait.',
                showConfirmButton: false,
                timer: 1500
              })
            return;
        }
        const project = {name, description,img}

        console.log(project);
        //send data 
        fetch('http://localhost:5001/project',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Your product has been added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        // e.target.reset();
    }
    return (
        <div>
            <div className="bg-base-200 p-10 md:w-1/2 w-full mx-auto shadow-2xl">
                <h3 className="text-2xl font-semibold text-center mb-10">Add A New Project</h3>
                <form onSubmit={handleAddProject}>

                    <input
                                type="file"
                                required
                                className="mt-4"
                                accept="image/*"
                                onChange={handleUpload} // Handle the file upload
                    />

                    <input type="text" name="name" placeholder="Author Name" className="input input-bordered w-full my-4" required />

                    <input type="text" name="description" placeholder="Project Description" className="input input-bordered w-full my-4" required />

                    <input type="submit" className="btn w-full bg-yellow-200" value="Add a project" />

                </form>
            </div>
        </div>
    );
};

export default AddProject;