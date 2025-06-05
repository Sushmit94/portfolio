import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const CursorFollowerSpline = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);

    app.load('https://prod.spline.design/I5f2NOFz0-gPwfAA/scene.splinecode').then(() => {
      const obj1 = app.findObjectByName('Figure1');
      const obj2 = app.findObjectByName('Figure2');
      const obj3 = app.findObjectByName('Figure3');

      // Optional: Slight zoom-out by repositioning the camera
      const cam = app.scene.camera;
      if (cam) {
        cam.position.z += 200; // Zoom out to fit entire model
        cam.position.y += 30;  // Shift up a bit to center the robot
      }

      // Cursor follow logic
      document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (0.5 - e.clientY / window.innerHeight) * 10;

        if (obj1) {
          obj1.position.x = x;
          obj1.position.y = y;
        }
        if (obj2) {
          obj2.position.x = x + 1;
          obj2.position.y = y - 1;
        }
        if (obj3) {
          obj3.position.x = x - 1;
          obj3.position.y = y + 1;
        }
      });
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%', // max size
        height: '100vh', // full screen
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
};

export default CursorFollowerSpline;
