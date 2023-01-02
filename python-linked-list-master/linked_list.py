"""
============================================================================
Implementation Exercise: Singly Linked List
============================================================================

-------
Phase 1:
-------
1. Node and LinkedList initialization
2. Getting a node by its position
3. Adding a node to the list's tail
4. Adding a node to list's head
5. Removing the head node
6. Removing the tail node
7. Returning the list length

-------
Phase 2:
-------

1. Check whether the list contains_value a value
2. Inserting a node value into the list at a specific position
3. Updating a list node's value at a specific position
4. Removing a node value from the list at a specific position
5. Format the list as a string whenever `print()` is invoked
"""

# Phase 1

# TODO: Implement a Linked List Node class here
class Node:
  # TODO: Set the `_value` `_next` node instance variables
  def __init__(self, value):
    self._value = value
    self._next = None


# TODO: Implement a Singly Linked List class here
class LinkedList:
  # TODO: Set the `_head` node, `_tail` node, and list `_length` instance variables
  def __init__(self):
    self._head = None
    self._tail = None
    self._length = 0

  # TODO: Implement the get_node method here
  def get_node(self, position):
    if (position >= self._length):
      return None
    index = 0
    curr = self._head
    while index < self._length:
      if index == position:
        return curr
      index += 1
      curr = curr._next

  # TODO: Implement the add_to_tail method here
  def add_to_tail(self, value):
    newNode = Node(value)
    if(self._tail == None):
      self._head = newNode
      self._tail = newNode
    else:
      self._tail._next = newNode
      self._tail = newNode
    self._length += 1

  # TODO: Implement the add_to_head method here
  def add_to_head(self, value):
    newNode = Node(value)
    if(self._head == None):
      self._head = newNode
      self._tail = newNode
    else:
      newNode._next = self._head
      self._head = newNode
    self._length += 1


  # TODO: Implement the remove_head method here
  def remove_head(self):
    if not self._head:
        return None
    temp = self._head

    # Move the head pointer to the next node
    self._head = self._head._next
    temp = None
    self._length -= 1
    return self._head

  # TODO: Implement the remove_tail method here
  def remove_tail(self):
    if self._head == None:
        return None
    if self._head._next == None:
        self._head = None
        self._length -= 1
        return None
    future_new_tail = self._head
    while(future_new_tail._next._next):
        future_new_tail = future_new_tail._next

    future_new_tail._next = None
    self._tail = future_new_tail
    self._length -= 1
    return self._head


  # TODO: Implement the __len__ method here
  def __len__(self):
    return self._length

# Phase 2

  # TODO: Implement the contains_value method here
  def contains_value(self, target):
    curr = self._head
    while(curr):
      if (curr._value == target):
        return True
      curr = curr._next

    return False

  # TODO: Implement the insert_value method here
  def insert_value(self, position, value):
    if (position > self._length):
      return False

    if (position == 0):
      self.add_to_head(value)

    if (position == self._length):
      self.add_to_tail(value)

    newNode = Node(value)
    index = 0
    curr = self._head
    while index < self._length:
      if index == position - 1:
        temp = curr._next
        curr._next = newNode
        newNode._next = temp
        self._length += 1
        return self._head
      index += 1
      curr = curr._next


  # TODO: Implement the update_value method here
  def update_value(self, position, value):
    targetNode = self.get_node(position)
    if (targetNode):
      targetNode._value = value

  # TODO: Implement the remove_node method here
  def remove_node(self, position):
    if (position > self._length):
      return None

    if (position == 0):
      self.remove_head()

    if (position == self._length):
      self.remove_tail()

    index = 0
    curr = self._head
    while index < self._length:
      if index == position - 1:
        temp = curr._next
        curr._next = curr._next._next
        temp = None
        self._length -= 1
        return self._head
      index += 1
      curr = curr._next


  # TODO: Implement the __str__ method here
  def __str__(self):
    linked_list_array_repr = []
    curr = self._head
    while(curr):
      linked_list_array_repr.append(curr._value)
      curr = curr._next
    return '-->'.join(linked_list_array_repr)

# Phase 1 Manual Testing:

# 1. Test Node and LinkedList initialization
# node = Node('hello')
# print(node)                                     # <__main__.Node object at ...>
# print(node._value)                              # hello
# linked_list = LinkedList()
# print(linked_list)                              # <__main__.LinkedList object at ...>

# # 2. Test getting a node by its position
# print(linked_list.get_node(0))                # None

# # 3. Test adding a node to the list's tail
# linked_list.add_to_tail('new tail node')
# print(linked_list.get_node(0))                # <__main__.Node object at ...>
# print(linked_list.get_node(0)._value)         # `new tail node`
# print(len(linked_list))

# # 4. Test adding a node to list's head
# linked_list.add_to_head('new head node')
# print(linked_list.get_node(0))                # <__main__.Node object at ...>
# print(linked_list.get_node(0)._value)         # `new head node`
# print(len(linked_list))

# # 5. Test removing the head node
# linked_list.remove_head()
# print(linked_list.get_node(0)._value)         # `new tail node` because `new head node` has been removed
# print(linked_list.get_node(1))                # `None` because `new head node` has been removed
# print(len(linked_list))

# # 6. Test removing the tail node
# print(linked_list.get_node(0)._value)         # `new tail node`
# linked_list.remove_tail()
# print(linked_list.get_node(0))                # None

# # 7. Test returning the list length
# print(len(linked_list))                                 # 2

# Phase 2 Manual Testing

# # 1. Test whether the list contains_value a value
# linked_list = LinkedList()
# linked_list.add_to_head('new head node')
# print(linked_list.contains_value('new head node'))      # True
# print(linked_list.contains_value('App Academy node'))   # False

# # 2. Test inserting a node value into the list at a specific position
# linked_list.insert_value(0, 'hello!')
# print(linked_list.get_node(0)._value)                   # `hello!`
# print(linked_list.get_node(1)._value)
# linked_list.insert_value(1, 'newewst node in town!')
# print(linked_list.get_node(0)._value)
# print(linked_list.get_node(1)._value)
# print(linked_list.get_node(2)._value)
# print(len(linked_list))

# # 3. Test updating a list node's value at a specific position
# linked_list.update_value(0, 'goodbye!')
# print(linked_list.get_node(0)._value)                   # `goodbye!`
# print(linked_list)
# # 4. Test removing a node value from the list at a specific position
# print(linked_list.get_node(1)._value)                   # `new head node`
# linked_list.remove_node(1)
# print(linked_list.get_node(1))                          # None
# print(linked_list)
# # 5. Format the list as a string whenever `print()` is invoked
# new_linked_list = LinkedList()
# print(new_linked_list)                  # Empty List
# new_linked_list.add_to_tail('puppies')
# print(new_linked_list)                  # puppies
# new_linked_list.add_to_tail('kittens')
# print(new_linked_list)                  # puppies, kittens
