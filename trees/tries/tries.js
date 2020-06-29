class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, root = this.root) {
    let letter = word[0];

    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }

    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insert(word.slice(1), root.children[letter]);
    }
  }

  search(word, root = this.root) {
    if (word.length === 0) {
      if (root.isTerminal) {
        return true;
      } else {
        return false;
      }
    }
    let letter = word[0];
    if (letter in root.children) {
      return this.search(word.slice(1), root.children[letter]);
    } else {
      return false;
    }
  }

  print(root = this.root) {
    for (let letter in root.children) {
      console.log(letter);
      this.print(root.children[letter]);
    }
  }
}

let trie = new Trie();
trie.insert("ten");
trie.insert("tea");
// console.log(trie.print()node);
// console.log(trie.search("te"));