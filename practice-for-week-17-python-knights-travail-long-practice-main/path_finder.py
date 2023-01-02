from tree import Node

class KnightPathFinder():
    def __init__(self,coordinate):
        self._root = Node(coordinate)
        self._considered_positions = {self._root.value}

    def get_valid_moves(self,pos):
        (x,y) = pos
        valid_moves = []
        if(x+2 < 8 and y+1 < 8):
            valid_moves.append((x+2,y+1))
        if(x+2 < 8 and y-1 >= 0):
            valid_moves.append((x+2,y-1))
        if(x+1 < 8 and y+2 < 8):
            valid_moves.append((x+1,y+2))
        if(x+1 < 8 and y-2 >= 0):
            valid_moves.append((x+1,y-2))
        if(x-2 >= 0 and y+1 < 8):
            valid_moves.append((x-2,y+1))
        if(x-2 >= 0 and y-1 >= 0):
            valid_moves.append((x-2,y-1))
        if(x-1 >= 0 and y+2 < 8):
            valid_moves.append((x-1,y+2))
        if(x-1 >= 0 and y-2 >= 0):
            valid_moves.append((x-1,y-2))

        return valid_moves

    def new_move_positions(self,pos):
        valid_moves = self.get_valid_moves(pos)
        possible_moves = set()
        for move in valid_moves:
            if (Node(move) not in self._considered_positions):
                possible_moves.add(move)

        return possible_moves

    def build_move_tree(self):
        available_moves = self.new_move_positions(self._root.value)

        for move in available_moves:
            self._root.add_child(Node(move))

        queue = [pos for pos in self._root.children]

        while (len(queue) > 0):
            node = queue.pop(0)
            self._considered_positions.add(node.value)

            for new_pos in self.new_move_positions(node.value):
                new_node = Node(new_pos)
                if (not new_node.value in self._considered_positions and not new_node in queue):
                    node.add_child(new_node)
                    queue.append(new_node)

    def trace_to_root(self,start, target):
        path = [target]
        while path[-1] != start:
            path.append(path[-1].parent)
        path.reverse()
        return [pos.value for pos in path]

    def find_path(self,end_position):
        target = self._root.breadth_search(end_position)
        return self.trace_to_root(self._root,target)

    def __repr__(self):
        return f"({self._root})"


# finder = KnightPathFinder((0, 0))
# print(finder._root)
# print(finder._root.children)
# print(finder._considered_positions)

# finder.build_move_tree()
# print(finder._root.children)
# print(finder._root.children[0].children)
# print(finder._root.children[1].children)
finder = KnightPathFinder((0, 0))
finder.build_move_tree()
print(finder.find_path((2, 1))) # => [(0, 0), (2, 1)]
print(finder.find_path((3, 3))) # => [(0, 0), (2, 1), (3, 3)]
print(finder.find_path((6, 2))) # => [(0, 0), (1, 2), (2, 4), (4, 3), (6, 2)]
print(finder.find_path((7, 6))) # => [(0, 0), (1, 2), (2, 4), (4, 3), (5, 5), (7, 6)]
print(finder.find_path((5,6)))
print(finder.find_path((5,2)))
print(finder.find_path((7,7)))
