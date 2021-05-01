import React from "react";
import { Label, Rect, Tag, Text, Transformer } from "react-konva";

const clamp = (value, max, min) => Math.max(min, Math.min(value, max));
export class AnnotationRect extends React.Component {
  transformer = React.createRef();
  rect = React.createRef();
  label = React.createRef();
  group = React.createRef();
  fillColor = "red";
  hoverColor = "rgba(255, 0,0,.3)";
  textColor = "white";
  data = {
    tooth_id: this.props.tooth_id,
    tooth_name: this.props.tooth_name,
    id: this.props.id,
    x: this.props.x,
    y: this.props.y,
    width_rect: this.props.width_rect,
    height_rect: this.props.height_rect,
    text_label: this.props.text_label,
    rotation_rect: this.props.rotation_rect,
  };

  transformLimiter = (oldBox, newBox) => {
    const stage = this.transformer.current.getStage();
    // newBox.width = clamp(newBox.width, stage.width() - newBox.x, 20);
    // newBox.height = clamp(newBox.height, stage.height() - newBox.y, 20);

    newBox.width = clamp(newBox.width, 200, 20);
    newBox.height = clamp(newBox.height, 200, 20);

    newBox.x = clamp(newBox.x, stage.width() - newBox.width, 0);
    newBox.y = clamp(newBox.y, stage.height() - newBox.height, 0);
    return newBox;
  };

  dragLimiter = (pos) => {
    const { stage } = this.props;
    if (stage)
      return {
        x: clamp(pos.x, stage.width() - this.rect.current.width(), 0),
        y: clamp(pos.y, stage.height() - this.rect.current.height(), 0),
      };
    return pos;
  };
  onRectClick = () => {
    this.props.onSelectIdChange(this.props.id);
  };
  onRectTransform = (ev) => {
    this.label.current.setPosition({
      x: this.rect.current.x(),
      y: this.rect.current.y() - 20,
    });
    this.rect.current.setAttrs({
      width: this.rect.current.width() * this.rect.current.scaleX(),
      height: this.rect.current.height() * this.rect.current.scaleY(),
      scaleX: 1,
      scaleY: 1,
    });
  };
  onLabelDoubleClick = () => {
    this.setLabeltext();
  };
  setLabeltext = () => {
    if (this.props.readOnly) return;
    const textEl = this.label.current.findOne(".AnnotationRectText");
    if (textEl) {
      const text = prompt("Set annotation");
      this.data.text_label = text;
      textEl.text(text);
    }
    this.props.onChange(this.data);
  };
  onRectMouseOver = () => {
    if (this.props.readOnly) return;

     this.rect.current.fill(this.hoverColor);
    this.rect.current.getLayer().batchDraw();
  };
  onRectMouseOut = () => {
    if (this.props.readOnly) return;

    this.rect.current.fill("rgba(255,0,0,0)");
    this.rect.current.getLayer().batchDraw();
  };
  _bindElementsToTransform = () => {
    if (this.transformer.current)
      this.transformer.current.nodes([this.rect.current]);
  };
  componentDidUpdate = () => {
    this._bindElementsToTransform();
  };
  componentDidMount = () => {
    this._bindElementsToTransform();
  };
  onDragEnd = () => {
    this.data.x = Math.floor(this.rect.current.x());
    this.data.y = Math.floor(this.rect.current.y());
    this.props.onChange(this.data);
  };

  onTransformEnd = () => {
    this.data.x = Math.floor(this.rect.current.x());
    this.data.y = Math.floor(this.rect.current.y());
    this.data.width_rect = Math.floor(this.rect.current.width());
    this.data.height_rect = Math.floor(this.rect.current.height());
    this.props.onChange(this.data);
  };
  onDragMove = () => {
    this.label.current.x(this.rect.current.x());
    this.label.current.y(this.rect.current.y() - 20);
  };
  render() {
    const {
      id,
      selectedId,
      x,
      y,
      width_rect,
      height_rect,
      text_label,
      visible,
      rotation_rect,
    } = this.props;
    return (
      <React.Fragment>
        <Label
          scaleX={1 / this.props.scale}
          scaleY={1 / this.props.scale}
          visible={visible}
          x={x}
          y={y - 20}
          ref={this.label}
          name="AnnotationRectLabel"
        >
          <Tag fill={this.fillColor} name="AnnotationRectTag" />
          <Text
            fill={this.textColor}
            fontStyle="bold"
            fontSize={14}
            fontFamily="monospace"
            name="AnnotationRectText"
            text={text_label}
          />
        </Label>
        <Rect
          x={x}
          y={y}
          draggable={!this.props.readOnly}
          visible={visible}
          dragBoundFunc={this.dragLimiter}
          onDblClick={this.setLabeltext}
          onDragEnd={this.onDragEnd}
          onDragMove={this.onDragMove}
          onMouseOver={this.onRectMouseOver}
          onMouseOut={this.onRectMouseOut}
          onTransform={this.onRectTransform}
          onTransformEnd={this.onTransformEnd}
          onClick={this.onRectClick}
          ref={this.rect}
          width={width_rect}
          height={height_rect}
          name="AnnotationRectRect"
          stroke={this.fillColor}
          srokeWidth={0.4}
          dash={[10, 5]}
          rotation={rotation_rect}
        />
        {id === selectedId && !this.props.readOnly ? (
          <Transformer
            rotateEnabled={false}
            boundBoxFunc={this.transformLimiter}
            ref={this.transformer}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
