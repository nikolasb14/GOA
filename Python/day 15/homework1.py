# crew_leaders = ['kruashvili', 'amiranashvili', 'tyeshelashvili', 'janezashvili', 'molodini', 'kereselidze', 'kurtanidze']


#  for i in range(1,4):
#      print('winner N',i,'is',random.choice(crew_leaders))
# ეს კოდი გადააკეთეთ ისე, რომ ერთმა ბავშვმა რამოდენიმეჯერ ვეღარ მოიგოს

import random

crew_leaders = ['kruashvili', 'amiranashvili', 'tyeshelashvili', 'janezashvili', 'molodini', 'kereselidze', 'kurtanidze']


for i in range(1, 4):
    winner = random.choice(crew_leaders)
    print('winner N', i, 'is', winner)
    crew_leaders.remove(winner)