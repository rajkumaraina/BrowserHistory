import {Component} from 'react'

import './index.css'

import EachItem from '../item'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class History extends Component {
  state = {data: initialHistoryList, searchInput: ''}

  deleteItem = id => {
    const {data} = this.state
    const filteredList = data.filter(each => each.id !== id)
    this.setState({data: filteredList})
  }

  onChange = event => {
    const value = event.target.value.toLowerCase()
    this.setState({searchInput: value})
  }

  render() {
    const {data, searchInput} = this.state
    const finalData = data.filter(each => {
      const value = each.title.toLowerCase()
      const inputValue = searchInput.toLowerCase()
      return value.includes(inputValue)
    })
    let bottomElement
    const listLength = finalData.length
    if (listLength !== 0) {
      bottomElement = (
        <div className="bottomContainer">
          <ul className="unordered">
            {finalData.map(each => (
              <EachItem
                item={each}
                deleteItem={this.deleteItem}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      )
    } else {
      bottomElement = (
        <div className="emptyContainer">
          <p className="emptyMessage">There is no history to show</p>
        </div>
      )
    }
    return (
      <div className="mainContainer">
        <div className="topContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="historyLogo"
          />
          <div className="search_inputContainer">
            <div className="searchContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="searchImg"
              />
            </div>
            <div className="inputContainer">
              <input
                type="search"
                onChange={this.onChange}
                className="input"
                placeholder="Search History"
              />
            </div>
          </div>
        </div>
        {bottomElement}
      </div>
    )
  }
}
export default History
