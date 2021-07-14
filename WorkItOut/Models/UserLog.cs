using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkItOut.Models
{
    
    public class UserLog
    {
        public int workoutlogId { get; set; }
        public int weight { get; set; }
        //public DateTime timeOfWorkout { get; set; }
        public int reps { get; set; }
        public int sets { get; set; }
        public int howDoYouFeel { get; set; }
        public int workoutId { get; set; }
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
