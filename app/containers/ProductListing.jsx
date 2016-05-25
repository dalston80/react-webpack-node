import React from 'react';
import classNames from 'classnames/bind';
import Sidebar from 'components/Sidebar';
import styles from 'css/components/product-listing';
import chromecon from 'images/chrome-ninja192-precomposed.png';
import applecon from 'images/apple-ninja152-precomposed.png';
import mscon from 'images/ms-ninja144-precomposed.png';

const cx = classNames.bind(styles);

const ProductListing = () => {
    return (
        <div className={cx('product-listing')}>
            <Sidebar/>
            <div>
                <h3>MS Ninja</h3>
                <img src={mscon}/>
                <p>$19.99</p>
                <button>Add To Cart</button>
            </div>

            <div>
                <h3>Apple Ninja</h3>
                <img src={applecon}/>
                <p>$19.99</p>
                <button>Add To Cart</button>
            </div>

            <div>
                <h3>Chrome Ninja</h3>
                <img src={chromecon}/>
                <p>$19.99</p>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductListing;