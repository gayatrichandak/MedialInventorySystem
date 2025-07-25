
using Microsoft.EntityFrameworkCore;
using Medical_Inventory_Management_System.Models;
namespace Medical_Inventory_Management_System.Data
{
    public class ApplicationDbContext : DbContext
    {
        
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Store> Stores { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Drug> Drugs { get; set; }
        public DbSet<Inventory> Inventories { get; set; }
        public DbSet<Sale> Sales { get; set; }
        public DbSet<SaleItem> SaleItems { get; set; }
        public DbSet<ActivityLog> ActivityLogs { get; set; }
        public DbSet<Medicine> Medicines { get; set; }

        public DbSet<Notification> Notifications { get; set; }

    }
}


