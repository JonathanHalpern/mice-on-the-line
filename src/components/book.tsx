import React, { FC } from "react"
import styled from "@emotion/styled"
import FlipPage from "react-flip-page"

const Wrapper = styled.div`
  /* border: 1px solid black; */
  margin: 40px 0;
  > div {
    margin: auto;
  }
  > div > div > div {
    /* border: 1px solid #ccc; */
    /* background: white !important;
    background-image: none; */
  }
  > div > div:first-child > div:nth-child(3) > div {
    /* display: none; */
  }
`

const DoublePage = styled.div`
  display: flex;
  flex-direction: horizontal;
  height: 100%;
  /* border: 1px solid black; */
`

const Page = styled.div`
  flex: 1;
  padding: 50px;
`

const GhostPage = styled(Page)`
  background: #fff5ff;
`

const TitlePage = styled(Page)`
  box-shadow: inset 0px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LeftPage = styled(Page)`
  background-image: linear-gradient(to right, white 96%, #ddd);
`

const RightPage = styled(Page)`
  background-image: linear-gradient(to left, white 96%, #ddd);
`

const Title = styled.h1`
  /* text-align: center; */
`

const StyledImg = styled.img`
  /* width: 200px; */
  height: 340px;
  margin: 0;
`

const front = [
  {
    picture:
      "https://www.miceontheline.co.uk/static/87e07e78c93ebff87806a18410175a66/b2f9d/charing-cross-cover.jpg",
    title: "Charing Cross",
  },
]
const story = [
  {
    picture:
      "https://www.miceontheline.co.uk/static/87e07e78c93ebff87806a18410175a66/b2f9d/charing-cross-cover.jpg",
    HTML:
      "<p>Some creatures are rare in London. You are unlikely to find giraffes or snakes, zebras or poisonous frogs walking the streets of England’s capital unless you take a trip to London Zoo. However, two creatures you are extremely likely to find here are pigeons and mice. With so many around, it is small wonder that these rather different creatures have come to learn each other’s languages. This skill proves particularly useful is when one or the other is lost and needs some directions from its land-dwelling or sky-flying companion. This just so happened to be the case one afternoon at Trafalgar Square, when a pigeon followed a lady into the London Underground.</p>",
  },
  {
    picture:
      "https://www.miceontheline.co.uk/static/9ef26c04b3841795ddaf670942e8fa9d/b2f9d/oxford-circus-cover.jpg",
    HTML:
      "<p>  The lady in question wore a grumpy expression on her long, grey face. Her clothing was speckled with flecks of white. Moments before, she had been standing in the hustle and bustle of Trafalgar Square when she had rushed over to a child feeding the pigeons underneath Nelson’s Column and confiscated his bag of bread.</p>",
  },
  {
    picture:
      "https://www.miceontheline.co.uk/static/87e07e78c93ebff87806a18410175a66/b2f9d/charing-cross-cover.jpg",
    HTML:
      "<p>Some creatures are rare in London. You are unlikely to find giraffes or snakes, zebras or poisonous frogs walking the streets of England’s capital unless you take a trip to London Zoo. However, two creatures you are extremely likely to find here are pigeons and mice. With so many around, it is small wonder that these rather different creatures have come to learn each other’s languages. This skill proves particularly useful is when one or the other is lost and needs some directions from its land-dwelling or sky-flying companion.</p>",
  },
  {
    picture:
      "https://www.miceontheline.co.uk/static/9ef26c04b3841795ddaf670942e8fa9d/b2f9d/oxford-circus-cover.jpg",
    HTML:
      "<p>This just so happened to be the case one afternoon at Trafalgar Square, when a pigeon followed a lady into the London Underground.  The lady in question wore a grumpy expression on her long, grey face. Her clothing was speckled with flecks of white. Moments before, she had been standing in the hustle and bustle of Trafalgar Square when she had rushed over to a child feeding the pigeons underneath Nelson’s Column and confiscated his bag of bread.</p>",
  },
]

const FirstDoublePage = () => (
  <DoublePage>
    <GhostPage />
    <TitlePage>
      <Title>{front[0].title}</Title>
      <StyledImg src={front[0].picture} />
    </TitlePage>
  </DoublePage>
)

const Book: FC = ({ children }) => (
  <Wrapper>
    <FlipPage
      // pageBackground="red"
      orientation="horizontal"
      uncutPages
      width={960}
      height={540}
      perspective="100em"
      maskOpacity={0}
      // swipeImmune={[0]}
      // style={{ border: "1px solid red" }}
    >
      <FirstDoublePage />
      {story.map(({ picture, HTML }) => (
        <DoublePage>
          <LeftPage>
            <img src={picture} />
          </LeftPage>
          <RightPage>
            <div dangerouslySetInnerHTML={{ __html: HTML }} />
          </RightPage>
        </DoublePage>
      ))}
    </FlipPage>
  </Wrapper>
)

export default Book
