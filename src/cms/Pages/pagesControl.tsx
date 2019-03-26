import React, { Component } from "react"
import { SlideControl } from "."

const defaultSeparator = "<!--break-->"

const getSlideActions = (onChange, slides, i) => {
  const slidesCopy = slides.slice()

  return {
    createSlideAbove: () => {
      slidesCopy.splice(i, 1, "", slides[i])
      return onChange(slidesCopy)
    },
    createSlideBelow: () => {
      slidesCopy.splice(i + 1, 0, "")
      return onChange(slidesCopy)
    },
    deleteSlide: () => {
      slidesCopy.splice(i, 1)
      return onChange(slidesCopy)
    },
    moveSlideUp: () => {
      if (i === 0) {
        return onChange(slides)
      }
      slidesCopy.splice(i - 1, 2, slides[i], slides[i - 1])
      return onChange(slidesCopy)
    },
    moveSlideDown: () => {
      if (i === slidesCopy.length) {
        return onChange(slidesCopy)
      }
      slidesCopy.splice(i, 2, slides[i + 1], slides[i])
      return onChange(slidesCopy)
    },
  }
}

export default class PagesControl extends Component {
  getValue() {
    return this.props.value ? this.props.value : ""
  }

  handleSlideChange(value, i) {
    const newValues = this.getValue().split(defaultSeparator)
    newValues[i] = value
    this.props.onChange(newValues.join(defaultSeparator))
  }

  getSlideCommandBarActions(slides, i) {
    return getSlideActions(
      newSlides => this.props.onChange(newSlides.join(defaultSeparator)),
      slides,
      i
    )
  }

  render() {
    const total = this.getValue()
    const slides = this.getValue().split(defaultSeparator)
    const slideControls = slides.map((slideContent, i) => (
      <SlideControl
        {...this.props}
        total={total}
        key={i}
        value={slideContent}
        onChange={value => this.handleSlideChange(value, i)}
        commandBarActions={this.getSlideCommandBarActions(slides, i)}
      />
    ))
    return <div>{slideControls}</div>
  }
}
