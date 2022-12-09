type StreamConfig = {
  width?: number;
  height?: number;
  fps?: number;
  quality?: number;
};

function setStream(streamConfig: StreamConfig) {
  const streamSection = document.querySelector(
    'div[data-name="stream-section"]'
  );
  const streamImage = streamSection?.getElementsByTagName("img")[0];
  if (!streamImage) {
    return;
  }
  const streamUrl = new URL(streamImage?.src);
  if (streamConfig.width) {
    streamUrl.searchParams.set("width", streamConfig.width.toString());
  }
  if (streamConfig.height) {
    streamUrl.searchParams.set("height", streamConfig.height.toString());
  }
  if (streamConfig.fps) {
    streamUrl.searchParams.set("fps", streamConfig.fps.toString());
  }
  if (streamConfig.quality) {
    streamUrl.searchParams.set("quality", streamConfig.quality.toString());
  }
  streamImage.src = streamUrl.toString();
}

console.log("content script loaded");
setStream({ width: 640, height: 480, fps: 10, quality: 10 });
