import React from 'react';
import MenuItem from '../menu_item/MenuItem';
import './Directory.scss';

class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: [
        {
          title: "Ze's laptop" ,
          imgUrl: "http://mzmagic.com/content/images/2020/02/dev_machine_compressed-1.jpg",
          id: 1,
          linkUrl: "pageone"
        },
        {
          title: "Huoshui2.0",
          imgUrl: "http://mzmagic.com/content/images/size/w600/2019/09/graphql_plus_react.png",
          id: 2,
          linkUrl: "pagetwo"
        },
        {
          title: "Huoshui1.0",
          imgUrl: "http://mzmagic.com/content/images/size/w600/2019/09/huoshui-desktop.png",
          id: 3,
          linkUrl: "pagethree"
        },
        {
          title: "Ro-spider",
          imgUrl: "http://mzmagic.com/content/images/size/w600/2019/09/spider.png",
          size: "large",
          id: 4,
          linkUrl: "pagefour"
        },
        {
          title: "Solar system",
          imgUrl: "http://mzmagic.com/content/images/size/w600/2019/09/solar_system.png",
          size: "large",
          id: 5,
          linkUrl: "pagefive"
        }
      ]
    }
  }
  render() {
    return (
      <div className='directory-menu'>
       {this.state.sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}  />)}
      </div>
    )
  }
}

export default Directory;