import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin: auto;
}`

interface FrameProps {
  imgNum: number
}
export const Frame = styled.div<FrameProps>`
  width: fit-content;
  height: 100%;
  display: flex;
  transition: all 0.5s ease-in-out;
  /* transform : translateX(-${(props) => props.imgNum}00%); */
  transform : translateX(-${(props) => props.imgNum}00vw);
`

export const Div = styled.div`
  display: flex;
  width: 100%;
`
export const Test = styled.div`

`

export const Img = styled.img`
  width: auto;
  height: 100%;
  margin: auto;
  /* width: auto;
  height: auto;
  max-width: 100%;
  margin: auto; */
`

const Button = styled.button`
  position: absolute;
  background: none;
  border: none;
  padding: 0.3rem 0.6rem;
  color: white;
  outline: none;
  font-size: 2rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ff9999;
    cursor: pointer;
    
  }
  
`

export const RightButton = styled(Button)`
  right: 0rem;
  top: 25%;
  height: 50%;
`

export const LeftButton = styled(Button)`
  left: 0rem;
  top: 25%;
  height: 50%;
`

export const PagenationWrapper = styled.div`
  position: absolute;
  display: flex;
  background: none;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`

interface PaginationProps {
  selected: boolean
}
export const Pagination = styled.span<PaginationProps>`
  background: ${(props) => (props.selected === true ? 'white' : 'none')};
  border: 1px solid darkgray;
  width: 1rem;
  height: 1rem;
  margin: 0 0.5rem;
  border-radius: 50%;
`
