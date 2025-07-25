

using Medical_Inventory_Management_System.Data;
using Medical_Inventory_Management_System.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System; // ✅ Add this for DateTime

namespace Medical_Inventory_Management_System.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SalesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sale>>> GetAllSales()
        {
            return await _context.Sales.Include(s => s.Medicine).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Sale>> GetSale(int id)
        {
            var sale = await _context.Sales.Include(s => s.Medicine).FirstOrDefaultAsync(s => s.Id == id);
            if (sale == null) return NotFound();
            return sale;
        }

        [HttpPost]
        public async Task<ActionResult<Sale>> CreateSale(Sale sale)
        {
            _context.Sales.Add(sale);

            // ✅ Add Notification after sale
            var medicine = await _context.Medicines.FindAsync(sale.MedicineId);
            if (medicine != null)
            {
                _context.Notifications.Add(new Notification
                {
                    Message = $"{sale.QuantitySold} units of {medicine.Name} sold.",
                    CreatedAt = DateTime.Now
                });
            }

            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetSale), new { id = sale.Id }, sale);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSale(int id, Sale sale)
        {
            if (id != sale.Id) return BadRequest();
            _context.Entry(sale).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Sales.Any(e => e.Id == id)) return NotFound();
                throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSale(int id)
        {
            var sale = await _context.Sales.FindAsync(id);
            if (sale == null) return NotFound();
            _context.Sales.Remove(sale);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
