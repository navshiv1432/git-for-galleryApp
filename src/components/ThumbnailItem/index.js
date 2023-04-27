import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imgDetails
  const onClickClass = isActive ? 'classA' : 'classB'
  const onChangeId = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="list-cont">
      <button type="button" className="btn" onClick={onChangeId}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={onClickClass}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
