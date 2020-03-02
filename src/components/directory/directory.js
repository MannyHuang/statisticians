import React from 'react';
import MenuItem from '../menu_item/menu_item';
import './directory.scss';

class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: [
        {
          title: "Ze's toptap" ,
          imgUrl: "http://mzmagic.com/content/images/2020/02/dev_machine_compressed-1.jpg",
          id: 1
        },
        {
          title: "Huoshui2.0",
          imgUrl: "http://mzmagic.com/content/images/size/w600/2019/09/graphql_plus_react.png",
          id: 2
        },
        {
          title: "Huoshui1.0",
          imgUrl: "http://mzmagic.com/content/images/size/w600/2019/09/huoshui-desktop.png",
          id: 3
        },
        {
          title: "Ro-spider",
          imgUrl: "http://mzmagic.com/content/images/size/w600/2019/09/spider.png",
          size: "large",
          id: 4
        },
        {
          title: "Solar system",
          imgUrl: "http://mzmagic.com/content/images/size/w600/2019/09/solar_system.png",
          size: "large",
          id: 5
        }
      ]
    }
  }
  render() {
    return (
      <div className='directory-menu'>
       {this.state.sections.map(({title, imgUrl, id, size}) => <MenuItem key={id} title={title} imgUrl={imgUrl} size={size} />)}
      </div>
    )
  }
}

export default Directory;