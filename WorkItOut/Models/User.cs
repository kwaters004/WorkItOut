using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace WorkItOut.Models
{
    [Table("user")]
    public class User
    {
        [Key]
        public int userId { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public DateTime dob { get; set; }
        public int initialWeight { get; set; }
        public string email { get; set; }
        public string userName { get; set; }
        public int height { get; set; }
        public string gender { get; set; }
        public string password { get; set; }
        
    }
}
