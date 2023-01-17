import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder } from "@babylonjs/core";

export class App {
    private engine : Engine;
    private canvas : HTMLCanvasElement;
    private scene : Scene;

    createScene() {
        // initialize babylon scene and engine
        var scene = new Scene(this.engine);

        var camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
        camera.attachControl(this.canvas, true);
        var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        var sphere: Mesh = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);

        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.ctrlKey && ev.key === 'i') {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });

        this.scene = scene;
    }

    run(){
        // run the main render loop
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    constructor(engine : Engine, canvas : HTMLCanvasElement) {
        this.engine = engine;
        this.canvas = canvas;
    }
}