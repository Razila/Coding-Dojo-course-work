class Underscore:
    def map(self, iterable, callback):
        for i in range(len(iterable)):
            iterable[i] = callback(iterable[i])
        return iterable

    def find(self, iterable, callback):
        print(next(x for x in iterable if callback(x)))

    def filter(self, iterable, callback):
        newArr = []
        for i in range(len(iterable)):
            if callback(iterable[i]):
                newArr.append(iterable[i])
        return newArr

    def reject(self, iterable, callback):
        newArr = []
        for i in range(len(iterable)):
            if not callback(iterable[i]):
                newArr.append(iterable[i])
        return newArr

_ = Underscore()

_.map([1,2,3], lambda x: x*2) # should return [2,4,6]
_.find([1,2,3,4,5,6], lambda x: x>4) # should return the first value that is greater than 4
_.filter([1,2,3,4,5,6], lambda x: x%2==0) # should return [2,4,6]
_.reject([1,2,3,4,5,6], lambda x: x%2==0) # should return [1,3,5]
