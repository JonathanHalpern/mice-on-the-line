import React, { Component } from "react"
import { SlideControl } from "."

const defaultSeparator = "<!--break-->"

let key = 0

const createNewSlide = () => ({
  page: "",
  key: key++,
})

const getSlideActions = (
  onChange: (value: any) => void,
  slides: pageObject[],
  i: number
) => {
  const slidesCopy = slides.slice()

  return {
    createSlideAbove: () => {
      slidesCopy.splice(i, 1, createNewSlide(), slides[i])
      return onChange(slidesCopy)
    },
    createSlideBelow: () => {
      slidesCopy.splice(i + 1, 0, createNewSlide())
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

type Props = {
  value: string
  onChange: (value: any) => void
}

type pageObject = {
  page: string
  key: number
}

type State = {
  pageObjects: pageObject[]
}

export default class PagesControl extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const pageObjects = props.value.split(defaultSeparator).map(page => ({
      page,
      key: key++,
    }))
    this.state = {
      pageObjects,
    }
  }

  getValue() {
    return this.props.value ? this.props.value : ""
  }

  handleSlideChange(value: string, i: number) {
    const newPageObjects = this.state.pageObjects.slice()
    newPageObjects[i].page = value
    const updatedStory = newPageObjects
      .map(pageObjects => pageObjects.page)
      .join(defaultSeparator)
    this.props.onChange(updatedStory)
    this.setState({
      pageObjects: newPageObjects,
    })
  }

  getSlideCommandBarActions(slides: pageObject[], i: number) {
    return getSlideActions(
      (newSlides: pageObject[]) => {
        const updatedStory = newSlides
          .map(pageObject => pageObject.page)
          .join(defaultSeparator)
        this.props.onChange(updatedStory)
        this.setState({ pageObjects: newSlides })
      },
      slides,
      i
    )
  }

  render() {
    const slides = this.state.pageObjects
    const slideControls = this.state.pageObjects.map((slideObject, i) => (
      <SlideControl
        {...this.props}
        key={slideObject.key}
        value={slideObject.page}
        onChange={value => this.handleSlideChange(value, i)}
        commandBarActions={this.getSlideCommandBarActions(slides, i)}
      />
    ))
    return <div>{slideControls}</div>
  }
}
