namespace Medical_Inventory_Management_System.DTOs
{
    public class UserRegisterDto
    {
        public string Name { get; set; }

        public string Email { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }  // "admin" or "user"
    }
}
