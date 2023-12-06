from turtle import *

#house lol


#square

speed(150)

width(7)


color("purple")

forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)

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
begin_fill()
left(30)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)

end_fill()

penup()
goto(130, 170)
pendown()
begin_fill()
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
end_fill()


exitonclick()
