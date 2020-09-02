import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const SortPopup = React.memo(function SortPopup({ items, sortBy, onClickItem }) {
  const [visibilityPopup, setvisibilityPopup] = React.useState(false)
  // const [activeItem, setActiveItem] = React.useState(0)
  const sortRef = React.useRef()
  const activeLabel = items.find((obj) => obj.type === sortBy).name

  const selectActiveItem = (type) => {
    onClickItem(type)
    setvisibilityPopup(false)
  }

  const toggleVisibilityPopup = () => {
    setvisibilityPopup(!visibilityPopup)
  }

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath())
    if (!path.includes(sortRef.current)) {
      setvisibilityPopup(false)
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div className="sort"
      ref={sortRef}>
      <div className="sort__label">
        <div className="sort__row">
          <i className={`fa fa-sort-up ${visibilityPopup && 'rotated'}`}
            onClick={toggleVisibilityPopup}
            style={{ maxHeight: '8px', marginRight: '6px', size: '3px' }}></i>
          <b>Сортировка по:</b>
        </div>
        <span onClick={toggleVisibilityPopup}>{activeLabel}</span>
      </div>
      {visibilityPopup && <div className="sort__popup">
        <ul>
          {items.map((item, index) => {
            return <li key={index}
              className={sortBy === item.type ? 'active' : ''}
              onClick={() => selectActiveItem(item.type)} >{item.name}</li>
          })}
        </ul>
      </div>}
    </div>
  )
})

export default SortPopup
