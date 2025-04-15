trayectLine=None

#Modifiable variables
timeMult=0.001
sizeMult=0.5;
sineMult=4;
amplMult=300;
rotMult=2;


def setup():
    global trayectLine
    size(800, 600)
    smooth()
    
    #Drawing of the trayectory that the cube will follow
    trayectLine = createGraphics(width, height)
    trayectDraw(trayectLine)
    
def draw():
    global trayectLine
    background(93, 189, 233)
    image(trayectLine,0,0)
    translate(width/2, height/2)
    
    #Variables for the trayectory
    t = millis() * timeMult   
    move= trayectory(t, amplMult)
    
    #The movement of the cube
    pushMatrix()
    translate(move.x, move.y)
    rotate(t*rotMult)
    scale(1 + sin(t*sineMult) * sizeMult)
    fill(245, 123, 42)
    rect(-50, -50, 100, 100)
    popMatrix()

#Function for making the trayectory as a graphic
def trayectDraw(line):
    line.beginDraw()
    line.background(0, 0, 0, 0)
    line.translate(width / 2, height / 2)
    line.stroke(0, 0, 0, 100)
    line.noFill()
    line.beginShape()
    for t in [i * 0.1 for i in range(200)]:
        lineMove = trayectory(t, amplMult)
        line.vertex(lineMove.x, lineMove.y)
    line.endShape()
    line.endDraw()

#Function for calculating the trayectory
def trayectory(t, ampl):
    x = ampl * sin(t)
    y = ampl * sin(t) * cos(t)
    return PVector(x, y)
