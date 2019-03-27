import React, { Component, FC } from "react"
import styled from "@emotion/styled"

const ControlWrapper = styled.div`
  height: 620px;
`

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

type CommandBarActions = {
  createSlideAbove: () => void
  createSlideBelow: () => void
  deleteSlide: () => void
  moveSlideUp: () => void
  moveSlideDown: () => void
}

const SlideCommandBar: FC<CommandBarActions> = props => (
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

type Props = {
  commandBarActions: CommandBarActions
  onChange: (value: any) => void
  value: string
}

const SlideControl: FC<Props> = props => {
  const MarkdownControl = CMS.getWidget("markdown").control

  return (
    <ControlWrapper>
      <hr />
      <SlideCommandBar {...props.commandBarActions} />
      <MarkdownControl {...props} />
    </ControlWrapper>
  )
}

export default SlideControl
