
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Medical_Inventory_Management_System.Models
{
    //    public class User
    //    {
    //        [Key]
    //        public int Id { get; set; }

    //        [Required]
    //        public string Email { get; set; }

    //        [Required]
    //        public string PasswordHash { get; set; }

    //        public string Role { get; set; } // Optional: "Admin", "User", etc.
    //    }
    //}
    public class User
    {
        
        [Key]
        public int Id { get; set; }
        
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string PasswordHash { get; set; }
        
        public string Role { get; set; }
    }
}
