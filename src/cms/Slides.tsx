import React, { Component } from "react"
import styled from "@emotion/styled"

const CommandBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
`

const CommandBarButton = styled.button`
  font-size: 12px;
  background: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  border: 1px solid black;
  &:hover {
    background: #ddd;
  }
`

const PageMock = styled.div`
  background: yellow;
`

const SlideCommandBar = props => (
  <CommandBar>
    <CommandBarButton onClick={props.createSlideAbove}>
      + Above
    </CommandBarButton>
    <CommandBarButton onClick={props.createSlideBelow}>
      + Below
    </CommandBarButton>
    <CommandBarButton onClick={props.deleteSlide}>Delete</CommandBarButton>
    <CommandBarButton onClick={props.moveSlideUp}>Move Up</CommandBarButton>
    <CommandBarButton onClick={props.moveSlideDown}>Move Down</CommandBarButton>
  </CommandBar>
)

const SlideControlHeader = styled.div`
  text-transform: uppercase;
  border-bottom: 1px solid black;
  margin-top: 20px;
`

const SlideControl = props => {
  const MarkdownControl = CMS.getWidget("markdown").control
  return (
    <div>
      <SlideControlHeader>Slide</SlideControlHeader>
      <SlideCommandBar {...props.commandBarActions} />
      <MarkdownControl {...props} />
    </div>
  )
}

const SlidePreview = props => {
  const MarkdownPreview = CMS.getWidget("markdown").preview
  return (
    <PageMock>
      <hr />
      <MarkdownPreview {...props} />
    </PageMock>
  )
}

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

const defaultSeparator = "<!--break-->"

export class SlidesControl extends Component {
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
    const slides = this.getValue().split(defaultSeparator)
    const slideControls = slides.map((slideContent, i) => (
      <SlideControl
        {...this.props}
        key={slideContent}
        value={slideContent}
        onChange={value => this.handleSlideChange(value, i)}
        commandBarActions={this.getSlideCommandBarActions(slides, i)}
      />
    ))
    return <div>{slideControls}</div>
  }
}

export const SlidesPreview = props => (
  <div>
    <p>Mew</p>
    {console.log(props.value)}
    {props.value.split(defaultSeparator).map((val, i) => (
      <SlidePreview {...props} key={props.value} value={val} />
    ))}
  </div>
)
