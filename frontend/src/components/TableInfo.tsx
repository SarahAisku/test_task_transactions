import React, { useState, useEffect } from "react";
import axios from "axios";

const TableInfo: React.FC = () => {

    interface Transaction {
        id: number;
        dateTime: string;
        author: string;
        sum: number;
        category: string;
        comment?: string;
    }
      
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/transactions")
            .then(response => {
                console.log("Received data:", response.data);
                setTransactions(response.data);
            })
            .catch(error => {
                console.error("Error loading data:", error);
                setError("Ошибка при загрузки данных");
            });
    }, []);

    return (
        <div className='Art'>
            <div className="Art_Container">
                <div className='Art_Table_Container'>
                    <h2>Список транзакций</h2>
                    <div>
                        {error && <div style={{ color: "red" }}>{error}</div>}
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Author</th>
                                    <th>Amount</th>
                                    <th>Category</th>
                                    <th>Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map(transaction => (
                                    <tr key={transaction.id}>
                                        <td>{transaction.id}</td>
                                        <td>{new Date(transaction.dateTime).toLocaleString()}</td>
                                        <td>{transaction.author}</td>
                                        <td>{transaction.sum.toFixed(2)}</td>
                                        <td>{transaction.category}</td>
                                        <td>{transaction.comment || '—'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableInfo;
