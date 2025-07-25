

using System;
using System.Collections.Generic;

namespace Medical_Inventory_Management_System.Models
{
    public class Store
    {
        public int StoreId { get; set; }
        public string Name { get; set; }
        public string OwnerName { get; set; }
        public string Location { get; set; }
        public string ContactPhone { get; set; }
        public string ContactEmail { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public List<User> Users { get; set; }
        public List<Inventory> Inventories { get; set; }
        public List<Sale> Sales { get; set; }
    }
}

