import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/argon.css?v=1.2.0';
import '../../assets/vendor/nucleo/css/nucleo.css';
import '../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './ItemMapping.css';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import * as FiIcon from 'react-icons/fi';
import * as GIcon from 'react-icons/go';

function ItemTable() {

    const [itemData1, setItemData1] = useState([])
    const [itemData2, setItemData2] = useState([])
    const [itemClicked, setItemClicked] = useState('')
    const [mapClicked, setMapClicked] = useState('')
    const [doubleClicked1, setDoubleClicked1] = useState(false)
    const [doubleClicked2, setDoubleClicked2] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:5000/ItemData/' + 1)
            .then(res => { setItemData1(res.data) })
        axios.get('http://localhost:5000/ItemData/' + 2)
            .then(res => { setItemData2(res.data) })
    }, [])

    function itemRowClicked(index) {
        let len = document.getElementsByClassName('item-row').length
        for (let i = 0; i < len; i++) {
            document.getElementsByClassName('item-row')[i].className = 'item-row'
        }
        document.getElementsByClassName('item-row')[index].className = 'item-row item-row-selected'
        setDoubleClicked1(true)
    }

    function mapRowClicked(index) {
        let len = document.getElementsByClassName('map-row').length
        for (let i = 0; i < len; i++) {
            document.getElementsByClassName('map-row')[i].className = 'map-row'
        }
        document.getElementsByClassName('map-row')[index].className = 'map-row map-row-selected'
        setDoubleClicked2(true)
    }

    function wait(ms) {
        var d = new Date();
        var d2 = null;
        do { d2 = new Date(); }
        while (d2 - d < ms);
    }

    function mapping() {
        if (doubleClicked1 === true && doubleClicked2 === true) {
            alert(itemClicked + "\n---Married With---\n" + mapClicked)
        }
        else {
            alert("Please select item to be mapped")
        }
        reset()
    }

    function reset() {
        let len1 = document.getElementsByClassName('map-row').length
        for (let i = 0; i < len1; i++) {
            document.getElementsByClassName('map-row')[i].className = 'map-row'
        }
        let len2 = document.getElementsByClassName('item-row').length
        for (let i = 0; i < len2; i++) {
            document.getElementsByClassName('item-row')[i].className = 'item-row'
        }
        setItemClicked('')
        setMapClicked('')
    }

    return (
        <>
            <div className="text-center mr-5">
                <button className="btn m-2 p-2 text-dark btn-info" onClick={() => { mapping() }}>&nbsp;<GIcon.GoGitCompare/>&nbsp;Map&nbsp;</button>
                <button className="btn m-2 p-2 text-dark bg-yellow" onClick={() => { reset() }}>&nbsp;<FiIcon.FiRefreshCw />&nbsp;Reset&nbsp;</button>
            </div>
            <div className="row">
                {/* FIRST TABLE */}
                <div className="first-table bg-white col-lg-5 border">
                    <div style={{ height: "350px", overflow: "hidden", overflowY: "scroll" }}>
                        <Table responsive bordered size="sm">
                            <thead className="table-dark">
                                <tr>
                                    <th style={{ width: "50px" }}>SKU</th>
                                    <th className="text-right">Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemData1.map((item, index) => {
                                    return (
                                        <tr className="item-row" key={index} onDoubleClick={() => { setItemClicked(item.sku); itemRowClicked(index) }}>
                                            <td>{item.sku}</td>
                                            <td className="text-right">{item.rate}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
                {/* SECOND TABLE */}
                <div className="second-table bg-white col-lg-6 border">
                    <div style={{ height: "350px", overflow: "hidden", overflowY: "scroll" }}>
                        <Table bordered responsive size="sm">
                            <thead className="table-dark">
                                <tr>
                                    <th>SKU</th>
                                    <th className="text-right">Rate</th>
                                    <th className="text-right">APPEND_DATETIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log("1:", itemClicked, "2:", mapClicked)}
                                {itemData2.map((item, index) => {
                                    return (
                                        <tr key={index} className="map-row" onDoubleClick={() => { setMapClicked(item.sku); mapRowClicked(index) }}>
                                            <td>{item.sku}</td>
                                            <td>{item.rate}</td>
                                            <td className="text-right">{item.append_datetime}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemTable
