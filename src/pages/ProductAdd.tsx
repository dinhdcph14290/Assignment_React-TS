import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { ProductType } from '../types/product';

type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormValues = {
    name: string,
    price: number,
};
const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>()
    const onSubmit:SubmitHandler<FormValues> = (data) => {
        // console.log(data)
        props.onAdd(data)
    }
    return (
    <div className='container-sm'>
        <form action='' onSubmit={handleSubmit<FormValues>(onSubmit)}>
            <div className="mb-3">
                <label className="form-label">Product's name</label>
                <input type="text" className="form-control" {...register('name',{required: true, minLength:6})} />
                {errors.name && errors.name.type === "required" && <span>Require</span>}
                {errors.name && errors.name.type === "minLength" && <span>Min Length</span>}
            </div>
            <div className="mb-3">
                <label className="form-label">Product Price</label>
                <input type="number" className="form-control" {...register('price',{required:true})}/>
            </div>
            <button className="btn btn-primary">ADD</button>
        </form>
    </div>
    )
}

export default ProductAdd