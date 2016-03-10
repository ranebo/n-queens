/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n});
  var randIndexs = _.range(0, n);


  // for (var i = 0; i < n; i++) {
  //   var newRow = _.range(0, n).map(function(i) {
  //     return 0;
  //   });

  //   var randIndex = Math.floor(Math.random() * randIndexs.length);
  //   newRow[randIndexs.splice(randIndex, 1)] = 1;
  //   solution.set(i, newRow);
  // }

  var colNum = n;
  var helper = function(n) {
    if (n) {
      var newRow = _.range(0, colNum).map(function(i) {
        return 0;
      });
      var randIndex = Math.floor(Math.random() * n);
      //newRow[randIndexs.splice(randIndex, 1)] = 1;
      solution.set(n - 1, newRow);
      solution.togglePiece(n - 1, randIndexs.splice(randIndex, 1));
      helper(n - 1);
    }
  };

  helper(n);




  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var possibleSpots = n;
  var fact = function(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  };
  var solutionCount = fact(possibleSpots); //fixme
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n': n});
  var randIndexs = _.range(0, n);
  var colNum = n;

 // var helper = function(n) {
  //   if (n) {
  //     var newRow = _.range(0, colNum).map(function(i) {
  //       return 0;
  //     });
  //     solution.set(n - 1, newRow);

  //     var shuffRandIndexs = _.shuffle(randIndexs);
  //     indexsUsed = indexsUsed || {};
  //     indexsUsed[n - 1] = indexsUsed[n - 1] || [];
  //     for (var i = 0; i < shuffRandIndexs.length; i++) {
  //       if ( shuffRanIndexs)
  //         solution.togglePiece(n - 1, shuffRandIndexs[i]);
  //         if (!solution.hasAnyQueenConflictsOn(n - 1, shuffRandIndexs[i])) {
  //           randIndexs.splice(randIndexs.indexOf(shuffRandIndexs[i]), 1);
  //           indexsUsed[n - 1].push(shuffRandIndexs[i]);
  //           helper(n - 1);
  //           return;
  //         } else {
  //           solution.togglePiece(n - 1, shuffRandIndexs[i]);
  //         }
  //     }

  //     if (indexsUsed[n-1].length === colNum) {
  //       helper(colNum, indexsUsed);
  //     }
  //     helper(n - 1);
  //   }
  //  };
  // helper(n);

  // console.log(solution.rows())
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
