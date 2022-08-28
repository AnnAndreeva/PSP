namespace BouquetStoreApplication.Models
{
    public class AddRequest
    {
		public int BouquetId { get; set; }
	
		public string BouquetName { get; set; }
		
		public string Description { get; set; }
		
		public string Size { get; set; }
		
		public string Flowers { get; set; }
		public decimal Price { get; set; }
	}
}
