import PointDraw from "./pointDraw";

export const draw = canvasWrap => {
  const ctx = new PointDraw(canvasWrap);
  console.log(ctx);
};
