using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PWMApi.Models
{
    public class Game
    {
        public long Id { get; set; }
        public string Naam { get; set; }
        public long MinSpelers { get; set; }
        public long MaxSpelers { get; set; }
        [NotMapped]
        public string[] Tags { get; set; }
    }
}
