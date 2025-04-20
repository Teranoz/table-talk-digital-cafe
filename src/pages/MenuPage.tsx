import { supabase } from "@/supabase/client";  // استيراد supabase من المسار الصحيح
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [foodItems, setFoodItems] = useState([]);
  const [drinkItems, setDrinkItems] = useState([]);

  useEffect(() => {
    // استعلام لجلب قائمة الطعام من Supabase
    const fetchMenu = async () => {
      const { data: foodData, error: foodError } = await supabase
        .from("food_menu")
        .select("*");

      if (foodError) {
        console.error("Error fetching food menu:", foodError.message);
      } else {
        setFoodItems(foodData);
      }

      const { data: drinkData, error: drinkError } = await supabase
        .from("drink_menu")
        .select("*");

      if (drinkError) {
        console.error("Error fetching drink menu:", drinkError.message);
      } else {
        setDrinkItems(drinkData);
      }
    };

    fetchMenu();
  }, []);

  return (
    <AppLayout>
      <div className="container p-4">
        <Tabs defaultValue="food" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="food">الأكل</TabsTrigger>
            <TabsTrigger value="drinks">المشروبات</TabsTrigger>
          </TabsList>

          <TabsContent value="food">
            <div className="mt-6 grid gap-4">
              <h3 className="font-serif text-xl font-semibold">قائمة الأكل</h3>
              <p className="text-muted-foreground">عرض قائمة الأكل الخاصة بنا</p>
              <ul>
                {foodItems.map(item => (
                  <li key={item.id}>{item.name}</li>  {/* عرض اسم الطعام */}
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="drinks">
            <div className="mt-6 grid gap-4">
              <h3 className="font-serif text-xl font-semibold">قائمة المشروبات</h3>
              <p className="text-muted-foreground">عرض قائمة المشروبات الخاصة بنا</p>
              <ul>
                {drinkItems.map(item => (
                  <li key={item.id}>{item.name}</li>  {/* عرض اسم المشروب */}
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
