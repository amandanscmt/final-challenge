import { Link } from 'react-router-dom'
import productImg from '../../../assets/image1.png'

import classes from './HorizontalProductCard.module.css'

interface ProductTitle {
    productTitle: string
}

const HorizProductCard = (props: ProductTitle) => {
    return (
        <div className={classes.horizCard}>
        <div className={classes.horizCardText}>
            <h1>{props.productTitle}</h1>
            <Link to={'/product-detail'}>Shop now</Link>
        </div>
        <div className={classes.horizCardImg}>
            <img src= {productImg} />
        </div>
        </div>
    )
}

export default HorizProductCard