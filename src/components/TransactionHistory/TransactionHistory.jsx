import s from "./TransactionHistory.module.css"
export default function TransactionHistory({items}) {
    return (
        <table className={s.table}>
        <thead >
            <tr>
            <th className={s.borders}>Type</th>
            <th className={s.borders}>Amount</th>
            <th className={s.borders}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map((item) => {
            return (
                <tr key={item.id}>
                <td className={s.borders}>{item.type}</td>
                <td className={s.borders}>{item.amount}</td>
                <td className={s.borders}>{item.currency}</td>
                </tr>
            );
            })}
        </tbody>
        </table>
    );
    }