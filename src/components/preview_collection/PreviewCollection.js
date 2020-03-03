import React from 'react';

// import './PreviewCollection.scss';

const PreviewCollection = (props) => {
  const { title, items } = props;
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <div key={item.id}>{item.name}</div>
        ))}}
      </div>
    </div>
  );
}

export default PreviewCollection;
