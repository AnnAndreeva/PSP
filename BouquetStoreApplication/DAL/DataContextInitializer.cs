using BouquetStoreApplication.Models;

namespace BouquetStoreApplication.DAL
{
    public class DataContextInitializer
    {
        public static void Initialize(DataContext context)
        {
            if (!context.Bouquets.Any())
            {
                context.Bouquets.AddRange(new List<Bouquet>()
                {
                    new Bouquet()
                    {
                        BouquetName = "Букет \"Нежность\"",
                        Description = "Это самый нежный и романтичный вариант. Их можно подарить на свидание," +
                        " празднике, да и просто без повода, чтобы оказать внимание любимой",
                        Size = "малый",
                        Flowers = "роза, папоротник, рускус",
                        Price = 1499
                    },
                    new Bouquet()
                    {
                        BouquetName = "Букет \"Виола\"",
                        Description = "Идеальный подарок для подруги, мамы или коллеги.",
                        Size = "средний",
                        Flowers = "хризантема",
                        Price = 1999
                    },
                    new Bouquet()
                    {
                        BouquetName = "Букет \"Мульти\"",
                        Description = "Тюльпаны-нестареющая классика, которая подойдёт для любого повода.",
                        Size = "средний",
                        Flowers = "тюльпан",
                        Price = 2699
                    },
                    new Bouquet()
                    {
                        BouquetName = "Букет \"Простая романтика\"",
                        Description = "Классический букет красных роз в стильной упаковке",
                        Size = "малый",
                        Flowers = "роза",
                        Price = 1699
                    },
                    new Bouquet()
                    {
                        BouquetName = "Букет \"Облачко\"",
                        Description = "Объемный красочный букет, который оценит любая женщина.",
                        Size = "крупный",
                        Flowers = "гипсофила",
                        Price = 2299
                    },
                    new Bouquet()
                    {
                        BouquetName = "Букет \"Малиновый десерт\"",
                        Description = "Яркая композиция в оригинальной сумочке. Приятный цветочный комплимент для ваших любимых.",
                        Size = "малый",
                        Flowers = "роза, тюльпан, рускус",
                        Price = 1899
                    },
                    new Bouquet()
                    {
                        BouquetName = "Букет \"Мятная пастила\"",
                        Description = "Нежная композиция в мятной коробочке. Отличный вариант, чтобы стать подарком для ваших близких.",
                        Size = "крупный",
                        Flowers = "гиацинт, тюльпан, роза, рускус, пион",
                        Price = 3199
                    },
                    new Bouquet()
                    {
                        BouquetName = "Букет \"Любовь в городе\"",
                        Description = "Нежная корзиночка из разных цветов. Хороший вариант, чтобы порадовать близких.",
                        Size = "крупный",
                        Flowers = "роза, пион, лилия",
                        Price = 2999
                    },
                    new Bouquet()
                    {
                        BouquetName = "Букет \"Краски весны\"",
                        Description = "Цветочное изобилие в одной коробочке. Яркие краски цветов поднимут настроение.",
                        Size = "средний",
                        Flowers = "пион, хризантема, лилия",
                        Price = 2499
                    }
                }) ;
            }
            context.SaveChanges();
        }
    }
}
