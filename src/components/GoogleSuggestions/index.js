import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {inputText: '', suggestionList: suggestionsList}

  handleInput = event => {
    const {inputText} = this.state

    this.setState({inputText: event.target.value})
  }

  onChangeInput = id => {
    const clickedSuggestion = suggestionsList.find(eachObj => eachObj.id === id)
      ?.suggestion
    this.setState({inputText: clickedSuggestion})
  }

  render() {
    const {inputText, suggestionList} = this.state
    const updatedList = suggestionsList.filter(eachObj =>
      eachObj.suggestion.toLowerCase().includes(inputText),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="logo-img"
          alt="google logo"
        />
        <div className="card">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="icon-img"
              alt="search icon"
            />
            <input
              type="search"
              className="input-El"
              placeholder="Search Google"
              value={inputText}
              onChange={this.handleInput}
            />
          </div>
          <ul className="list-container">
            {updatedList.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                SuggestionDetails={eachSuggestion}
                onChangeInput={this.onChangeInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
