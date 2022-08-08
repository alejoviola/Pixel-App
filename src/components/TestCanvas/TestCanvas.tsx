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

  const [hold, setHold] = useState<boolean>(false);

  useEffect(() => {
    const canvas = document.getElementById("Canvas") as HTMLCanvasElement;
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.imageSmoothingEnabled = false;

    const CELL_SIDE_COUNT = 32;
    const cellPixelLength = canvas.width / CELL_SIDE_COUNT;

    function fillCell(cellX: number, cellY: number, color: string) {
      const startX = cellX * cellPixelLength;
      const startY = cellY * cellPixelLength;

      ctx.fillStyle = color;
      ctx.fillRect(startX, startY, cellPixelLength * 2, cellPixelLength * 2);
      ctx.strokeRect(startX, startY, cellPixelLength * 2, cellPixelLength * 2);
    }

    function deleteCell(cellX: number, cellY: number) {
      const startX = cellX * cellPixelLength;
      const startY = cellY * cellPixelLength;

      ctx.strokeStyle = "none";
      ctx.clearRect(startX, startY, cellPixelLength, cellPixelLength);
    }

    function handleCanvasMousedown(e: MouseEvent, color: string) {
      // Ensure user is using their primary mouse button
      // if (e.button !== 0) {
      //   return;
      // }

      const canvasBoundingRect = canvas.getBoundingClientRect();
      const x = e.clientX - canvasBoundingRect.left;
      const y = e.clientY - canvasBoundingRect.top;
      const cellX = Math.floor(x / cellPixelLength);
      const cellY = Math.floor(y / cellPixelLength);
      fillCell(cellX, cellY, color);
    }

    function deleteTool(e: MouseEvent) {
      // Ensure user is using their primary mouse button
      if (e.button !== 0) {
        return;
      }

      const canvasBoundingRect = canvas.getBoundingClientRect();
      const x = e.clientX - canvasBoundingRect.left;
      const y = e.clientY - canvasBoundingRect.top;
      const cellX = Math.floor(x / cellPixelLength);
      const cellY = Math.floor(y / cellPixelLength);
      deleteCell(cellX, cellY);
    }

    let mouseHold = false;
    let mouseButton = false;

    window.addEventListener("contextmenu", (e) => e.preventDefault());

    canvas.addEventListener("mousedown", (e: MouseEvent) => {
      mouseHold = true;
      if (e.button == 0) {
        handleCanvasMousedown(e, "#000000");
        console.log("Draw");
      } else {
        handleCanvasMousedown(e, "white");
        console.log("Delete");
      }
    });
    // canvas.addEventListener("mousemove", (e: MouseEvent) => {
    //   if (mouseHold == true) {
    //     handleCanvasMousedown(e, "#000000");
    //   }
    // });
    canvas.addEventListener("mouseup", () => {
      mouseHold = false;
      console.log("Mouse Up");
    });

    // if (e.button == 0) {
    //   handleCanvasMousedown(e, "#000000");
    //   canvas.addEventListener("mousemove", (e: MouseEvent) => {
    //     console.log(e.button);
    //     if (mouseHold) {
    //       handleCanvasMousedown(e, "#000000");
    //       console.log("Mouse Down");
    //     }
    //   });
    // } else if (e.button == 2) {
    //   deleteTool(e);
    //   canvas.addEventListener("mousemove", (e: MouseEvent) => {
    //     if (mouseHold) {
    //       handleCanvasMousedown(e, "#ffffff");
    //       console.log("Mouse Down");
    //     }
    //   });
    // }
  }, []);

  //////////
  //RENDER//
  //////////
  return <canvas id="Canvas" className={styles.Canvas}></canvas>;
};

export default TestCanvas;
