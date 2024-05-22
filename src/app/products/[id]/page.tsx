export const dynamicParams = false;
export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

// Three versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// - /product/1
// - /product/2
// - /product/3

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    // const dynamicData = await fetch('https://jsonplaceholder.typicode.com/todos', {
    //     cache: 'no-store',
    // });
    // console.log(id);

    return <div>{id}</div>;
}
