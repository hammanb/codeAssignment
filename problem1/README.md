Problem 1: 
Setup 
  A robot that has been dropped into a square 9x9 grid of square rooms. Walls between rooms have doors in them, but walls on the edge do not. All of the doors are closed initially. 
  The robot can: 
  1. Check each direction (N,S,E,W) for door status, which returns open, closed or none. 
  2. Move one room over at a time through an open door. 
  3. Remember details of rooms it’s visited since it was dropped in.
  
Questions 
You can write your answers with words, flowcharts or pseudocode. 

```

/* ====Pseudo code=====

This is a "discovery" problem, and can be approached by gathering room details, and storing the details of the room.

get <starting room>

create <grid row>
    <move room> in the East direction in <grid row>, starting at <starting room>
    <move room> in the West direction in <grid row>, starting at <starting room>
    return count of rooms
create <grid column> 
    <move room> in the North direction in <grid column>, starting at <starting room>
    <move room> in the West direction in <grid column>, starting at <starting room>
    return count of rooms
    
<move room> in <direction> using <data structure>, starting at <room>
    create a new <current room>
        add <current room> to <data structure>
    Get <current room> parameters
    if can continue to move <direction>, open the door, then <move room> in <direction> using <data structure>, starting at <next room>
    if can't move <direction>, break

output: count of <grid row> * count of <grid column>
/*
```

  1. The robot starts at the lower right corner of the grid. How can the robot use its abilities to count the total number of rooms in the grid? 
> See the pseudo code above. Robot counts all rooms in a row and column, and multiplies them.
      
  2. The game resets and the robot moves to a random room in the grid. Does your approach still work? 
> Yes, assuming the grid is always a square or rectangle, adding up all rooms in row and column, and multiplying them would work.
      
  3. How many moves does it take to complete the count? Can you find the answer in less moves? 
> The approach I took starts in a direction from starting room, and then goes in the other direction from starting room. This would mean the total amount of moves for this approach would be (row length - 1) * (column length - 1). 
      
Extra Credit 
  4. How much data did you save from each move? Can you save less data? 
> Assuming the starting grid is only a square or rectangle, the minimum necessary data saved to the data structure in my pseudocode below would only be a record of it's presence. If minimum storage was the goal, you could also just increase a count as you move rooms, to store a single "count" variable. 

> However, each loop of the recursive method would need to gather the door information into call stack memory, and the recursive stack memory will increase with each loop. This approach would have minimum storage in a data structure, but call stack memory will hit a limit eventually as the grid size grows. If call stack memory is limited, you would need to store each movement in the database with all the rooms parameters, and likely need to build relationships to avoid duplicate entries, and then refactor the below pseudocode to operate asynchronously.
    
  5. 2 arbitrarily selected rooms in the grid are removed (count as zero, no doors lead to these areas). Will this change your approach? How does this affect the number of moves required? 
> Yes, the approach would be different if there were an infinite number of room orientations. 

> One approach would be to call the recursive function, and start a new "branch" of recursion for each possible path you could take. A check would need to be in place at the beginning of each loop for the room's unid if it is already in the database to prevent an infinite recursive loop. this would be fine with small grids.

> But again, if expected grid size keeps expanding and call stack memory becomes a concern, then you could take this "branching" approach, but would need to refactor the script to operate asynchronously and store more data to the data structure.
  
  6. What tests would you write for your robot? 
> Depends on what you are testing: 
> If you want to test units of the code, you could break down specific operations from the script.
> If you want to test the output result, you could run tests with different inputs from the same grid and run the script again to verify the results.
> If you want to test scalability, run the script against a chosen grid size of the minimum and maximum expected grid sizes.
