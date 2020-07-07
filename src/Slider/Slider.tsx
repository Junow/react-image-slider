import React from 'react'
import * as S from './styles'

interface Props {
  src: string[]
}
const Slider: React.FC<Props> = ({ src }) => {
  const [imgNum, setImgNum] = React.useState(0)
  const size = React.useRef(0)

  const handleNextClick = () => {
    if (imgNum >= src.length - 1) return
    setImgNum(imgNum + 1)
  }

  const handlePrevClick = () => {
    if (imgNum <= 0) return
    setImgNum(imgNum - 1)
  }

  React.useEffect(() => {
    console.log(imgNum)
  }, [imgNum])

  React.useEffect(() => {
    size.current = src.length
  }, [])

  return (
    <S.Container>
      <S.Frame imgNum={imgNum}>
        {/* <S.Div style={{ background: 'red', width: '100vw', height: '100%' }}></S.Div>
        <S.Div style={{ background: 'blue', width: '100vw', height: '100%' }}></S.Div>
        <S.Div style={{ background: 'brown', width: '100vw', height: '100%' }}></S.Div>
        <S.Div style={{ background: 'green', width: '100vw', height: '100%' }}></S.Div>
        <S.Div style={{ background: 'coral', width: '100vw', height: '100%' }}></S.Div>
        <S.Div style={{ background: 'pink', width: '100vw', height: '100%' }}></S.Div> */}
        {src.map((src) => {
          return (
            <S.Div key={src} style={{ width: '100vw', height: '100%' }}>
              <S.Img key={src} src={src} />
            </S.Div>
          )
        })}
      </S.Frame>
      <S.LeftButton onClick={handlePrevClick}>{'<'}</S.LeftButton>
      <S.RightButton onClick={handleNextClick}>{'>'}</S.RightButton>
      <S.PagenationWrapper>
        {src.map((src, i) => {
          return <S.Pagination key={i} selected={i === imgNum} />
        })}
      </S.PagenationWrapper>
    </S.Container>
  )
}

export default Slider
