import './index.css'

const EachItem = props => {
  const {item, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item
  const ondelete = () => {
    deleteItem(id)
  }
  return (
    <li className="listItem">
      <div className="listContainer">
        <div className="cont">
          <p className="para">{timeAccessed}</p>
          <div className="websiteContainer">
            <div className="websiteLogo">
              <img src={logoUrl} className="img" alt="domain logo" />
              <p className="title">{title}</p>
              <p className="domainUrl">{domainUrl}</p>
            </div>
          </div>
        </div>
        <button
          className="button"
          type="button"
          data-testid="delete"
          onClick={ondelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="deleteImg"
          />
        </button>
      </div>
    </li>
  )
}

export default EachItem
