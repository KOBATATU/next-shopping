import Image, { ImageProps } from "next/image";
import styled from "styled-components";
import { Responsive } from "types/styles";
import { toPropValue } from "utils/styles";

type ImageShape = "circle" | "shape";
type ShapeImageProps = ImageProps & { shape?: ImageShape };

const ImageWithShape = styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === "circle" ? "50%" : "0")};
`;

ImageWithShape.defaultProps = {
  shape: "shape",
};

const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props;
  return <ImageWithShape shape={shape} {...imageProps} />;
};

export default ShapeImage;
