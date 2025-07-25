
using System;

namespace Medical_Inventory_Management_System.Models
{
    public class Sale
    {


        //public int MedicineId { get; set; }

        //// Navigation property (required for EF)
        //public Medicine Medicine { get; set; }

        //public int QuantitySold { get; set; }

        //public decimal TotalPrice { get; set; }

        //public DateTime SaleDate { get; set; }
        
            public int Id { get; set; }
            public int MedicineId { get; set; }
            public Medicine? Medicine { get; set; }
            public int QuantitySold { get; set; }
            public decimal TotalPrice { get; set; }
            public DateTime SaleDate { get; set; }

            //public int StoreId { get; set; }
            //public Store? Store { get; set; }
    }
}
