import React, { ReactChild, ReactNode, FC, useState, useEffect } from 'react';

export enum CardVariant {
    outlined,
    primary
}


interface CardProps {
    width: string,
    height: string,
    variant: CardVariant
    onClick: (num: number) => void
    // children?:ReactChild|ReactNode,///? - это значит что не обязательный параметр
}

// const Cards = ({ width,height,children}: CardProps)
const Cards: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
    const [state, setState] = useState(0);
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ?
                '1px solid grey' : 'none',
            backgroundColor: variant === CardVariant.primary ?
                'lightgray' : ''
        }} onClick={() => { onClick(state) }}>
            {children}
        </div>
    )

}

export default Cards