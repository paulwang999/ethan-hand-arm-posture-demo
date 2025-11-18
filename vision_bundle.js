// vision_bundle.js
// 封装官方 Tasks Vision，直接在浏览器中使用，不是 ES Module

(function(global) {
  // 检查是否已经存在
  if(global.tasksVision) return;

  global.tasksVision = {};

  // ⚠️ 注意：下面示例是封装加载官方 wasm 和模型逻辑的 stub，
  // 实际功能依赖官方 npm 包 / wasm 文件，保证 window.tasksVision 可用。
  // 真正的 HandLandmarker / PoseLandmarker 需要官方 .wasm 文件和 .task 文件。

  global.tasksVision.FilesetResolver = class FilesetResolver {
    static async forVisionTasks(wasmBaseUrl) {
      return new FilesetResolver(wasmBaseUrl);
    }
    constructor(wasmBaseUrl) {
      this.wasmBaseUrl = wasmBaseUrl;
      console.log("FilesetResolver initialized with base URL:", wasmBaseUrl);
    }
  };

  global.tasksVision.HandLandmarker = class HandLandmarker {
    static async createFromOptions(fileset, options) {
      console.log("HandLandmarker created with options:", options);
      return new HandLandmarker(fileset, options);
    }
    constructor(fileset, options) {
      this.fileset = fileset;
      this.options = options;
    }
    async detectForVideo(video) {
      // ⚠️ 实际识别逻辑需要官方 bundle + wasm，这里只返回空数组，防止报错
      return { landmarks: [] };
    }
  };

  global.tasksVision.PoseLandmarker = class PoseLandmarker {
    static async createFromOptions(fileset, options) {
      console.log("PoseLandmarker created with options:", options);
      return new PoseLandmarker(fileset, options);
    }
    constructor(fileset, options) {
      this.fileset = fileset;
      this.options = options;
    }
    async detectForVideo(video) {
      return { landmarks: [] };
    }
  };

})(window);

console.log("vision_bundle.js loaded: window.tasksVision available");
