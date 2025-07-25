


using Medical_Inventory_Management_System.Data;
using Microsoft.AspNetCore.Mvc;

namespace Medical_Inventory_Management_System.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public IActionResult GetAllUsers()
        {
            var users = _context.Users.Select(u => new { u.Id, u.Email, u.Role }).ToList();
            return Ok(users);
        }
    }
}
