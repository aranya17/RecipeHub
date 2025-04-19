export const fadeIn = (direction = "up", duration = 0.6, delay = 0) => {
    let x = 0;
    let y = 0;
  
    switch (direction) {
      case "left":
        x = -100;
        break;
      case "right":
        x = 100;
        break;
      case "up":
        y = 100;
        break;
      case "down":
        y = -100;
        break;
      default:
        break;
    }
  
    return {
      hidden: {
        opacity: 0,
        x,
        y,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const slideIn = (direction = "left", duration = 0.5, delay = 0) => {
    let x = 0;
    let y = 0;
  
    switch (direction) {
      case "left":
        x = "-100vw";
        break;
      case "right":
        x = "100vw";
        break;
      case "up":
        y = "-100vh";
        break;
      case "down":
        y = "100vh";
        break;
      default:
        break;
    }
  
    return {
      hidden: { x, y },
      visible: {
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const zoomIn = (duration = 0.5, delay = 0) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    };
  };
  