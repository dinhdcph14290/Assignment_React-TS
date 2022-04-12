import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    return (
    <div className="overview-boxes">
        <div className="box">
        <div className="right-side">
            <div className="box-topic">Total Order</div>
            <div className="number">99,999+</div>
            <div className="indicator">
            <i className="bx bx-up-arrow-alt" />
            <span className="text">Up from yesterday</span>
            </div>
        </div>
        <i className="bx bx-cart-alt cart" />
        </div>
        <div className="box">
        <div className="right-side">
            <div className="box-topic">Total Sales</div>
            <div className="number">20,000</div>
            <div className="indicator">
            <i className="bx bx-up-arrow-alt" />
            <span className="text">Up from yesterday</span>
            </div>
        </div>
        <i className="bx bxs-cart-add cart two" />
        </div>
        <div className="box">
        <div className="right-side">
            <div className="box-topic">Total Profit</div>
            <div className="number">$92,901</div>
            <div className="indicator">
            <i className="bx bx-up-arrow-alt" />
            <span className="text">Up from yesterday</span>
            </div>
        </div>
        <i className="bx bx-cart cart three" />
        </div>
        <div className="box">
        <div className="right-side">
            <div className="box-topic">Total Return</div>
            <div className="number">11,086</div>
            <div className="indicator">
            <i className="bx bx-down-arrow-alt down" />
            <span className="text">Down From Today</span>
            </div>
        </div>
        <i className="bx bxs-cart-download cart four" />
        </div>
    </div>

    )
}

export default Dashboard