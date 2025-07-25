
    using System;
    using System.ComponentModel.DataAnnotations;

    namespace Medical_Inventory_Management_System.Models
    {
        public class ActivityLog
        {
            [Key]
            public int LogId { get; set; }

            public int UserId { get; set; }
            public string Action { get; set; }
            public string Target { get; set; }
            public int TargetId { get; set; }
            public string Details { get; set; }
            public DateTime CreatedAt { get; set; }

            public User User { get; set; }
        }
    }
