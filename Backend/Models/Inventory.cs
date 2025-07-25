using System;
using System.Collections.Generic;

namespace Medical_Inventory_Management_System.Models
{
    public class Inventory
    {
        public int InventoryId { get; set; }
        public int StoreId { get; set; }
        public int ProductId { get; set; }
        public string BatchNumber { get; set; }
        public DateTime ExpiryDate { get; set; }
        public int Quantity { get; set; }
        public decimal PurchasePrice { get; set; }
        public decimal SellingPrice { get; set; }
        public DateTime? LastRestocked { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Store Store { get; set; }
        public Drug Product { get; set; }
        public List<SaleItem> SaleItems { get; set; }
    }
}
