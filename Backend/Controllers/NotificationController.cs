using Microsoft.AspNetCore.Mvc;
using Medical_Inventory_Management_System.Models;

namespace Medical_Inventory_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        // Simulating a database with in-memory list
        private static List<Notification> notifications = new List<Notification>
        {
            new Notification { Id = 1, Message = "New stock added", CreatedAt = DateTime.Now.AddMinutes(-30) },
            new Notification { Id = 2, Message = "Low stock alert", CreatedAt = DateTime.Now.AddHours(-1) }
        };

        // GET: api/Notification
        [HttpGet]
        public IActionResult GetNotifications()
        {
            return Ok(notifications);
        }

        // POST: api/Notification
        [HttpPost]
        public IActionResult AddNotification([FromBody] Notification notification)
        {
            notification.Id = notifications.Count + 1;
            notification.CreatedAt = DateTime.Now;
            notifications.Add(notification);
            return Ok(notification);
        }

        // PUT: api/Notification/markread/{id}
        [HttpPut("markread/{id}")]
        public IActionResult MarkAsRead(int id)
        {
            var notif = notifications.FirstOrDefault(n => n.Id == id);
            if (notif != null)
            {
                notifications.Remove(notif);
                return Ok(new { message = "Notification marked as read" });
            }
            return NotFound();
        }
    }
}
