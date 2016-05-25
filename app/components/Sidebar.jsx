import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from 'css/components/sidebar';

const cx = classNames.bind(styles);

export default class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
              <ul>
                  <li>
                      <Link to="/" className={cx('item')} activeClassName={cx('active')}>Ninja Ocean</Link>
                  </li>
                  <li>
                      <Link className={cx('item')} to="/product-listing">Product Listing</Link>
                  </li>
                  <li>
                      <Link className={cx('item')} to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                      <Link to="/about" className={cx('item')} activeClassName={cx('active')}>About</Link>
                  </li>
              </ul>
          </div>
        );
    }
}

Sidebar.propTypes = {};