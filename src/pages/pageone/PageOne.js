import React from 'react';
import PreviewCollection from '../../components/preview_collection/PreviewCollection';
  

class PageOne extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: ''
    }
  }
  render() {
    const { collections } = this.state;
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