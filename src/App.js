import React from 'react';
import Directory from './components/directory /directory.component';
import './App.css'

class App extends React.Component{
  
  render() {

    const categories = [
      {
        id: 1,
        title: 'Womens',
        imageUrl: 'https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?k=20&m=916092484&s=612x612&w=0&h=2aTLAucj_-qbbfhBiJEXfdiY3-k0gx0el8OrKFpi3O8='
      },
      {
        id: 2,
        title: 'Mens',
        imageUrl: 'https://media.istockphoto.com/photos/luxury-clothing-shop-for-men-picture-id831659416?k=20&m=831659416&s=612x612&w=0&h=WrIgmMU6EO55c9ITwVz-_rUkHl-1UmRatNTq4NB4_u0='
      },
      {
        id: 3,
        title: 'Kids',
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/hiIgVY-9_63-IF73ndSnG4d_pnM=/0x131:640x491/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/45275968/TenOverSixKids2_2014_04.0.jpg'
      },
    ]

    return(
      <div className='app'>
       <Directory categories={categories} />
      </div>
    )
  }
}
export default App;
