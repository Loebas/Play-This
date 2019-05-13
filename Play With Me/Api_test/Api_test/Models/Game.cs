using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api_test.Models
{
    public class Game
    {
        public long GameId { get; set; }
        public long MinSpelers { get; set; }
        public long MaxSpelers { get; set; }
        public string GameNaam { get; set; }

    }
}
