class Product:
    def __init__(self, code, name,price,category):
        self.name = name
        self.price = price
        self.category = category
        self.code = code
    def update_price(self, percent_change, is_increased):
        if is_increased == "TRUE":
            self.price = self.price + (self.price * percent_change)
        else:
            self.price = self.price - (self.price * percent_change)
        return self
    def print_info(self):
        print(f"{self.code}\t{self.name}\t{self.category}\t{self.price}")
        return self


class Store:
    def __init__(self,name):
        self.name = name
        self.products = []
    def add_product(self, product):
        self.products.append(product)
        return self
    def sell_product(self, code):
            for i in range (len(self.products)):
                if code == self.products[i].code:
                    print(self.products[i].name)
                    print(f"{self.products[i].name} was sold")
                    self.products.pop(i)
                else:
                    print("item not present")
                return self






Chair = Product(25434,"chair","$50","furniture").print_info()
Couch = Product(59783,"couch","$100","furniture").print_info()
RazStore = Store("Raz")

RazStore.add_product(Chair).add_product(Couch)

RazStore.sell_product(25434)