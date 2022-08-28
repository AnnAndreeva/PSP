namespace BouquetStoreApplication.Models
{
    public class SearchRequest
	{
        public bool isRoses { get; set; }
		public bool isChrysanthemum { get; set; }
		public bool isPion { get; set; }
		public bool isLily { get; set; }
		public bool isHyacinth { get; set; }
		public bool isGypsophila { get; set; }
		public bool isTulip { get; set; }
		public bool isSmall { get; set; }
		public bool isBig { get; set; }
		public bool isMiddle { get; set; }
		public int lowPrice { get; set; }
        public int highPrice { get; set; }
        public string sort { get; set; }

    }
}
