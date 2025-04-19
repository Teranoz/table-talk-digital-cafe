
import React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui/tabs';
import AppLayout from '@/components/layout/AppLayout';

export default function MenuPage() {
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
              {/* Add food menu items here */}
            </div>
          </TabsContent>

          <TabsContent value="drinks">
            <div className="mt-6 grid gap-4">
              <h3 className="font-serif text-xl font-semibold">قائمة المشروبات</h3>
              <p className="text-muted-foreground">عرض قائمة المشروبات الخاصة بنا</p>
              {/* Add drink menu items here */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
