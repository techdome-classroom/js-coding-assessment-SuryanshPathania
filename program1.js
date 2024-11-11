const getTotalIsles = function (grid) {


  // write your code here
 if (!grid || !grid.length || !grid[0].length) return 0;
    
    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;
    
    // Create a copy of the grid to avoid modifying the original
    const visited = Array.from({ length: rows }, () => 
        Array(cols).fill(false)
    );
    
    function exploreIsland(r, c) {
        // Check boundaries and validity
        if (r < 0 || r >= rows || 
            c < 0 || c >= cols || 
            visited[r][c] || 
            grid[r][c] !== 'L') {
            return;
        }
        
        // Mark as visited
        visited[r][c] = true;
        
        // Explore all four directions
        exploreIsland(r - 1, c);  // Up
        exploreIsland(r + 1, c);  // Down
        exploreIsland(r, c - 1);  // Left
        exploreIsland(r, c + 1);  // Right
    }
    
    // Count islands
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
