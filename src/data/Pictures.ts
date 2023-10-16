import arara from '../assets/imgs/arara.jpeg'
import cores from '../assets/imgs/cores.avif'
import coruja from '../assets/imgs/coruja.jpg'
import dog from '../assets/imgs/dog.jpg'
import flor from '../assets/imgs/flor.webp'
import { PictureFormData } from './PicturesFormData'

const araraImg:PictureFormData = {
  id:1,
name: 'arara',
src: `${arara}`
}

const coresImg:PictureFormData = {
id:2,
name: 'cores',
src: `${cores}`
}

const corujaImg:PictureFormData = {
  id:3,
  name: 'coruja',
  src: `${coruja}`
}

const dogImg:PictureFormData = {
  id:4,
  name: 'dog',
  src: `${dog}`
}

const florImg:PictureFormData = {
  id:5,
  name: 'flor',
  src: `${flor}`
}

const imgs = [araraImg, coresImg, corujaImg, dogImg, florImg]

export default imgs