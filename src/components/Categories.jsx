import React from 'react'
// import PropTypes from  'prop-types'

const Categories =  React.memo(function Categories({ activeCategory, items, onClickItem }) {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickItem(null)}>Все</li>
                {items && items.map((item, index) => {
                    return <li 
                        className={activeCategory === index ? 'active' : ''} 
                        onClick={() => onClickItem(index)}                  
                        key={`${item}_${index}`}>{item}</li>
                })}

            </ul>
        </div>
    )
})

export default Categories

// Categories.propTypes = {
//     activeCategory: PropTypes.number.isRequired,
//     items: PropTypes.arrayOf(PropTypes.string).isRequired,
// }

// Categories.defaultProps = {activeCategory: null, items: []}