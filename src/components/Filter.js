// import React from "react";

// //function Filter({ onCategoryChange }) {
//   function Filter({search, onSearchChange, onCategoryChange}) {
//     function handleSearchChange(event) {
//       onSearchChange(event.target.value)
//     }
//   return (
//     // <div className="Filter">
//     //   <input type="text" name="search" placeholder="Search..." />
//     //   <select name="filter" onChange={onCategoryChange}>
//     //     <option value="All">Filter by category</option>
//     //     <option value="Produce">Produce</option>
//     //     <option value="Dairy">Dairy</option>
//     //     <option value="Dessert">Dessert</option>
//     //   </select>
//     // </div>
//     <div className="Filter">
//       <input type="text" name="search" placeholder="Search..." value={search} onChange={handleSearchChange} />
//       <select name="filter" onChange={onCategoryChange}>
//         <option value="All">Filter by category</option>
//         <option value="Produce">Produce</option>
//         <option value="Dairy">Dairy</option>
//         <option value="Dessert">Dessert</option>
//       </select>
//     </div>
//   );
// }

// export default Filter;
import React from "react";

function Filter({ onSearchChange, search, onCategoryChange }) {
  function handleSearch(e) {
    onSearchChange(e.target.value)
  }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." 
              onChange={handleSearch} value={search}/>      
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
