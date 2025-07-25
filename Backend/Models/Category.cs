using System;
using System.Collections.Generic;

namespace Medical_Inventory_Management_System.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public List<Drug> Drugs { get; set; }
    }
}
