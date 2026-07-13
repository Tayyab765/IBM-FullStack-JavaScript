from services.ATMServices import display_menu, check_balance, balance, deposit, withdraw
global pin
pin = 1234

print("------------------------------------\n------------------------------------")
print("       WELCOME TO PYTHON BANK")
print("------------------------------------\n------------------------------------")

count = 0
while count < 3:
    entered_pin = int(input("Enter your 4-digit PIN:"))
    if entered_pin == pin:
        print("PIN accepted. Access granted.")
        break
    else:
        count += 1
        print("Incorrect PIN. Please try again.")
        if count == 3:
            print("Too many incorrect attempts. Exiting the program.")
            exit()


while True:
    display_menu()
    choice = int(input("Enter your choice (1,2,3,4):"))
    try:
        if choice not in [1, 2, 3, 4]:
            raise ValueError("Invalid choice. Please enter a valid option.")
    except ValueError as e:
        print(e)
        continue

    if choice == 1:
        check_balance()
    elif choice == 2:
        deposit()
    elif choice == 3:
        withdraw()
    elif choice == 4:
        print("Thank you for using Python Bank. Goodbye!")
        break
    
