

using Medical_Inventory_Management_System.Data;
using Medical_Inventory_Management_System.DTOs;
using Medical_Inventory_Management_System.Models;
using Medical_Inventory_Management_System.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace Medical_Inventory_Management_System.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly TokenService _tokenService;

        public AuthController(ApplicationDbContext context, TokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        // REGISTER
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterDto userDto)
        {
            if (string.IsNullOrEmpty(userDto.Email) || string.IsNullOrEmpty(userDto.Password))
                return BadRequest("Email and password are required.");

            var exists = await _context.Users.AnyAsync(u => u.Email == userDto.Email);
            if (exists)
                return Conflict("User already exists.");

            var hashedPassword = HashPassword(userDto.Password);

            var user = new User
            {
                Name=userDto.Name,
                Email = userDto.Email,
                PasswordHash = hashedPassword,
                Role = string.IsNullOrEmpty(userDto.Role) ? "User" : userDto.Role
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            var token = _tokenService.GenerateToken(user);

            Response.Cookies.Append("auth_token", token, new CookieOptions
            {
                HttpOnly = true,
                Secure = false, // Use true in production
                SameSite = SameSiteMode.Strict,
                
            });

            Response.Cookies.Append("user_name", user.Name, new CookieOptions
            {
                HttpOnly = false,
                Secure = false, // Use true in production
                SameSite = SameSiteMode.Strict,
                
            });



            return Ok(new
            {
                token,
                user = new
                {
                    name = user.Name,
                    email = user.Email,
                    role = user.Role
                }
            });

        }

        // LOGIN
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginDto loginDto)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginDto.Email);

            if (user == null || !VerifyPassword(loginDto.Password, user.PasswordHash))
                return Unauthorized("Invalid email or password");



            var token = _tokenService.GenerateToken(user);

            Response.Cookies.Append("auth_token", token, new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Strict,
                
            });

            Response.Cookies.Append("user_name", user.Name, new CookieOptions
            {
                HttpOnly = false, // Allow frontend to access
                Secure = true,
                SameSite = SameSiteMode.Strict,
                
            });


            return Ok(new
            {
                email = user.Email,
                role = user.Role,
                user = user.Name,
                token
            });
        }

        private string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
            return Convert.ToBase64String(bytes);
        }

        private bool VerifyPassword(string password, string hashed)
        {
            return HashPassword(password) == hashed;
        }
    }
}
