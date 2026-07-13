

x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()

print("Python is " + x)

# make a simple program to calculate sum, minus, multiply, quotient and remainder of two numbers
num1= 4
num2 = 3
sum = num1 + num2 

prod = num1*num2

minus = num1-num2

quot= num1/num2

rem = num1%num2

print("sum =", sum, "minus =", minus, "product =", prod, "quotient =", quot, "reminder =", rem)


value = input("Enter some value:")
num = input("Enter some number")
print (value + num)

value = 11
if(value > 10):
    print("hello")
else:
   print("world")

# check pass or fail based on marks
while True:
    try: 
        marks = int(input("Enter your marks:"))
        break
    except ValueError:
        print("Please enter a valid number") 

if(marks>40):
    print("pass")
else: 
    print("Fail")


while True:
    try: 
        age=int(input("Enter your age: "))
        if(age < 0 | age > 120):
            print("please enter a valid age")
    except ValueError:
        print("please enter a valid age")

    try:
        is_member=str(input("Are you a member of Behnzir Bhutto Income Support: (Y/N)"))
    except ValueError:
        print("dhf")


