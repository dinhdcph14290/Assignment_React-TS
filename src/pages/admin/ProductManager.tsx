import React, {useState} from 'react'
import { ProductType } from '../../types/product'
import { Table, Tag, Space, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

type ProductManagerProps = {
    data: ProductType[],
    onRemove: (_id:number) => void;
}
// interface DataType {
//     key: React.Key;
//     name: string;
//     price: number
// }
// const columns = [
// {   
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
// },
// {
//     title: 'Price',
//     dataIndex: 'price',
//     key: 'price',
// },
// {
//     title: 'Action',
//     key: 'action',
//     render: () => (
//     <Space size="middle">
//         <Link to={`/edit`}><EditOutlined /></Link>
//         <Button type='primary' danger><DeleteOutlined /></Button>
//     </Space>
//     ),
// },
// ];
const ProductManager = (props: ProductManagerProps) => {
    const dataSource = props.data.map((item, index) => {
        return {
            key: index + 1,
            name: item.name,
            price: item.price
        }
    });
    return (
        <div className='container'>
            {/* <Table columns={columns} dataSource={dataSource} /> */}
            <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {props.data && props.data.map((item, index) => {
                return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                        <Link to={`/admin/products/${item._id}/edit`}>Edit</Link>   
                        <button onClick={() => props.onRemove(item._id)}>Remove</button>
                        </td>
                    </tr>
            })}
            
            </tbody>
    </table>
        </div>
    )
}

export default ProductManager