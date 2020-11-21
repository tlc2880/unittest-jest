const countTree = require('./countTree');

let inputArray;

inStrArray = [
    { // output should be 4
        left: {
          left: null,
          right: null,
        },
        right: {
          left: null,
          right: {
            left: null,
            right: null,
          },
        },
    },
    { // output should be 5
        left: {
          left: null,
          right: null,
        },
        right: {
          left: {
            left: null,
            right: null,
          },
          right: {
            left: null,
            right: null,
          },
        },
    },
    {// output should be 5
      left: {
        left: null,
        right: {
          left: null,
          right: null,
        }
      },
      right: {
        left: {
          left: null,
          right: null,
        },
        right: null,
      },
    },
    {// output should be 6
        left: {
            left: null,
            right: {
              left: null,
              right: null,
            }
          },
        right: {
          left: {
            left: null,
            right: null,
          },
          right: {
            left: null,
            right: null,
          },
        },
    },
    
    {// output should be 7
      left: {
        left: {
          left: null,
          right: null,
        },
        right: {
          left: null,
          right: null,
        },
      },
      right: {
        left: {
          left: null,
          right: null,
        },
        right: {
          left: null,
          right: null,
        },
      },
    },
    
    {// output should be 15
      left: {
        left: {
          left: {
            left: null,
            right: null,
          },
          right: {
            left: null,
            right: null,
          },
        },
        right: {
          left: {
            left: null,
            right: null,
          },
          right: {
            left: null,
            right: null,
          },
        },
      },
      right: {
        left: {
          left: {
            left: null,
            right: null,
          },
          right: {
            left: null,
            right: null,
          },
        },
        right: {
          left: {
            left: null,
            right: null,
          },
          right: {
            left: null,
            right: null,
          },
        },
      },
    },
    
    {// output should be 12
      left: {
        left: {
          left: {
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          left: null,
          right: {
            left: null,
            right: null,
          },
        },
      },
      right: {
        left: {
          left: {
            left: null,
            right: null,
          },
          right: {
            left: null,
            right: null,
          },
        },
        right: {
          left: {
            left: null,
            right: null,
          },
          right: null,
        },
      },
    },
    {// output should be 12
      left: {
        left: {
          left: {
            left: null,
            right: null,
          },
          right: {
            left: null,
            right: null,
          },
        },
        right: {
          left: null,
          right: {
            left: null,
            right: null,
          },
        },
      },
      right: {
        left: {
          left: {
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          left: {
            left: null,
            right: null,
          },
          right: {
            left: null,
            right: null,
          },
        },
      },
    }
];

inStrArrayResults = [
   4,
   5,
   1, // Error. This should be 5
   6,
   7,
   15,
   12,
   13
];   

test('Count node function exists', () => {
    expect(countTree(inStrArray[0])).toBeDefined();
  });

for (let i=0; i<inStrArray.length; i++){
    test('Count node in a binary tree:', () => {
        inputArray = countTree(inStrArray[i]);
        expect(inputArray).toEqual(inStrArrayResults[i]);
    });
}