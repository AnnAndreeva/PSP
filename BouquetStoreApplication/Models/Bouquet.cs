using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BouquetStoreApplication.Models
{
    [Table("Bouquets")]
    public class Bouquet
    {
		[Key]
		public int BouquetId { get; set; }
		[Required]
		public string? BouquetName { get; set; }
		[Required]
		public string? Description { get; set; }
		[Required]
		public string? Size { get; set; }
		[Required]
		public string? Flowers { get; set; }
		public decimal Price { get; set; }
	}
}
