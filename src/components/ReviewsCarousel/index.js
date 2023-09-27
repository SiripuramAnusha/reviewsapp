import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  onClickLeft = () => {
    const {activeId} = this.state

    const {reviewsList} = this.props

    if (activeId > 0) {
      this.setState(prevState => ({activeId: prevState.activeId - 1}))
    }
  }

  onClickRight = () => {
    const {reviewsList} = this.props
    const {activeId} = this.state
    if (activeId < reviewsList.length) {
      this.setState(prevState => ({
        activeId: prevState.activeId + 1,
      }))
    }
  }

  getProfile = reviewsList => {
    const {activeId} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[activeId]

    return (
      <div className="profile-cont">
        <h1 className="title">Reviews</h1>
        <img src={imgUrl} alt={username} className="profile" />
        <p className="name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="des">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeId} = this.state

    return (
      <div className="bg-container">
        <div className="review-container">
          <button
            type="button"
            className="left-arrow"
            onClick={this.onClickLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.getProfile(reviewsList)}

          <button
            type="button"
            className="right-arrow"
            onClick={this.onClickRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
