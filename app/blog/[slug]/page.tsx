type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export async function generateStaticParams() {
  return [{ slug: "foo" }];
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
