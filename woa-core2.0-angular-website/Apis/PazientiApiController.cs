using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace woa_core2__0_angular_website.Controllers
{
    [Route("api/pazienti")]
    public class PazientiApiController : Controller
    {

        // GET api/customers
        [HttpGet]
        //[NoCache]
        //[ProducesResponseType(typeof(List<Customer>), 200)]
        //[ProducesResponseType(typeof(ApiResponse), 400)]
        public async Task<ActionResult> Pazienti()
        {
            var pazienti = new List<Paziente> { new Paziente { ID = 1, Nome = "Cri", Cognome = "Deg" } };
            return Ok(pazienti);
        }
    }

    public class Paziente
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        public string Cognome { get; set; }
    }
}