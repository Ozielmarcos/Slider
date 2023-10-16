import Container from './components/Container'
import Slider from './components/Slider'
import imgs from './data/Pictures'
import {MdArrowForwardIos,MdArrowBackIosNew} from 'react-icons/md'
import './App.css'
import { useState } from 'react'


function App() {
const [imgId,setImgId] = useState(0)

  const handleBack = () => {
    imgId < 1 ? setImgId(imgs.length - 1) : setImgId(imgId - 1);
  }

  const handleNext = () => {    
    imgId === imgs.length - 1 ? setImgId(1) : setImgId(imgId + 1);
  }

  return (
    <Container width='100%'
     height='100vh' 
     backgroundColor='#242424'  
     display='flex' 
     align='center' 
     justify='center' 
     overflow='hidden'
     >
      <Container width='900px' height='500px' display='flex' borderRadius='16px' overflow='hidden'>
        {imgs[imgId] && (
        <Container width='900px' height='500px' key={imgId} position='relative'>
          <button className='btn-back' onClick={handleBack}>
            <MdArrowBackIosNew/>
          </button>
          <Slider src={imgs[imgId].src} />
          <button className='btn-next' onClick={handleNext}>
            <MdArrowForwardIos/>
          </button>
        </Container>
      )}
      </Container>
    </Container>
    )
}

export default App
