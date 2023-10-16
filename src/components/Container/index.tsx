import { ContainerProps } from "./props";
import { ContainerBase } from "./styles";

export default function Container({
  align,
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  border,
  borderRadius,
  children,
  columnGap,
  display,
  flex,
  height,
  justify,
  margin,
  padding,
  rowGap,
  width,
  overflow,
  bottom,
  left,
  position,
  right,
  top
}: ContainerProps) {
  return (
    <ContainerBase
      $alignItems={align}
      $backgroundColor={backgroundColor}
      $backgroundImage={backgroundImage}
      $backgroundPosition={backgroundPosition}
      $backgroundRepeat={backgroundRepeat}
      $backgroundSize={backgroundSize}
      $border={border}
      $borderRadius={borderRadius}
      $columnGap={columnGap}
      $display={display}
      $flex={flex}
      $height={height}
      $justifyContent={justify}
      $margin={margin}
      $padding={padding}
      $rowGap={rowGap}
      $width={width}
      $overflow={overflow}
      $bottom={bottom}
      $left={left}
      $position={position}
      $right={right}
      $top={top}
    >
      {children}
    </ContainerBase>
  )
}