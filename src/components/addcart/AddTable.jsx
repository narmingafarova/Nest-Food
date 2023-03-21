import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useCart } from 'react-use-cart';

function AddTable() {
    const { items, updateItemQuantity, removeItem, cartTotal, emptyCart } = useCart();

    return (
        <Container className='add-table mb-5'>
            <Table className='w-75 my-0 mx-auto'>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, count) => (
                        <tr>
                            <td>
                                <a href="/cart" className='text-decoration-none delete-btn'>x</a>
                            </td>
                            <td>
                                <a href="/">
                                    <img width={50} src={item.image.imgFront} alt={item.title} />
                                </a>
                            </td>
                            <td>
                                <a href="/cart" className='text-decoration-none'>{item.title}</a>
                            </td>
                            <td>${item.price.discount * item.quantity}</td>
                            <td>
                                <input type="number" value="1" min="0" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Container>
    );
}

export default AddTable;

