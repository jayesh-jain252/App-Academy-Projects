class Node():
    def __init__(self,value):
        self._value = value
        self._parent = None
        self._children = []

    @property
    def value(self):
        return self._value

    @property
    def children(self):
        return self._children

    def add_child(self,node):
        if (self == node):
            return
        if (not node in self._children):
            self._children.append(node)
            if (node.parent == self):
                return
            node.parent = self

    def remove_child(self,node):
        if (self == node):
            return
        self._children.remove(node)
        node.parent = None

    @property
    def parent(self):
        return self._parent

    @parent.setter
    def parent(self, value):

        if (value == None):
            self._parent = None
        elif (self._parent):
            self._parent.remove_child(self)
            self._parent = value
            self._parent.add_child(self)

        else:
            self._parent = value
            self._parent.add_child(self)

    def depth_search(self,target):
        if (self.value == target):
            return self

        for child in self.children:
            if (child.depth_search(target)):
                return child.depth_search(target)

        return None

        # stack = []
        # stack.append(self)
        # visited = set()
        # while (len(stack) > 0):
        #     node = stack.pop()
        #     visited.add(node)
        #     print(node)
        #     if(node.value == target):
        #         return node
        #     for child in reversed(node.children):
        #         if (not child in visited and not child in stack):
        #             stack.append(child)
        # return None

    def breadth_search(self,target):
        queue = []
        visited = set()
        queue.append(self)

        while (len(queue) > 0):
            node = queue.pop(0)
            visited.add(node)
            if (node.value == target):
                return node

            for child in node.children:
                if (not child in visited and not child in queue):
                    queue.append(child)

        return None

    def __repr__(self):
        return f"({self.value})"


# nodes = [Node(i) for i in "abcdefg"]
# parent_index = 0
# for index, child in enumerate(nodes):
#     if index == 0:
#         continue
#     child.parent = nodes[parent_index]
#     parent_index += 1 if index % 2 == 0 else 0

# targetVal = nodes[0].depth_search('e')
# print(targetVal)
# node1 = Node("root1")
# node2 = Node("root2")
# node3 = Node("root3")

# node3.parent = node1
# node3.parent = node2

# print(node1.children)
# print(node2.children)

# sonNode = Node("Son")
# daughterNode = Node("Daughter")
# fatherNode = Node("Father")



# sonNode.parent = fatherNode
# daughterNode.parent = fatherNode

# print(fatherNode.children)
# print(sonNode.children)
# print(sonNode.parent)
# print(daughterNode.children)
# print(daughterNode.parent)
