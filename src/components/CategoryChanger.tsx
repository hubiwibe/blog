import React from 'react';

type CategoryChangerProps = {
  categories: string[];
  selectedCategory: string;
  onChangeCategory: (category: string) => void;
};
function CategoryChanger({ categories, selectedCategory, onChangeCategory }: CategoryChangerProps) {
  return (
    <section className="flex flex-col items-center">
      <h2 className="mb-1 text-2xl font-bold underline underline-offset-8 decoration-blue-300">Category</h2>
      {categories.map((category: string, idx: number) => (
        <p
          key={`${category}-${idx}`}
          className={[
            'hover:text-blue-300 hover:cursor-pointer',
            `${selectedCategory === category ? 'text-blue-400' : ''}`,
          ].join(' ')}
          onClick={() => onChangeCategory(category)}
        >
          {category}
        </p>
      ))}
    </section>
  );
}

export default CategoryChanger;
