import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "./Input.tsx"

const InputInfo: React.FC = () => {

    const [author, setAuthor] = useState('');
    const [sum, setSum] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("");
    const [comment, setComment] = useState('');
    const [dateTime, setDateTime] = useState<string>('');

    const categories = ["Электроника", "Продукты", "Фурнитура"];

    useEffect(() => {
        const currentDate = new Date().toISOString().slice(0, 19);
        setDateTime(currentDate);
    }, []);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };    

    const handleSubmit = async () => {
        if (!author || !sum || !selectedCategory) {
            alert("Пожалуйста, заполните все обязательные поля.");
            return;
        }
        try {
            const response = await axios.post("http://localhost:5000/api/transactions", {
                dateTime,
                author,
                sum,
                category: selectedCategory,
                comment
            });
            if (response.status < 202) {
                alert("Транзакция добавлена!");
                window.location.reload();
            }
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
            alert("Ошибка сервера. Попробуйте позже.");
        }
    };

    return (
        <div className='Left_side_8Column'>
            <div className="Login_Form">
                <div className="Info">
                    <h1 className='h1-Info'>Добро пожаловать!</h1>
                    <p className='p-Info'>Тестовое задание с адаптивной версткой )</p>
                </div>

                <div className="Form">
                    <Input text="Автор" placeholder="Введите автора" value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <Input text="Сумма" placeholder="10000.00" value={sum} onChange={(e) => setSum(e.target.value)} type="number" />
                    <div className="Input-Container">
                        <p className="Input-p">Категория</p>
                        <select className={`Input-input ${selectedCategory ? "selected" : ""}`} value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="" disabled>Выберите категорию</option>
                            {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <Input text = 'Комментарий' placeholder='Не обязательно' value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button className="MainButton-a" onClick={handleSubmit}>Записать</button>
                </div>                     
            </div>
        </div>
    );
};

export default InputInfo;
