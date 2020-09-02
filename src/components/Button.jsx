import React from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

export default function Button({ className, children, outline }) {
    const { totalCount, totalPrice } = useSelector(({ cart }) => ({
        totalCount: cart.totalCount,
        totalPrice: cart.totalPrice,
    }))

    return (
        <button className={classNames('button', className,
            { 'button--outline': outline }
        )}>
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <i className="fa fa-shopping-cart" style={{ margin: '0px 8px 2px 0px', fontSize: '16px' }} ></i>
            <span>{totalCount}</span>
        </button>
    )
}
