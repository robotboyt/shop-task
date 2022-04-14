import React from 'react'
import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss'

class Directory extends React.Component {
    render() {
        return(
            <div className='directory-container'>
                {this.props.categories.map((category) => (
                    < CategoryItem key={category.id} category={category} />
                ))}
            </div>
        )
    }
}

export default Directory