<template>
  <div class="grid items-center">
    <main class="grid max-w-7xl mx-auto ">
      <div class="container">
        <div class="row items-center justify-center">
          <a  @click="rasterizeSVG" href="#"> Save as Image</a>
          <CustomButton class="font-bold shadow" @click="addText()">
            Add Text
          </CustomButton>
          <CustomButton class="font-bold shadow" @click="changeFontFamily()">
            Change font family
          </CustomButton>
          <CustomButton class="font-bold shadow" @click="setBackground()"
            >Set Background black
          </CustomButton>
          <CustomButton class="font-bold shadow" @click="addText()">
            Add Text
          </CustomButton>
        </div>
      </div>
      <div class="grid lg:grid-cols-4 gap-4  py-6 sm:px-6 lg:px-8">
        <aside class="shadow">
          <Frames :frames="frames" @addToCanvas="setBackground" />
        </aside>
        <div class="col-span-2">
          <canvas
            @click="showSelectedObject"
            class=" border-4 border-dashed border-gray-200 rounded-lg"
            ref="card_editor"
            width="580"
            height="580"
          ></canvas>
        </div>
        <aside class="shadow">
          <Images  :images="images"   @addToCanvas="addImagesToCanvas" />
          <Images  :images="images" :title="'Upload your images'" @addToCanvas="addImagesToCanvas" />
        </aside>
      </div>
    </main>
  </div>
</template>
<script>
import { CANVAS_EVENTS } from "./CanvasEvents";
import deleteImgIcon from "./DeleteIcon";
import CustomButton from "../CustomButton";
import Frames from "./Frames";
import Images from "./Images";
import { fabric } from "fabric";
export default {
  name: "Editor",
  components: { CustomButton, Frames, Images },
  data() {
    return {
      canvas: null,
      textBox: "Text ",
      selectedActiveObject: ""
    };
  },
  mounted() {
    const ref = this.$refs.card_editor;
    this.canvas = new fabric.Canvas(ref, { preserveObjectStacking: true });
    this.createEvents();
    fabric.Object.prototype.controls.deleteControl = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: -16,
      offsetX: 16,
      cursorStyle: "pointer",
      mouseUpHandler: this.deleteObject,
      render: this.renderIcon(deleteImgIcon),
      cornerSize: 15
    });
    this.$on("selection:created", this.showSelectedObject);
  },
  created() {
    this.$store.dispatch('editor/getImages');
    this.$store.dispatch('editor/getFrames');
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "#32CD32";
    fabric.Object.prototype.cornerSize = 15;

    fabric.Object.prototype.cornerStyle = "circle";
  },
  computed: {
    images: function () {
      return this.$store.getters['editor/images']
    },
    frames: function () {
      return this.$store.getters['editor/frames']
    }
  },
  methods: {
    rasterizeSVG () {
      let w = window.open('')
      w.document.write(this.canvas.toSVG())
      return 'data:image/svg+xml;utf8,' + encodeURIComponent(this.canvas.toSVG(
              {
                viewBox: {
                  x: 80,
                  y: 80,
                  width: 250,
                  height: 250
                }
              }
      ))
    },
    saveImage( e){
      e.target.href = this.canvas.toDataURL("image/png");

      e.target.download = 'testik.png'
    },
    addImagesToCanvas() {
      var imgInstance = new fabric.Image(event.target, {
        left: 100,
        top: 100,
        angle: 30,

      });
      this.canvas.add(imgInstance);
      console.log(event.target.src);
    },
    setSelectedObject(object) {
      this.selectedActiveObject = object;
    },
    setActiveObject() {
      this.canvas.setActiveObject(this.selectedActiveObject);
    },
    deleteObject(eventData, transform, x, y) {
      console.log(eventData, transform, x, y);
      this.canvas.remove(transform.target);
      this.canvas.renderAll();
    },
    renderIcon(icon) {
      return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
        var size = this.cornerSize;
        ctx.save();
        ctx.translate(left, top);
        ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
        ctx.drawImage(icon, -size / 2, -size / 2, size, size);
        ctx.restore();
      };
    },

    setBackground(bgImage) {
      this.canvas.setBackgroundImage(bgImage.src, () => {
        let img = this.canvas.backgroundImage;
        img.originX = 'left';
        img.originY = 'top';
        img.scaleX = this.canvas.getWidth() / img.width;
        img.scaleY = this.canvas.getHeight() / img.height;
       this.canvas.renderAll();
      });

    },
    createEvents() {
      CANVAS_EVENTS.forEach(event => {
        let vueEvent = event;
        this.canvas.on(event, e => {
          this.$emit(vueEvent, e);
        });
      });
    },
    showSelectedObject(options) {
      this.setSelectedObject(options.target);
    },

    addText() {
      let text = "Edit me here!";
      var textObject = new fabric.IText(text, {
        fontSize: 20,
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        hasRotatingPoint: true,
        centerTransform: true,
        fill: "black",
        width: 250,
        editable: true,
        adjustPosition: "center",
        textAlign: "center",
        padding: "5",
        centeredRotation: true
      });
      this.canvas.add(textObject);
      this.canvas.centerObject(textObject);
      textObject.set("fill", "red");
      // this.canvas.setActiveObject(textObject)
      // this.canvas.renderAll()
    },
    changeFontFamily() {}
  }
};
</script>

<style scoped></style>
