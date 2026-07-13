
while True:
    while True:
        try:    
            num1 = int(input("Enter first number:"))
            num2 = int(input("Enter second number:"))
            break
        except ValueError:
            print("please enter valid number.") 
    if num1 == num2:
        print("Both numbers are same.")
        break
    else:
        print("Both numbers are not same.")
        print("re-enter the numbers.")