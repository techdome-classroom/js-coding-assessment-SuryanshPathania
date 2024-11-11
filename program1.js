const getTotalIsles = function (grid) {


  // write your code here
 if (!grid || !grid.length || !grid[0].length) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;
    
    
    const visited = Array.from({ length: rows }, () => 
        Array(cols).fill(false)
    );
    
    function exploreIsland(r, c) {
        
        if (r < 0 || r >= rows || 
            c < 0 || c >= cols || 
            visited[r][c] || 
            grid[r][c] !== 'L') {
            return;
        }
        
       
        visited[r][c] = true;
        
       
        exploreIsland(r - 1, c);  // Up
        exploreIsland(r + 1, c);  // Down
        exploreIsland(r, c - 1);  // Left
        exploreIsland(r, c + 1);  // Right
    }
    
   
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (!visited[r][c] && grid[r][c] === 'L') {
                islands++;
                exploreIsland(r, c);
            }
        }
    }
    
    return islands;
};

module.exports = getTotalIsles;
