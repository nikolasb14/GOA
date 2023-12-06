# შექმენით თქვენი რაზმელებისგან სია, ამოირჩიეთ რენდომულად 3 ბავშვი და მიუწერეთ გვერდში "კარგად სწავლობს"

import random

crew_members = ['ლაზარე ღოღობერიძე', 'ლუკა თელია', 'ლექსო პატარაია', 'თორნიკე ქარელიძე', 'ნინო ოჩიგავა', 'ლუკა გამრეკლიძე', 'ნიკო ქუთათელაძე', 'ნიკოლას ბობოხიძე',]

winner1 = random.choice(crew_members)
winner2 = random.choice(crew_members)
winner3 = random.choice(crew_members)


if winner1[-1] == "ი":
    print(winner1, "is cool")
else:
    print(winner1)

if winner2[-1] == "ი":
    print(winner2, "is cool")
else:
    print(winner2)

if winner3[-1] == "ი":
    print(winner3, "is cool")
else:
    print(winner3)


    