class SList:
    def __init__(self):
        self.head = None
    def add_to_front(self, val):  # added this line, takes a value
        new_node = SLNode(val) # create a new instance of our Node class using the given value
        current_head = self.head # save the current head in a variable
        new_node.next = current_head # SET the new node's next TO the list's current head
        self.head = new_node
        return self

    def print_values(self):
        runner = self.head # a pointer to the list's first node
        while (runner != None):
            print(runner.value) # print current node's value
            runner = runner.next # set the runner to its neighbor
        return self               # once the loop is done return self to allow chaining

    def add_to_back(self, val):
        if self.head == None:
            self.add_to_front(val)
            return self
        new_node = SLNode(val) # create a new instance of our Node class with a given value
        runner = self.head # set an iterator to start at the beginning of the list
        while (runner.next != None):
            runner = runner.next # increment the runner to the next node in the list
        runner.next = new_node # increment the runner to the next node in the list

        return self # return self to allow for chaining
class SLNode:
    def __init__(self, val):
        self.value = val
        self.next = None

my_list = SList()	# create a new instance of a list
my_list.add_to_front("are").add_to_front("Linked lists").add_to_back("fun!").print_values()    # chaining, yeah!
# output should be:
# Linked lists
# are
# fun!



