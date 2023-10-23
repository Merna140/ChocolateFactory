import { TextField } from "@mui/material"
import styles from './producerStyle.module.css';
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


let count1 = 0;
let count2 = 0;


function ProducerLayout() {

    const [data, setmaindata] = useState(
        [{
            "id": 1,
            "text": "Hershey´s Bar Chocolate",
            "sold": 1,
            "delete": 0
        }, {
            "id": 2,
            "text": "Mini Eggs Cadbury",
            "sold": 0,
            "delete": 0
        }, {
            "id": 3,
            "text": "Toblerone Milk Chocolate",
            "sold": 1,
            "delete": 0
        }, {
            "id": 4,
            "text": "Double Decker Wispa Cadbury",
            "sold": 0,
            "delete": 0
        }, {
            "id": 5,
            "text": "Kit Kat chocolate bar",
            "sold": 1,
            "delete": 0
        }, {
            "id": 6,
            "text": "Picnic Cadbury",
            "sold": 0,
            "delete": 0
        }, {
            "id": 7,
            "text": "Snickers Almond Chocolate",
            "sold": 1,
            "delete": 0
        }, {
            "id": 8,
            "text": "Milky Way Candy bar",
            "sold": 0,
            "delete": 0
        }, {
            "id": 9,
            "text": "Chocolate bar Cadbury Dairy Milk",
            "sold": 1,
            "delete": 0
        }, {
            "id": 10,
            "text": "Cadbury Dairy Milk Bubbly",
            "sold": 1,
            "delete": 0
        }, {
            "id": 11,
            "text": "Snickers bar",
            "sold": 1,
            "delete": 0
        }, {
            "id": 12,
            "text": "Twix Chocolate",
            "sold": 0,
            "delete": 0
        }, {
            "id": 13,
            "text": "White chocolate Milka Cream",
            "sold": 1,
            "delete": 0
        },  {
            "id": 14,
            "text": "Kinder Bueno Chocolate bar",
            "sold": 1,
            "delete": 0
        },  {
            "id": 15,
            "text": "Cadbury Buttons Chocolate",
            "sold": 0,
            "delete": 0
        },   {
            "id": 16,
            "text": "Crunch Cream Milka Oreo",
            "sold": 1,
            "delete": 0
        },  {
            "id": 17,
            "text": "Mars",
            "sold": 1,
            "delete": 0
        }, {
            "id": 18,
            "text": "M&M's Milk Chocolate",
            "sold": 1,
            "delete": 0
        }  ]
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

    function sortGoods() {
        count1 = count1 + 1;
        let a1 = showAraay.filter((e) => e.sold);
        let a2 = showAraay.filter((e) => !e.sold);
        let finalArray = [];

        if (count1 % 2) {
            finalArray = a1.concat(a2);
        }
        else {
            finalArray = a2.concat(a1);
        }
        setdata(finalArray);
    }

    function sortAlphabetically() {
        count2 = count2 + 1;
        let newSortedArray = [...showAraay];

        if (count2 % 2) {
            newSortedArray.sort(function (a, b) {
                if (a.text < b.text) {
                    return -1;
                }
                if (a.text > b.text) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            newSortedArray.sort(function (a, b) {
                if (a.text > b.text) {
                    return -1;
                }
                if (a.text < b.text) {
                    return 1;
                }
                return 0;
            });
        }



        console.log(newSortedArray);

        setdata(newSortedArray);
    }

    return (
        <>

            <Container>
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

                        <div className={styles.myButtons}>
                            <Button onClick={sortAlphabetically} variant="secondary" size="sm">
                                Sort alphabetically
                            </Button>{' '}
                            <Button onClick={sortGoods} variant="secondary" size="sm">
                                Sort the goods by sold and unsold
                            </Button>
                        </div>
                    </div>


                    <ul className={styles.myList}>
                        {showAraay.map((item) => (
                            <li className={styles.myLi} key={item.id}>
                                {/* <img className={styles.myChocoBar} src={require('./chocoBar.png')} /> */}
                                <p className={styles.chocoName}>{item.text}</p>
                                <Button className={styles.deleteButton} onClick={() => deleteItem(item.id)} variant="outline-dark">Delete</Button>
                                <p className={styles.soldLabel}>{item.sold}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>

        </>
    )
}

export default ProducerLayout