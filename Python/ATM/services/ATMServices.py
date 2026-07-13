

global balance
balance = 10000

def check_balance():
    print("Current Balance: RS.", balance)

def display_menu():
    print("\n\n\n------------MAIN MENU------------")
    print("1. Check Balance")
    print("2. Deposit")
    print("3. Withdraw")
    print("4. Exit")
    print("---------------------------------")

def deposit():
    global balance
    amount = float(input("Enter amount to deposit:"))
    if amount <= 0:
        print("Deposit amount must be greater than zero.")
        return
    balance += amount
    print("Deposited RS.", amount)
    print("New Balance: RS.", balance)

def withdraw():
    global balance
    amount = float(input("Enter amount to withdraw:"))
    if amount <= 0:
        print("Withdrawal amount must be greater than zero.")
        return
    if amount > balance:
        print("Insufficient balance. Cannot withdraw RS.", amount)
        return
    balance -= amount
    print("Withdrew RS.", amount)
    print("New Balance: RS.", balance)


def transfer():
    global balance
    recipient_account = input("Enter recipient account number:")
    amount = float(input("Enter amount to transfer:"))
    if amount <= 0:
        print("Transfer amount must be greater than zero.")
        return
    if amount > balance:
        print("Insufficient balance. Cannot transfer RS.", amount)
        return
    balance -= amount
    print("Transferred RS.", amount, "to account", recipient_account)
    print("New Balance: RS.", balance)