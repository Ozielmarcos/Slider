import { PictureFormData } from "../../data/PicturesFormData";
import { ContainerBase } from "../Container/styles";
import Picture from "../picture";


export default function Slider({src,name}:PictureFormData) {

  return (
    <ContainerBase>
      <Picture src={src} alt={name} width={900} height={500} />
    </ContainerBase>
  )
}