import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { ProductType } from '../../types/product';
import { useNavigate } from 'react-router-dom'

type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormValues = {
    name: string,
    price: number
};
const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit:SubmitHandler<FormValues> = (data) => {
        props.onAdd(data);
        console.log(data);
        navigate('/admin/products')
    }
    return (
    <div className='container-sm'>
        <form action='' onSubmit={handleSubmit<FormValues>(onSubmit)}>
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
            <button className="btn btn-primary">ADD</button>
        </form>
    </div>
    )
}

export default ProductAdd