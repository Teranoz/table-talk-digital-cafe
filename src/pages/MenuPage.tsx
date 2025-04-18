// src/pages/MenuPage.tsx

import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'

const MenuPage = () => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <Tabs defaultValue="tab1" className="w-full">
        <TabsList className="flex space-x-2 bg-gray-100 p-2 rounded">
          <TabsTrigger value="tab1" className="px-4 py-2 bg-white rounded">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" className="px-4 py-2 bg-white rounded">Tab 2</TabsTrigger>
        </TabsList>

        <TabsContent value="tab1" className="mt-4">
          <p>This is the content of Tab 1.</p>
        </TabsContent>

        <TabsContent value="tab2" className="mt-4">
          <p>This is the content of Tab 2.</p>
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default MenuPage
