import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const GraphContainer = ({ data }) => {
    const korChartRef = useRef(null);
    const engChartRef = useRef(null);

    useEffect(() => {
        if (!data || data.length === 0) return;

        // kor 데이터 준비
        const korLabels = data.map(item => item.name);
        const korData = data.map(item => item.kor);

        // eng 데이터 준비
        const engLabels = data.map(item => item.name);
        const engData = data.map(item => item.eng);

        const randomColor = () => {
            return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
        };

        // 항목별 색상을 랜덤하게 지정하기
        const colorList = korData.map(() => randomColor());

        // kor 막대 그래프 생성
        new Chart(korChartRef.current, {
            type: 'bar',
            data: {
                labels: korLabels,
                datasets: [{
                    label: '국어 점수',
                    data: korData,
                    backgroundColor: colorList,
                    borderColor: colorList,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        max: 100, // y축의 최대 값
                        beginAtZero: true
                    }
                }
            }
        });

        // eng 파이 그래프 생성
        new Chart(engChartRef.current, {
            type: 'pie',
            data: {
                labels: engLabels,
                datasets: [{
                    label: '영어 점수',
                    data: engData,
                    backgroundColor: colorList,
                    borderColor: colorList,
                    borderWidth: 1
                }]
            }
        });
    }, [data]);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <h2>국어 점수 막대 그래프</h2>
                <canvas ref={korChartRef} width="300" height="300"></canvas>
            </div>
            <div>
                <h2>영어 점수 파이 그래프</h2>
                <canvas ref={engChartRef} width="300" height="300"></canvas>
            </div>
        </div>
    );
};

export default GraphContainer;