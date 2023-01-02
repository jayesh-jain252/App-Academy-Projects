// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.followers = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID++;
    let user = { id: this.currentID, name: name };

    this.users[this.currentID] = user;
    this.follows[this.currentID] = new Set();
    this.followers[this.currentID] = new Set();
    return user.id;
  }

  getUser(userID) {
    // Your code here
    if (this.users[userID]) return this.users[userID];
    return null;
  }

  follow(userID1, userID2) {
    // Your code here
    if (this.users[userID2] && this.users[userID1]) {
      this.follows[userID1].add(userID2);
      this.followers[userID2].add(userID1);
      return true;
    }
    return false;
  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID];
  }

  getFollowers(userID) {
    // Your code here
    return this.followers[userID];
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
    debugger;

    let queue = [[userID]];

    let visited = new Set();
    const friends = [];

    while (queue.length > 0) {
      let currentPath = queue.shift();
      let currentNode = currentPath[currentPath.length - 1];

      if (!visited.has(currentNode)) {
        // If not, mark it as visited
        visited.add(currentNode);

        // Add to the friends array if the path is within the number of degrees
        if (currentPath.length > 2 && currentPath.length <= degrees + 2) {
          friends.push(currentNode);
        }

        let neighbors = [];
        this.getFollows(currentNode).forEach((neighbour) => {
          neighbors.push(neighbour);
        });

        for (let i = 0; i < neighbors.length; i++) {
          let pathCopy = [...currentPath];
          pathCopy.push(neighbors[i]);
          queue.push(pathCopy);
        }
      }
    }
    return friends;
  }
}

module.exports = SocialNetwork;

// let socialNetwork = new SocialNetwork();

// userID1 = socialNetwork.addUser("User 1");
// userID2 = socialNetwork.addUser("User 2");
// userID3 = socialNetwork.addUser("User 3");
// userID4 = socialNetwork.addUser("User 4");
// userID5 = socialNetwork.addUser("User 5");
// userID6 = socialNetwork.addUser("User 6");

// socialNetwork.follow(1, 2);
// socialNetwork.follow(2, 3);
// socialNetwork.follow(3, 4);
// socialNetwork.follow(3, 5);
// socialNetwork.follow(4, 1);
// socialNetwork.follow(4, 2);
// socialNetwork.follow(5, 6);

// console.log(socialNetwork.getRecommendedFollows(1, 3));
