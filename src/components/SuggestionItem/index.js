import './index.css'

const SuggestionItem = props => {
  const {key, SuggestionDetails, onChangeInput} = props
  const {id, suggestion} = SuggestionDetails

  const onChangeText = () => {
    onChangeInput(id)
  }

  return (
    <li className="list-item">
      <p className="para-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-img"
        alt="arrow"
        onClick={onChangeText}
      />
    </li>
  )
}
export default SuggestionItem
