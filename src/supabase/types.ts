export type Database = {
  // قم بتعريف الأنواع الخاصة بقاعدة البيانات هنا
  public: {
    tables: {
      // على سبيل المثال، يمكنك تعريف نوع جدول "users"
      users: {
        id: number;
        name: string;
        email: string;
      };
    };
  };
};
