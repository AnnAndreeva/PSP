using BouquetStoreApplication.DAL;
using BouquetStoreApplication.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Diagnostics;
using HttpMultipartParser;
using Microsoft.EntityFrameworkCore;

namespace BouquetStoreApplication.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        List<string> BouquetsName = new List<string>();

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Article()
        {
            return View();
        }
        public IActionResult Blog()
        {
            return View();
        }
        public IActionResult Cart()
        {
            return View();
        }
        public IActionResult Catalog()
        {
            return View();
        }

        [HttpGet]
        public string GetCatalog()
        {
            var bouquets = new DataContext()
                .Bouquets
                .ToList()
                .OrderBy(elem => elem.Price);
            return JsonConvert.SerializeObject(bouquets);
        }

        [HttpGet]
        public string GetNames()
        {
            var bouquets = new DataContext()
                .Bouquets
                .ToList();
            return JsonConvert.SerializeObject(bouquets);
        }

        [HttpPost]
        public string Search()
        {
            var json = "";
            var context = new DataContext();

            using (var stream = Request.Body)
            {
                json = new StreamReader(stream).ReadToEndAsync().Result;
            }

            var req = JsonConvert.DeserializeObject<SearchRequest>(json);

            var query = context.Bouquets.AsQueryable();

            var flowers = new List<string>();
            if (req.isRoses)
            {
                flowers.Add("роза");
            }
            if (req.isChrysanthemum)
            {
                flowers.Add("хризантема");
            }
            if (req.isPion)
            {
                flowers.Add("пион");
            }
            if (req.isLily)
            {
                flowers.Add("лилия");
            }
            if (req.isHyacinth)
            {
                flowers.Add("гиацинты");
            }
            if (req.isGypsophila)
            {
                flowers.Add("гипсофила");
            }
            if (req.isTulip)
            {
                flowers.Add("тюльпан");
            }

            if (flowers.Count != 0)
            {
                foreach (var flower in flowers)
                {
                    query = query.Where(elem => (elem.Flowers).Contains(flower));
                }

            }

            var sizes = new List<string>();
            if (req.isSmall)
            {
                sizes.Add("малый");
            }
            if (req.isMiddle)
            {
                sizes.Add("средний");
            }
            if (req.isBig)
            {
                sizes.Add("крупный");
            }

            if (sizes.Count != 0)
            {
                query = query.Where(elem => sizes.Contains(elem.Size));
            }

            query = query.Where(elem => elem.Price >= req.lowPrice && elem.Price <= req.highPrice);

            var prods = query.ToList();

            if (req.sort == "asc")
            {
                prods = prods.OrderBy(elem => elem.Price).ToList();
            }
            else
            {
                prods = prods.OrderByDescending(elem => elem.Price).ToList();
            }

            return JsonConvert.SerializeObject(prods);
        }

        [HttpGet]
        public string SmartSearch()
        {
            var text = Request.Query["value"].ToString();
            if (text == "")
            {
                var res = GetCatalog();
                return res;
            }
            else
            {
                var bouquets = new DataContext()
                    .Bouquets
                    .Where(elem => elem.BouquetName.ToLower().Contains(text.ToLower()))
                    .ToList()
                    .OrderBy(elem => elem.Price);
                return JsonConvert.SerializeObject(bouquets);
            }

        }

        [HttpPost]
        public void AddProduct(Bouquet bouquet)
        {
            var context = new DataContext();
            foreach (var b in context.Bouquets)
            {
                BouquetsName.Add(b.BouquetName);
            }

            if ((bouquet!=null)&&(!BouquetsName.Contains(bouquet.BouquetName)))
            {
                context.Bouquets.Add(bouquet);
                context.SaveChanges();
            }          
        }

        public IActionResult Delivery()
        {
            return View();
        }
        public IActionResult Main_page()
        {
            return View();
        }
        public IActionResult Pay()
        {
            return View();
        }
        public IActionResult Product()
        {
            return View();
        }
        public IActionResult Sales()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}