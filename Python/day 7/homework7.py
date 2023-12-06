#Toefl test results
listening_score = int(input("Listening: "))
writing_score =int(input("Writing: "))
#score should be greater then 100
total_score = (listening_score > 100) or (writing_score > 100) or (listening_score + writing_score > 100)
print(total_score)


