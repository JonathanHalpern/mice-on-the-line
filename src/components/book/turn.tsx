import React from "react"
import $ from "jquery"

try {
  require("turn.js")
} catch (e) {
  console.log(e)
}

const additionalOptions = {
  gradients: !$.isTouch,
}

class Turn extends React.Component {
  static defaultProps = {
    style: {},
    className: "",
    options: {},
  }

  componentDidMount() {
    if (this.el) {
      $(this.el).turn(
        Object.assign({}, { ...this.props.options, ...additionalOptions })
      )
    }

    document.addEventListener("keydown", this.handleKeyDown, false)
  }

  componentWillUnmount() {
    if (this.el) {
      $(this.el)
        .turn("destroy")
        .remove()
    }
    document.removeEventListener("keydown", this.handleKeyDown, false)
  }

  handleKeyDown = event => {
    if (event.keyCode === 37) {
      $(this.el).turn("previous")
    }
    if (event.keyCode === 39) {
      $(this.el).turn("next")
    }
  }

  render() {
    return (
      <div
        style={Object.assign({}, this.props.style)}
        ref={el => (this.el = el)}
        className={`${this.props.className}`}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Turn
