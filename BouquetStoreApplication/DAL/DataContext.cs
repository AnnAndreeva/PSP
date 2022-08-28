using Microsoft.EntityFrameworkCore;
using BouquetStoreApplication.Models;
namespace BouquetStoreApplication.DAL
{
    public class DataContext : DbContext
    {
        public DbSet<Bouquet> Bouquets { get; set; }


        public DataContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
            optionsBuilder.UseSqlServer(config.GetConnectionString("db"));
        }
    }
}
