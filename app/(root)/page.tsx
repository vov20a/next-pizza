import { Container, Filters, Title, Topbar, Stories } from "@/shared/components/shared";
import { ProductsGroupList } from "@/shared/components/shared/ProductsGroupList";
import { Suspense } from "react";

import { GetSearchParams, findPizzas } from '../../shared/lib/find-pizzas'




export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {

  const categories = await findPizzas(searchParams);
  // console.log(categories[0].products)
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <Topbar categories={categories.filter((category) => category.products.length > 0)} />
      <Stories />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {
                categories.map((category) => (
                  category.products.length > 0 && (
                    <ProductsGroupList title={category.name} key={category.id} items={category.products} categoryId={category.id} />
                  )
                )

                )
              }

            </div>
          </div>
        </div>

      </Container>
    </>

  );
}
