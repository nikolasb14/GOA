crew = ['lazare gogoberidze', 'luka telia', 'leqso pataraia', 'tornike qarelidze', 'nino ochigava', 'luka gamreklidze', 'niko qutateladze', 'nikolas bobokhidze',]

for i in range(len(crew)):
    member = crew[i]
    if len(member) > 16:
        crew[i] = member.upper()

print(crew)


