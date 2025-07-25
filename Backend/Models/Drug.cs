using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Medical_Inventory_Management_System.Models
{
    public class Drug
    {
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int DrugId { get; set; }

        public string Name { get; set; }
        public string Manufacturer { get; set; }
        public int Quantity { get; set; }
    }
}
