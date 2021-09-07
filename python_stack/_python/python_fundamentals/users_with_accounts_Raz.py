class User:
	def __init__(self, name, email, acctNo):
		self.name = name
		self.email = email
		self.account = BankAccount(int_rate=0.02, balance=0)

	def make_deposit(self, amount):
		self.account.deposit(amount)
		return self

	def make_withdrawal(self, amount):
		self.account.withdraw(amount)
		return self

	def display_balance(self):
		self.account.display_account_info()
		return self

class BankAccount:
	def __init__(self, int_rate, balance):
			self.int_rate = int_rate
			self.balance = balance

	def deposit(self, amount):
			self.balance += amount
			return self
	def withdraw(self, amount):
			amount_after_withdraw = self.balance - amount
			if amount_after_withdraw < 0:
				self.balance -= 5
				print("insufficient funds: charging $5 fee")
			else:
				self.balance -= amount
			return self
	def display_account_info(self):
			print(f"current balance = {self.balance}")
			return self
	def yield_interest(self):
			if self.balance > 0:
				self.balance = self.balance + (self.balance * self.int_rate)
			return self



guido1 = User("Guido van Rossum", "guido@python.com", "42443")
guido2 = User("Guido van Rossum", "guido@python.com", "7723")

guido1.make_deposit(100).make_deposit(300).make_deposit(200).make_withdrawal(600).make_withdrawal(20).display_balance()
guido2.make_deposit(600).make_deposit(300).make_deposit(200).make_withdrawal(600).make_withdrawal(20).display_balance()

