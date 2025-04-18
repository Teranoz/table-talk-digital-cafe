import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs'; // استيراد المكونات

const MenuPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>

      {/* هذا هو العنصر الجذري لـ Tabs */}
      <TabsPrimitive.Root>
        {/* هذا هو العنصر الذي يحتوي على الأزرار (TabsTriggers) */}
        <TabsPrimitive.List className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
          {/* Trigger1: زر للتاب الأول */}
          <TabsPrimitive.Trigger className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium">
            Tab 1
          </TabsPrimitive.Trigger>
          {/* Trigger2: زر للتاب الثاني */}
          <TabsPrimitive.Trigger className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium">
            Tab 2
          </TabsPrimitive.Trigger>
        </TabsPrimitive.List>

        {/* هذا هو المحتوى الذي سيتم عرضه عند اختيار كل تاب */}
        <TabsPrimitive.Content value="tab1">
          <div className="mt-2">محتوى التاب 1</div>
        </TabsPrimitive.Content>
        <TabsPrimitive.Content value="tab2">
          <div className="mt-2">محتوى التاب 2</div>
        </TabsPrimitive.Content>
      </TabsPrimitive.Root>
    </div>
  );
};

export default MenuPage;
