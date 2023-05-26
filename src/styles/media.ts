const mq = (bp: number) => `@media (max-width: ${bp}px)`;

const media = {
  smallDesktop: mq(1000), // tablets landscape, small desktops
};

export default media;
