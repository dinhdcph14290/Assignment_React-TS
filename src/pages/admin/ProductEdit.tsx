import React, { useEffect } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form';
import {useNavigate, useParams} from 'react-router-dom';
import { read } from '../../api/product';
import { ProductType } from '../../types/product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}
const ProductEdit = (props: ProductEditProps) => {
    const {id} = useParams();
    // console.log(id);
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const navigate = useNavigate();
    // Call API
    useEffect(() => {
        const getProduct = async () => {
            const {data} = await read(id)
            reset(data)
        }
        getProduct();
    },[]);
    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data); //Shoot props up
        navigate('/admin/products');
    }
    return (
        <div className='container-sm'>
        <form action='' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Product's name</label>
                <input type="text" className="form-control" {...register('name',{required: true, minLength:6})} />
                {errors.name && errors.name.type === "required" && <span className ="text-danger">This field cannot be left blank!</span>}
                {errors.name && errors.name.type === "minLength" && <span className ="text-danger">Length must be greater than or equal to 6</span>}
            </div>
            <div className="mb-3">
                <label className="form-label">Product Price</label>
                <input type="number" className="form-control" {...register('price',{required:true})}/>
                {errors.price && errors.price.type === "required" && <span className ="text-danger">This field cannot be left blank!</span>}
            </div>
            <button className="btn btn-primary">UPDATE</button>
        </form>
    </div>
    )
}

export default ProductEdit