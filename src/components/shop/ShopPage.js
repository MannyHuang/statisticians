import React from 'react';
import SHOP_DATA from './SHOP_DATA';
import PreviewCollection from '../preview_collection/PreviewCollection';
  

class PageOne extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    const {collections} = this.state;
    return(
      <div className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default PageOne;