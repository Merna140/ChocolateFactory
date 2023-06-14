import { TextField } from "@mui/material"
import styles from './producerStyle.module.css';
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

function ProducerLayout() {

    const [data, setmaindata] = useState(
        [{
            "id": 1,
            "text": "Devpulse",
            "sold": 1,
            "delete": 0
        }, {
            "id": 2,
            "text": "Linklinks",
            "sold": 0,
            "delete": 0
        }, {
            "id": 3,
            "text": "Centizu",
            "sold": 1,
            "delete": 0
        }, {
            "id": 4,
            "text": "Dynabox",
            "sold": 0,
            "delete": 0
        }, {
            "id": 5,
            "text": "Avaveo",
            "sold": 1,
            "delete": 0
        }, {
            "id": 6,
            "text": "Demivee",
            "sold": 0,
            "delete": 0
        }, {
            "id": 7,
            "text": "Jayo",
            "sold": 1,
            "delete": 0
        }, {
            "id": 8,
            "text": "Blognation",
            "sold": 0,
            "delete": 0
        }, {
            "id": 9,
            "text": "Podcat",
            "sold": 0,
            "delete": 0
        }, {
            "id": 10,
            "text": "Layo",
            "sold": 0,
            "delete": 0
        }]
    );

    const [showAraay, setdata] = useState([...data]);

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        prepareArray(lowerCase);
    };

    function prepareArray(input) {
        let prefilteredDate = data.filter((e) => !e.delete)
        let filteredData = prefilteredDate.filter((el) => {
            if (input === '') {
                return el;
            }
            else {
                return el.text.toLowerCase().includes(input);
            }
        })

        console.log(filteredData);
        setdata(filteredData);
    }

    function deleteItem(index) {
        let ar = [...data];
        ar[index - 1].delete = 1;
        setmaindata(ar);
    }

    useEffect(() => {
        let newArray = showAraay.filter((item) => !item.delete);
        setdata(newArray);
    }, [data])

    function all() {
        let prefilteredDate = data.filter((e) => !e.delete)
        setdata(prefilteredDate);
    }

    function soldOut() {
        let prefilteredDate = data.filter((e) => !e.delete)
        let sold = prefilteredDate.filter((e) => !e.sold)
        setdata(sold);
    }

    return (
        <>
            <div>
                <h1 className={styles.title}>Search for availabel products</h1>
                <div className={styles.searchBar}>
                    <TextField
                        id="outlined-basic"
                        onChange={inputHandler}
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />

                    <div className={styles.myButtons}>
                        <Button onClick={all} variant="primary" size="sm">
                            All
                        </Button>{' '}
                        <Button onClick={soldOut} variant="secondary" size="sm">
                            Sold Out
                        </Button>
                    </div>
                </div>


                <ul className={styles.myList}>
                    {showAraay.map((item) => (
                        <li className={styles.myLi} key={item.id}>{item.text}
                            <Button onClick={() => deleteItem(item.id)} variant="outline-dark">Delete</Button>
                            <p>{item.sold}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ProducerLayout