import React, { Component } from "react"
import $ from "jquery"

try {
  require("turn.js")
} catch (e) {
  console.log(e)
}

const additionalOptions = {
  gradients: !$.isTouch,
}

type Props = {
  style: {}
  options: {}
  className: string
  onPageTurn: (value: any) => void
}

class Turn extends Component<Props> {
  static defaultProps = {
    style: {},
    className: "",
    options: {},
  }

  componentDidMount() {
    console.log(this.props)
    if (this.el) {
      $(this.el).turn(
        Object.assign({}, { ...this.props.options, ...additionalOptions })
      )
      $(this.el).bind("turning", (event, page, view) => {
        this.props.onPageTurn(page)
      })
    }

    document.addEventListener("keydown", this.handleKeyDown, false)
  }

  componentWillUnmount() {
    if (this.el) {
      $(this.el)
        .turn("destroy")
        .unbind()
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
