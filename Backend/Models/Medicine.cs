using System.Diagnostics.CodeAnalysis;

namespace Medical_Inventory_Management_System.Models
{
    public class Medicine
    {
       
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }

        public int Price { get; set; }

        [AllowNull]
        public string Category { get; set; }
        // Add this
        public DateTime ExpiryDate { get; set; }

        }

    }
