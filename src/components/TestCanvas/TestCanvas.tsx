//React
import React, { useState, useEffect } from "react";

//Styles
import styles from "./TestCanvas.module.sass";

/////////////
//Component//
/////////////
const TestCanvas = ({
  style,
}: {
  style?: React.CSSProperties;
}): JSX.Element => {
  ///////////////////

  // TODO:
  // Make cursor helper.
  // Fix Stroke problem.

  const [hold, setHold] = useState<boolean>(false);

  useEffect(() => {
    const CELL_SIDE_COUNT = 32;

    const canvas = document.getElementById("Canvas") as HTMLCanvasElement;
    canvas.width = CELL_SIDE_COUNT * 20;
    canvas.height = CELL_SIDE_COUNT * 20;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    const cellPixelLength = canvas.clientWidth / CELL_SIDE_COUNT;

    //////////////////////////////////

    // MOUSE FUNCTIONS

    let lastMousePosition = { x: 0, y: 0 };

    //////////////////////////////////
    // PIXELS
    class Pixel {
      x: number;
      y: number;
      color: string;
      ctx: CanvasRenderingContext2D;
      cellPixelLength: number;

      constructor(
        x: number,
        y: number,
        ctx: CanvasRenderingContext2D,
        color: string,
        cellPixelLength: number
      ) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.color = color;
        this.cellPixelLength = cellPixelLength;
      }

      fillCell() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, cellPixelLength, cellPixelLength);
      }
    }

    const pixels: Array<Pixel> = [];

    function handleCanvasMousedown(e: MouseEvent) {
      const canvasBoundingRect = canvas.getBoundingClientRect();
      const x = e.clientX - canvasBoundingRect.left;
      const y = e.clientY - canvasBoundingRect.top;
      const cellX = Math.floor(x / cellPixelLength);
      const cellY = Math.floor(y / cellPixelLength);
      const startX = cellX * cellPixelLength;
      const startY = cellY * cellPixelLength;
      let overlapping = false;

      for (let i = 0; i < pixels.length; i++) {
        if (pixels[i].y == startY && pixels[i].x == startX) {
          overlapping = true;
          break;
        }
      }
      if (pixels.length == 0) {
        pixels.unshift(
          new Pixel(startX, startY, ctx, "#000000", cellPixelLength)
        );
      } else if (!overlapping) {
        pixels.unshift(
          new Pixel(startX, startY, ctx, "#000000", cellPixelLength)
        );
      }
    }

    function deleteTool(e: MouseEvent) {
      const canvasBoundingRect = canvas.getBoundingClientRect();
      const x = e.clientX - canvasBoundingRect.left;
      const y = e.clientY - canvasBoundingRect.top;
      const cellX = Math.floor(x / cellPixelLength);
      const cellY = Math.floor(y / cellPixelLength);
      const startX = cellX * cellPixelLength;
      const startY = cellY * cellPixelLength;

      for (let i = 0; i < pixels.length; i++) {
        if (pixels[i].y == startY && pixels[i].x == startX) {
          pixels.splice(i, 1);
          break;
        }
      }
    }

    // EVENTS
    let mouseHold = false;
    let mouseType = 0;

    window.addEventListener("contextmenu", (e) => e.preventDefault());

    canvas.addEventListener("mousedown", (e: MouseEvent) => {
      mouseHold = true;
      if (e.button == 0) {
        mouseType = 1;
        handleCanvasMousedown(e);
      } else if (e.button == 2) {
        deleteTool(e);
        mouseType = 2;
      }
    });

    canvas.addEventListener("mousemove", (e: MouseEvent) => {
      if (mouseType == 1) {
        handleCanvasMousedown(e);
      } else if (mouseType == 2) {
        deleteTool(e);
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < pixels.length; i++) {
        pixels[i].fillCell();
      }
      requestAnimationFrame(animate);
    };
    animate();

    canvas.addEventListener("mouseup", () => {
      mouseHold = false;
      mouseType = 0;
    });
  }, []);

  //////////
  //RENDER//
  //////////
  return (
    <>
      <canvas id="Canvas" className={styles.Canvas}></canvas>
    </>
  );
};

export default TestCanvas;
