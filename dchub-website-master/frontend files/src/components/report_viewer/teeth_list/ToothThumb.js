import React from "react";
import { ImageConfigContext } from "../main_panel/ImageConfigContext";

export default class ToothThumb extends React.Component {
  static contextType = ImageConfigContext;
  canvas = React.createRef();
  image = React.createRef();
  ctx = React.createRef();

  onKeyAnnotationChange = () => {
    const { x, y, width_rect, height_rect } = this.props.keyAnnotation;
    this.canvas.current.width = width_rect * this.props.sharedImageScale;
    this.canvas.current.height = height_rect * this.props.sharedImageScale;
    this.ctx.current.drawImage(
      this.props.sharedImage,
      x * this.props.sharedImageScale,
      y * this.props.sharedImageScale,
      width_rect * this.props.sharedImageScale,
      height_rect * this.props.sharedImageScale,
      0,
      0,
      this.canvas.current.width,
      this.canvas.current.height
    );
  };
  componentDidMount() {
    this.ctx.current = this.canvas.current.getContext("2d");
    this.onKeyAnnotationChange();
  }
  render() {
    if (this.canvas.current) this.onKeyAnnotationChange();
    return <canvas width="100" height="150" ref={this.canvas} />;
  }
}
// export default function ToothThumb({ tooth_name }) {
//   const [annotationState] = useAnnotatorState();
//   const ref = React.useRef();
//   const imageRef = React.useRef();
//   const annotation = annotationState.teethKeyAnnotations[tooth_name];
//   React.useEffect(() => {
//     if(!imageRef.current) {
//       imageRef.current = new window.Image();

//     }
//     if (annotation) {
//       const img = new window.Image();
//       img.src = annotationState.imageBase;
//       const ctx = ref.current.getContext("2d");
//       img.onload = () => {
//         ref.current.width = annotation.width_rect;
//         ref.current.height = annotation.height_rect;

//         ctx.drawImage(
//           img,
//           annotation.x,
//           annotation.y,
//           annotation.width_rect,
//           annotation.height_rect,
//           0,
//           0,
//           annotation.width_rect,
//           annotation.height_rect
//         );
//       };
//     }
//   }, [annotation, annotationState.imageBase]);
//   if (!annotation) {
//     return <h4>Empty</h4>;
//   }
//   return (
//     <div>
//       <canvas ref={ref}></canvas>
//     </div>
//   );
// }
