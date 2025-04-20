import { useState, useEffect } from "react";
import { supabase } from "@/supabase/client"; // تأكد من المسار الصحيح للعميل
import AppLayout from "@/components/layout/AppLayout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function MenuPage() {
  const [foodItems, setFoodItems] = useState([]);
  const [drinkItems, setDrinkItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      // استعلام للحصول على الأطعمة
      const { data: foodData, error: foodError } = await supabase
        .from("menu")
        .select("*")
        .eq("category", "food");

      if (foodError) {
        console.error("Error fetching food data:", foodError.message);
      } else {
        setFoodItems(foodData); // تخزين الأطعمة في الحالة
      }

      // استعلام للحصول على المشروبات
      const { data: drinkData, error: drinkError } = await supabase
        .from("menu")
        .select("*")
        .eq("category", "drink");

      if (drinkError) {
        console.error("Error fetching drink data:", drinkError.message);
      } else {
        setDrinkItems(drinkData); // تخزين المشروبات في الحالة
      }
    };

    fetchMenuItems();
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
                {foodItems.length > 0 ? (
                  foodItems.map((item) => (
                    <li key={item.id} className="border-b py-2">
                      <p>{item.name}</p>
                      <p>{item.description}</p> {/* إذا كان هناك وصف للطعام */}
                    </li>
                  ))
                ) : (
                  <p>لا توجد أطعمة حالياً في القائمة.</p>
                )}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="drinks">
            <div className="mt-6 grid gap-4">
              <h3 className="font-serif text-xl font-semibold">قائمة المشروبات</h3>
              <p className="text-muted-foreground">عرض قائمة المشروبات الخاصة بنا</p>
              <ul>
                {drinkItems.length > 0 ? (
                  drinkItems.map((item) => (
                    <li key={item.id} className="border-b py-2">
                      <p>{item.name}</p>
                      <p>{item.description}</p> {/* إذا كان هناك وصف للمشروب */}
                    </li>
                  ))
                ) : (
                  <p>لا توجد مشروبات حالياً في القائمة.</p>
                )}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
