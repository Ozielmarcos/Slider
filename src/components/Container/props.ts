import { ReactNode } from "react"

export interface ContainerBaseProps {
  $width?: string
  $height?: string
  $margin?: string
  $padding?: string
  $display?: 'flex' | 'grid'
  $flex?: number
  $alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
  $justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  $rowGap?: string
  $columnGap?: string
  $border?: string
  $borderRadius?: string
  $backgroundColor?: string
  $backgroundImage?: string
  $backgroundRepeat?: string
  $backgroundSize?: string
  $backgroundPosition?: string
  $position?: 'relative' | 'absolute' | 'fixed' | 'static' | 'sticky'
  $top?: string
  $left?: string
  $right?: string
  $bottom?: string
  $overflow?:'hidden' | 'scroll' | 'auto' | 'visible'
}

export interface ContainerProps {
  width?: string
  height?: string
  margin?: string
  padding?: string
  display?: 'flex' | 'grid'
  flex?: number
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch'
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  rowGap?: string
  columnGap?: string
  border?: string
  borderRadius?: string
  backgroundColor?: string
  backgroundImage?: string
  backgroundRepeat?: string
  backgroundSize?: string
  backgroundPosition?: string
  position?: 'relative' | 'absolute' | 'fixed' | 'static' | 'sticky'
  top?: string
  left?: string
  right?: string
  bottom?: string
  overflow?: 'hidden' | 'scroll' | 'auto' | 'visible'
  children?: ReactNode
}