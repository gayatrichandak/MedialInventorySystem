
using Medical_Inventory_Management_System.Data;
using Medical_Inventory_Management_System.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace Medical_Inventory_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MedicineController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() =>
            Ok(await _context.Medicines.ToListAsync());

        [HttpPost]
        public async Task<IActionResult> Add(Medicine medicine)
        {
            _context.Medicines.Add(medicine);
            await _context.SaveChangesAsync();
            return Ok(medicine);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var medicine = await _context.Medicines.FindAsync(id);
            if (medicine == null) return NotFound();
            _context.Medicines.Remove(medicine);
            await _context.SaveChangesAsync();
            return Ok();
        }

        // ✅ ADD THIS: Get Stock Summary for Dashboard
        [HttpGet("stock-summary")]
        public async Task<IActionResult> GetStockSummary()
        {
            var totalStock = await _context.Medicines.SumAsync(m => m.Quantity);
            var lowStockCount = await _context.Medicines.CountAsync(m => m.Quantity < 10);

            var thresholdDate = DateTime.Now.AddDays(30);
            var expiringSoon = await _context.Medicines
                .CountAsync(m => m.ExpiryDate <= thresholdDate);

            return Ok(new
            {
                totalStock,
                lowStockCount,
                expiringSoon
            });
        }
    }
}



