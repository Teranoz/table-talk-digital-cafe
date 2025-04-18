import React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs'; // تأكد إن المسار صح!

export default function MenuPage() {
  return (
    <div className="p-4">
      <Tabs defaultValue="food" className="w-full">
        <TabsList>
          <TabsTrigger value="food">الأكل</TabsTrigger>
          <TabsTrigger value="drinks">المشروبات</TabsTrigger>
        </TabsList>

        <TabsContent value="food">
          <div>قائمة الأكل هنا</div>
        </TabsContent>

        <TabsContent value="drinks">
          <div>قائمة المشروبات هنا</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
