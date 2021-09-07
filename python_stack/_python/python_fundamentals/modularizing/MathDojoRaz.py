class MathDojo:
    def __init__(self):
    	self.result = 0
    def add(self, num, *nums):
        self.result += num
        for num in nums:
           self.result += num
        return self

    def subtract(self, num, *nums):
        self.result -= num
        for num in nums:
            self.result -= num
        return self


md = MathDojo()
x = md.add(6).add(12,5,21).subtract(33,22).result
print(x)





