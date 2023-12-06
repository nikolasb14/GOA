# 1-იდან 100-მდე 
# ყოველი რიცხვისთვის, თუ 3ის ჯერადია, დაიპრინტოს GOA 
# თუ 5 ის ჯერადია, დაიპრინტოს GOA11
# თუ 15ის ჯერადია, დაიპრინტოს GOA15

for i in range(1, 101):
    if  i % 3 == 0:
        print(i, "GOA")

for i in range(1, 101):
    if  i % 5 == 0:
        print(i, "GOA11")

for i in range(1, 101):
    if  i % 15 == 0:
        print(i, "GOA15")