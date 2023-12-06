from turtle import *

#house lol


#square

speed(6)

width(7)


color("purple")

def kvadratis_xazva():
    for i in range(4):
        forward(200)
        left(90)

kvadratis_xazva()

#door

forward(70)
color("red")
begin_fill()
left(90)
forward(80)
right(90)
forward(60)
right(90)
forward(80)
end_fill()

penup()
goto(200, 200)
pendown()

#roof

right(150)
color("red")
begin_fill()
forward(200)
left(120)
forward(200)
end_fill()

#windows

color("yellow")

penup()
goto(20, 170)
pendown()

left(30)
def window():
    begin_fill()
    for i in range(4):
        forward(50)
        left(90)
    end_fill()
window()

penup()
goto(130, 170)
pendown()

window()

exitonclick()