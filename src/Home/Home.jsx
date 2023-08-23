import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../Components/Navbar'
import Accordion from 'react-bootstrap/Accordion';
import { PieChart } from '../Components/Charts/PieCharts';
import { LineChart } from '../Components/Charts/GraphChart';
import { BarChart } from '../Components/Charts/BarChart';

const data = [
    {
        title: 'Lists of RDC ',
        backgroundColor: "#D1E9FC"
    },
    {
        title: 'Lists of RAC',
        backgroundColor: "#FFF7CD"
    },
    {
        title: "Lists of PS",
        backgroundColor: "#FFE7D9"
    },
]


const Home = () => {
    const [ChartsData, setChartsData] = useState();

    // useEffect(() => {
    //     const fetchdata = async () => {
    //         const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&month=2009-01&outputsize=full&apikey=demo"
    //         try {
    //             const response = await axios(url);
    //             const timeSeriesData = response.data["Time Series (5min)"];
    //             const dataArray = Object.keys(timeSeriesData).map(timestamp => ({
    //                 timestamp,
    //                 ...timeSeriesData[timestamp],
    //             }));
    //             console.log(dataArray, "data");
    //             const data = dataArray
    //             console.log(data);
    //             // const lables = dataArray && dataArray.map(items => items.timestamp)
    //             const chartObj = {
    //                 label: data.timestamp.slice(0, 20),
    //                 data: data.high,
    //                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //             }
    //             setChartsData(chartObj)
    //         } catch (error) {
    //             // setError(error);
    //             console.log(error);
    //         }
    //     }
    //     fetchdata()

    // }, []);
    return (
        <div className='w-100'>
         
            <Navbar />
            <div className='container'>
                <div>
                    {data.map((item, idex) => {
                        return (
                            <Accordion key={idex} >
                                <Accordion.Item eventKey="0" className='mt-3'>
                                    <Accordion.Header>{item.title}</Accordion.Header>
                                    <Accordion.Body className='d-flex flex-wrap w-100'>
                                        <div className=' linechart charts-view my-2'>
                                            <LineChart />
                                        </div>
                                        <div className=' piechart charts-view my-2' >
                                            <PieChart />
                                        </div>
                                        <div className=' barchart charts-view my-2'>
                                            <BarChart items={ChartsData} />
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })}
                </div>

            </div>

        </div >

    )
}

export default Home