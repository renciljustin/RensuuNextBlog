---
title: 'Typescript over Javascript for React. WHY?'
date: '2022-12-20'
image: cover.jpg
excerpt: Here are some reasons why you should migrate your Javascript code into Typescript.
author: 'John Doe'
tags: ['javascript', 'react', 'typescript']
isFeatured: true
---

[TypeScript](https://www.typescriptlang.org/) is a free and open source programming language developed and maintained by [Microsoft](https://www.microsoft.com/). It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.

The code snippet below is a sample code in [Next.js](https://nextjs.org/) application that is written in traditional vanilla Javascript code.

**ProductService.js**

```javascript
const products = [
  /*lists of products*/
];

function getActiveProducts() {
  const activeProducts = products.filter((product) => product.active);
  return activeProducts;
}
```

**Products.js**

```jsx
export default function ProductsPage({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li>
          {product.title} - {product.cost}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const products = getActiveProducts();
  return {
    props: {
      products,
    },
  };
}
```

We'll see how will we transform these codes into [TypeScript](https://www.typescriptlang.org/) code and observe it's advantages.

**ProductService.ts**

```typescript
interface Product {
  title: string;
  cost: number;
  active: boolean;
}

const products: Product[] = [
  /*lists of products*/
];

function getActiveProducts(): Product[] | null {
  const activeProducts = products.filter((product: Product) => product.active);
  return activeProducts;
}
```

**Products.ts**

```jsx
export default function ProductsPage({ products }: { products: Product[] }) {
  return (
    <ul>
      {products.map((product) => (
        <li>
          {product.title} - {product.cost}
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = getActiveProducts();
  return {
    props: {
      products,
    },
  };
};
```

...MORE CONTENTS...

Learn more about [typescript](/blog-posts/categories/typescript 'pageLink').
