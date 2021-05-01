import Konva from "konva";
import React from "react";
import { Image, Layer, Stage } from "react-konva";
import { AnnotationRect } from "./AnnationRect";

export class Annotator extends React.Component {
  state = { image: null, scale: 1, selectedId: null };
  stageScaleX = 1;
  stageScaleY = 1;
  imageRef = React.createRef();
  stageRef = React.createRef();
  annotationLayerRef = React.createRef();

  resizeEventHandler = () => {
    const { containerRef } = this.props;
    const ns = { ...this.state };
    // ns.stageWidth = containerRef.current.offsetWidth || ns.stageWidth;
    // ns.stageHeight = containerRef.current.offsetHeight || ns.stageHeight;
    let stageWidth, stageHeight;
    stageWidth = this.image.width;
    stageHeight = this.image.height;
    const widthRatio = containerRef.current.offsetWidth / this.image.width;
    const heightRatio = containerRef.current.offsetHeight / this.image.height;

    if (widthRatio > heightRatio) {
      ns.scale = heightRatio;
    } else {
      ns.scale = widthRatio;
    }
    stageWidth *= ns.scale;
    stageHeight *= ns.scale;

    this.stageRef.current.width(stageWidth);
    this.stageRef.current.height(stageHeight);

    this.setState(ns);
  };
  componentDidMount() {
    this.loadImage();
    window.addEventListener("resize", this.resizeEventHandler);
  }
  // shouldComponentUpdate(nextProps, nextState){
  //     return nextProps.src !== this.props.src || nextProps.annotations.length !== this.props.annotations.length
  // }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.imageRef.current.clearCache();
      this.loadImage();
    }
    if (
      oldProps.brightness !== this.props.brightness ||
      oldProps.contrast !== this.props.contrast ||
      oldProps.invert !== this.props.invert ||
      oldProps.sharpness !== this.props.sharpness
    ) {
      this.imageRef.current.cache();
      this.imageRef.current.getLayer().batchDraw();
      this.updateSharedImage();
    }
  }
  updateSharedImage = () => {
    const image = new window.Image();
    image.src = this.imageRef.current.toDataURL();
    image.onload = () => {
      this.props.setSharedImage(image, this.state.scale);
    };
  };
  componentWillUnmount() {
    this.image.removeEventListener("load", this.handleLoad);
    window.removeEventListener("resize", this.resizeEventHandler);
  }
  loadImage() {
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.crossOrigin = "Anonymous";
    this.image.addEventListener("load", this.handleLoad, false);
  }
  setSelectedId = (id) => {
    this.setState((st) => ({ ...st, selectedId: id }));
  };

  handleLoad = () => {
    const { containerRef } = this.props;
    let stageWidth, stageHeight;
    stageWidth = this.image.width;
    stageHeight = this.image.height;
    const newState = { image: this.image };

    const widthRatio = containerRef.current.offsetWidth / this.image.width;
    const heightRatio = containerRef.current.offsetHeight / this.image.height;

    if (widthRatio > heightRatio) {
      newState.scale = heightRatio;
    } else {
      newState.scale = widthRatio;
    }
    stageWidth *= newState.scale;
    stageHeight *= newState.scale;

    this.stageRef.current.width(stageWidth);
    this.stageRef.current.height(stageHeight);
    this.setState(newState);
    this.updateSharedImage();
  };
  clearSelection = (ev) => {
    if (ev.target.name() === "AnnotatorImage") {
      this.setState((st) => ({ ...st, selectedId: null }));
    }
  };
  onDelete = (ev) => {
    if (this.props.readOnly) return;
    if (["Backspace", "Delete", "Escape"].includes(ev.key)) {
      this.props.onDeleteAnnotation(this.state.selectedId);
    }
  };
  render() {
    let annotationData = this.props.annotations || [];
    const annotations = annotationData.map((ann) => {
      return (
        <AnnotationRect
          readOnly={this.props.readOnly}
          scale={this.state.scale}
          stage={this.stageRef.current}
          image={this.state.image}
          key={ann.id}
          onChange={this.props.onAnnotationChange}
          selectedId={this.state.selectedId}
          onSelectIdChange={this.setSelectedId}
          {...ann}
        />
      );
    });

    const filters = [
      Konva.Filters.Brighten, // -1 and 1.
      Konva.Filters.Contrast, //-100 and 100
      Konva.Filters.Emboss, //0 and 100 (limited to 20)
      this.props.invert ? Konva.Filters.Invert : null,
    ];

    return (
      <div tabIndex={1} onKeyDown={this.onDelete}>
        <Stage
          scaleX={this.state.scale}
          scaleY={this.state.scale}
          ref={this.stageRef}
          onClick={this.clearSelection}
        >
          <Layer>
            <Image
              name="AnnotatorImage"
              image={this.state.image}
              filters={ this.props.readOnly? filters: null}
              ref={this.imageRef}
              brightness={this.props.brightness / 100}
              contrast={this.props.contrast}
              embossStrength={this.props.sharpness / 100}
              embossBlend={true}
              embossDirection={"top"}
              embossWhiteLevel={0}
            />
          </Layer>
          <Layer ref={this.annotationLayerRef}>{annotations}</Layer>
        </Stage>
      </div>
    );
  }
}
Annotator.defaultProps = {
  brightness: 0,
  contrast: 0,
  sharpness: 0,
  invert: false,
};
