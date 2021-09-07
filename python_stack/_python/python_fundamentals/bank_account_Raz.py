class BankAccount:
	def __init__(self, int_rate = 0.02, balance = 0): # don't forget to add some default values for these parameters!
			self.int_rate = int_rate
			self.balance = balance

	def deposit(self, amount):
			self.balance += amount
			return self
	def withdraw(self, amount):
			if self.balance > 0:
				self.balance -= amount
			elif self.balance <= 0:
				self.balance -= 5
				print("insufficient funds: charging $5 fee")
			return self
	def display_account_info(self):
			print(f"current balance = {self.balance}")
			return self
	def yield_interest(self):
			if self.balance > 0:
				self.balance = self.balance + (self.balance * self.int_rate)
			return self

acct1 = BankAccount()
acct2 = BankAccount()

acct1.deposit(100).deposit(300).deposit(400).withdraw(200).withdraw(600).withdraw(20).yield_interest().display_account_info()
acct2.deposit(500).deposit(300).withdraw(100).withdraw(50).withdraw(200).withdraw(100).yield_interest().display_account_info()

