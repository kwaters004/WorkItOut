using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace WorkItOut.Models
{
    [Table("workouts")]
    public class Workouts
    {
        [Key]
        public int workoutsId { get; set; }
        public int recommendedReps { get; set; }
        public int recommendedSets { get; set; }
        public int recommendedDuration { get; set; }
        public string equipment { get; set; }
        public string category { get; set; }
        public bool timeExercised { get; set; }
        public string musclegroups { get; set; }
    }
}
