class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self
    def display_balance(self):
        print(f"{self.name}'s current balance = {self.account_balance}")
        return self
    def transfer_money(self,to_account, amount):
        self.make_withdrawal(amount)
        to_account.make_deposit(amount)
        return self

guido = User("Guido van Rossum", "guido@python.com")
raz = User("Raz Illa", "Razzy@python.com")
prissy = User("Pris Killa Illa", "pris@python.com")

guido.make_deposit(100).make_deposit(300).make_deposit(200).make_withdrawal(100).display_balance()

raz.make_deposit(1000).make_deposit(200).make_withdrawal(700).display_balance()

prissy.make_deposit(5000).make_withdrawal(200).make_withdrawal(100).make_withdrawal(550).display_balance()

guido.transfer_money(prissy,100).display_balance()
prissy.display_balance()

