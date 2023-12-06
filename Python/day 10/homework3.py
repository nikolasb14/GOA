user_gender = input("აირჩიეთ თქვენი სქესი: მამრობითი მდედრობითი ან ნონბაინერი ")

if user_gender == ("მამრობითი"):
    user_age = int(input("ჩაწერეთ თქვენი ასაკი: "))
    if user_age > 65:
        print("პენსია გეკუთვნით")
elif user_gender == ("მდედრობითი"):
    user_age = int(input("ჩაწერეთ თქვენი ასაკი: "))
    if user_age > 60:
        print("პენსია გეკუთვნით")
elif user_gender == ("ნონბაინერი"):
    print("მოშორდი აქედან")









