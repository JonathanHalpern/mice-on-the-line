import React, { useRef, FC } from "react"

import { Media, Player, controls } from "react-media-player"
const { PlayPause, CurrentTime, Duration, SeekBar } = controls
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import styled from "@emotion/styled"

interface AudioPlayerProps {
  soundFile: string
  autoPlay: boolean
  setAutoPlay: (e: any) => void
  onEnded: () => void
}

const AudioPlayer: FC<AudioPlayerProps> = ({
  soundFile,
  autoPlay,
  setAutoPlay,
  onEnded,
}) => {
  const containerRef = useRef(null)
  return (
    <Media ref={containerRef}>
      <MediaContainer>
        <div className="media-player">
          <Player src={soundFile} onEnded={onEnded} autoPlay={autoPlay} />
        </div>
        <MediaControls>
          <CurrentTime />
          <SeekBar />
          <Duration />
          <StyledPlayPause />
          <FormControlLabel
            control={
              <AutPlayCheckbox
                checked={autoPlay}
                onChange={e => {
                  let shouldAutoPlay = e.target.checked
                  if (shouldAutoPlay) {
                    containerRef.current.play()
                  }
                  setAutoPlay(shouldAutoPlay)
                }}
                value="autoPlay"
                color="primary"
                inputProps={{
                  "aria-label": "secondary checkbox",
                }}
              />
            }
            label="Auto Play"
          />
        </MediaControls>
      </MediaContainer>
    </Media>
  )
}

const StyledPlayPause = styled(PlayPause)`
  width: 75px;
  margin-left: 10px;
`

const AutPlayCheckbox = styled(Checkbox)`
  margin-left: 20px !important;
`

const MediaContainer = styled.div`
  display: flex;
`

const MediaControls = styled.div`
  display: inline-block;
  margin: auto;
  > input {
    margin: 0 5px;
  }
`

export default AudioPlayer
