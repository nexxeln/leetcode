class Solution:
    def minReorder(self, n, connections):
        graph = self.createGraph(n, connections)
        visited = set()
        self.res = 0
        self.dfs(0, graph, visited)

        return self.res

    def createGraph(self, n, connections):
        graph = [[] for _ in range(n)]

        for a, b in connections:
            graph[a].append((b, 1))
            graph[b].append((a, 0))

        return graph

    def dfs(self, city, graph, visited):
        visited.add(city)

        for neighbor, reverse in graph[city]:
            if neighbor not in visited:
                self.res += reverse
                self.dfs(neighbor, graph, visited)
