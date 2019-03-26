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
  // console.log(props.total)
  return (
    <div>
      <SlideControlHeader>Slide</SlideControlHeader>
      <SlideCommandBar {...props.commandBarActions} />
      <MarkdownControl {...props} />
    </div>
  )
}

export default SlideControl
