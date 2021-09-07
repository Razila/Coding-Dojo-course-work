import random
def randInt(min=0, max=100):
    if max > min and max > 0:
        num = round(random.random() * (max-min) + min)
        return num
    else:
        print("Max value must be a positive number greater than the min value")

print(randInt())

#print(randInt()) # should print a random integer between 0 to 100
#print(randInt(max=50)) # should print a random integer between 0 to 50
#print(randInt(min=50)) # should print a random integer between 50 to 100
#print(randInt(min=50, max=500)) # should print a random integer between 50 and 500



