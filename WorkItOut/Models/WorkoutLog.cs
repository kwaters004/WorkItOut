using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using MySql.Data.MySqlClient;


namespace WorkItOut.Models
{
    [Table("workoutlog")]
    public class WorkoutLog
    {
        [Key]
        public int workoutlogId { get; set; }
        public int weight { get; set; }
        //public DateTime timeOfWorkout { get; set; }
        public int reps { get; set; }
        public int sets { get; set; }
        public int howDoYouFeel { get; set; }
        public int exerciseId { get; set; }
    }
}
