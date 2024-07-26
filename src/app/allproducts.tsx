import Product from "./product"

export default function AllProduct() {
    return (
        <table>
            <thead>
                <tr>
                    <th style={{ border: '1px soild black' }}>Sr.</th>
                    <th style={{ border: '1px soild black' }}>Product</th>
                    <th style={{ border: '1px soild black' }}>Price</th>
                    <th style={{ border: '1px soild black' }}>Category</th>
                </tr>
            </thead>
            <tbody>
                <Product/>
                <Product/>
                <Product/>

            </tbody>
        </table>
    )
}