import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function App(props) {
    const rcvData = props.data;
    const id4Pie = props.id4Pie;
    const chartRef = useRef(null);

    useEffect(() => {
        if (!rcvData || rcvData.length === 0) return;

        const clickedRow = rcvData.find(one => one.id === id4Pie);
        console.log('id4Pie : ' + id4Pie)
        console.log('clickedRow : ' + clickedRow.id)
        const getData4Pie = [{
            label: clickedRow.name + '의 성적표',
            data: [clickedRow.kor, clickedRow.eng, clickedRow.math, clickedRow.science],
            backgroundColor: ['#8884d8', '#82ca9d', '#ffc658', 'rgba(150, 59, 64)'],
            hoverOffset: 4
        }]

        new Chart(chartRef.current, {
            type: 'pie',
            data: {
                labels: ['국어', '영어', '수학', '과학'],
                datasets: getData4Pie
            }
        });
    }, [rcvData]);
    return (
        <div>
            <h2>성적표 파이 그래프</h2>
            <canvas ref={chartRef} width={100} height={100}></canvas>
        </div>
    );
}
export default App;