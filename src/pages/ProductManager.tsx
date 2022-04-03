import React, {useState} from 'react'
import { ProductType } from '../types/product'
import { Table, Tag, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

type ProductManagerProps = {
    data: ProductType[],
    onRemove: (id:number) => void;
}
interface DataType {
    key: React.Key;
    name: string;
    price: number
}
const columns = [
{   
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
},
{
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
},
{
    title: 'Action',
    key: 'action',
    render: () => (
    <Space size="middle">
        <a><EditOutlined /></a>
        <a><DeleteOutlined /></a>
    </Space>
    ),
},
];
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
            <Table columns={columns} dataSource={dataSource} />
        </div>
    )
}

export default ProductManager