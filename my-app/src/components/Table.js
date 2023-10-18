import React from "react";

const Table = () => {
    return(
        <div>
            <table className="table">
            <thead>
                <tr>
                    <td className="col-9">Product Name</td>
                    <td>Stock</td>
                    <td>Price</td>
                    <td>Total Sell</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <h6>Abstract 3D</h6>
                        <p className="size">Lorem ipsum</p>
                    </td>
                    <td>32 in stock</td>
                    <td>$ 45.99</td>
                    <td>20</td>
                </tr>
                <tr>
                   <td>
                        <h6>Sarphens Illustration</h6>
                        <p className="size">Lorem ipsum</p>
                    </td>
                    <td>32 in stock</td>
                    <td>$ 45.99</td>
                    <td>20</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Table;