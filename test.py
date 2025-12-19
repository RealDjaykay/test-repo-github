# import time
# name = input("What's your name? ")
# print("Hey", name.capitalize())

# num1 = int(input("Give me a number "))
# num2 = int(input("Give me another number "))
# print("Hey, you didnt ask for this put here is the sum of those two numbers:", num1+num2)

# age = int(input("Btw please tell me ur age: "))
# if age >= 18:
#     print("Great!")
# else:
#     print("This site is bad for you pls leave!!!")
# time.sleep(2)
# print("ANYWAYS")
# time.sleep(2)
# if num1 % 2 == 0:
#     print("Your first number was even")
# else:
#     print("Your first number was odd")

for i in range(11):
    print(i)

import random

play_again = "yes"
while play_again.lower() == "yes":

    print("guess the number i'm thinking 1-10")
    actual = random.randint(1,10)
    guess = int(input("guess a number first "))
    while guess != actual:
        guess = int(input("Wrong guess again "))
    print("You got it! the number was", actual)

    play_again = input("Play again? (yes/no): ")
