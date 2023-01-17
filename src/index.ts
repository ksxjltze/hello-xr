import {App} from './app'
import {Engine} from '@babylonjs/core'

var canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
canvas.style.width = "100%";
canvas.style.height = "100%";

var engine = new Engine(canvas)
var app = new App(engine, canvas)

app.createScene()
app.run()