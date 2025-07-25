using System;

namespace Medical_Inventory_Management_System.Models
{
    public class SaleItem
    {
        public int SaleItemId { get; set; }
        public int SaleId { get; set; }
        public int InventoryId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public DateTime CreatedAt { get; set; }

        public Sale Sale { get; set; }
        public Inventory Inventory { get; set; }
    }
}
