
def add(num1, num2):
    return num1 + num2

def subtract(num1, num2):
    return num1 - num2

def multiply(num1, num2):
    return num1 * num2

def divide(num1, num2):
    if num2 == 0:
        print("Error: Division by zero is not allowed.")
        return None
    return num1 / num2

def modulus(num1, num2):
    if num2 == 0:
        print("Error: Modulus by zero is not allowed.")
        return None
    return num1 % num2

choice = input("Do you want to perform calculation? (y/n):")

while choice == "y":
    while True:
        try:    
            num1 = int(input("Enter first number:"))
            num2 = int(input("Enter second number:"))
            break
        except ValueError:
            print("please enter valid number.")

    operator = input("Enter the operator (+,-,*,/,%):")
    if operator not in ["+", "-", "*", "/", "%"]:
        print("Invalid operator. Please enter a valid operator.")
        continue

    if(operator== "+"):
        result=add(num1, num2)
    elif(operator=="-"):
        result=subtract(num1, num2)
    elif(operator=="*"):
        result=multiply(num1, num2)
    elif(operator=="/"):
        result=divide(num1, num2)
    elif(operator=="%"):
        result=modulus(num1, num2)
    else:
        print("You entered Wrong Operator.")

    print(num1, operator, num2, "=", result)
    while True:
        choice = input("Do you want to continue? (y/n):")
        if choice in ["y", "n"]:
            break
        else:
            print("Please enter 'y' or 'n'.")
print("Thank you for using the calculator.")
