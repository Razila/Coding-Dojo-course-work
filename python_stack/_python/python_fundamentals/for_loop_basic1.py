for x in range(0,151,1):
    print(x)

for x in range(5,1001,1):
    if x % 5 == 0:
        print(x)

for x in range(1,101,1):
    if x % 5 == 0:
        print("coding")
    elif x % 10 == 0:
        print("coding dojo")
    else:
        print(x)

total = sum(x for x in range(0,500000,1) if x % 2 != 0)
print(total)

for x in range(2018,0,-4):
    print(x)

lowNum = 1
highNum = 300
mult = 8
for x in range(lowNum,highNum,mult):
    print(x)
