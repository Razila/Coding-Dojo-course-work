class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
        return None
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self
    def display_balance(self):
        print(f"{self.name}'s current balance = {self.account_balance}")
        return self


guido = User("Guido van Rossum", "guido@python.com")
raz = User("Raz Illa", "Razzy@python.com")
prissy = User("Pris Killa Illa", "pris@python.com")


