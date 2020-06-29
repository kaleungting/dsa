class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (edge) => edge !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (edge) => edge !== v1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfsRecur(start) {
    let visited = {};
    let results = [];
    let adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    }
    dfs(start);
    return results;
  }

  dfsIter(start) {
    let visited = {};
    let stack = [start];
    let results = [];
    visited[start] = true;

    while (stack.length) {
      let visitedNode = stack.pop();
      results.push(visitedNode);
      this.adjacencyList[visitedNode].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return results;
  }

  bfs(start){
    let visited = {};
    let queue = [start];
    let results = [];
    visited[start] = true;

    while (queue.length){
      let visitedNode = queue.shift();
      results.push(visitedNode);
      this.adjacencyList[visitedNode].forEach((neighbor) => {
        if (!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return results;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");
g.addVertex("H");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.dfsIter("A"));
console.log(g.bfs("A"));