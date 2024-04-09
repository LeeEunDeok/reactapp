import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(student => student.name), // 학생 이름을 레이블로 사용
                    datasets: [
                        {
                            label: '국어 성적',
                            data: data.map(student => student.kor),
                            borderColor: 'red',
                            borderWidth: 2,
                            fill: false
                        },
                        {
                            label: '영어 성적',
                            data: data.map(student => student.eng),
                            borderColor: 'blue',
                            borderWidth: 2,
                            fill: false
                        },
                        {
                            label: '수학 성적',
                            data: data.map(student => student.math),
                            borderColor: 'green',
                            borderWidth: 2,
                            fill: false
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }, [data]);

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default LineChart;