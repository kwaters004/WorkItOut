using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;

namespace WorkItOut.Models
{
    [Table("favorites")]
    public class Favorites
    {
        [Key]
        public int favoriteId { get; set; }
        public int exerciseId { get; set; }
    }
}
