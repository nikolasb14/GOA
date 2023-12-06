crew = ['lazare gogoberidze', 'luka telia', 'leqso pataraia', 'tornike qarelidze', 'nino ochigava', 'luka gamreklidze', 'niko qutateladze', 'nikolas bobokhidze',]

superlist = []

for i in range(len(crew)):
    member = crew[i]
    count_i = member.count("i")

if count_i == 2:
    crew[i] = member.capitalize()
    superlist.append(member.capitalize())

print(crew)
print(superlist)